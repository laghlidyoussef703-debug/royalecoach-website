# Cloudflare compatibility and SEO audit

Audited on 2026-11-13 against main commit `4f5d45604ee4792ee0d9c84cbdddce4efb78db30`.

## Decision: do not deploy this checkout as a Pages static export

The complete existing application cannot use `output: 'export'` without changes to routing and rendering. No static-export configuration or `out` directory was created. No page, metadata, image, middleware, redirect, app-link file, domain, or hosting setting was changed in this audit.

The blockers are:

1. `src/app/u/[code]/page.tsx` accepts arbitrary referral codes, including codes created after deployment. It uses React `use(params)` and has no `generateStaticParams`. A finite build-time list cannot preserve this behavior. The browser POST to the existing Supabase function, clipboard payload, deep link, and store fallbacks must stay intact.
2. `src/app/layout.tsx` calls `await headers()` to choose the standalone referral layout using `x-pathname`. This requires request-time rendering. The production build marks all page routes, including marketing and guide pages, as dynamic. Only the metadata routes are static.
3. `src/middleware.ts` supplies the pathname header. Middleware is unsupported by a static export. The installed Next.js version warns that the middleware convention is deprecated in favor of proxy. Keep its current working behavior until an adapter migration is tested.
4. `next.config.ts` uses runtime redirects and headers. `/privacy` must remain a permanent **308** redirect to `/privacy-policy`; app association endpoints must retain JSON Content-Type and `public, max-age=300` caching.
5. `next/image` uses the default optimization service. A static version would need unoptimized images or a custom loader, and would require performance testing.

The finite `/guides/[slug]` route already has `generateStaticParams` for all ten published guides. This route alone is not a blocker. There are no application API route handlers, Server Actions, server-side external fetches, database SDKs, cookie access, or private application environment variables. The only external application fetch found is the client-side referral POST.

A static referral shell with a narrowly scoped host rewrite could be designed separately. It would require changing how params are read, separating layouts, verifying navigation/hydration, and testing all mobile referral states. That is not equivalent to enabling static export on the current application. Do not substitute a 404 fallback, enumerate today's codes, or rewrite every unknown URL to the homepage.

## Recommended Cloudflare deployment path

Use **Cloudflare Workers with a supported Next.js runtime integration**, preserving dynamic routes and request-time behavior. This audit recommends the runtime path; it does not install an adapter, deploy a Worker, or claim Workers compatibility has been tested.

Cloudflare's current guidance recommends **vinext** for new Workers migrations. Begin with `npx vinext check` in a migration branch, review Next.js 16.2.10 support, and follow the official migration guide. It uses `cloudflare.config.ts` and the `cf` CLI. Do not apply an untested framework migration directly to production.

For retaining the Next.js compiler/runtime, assess **`@opennextjs/cloudflare`** as the adapter alternative. Verify its exact support for this project's pinned Next.js release before installation. Its output uses `.open-next/worker.js` for the Worker and `.open-next/assets` for static assets, with `nodejs_compat`; it is a Workers deployment, not a Pages `out` upload. Cloudflare documents OpenNext support for App Router, SSR, route handlers, and middleware, with Node.js middleware limitations. Preserve the existing image service or explicitly configure and test the supported Cloudflare image integration.

Whichever integration is selected, first build and preview locally using that integration, run the SEO checks below against its preview origin, and test referrals on iOS Safari and Android. Validate valid/invalid codes, clipboard permission failure/retry, installed-app handoff, store fallback, and app association files. Server HTML checks do not test these device behaviors or exercise the Supabase POST. Benchmark SSR against Workers Free CPU, bundle, and request limits; Pages Free does not imply unlimited Workers execution. Do not promise a free runtime fit without measuring the adapted app.

Sources:

- [Next.js static export limitations](https://nextjs.org/docs/app/guides/static-exports)
- [Cloudflare Next.js on Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/)
- [Cloudflare vinext migration guide](https://developers.cloudflare.com/workers/static-assets/migration-guides/vercel-to-workers/nextjs/)
- [Cloudflare OpenNext adapter](https://developers.cloudflare.com/workers/framework-guides/web-apps/opennext/)
- [Workers limits](https://developers.cloudflare.com/workers/platform/limits/)

## Pages settings

There is **no valid Pages static deployment configuration for this checkout**. `npm run build` produces a server application in `.next`, not a deployable static `out` directory. Do not upload `.next` to Pages or use the legacy Next.js SSR Pages preset to bypass this decision.

For reference only, after a separately implemented and validated static conversion:

| Setting | Conditional static-export value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | Repository root (leave blank, or `/` in a UI requiring a value) |
| Production branch | `main` |
| Application environment variables | None currently required |

These settings **must not be used with this unchanged server application**. `NEXT_PUBLIC_REFERRAL_DEBUG` is optional, non-production only, and should stay unset in production. The Supabase anon key already shipped in the browser is public; do not replace it with a service-role key. Build-time internet access is required for the existing `next/font/google` Geist download. Node 24.21.0 and npm 11.19.0 were used for this audit.

## SEO invariants and route inventory

All current canonical, Open Graph, JSON-LD and sitemap origins use **`https://www.royalecoachai.com`**. Preserve it. The root canonical is emitted without a trailing slash; its sitemap entry has `/`. Next.js normalizes the existing home canonical this way. `trailingSlash: false` remains unchanged.

The 17 fixed page paths are `/`, `/about`, `/affiliate`, `/contact`, `/delete-account`, `/download`, `/faq`, `/features/deck-analysis`, `/features/deck-builder`, `/features/meta-decks`, `/features/player-profile`, `/features/top-battles`, `/guides`, `/open`, `/pricing`, `/privacy-policy`, and `/terms-of-service`.

The ten guide slugs under `/guides/` are `best-clash-royale-decks`, `clash-royale-meta-decks`, `best-clash-royale-deck-builder`, `clash-royale-deck-analyzer`, `how-to-get-better-at-clash-royale`, `clash-royale-stats-tracker`, `hog-2-6-deck-guide`, `log-bait-deck-guide`, `mega-knight-deck-guide`, and `lumberloon-deck-guide`.

The sitemap retains 26 entries. `/open` is already omitted from it; this audit preserves that omission. `/u/[code]` remains noindex/nofollow and excluded. Robots retains `Allow: /`, `Disallow: /u/`, `Disallow: /api/`, and the existing www sitemap URL. Existing sitemap generation uses the current date for lastModified; URLs and generation code were preserved.

No Google Search Console HTML verification file or `google-site-verification` metadata exists in the checkout. DNS verification or externally injected verification cannot be established from source. Preserve existing DNS TXT records, external verification settings, email records, and the Search Console property. Do not invent a verification token.

## Validation performed

- `npm ci --no-audit --no-fund`: passed using the existing lockfile.
- `npx tsc --noEmit`: passed.
- `npm run lint`: passed.
- `npm run build`: passed, including Next.js TypeScript checks. The initial sandboxed build could not fetch Google Fonts; the network-enabled build succeeded without source changes.
- Production HTTP audit: 27 page responses, 26 sitemap URLs, 26 distinct internal link targets, and 449 distinct image/CSS/JS/font/icon assets passed.
- Titles, descriptions, canonical URLs, Open Graph/Twitter/robots metadata, parsed JSON-LD, and main content matched the local pre-change baseline exactly.
- `/privacy` returns 308 to `/privacy-policy`; `/privacy/` first redirects to `/privacy`. `/download/` redirects to `/download` with 308.
- Both a known referral path and an arbitrary new-code path return 200 with noindex/nofollow, standalone background, no site navbar, and no footer.
- Unknown pages and unpublished guide slugs return 404.
- Both `.well-known` app association files return their unchanged JSON with the required Content-Type and caching headers.

**Live verification limitation:** read-only requests to `https://royalecoachai.com/privacy`, `https://www.royalecoachai.com/`, and `https://www.royalecoachai.com/privacy` returned **Cloudflare HTTP 525** on the audit date. The live hostname redirect, live HTML/SEO parity, and live privacy redirect could not be confirmed. This is an existing production issue observed before changes; no DNS, TLS, domain, or hosting settings were modified. Resolve the production TLS/origin problem separately before a migration cutover.

To rerun against a local production build, start the server in one terminal:

```sh
npm ci
npm run typecheck
npm run lint
npm run build
npm run start -- --hostname 127.0.0.1 --port 3100
```

In a second terminal, run `npm run validate:seo`. To compare two implementations, first capture the old build using `npm run validate:seo -- --capture ../seo-baseline.json`, then run `npm run validate:seo -- ../seo-baseline.json` against the new build. The capture mode skips strict invite chrome assertions so an older broken layout can be recorded; the ordinary validation always enforces them. Set `SEO_TEST_ORIGIN` to an adapter preview origin when testing a Workers build. The audit fetches HTTP resources only and does not create referral tokens.

## Custom domain steps (instructions only)

Do not connect production to an unvalidated deployment. Both apex and www need to continue working, and the existing canonical www hostname must remain authoritative. The current apex-to-www behavior is unknown because of HTTP 525; confirm the intended production redirect before cutover and preserve query strings and paths.

For a future validated **Pages static** project:

1. In Workers & Pages, select the Pages project, then Custom domains, then Set up a domain.
2. Add `royalecoachai.com` and `www.royalecoachai.com` through that flow. An apex Pages domain requires the zone in the same Cloudflare account with Cloudflare nameservers. Verify the existing setup before any change; do not blindly replace DNS records or nameservers.
3. The operator must review and approve the DNS changes shown by Cloudflare. A www subdomain can instead use a CNAME to the assigned `<project>.pages.dev`. Add the domain in Pages first; a CNAME alone is insufficient. Preserve existing Google verification TXT, MX, mail authentication, Supabase login subdomain, and unrelated records.
4. Wait for domain activation and HTTPS certificates, retain the www canonical URLs, and preserve the confirmed hostname redirect. Recheck all 27 pages, robots, sitemap, `/privacy`, slash redirects, referrals, and app association URLs on both hostnames.
5. Keep the existing hosting available for rollback and confirm Search Console verification and sitemap access after cutover. Ranking preservation cannot be guaranteed by build checks alone.

For the recommended **Workers runtime** path, use that Worker's Settings > Domains & Routes > Add > Custom Domain after preview validation; Pages custom-domain controls are not the deployment target. Connecting a custom domain changes DNS/routing and is outside this audit's authorization.

See [Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/) and [Workers custom domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/).
