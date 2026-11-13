import assert from 'node:assert/strict';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

// Run against `next start` or a Workers preview; never sends referral POSTs.
const origin = process.env.SEO_TEST_ORIGIN || 'http://127.0.0.1:3100';
const canonicalOrigin = 'https://www.royalecoachai.com';
const args = process.argv.slice(2);
const capture = args.includes('--capture');
const snapshotFile = args.find((arg) => !arg.startsWith('--'));
const failures = [];
const assets = new Set();
const links = new Set();
const snapshot = {};
const decode = (value) => value.replaceAll('&amp;', '&').replaceAll('&#x27;', "'").replaceAll('&quot;', '"');
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1].toLowerCase(), decode(m[2])]));
async function check(label, fn) {
  try { await fn(); } catch (error) { failures.push(`${label}: ${error.message}`); }
}
async function get(url, options = {}) {
  return fetch(new URL(url, origin), { redirect: 'manual', signal: AbortSignal.timeout(30000), ...options });
}
async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => entry.isDirectory() ? files(path.join(dir, entry.name)) : path.join(dir, entry.name)))).flat();
}
const sourcePages = (await files('src/app')).filter((file) => file.endsWith(`${path.sep}page.tsx`));
const routes = sourcePages.filter((file) => !file.includes('[')).map((file) => '/' + path.relative('src/app', path.dirname(file)).split(path.sep).filter(Boolean).join('/'));
for (const file of ['src/content/guides/deck-guides.ts', 'src/content/guides/strategy-guides.ts']) {
  const source = await readFile(file, 'utf8');
  for (const [, slug] of source.matchAll(/slug:\s*'([^']+)'/g)) routes.push(`/guides/${slug}`);
}
const sitemapResponse = await get('/sitemap.xml');
assert.equal(sitemapResponse.status, 200, 'sitemap status');
const sitemap = await sitemapResponse.text();
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decode(match[1]));
assert.equal(new Set(sitemapUrls).size, sitemapUrls.length, 'duplicate sitemap URLs');
assert.deepEqual(sitemapUrls.map((url) => new URL(url).pathname).sort(), routes.filter((route) => route !== '/open').sort(), 'sitemap must retain all existing SEO routes (existing /open exclusion preserved)');
assert(sitemapUrls.every((url) => url.startsWith(canonicalOrigin + '/') && !url.includes('/u/')), 'sitemap hostname/referral exclusion');

for (const route of routes.sort()) await check(route, async () => {
  const response = await get(route);
  assert.equal(response.status, 200, 'page status');
  const html = await response.text();
  const meta = [...html.matchAll(/<meta\b[^>]*>/g)].map((m) => attrs(m[0]));
  const canonical = [...html.matchAll(/<link\b[^>]*>/g)].map((m) => attrs(m[0])).filter((a) => a.rel === 'canonical').map((a) => a.href);
  assert.deepEqual(canonical, [canonicalOrigin + (route === '/' ? '' : route)], 'canonical');
  assert(meta.some((a) => a.name === 'description' && a.content), 'description');
  assert(meta.some((a) => a.property === 'og:url' && a.content === canonical[0]), 'Open Graph URL');
  assert(!meta.some((a) => a.name === 'robots' && a.content.includes('noindex')), 'indexable page');
  const jsonld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  assert(jsonld.length > 0, 'JSON-LD');
  assert(html.includes('<nav class="sticky top-0'), 'marketing navbar');
  assert(html.includes('role="contentinfo"'), 'marketing footer');
  snapshot[route] = {
    title: html.match(/<title>([\s\S]*?)<\/title>/)?.[1], canonical,
    meta: meta.filter((a) => a.name || a.property), jsonld,
    main: html.match(/<main\b[\s\S]*?<\/main>/)?.[0].replace(/<script\b[\s\S]*?<\/script>/g, ''),
  };
  assert(snapshot[route].title, 'title');
  assert(snapshot[route].main, 'main content');
  for (const match of html.matchAll(/<(a|img|script|link)\b[^>]*>/g)) {
    const a = attrs(match[0]);
    const ref = match[1] === 'a' ? a.href : a.src || a.href;
    if (!ref) continue;
    const url = new URL(ref, canonicalOrigin + route);
    if (url.origin !== canonicalOrigin) continue;
    if (match[1] === 'a') links.add(url.pathname + url.search);
    else if (a.rel !== 'canonical') assets.add(url.pathname + url.search);
    if (a.srcset) for (const item of a.srcset.split(/,\s+/)) assets.add(decode(item.trim().split(/\s+/)[0]));
  }
});

for (const link of links) await check(`link ${link}`, async () => assert.equal((await get(link)).status, 200));
const pendingAssets = [...assets];
for (let index = 0; index < pendingAssets.length; index++) await check(`asset ${pendingAssets[index]}`, async () => {
  const ref = pendingAssets[index];
  const response = await get(ref);
  assert.equal(response.status, 200);
  if (response.headers.get('content-type')?.includes('text/css')) {
    const css = await response.text();
    for (const [, raw] of css.matchAll(/url\(["']?([^\s)"']+)["']?\)/g)) {
      if (raw.startsWith('data:')) continue;
      const url = new URL(raw, new URL(ref, origin));
      if (url.origin === origin && !assets.has(url.pathname)) { assets.add(url.pathname); pendingAssets.push(url.pathname); }
    }
  }
});
for (const [from, to] of [['/privacy', '/privacy-policy'], ['/privacy/', '/privacy'], ['/download/', '/download']]) await check(`redirect ${from}`, async () => {
  const response = await get(from);
  assert.equal(response.status, 308);
  assert.equal(new URL(response.headers.get('location'), origin).pathname, to);
});
await check('robots', async () => {
  const response = await get('/robots.txt');
  assert.equal(response.status, 200);
  const robots = await response.text();
  assert(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`));
  assert(robots.includes('Disallow: /u/') && robots.includes('Disallow: /api/'));
  snapshot.robots = robots;
});
snapshot.sitemapUrls = sitemapUrls;
for (const route of ['/.well-known/apple-app-site-association', '/.well-known/assetlinks.json']) await check(route, async () => {
  const response = await get(route);
  assert.equal(response.status, 200);
  assert(response.headers.get('content-type')?.includes('application/json'));
  assert.equal(response.headers.get('cache-control'), 'public, max-age=300');
  assert.deepEqual(await response.json(), JSON.parse(await readFile('public' + route, 'utf8')));
});
for (const route of ['/u/DC98FW', '/u/NEW-CODE-AFTER-BUILD']) await check(route, async () => {
  const response = await get(route);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert(/name="robots" content="noindex, nofollow"/.test(html), 'referral noindex');
  assert(html.includes('invite-root'), 'referral page');
  if (!capture) {
    assert(!html.includes('<nav class="sticky top-0'), 'invite must hide navbar');
    assert(!html.includes('role="contentinfo"'), 'invite must hide footer');
    assert(!html.includes('royale-page-bg flex-1'), 'invite must use standalone background');
  }
});
await check('unknown guide', async () => assert.equal((await get('/guides/not-a-published-guide')).status, 404));
await check('unknown page', async () => assert.equal((await get('/not-a-real-page')).status, 404));
if (snapshotFile) {
  if (capture) await writeFile(snapshotFile, JSON.stringify(snapshot, null, 2) + '\n');
  else await check('SEO/content baseline', async () => assert.deepEqual(snapshot, JSON.parse(await readFile(snapshotFile, 'utf8'))));
}
console.log(JSON.stringify({ origin, pages: routes.length, sitemapUrls: sitemapUrls.length, internalLinks: links.size, assets: assets.size, failures }, null, 2));
if (failures.length) process.exitCode = 1;
