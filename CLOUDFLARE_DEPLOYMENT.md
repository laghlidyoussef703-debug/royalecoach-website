# Cloudflare Workers deployment with vinext

Prepared locally on 2026-11-13, following the [official Cloudflare Next.js guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/) and [migration guide](https://developers.cloudflare.com/workers/static-assets/migration-guides/vercel-to-workers/nextjs/). Nothing was deployed; no Cloudflare login, DNS, domain attachment, or hosting change was performed.

## Compatibility and setup

`npx vinext check` reported **97% compatibility: 15 supported, one partial, zero unsupported issues**. All six Next.js import families, App Router, dynamic routing, middleware, redirects, headers, and Tailwind are supported. Images are partially supported because resizing requires an optimizer; `vite.config.ts` explicitly configures the Cloudflare Images optimizer, and the Worker declares an IMAGES binding.

Initialization used:

```sh
npx vinext init --platform=cloudflare --name royalecoach-website --cdn-cache=none --data-cache=none --image-optimization=cloudflare-images
```

This command has already been run. Do not initialize again after cloning. `npm ci` installs the committed dependency versions. The lockfile pins vinext 1.4.5, @vinext/cloudflare 1.3.4, and the generated Cloudflare/Vite dependencies. Initialization required upgrading React and React DOM from 19.2.4 to 19.3.1 and adding matching react-server-dom-webpack. Next.js remains 16.2.10. The original Next.js scripts remain available alongside vinext.

Use **Node 24.22.0** (recorded in `.nvmrc`; `engines.node` permits compatible 24.x releases). The generated `cf` CLI requires a newer patch release than the machine's original Node 24.21.0. Validation used an isolated 24.22.0 runtime without changing the machine installation.

## Exact configuration

`cloudflare.config.ts`:

```ts
import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  worker: defineWorker({
    name: "royalecoach-website",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-11-13",
    assets: {
      htmlHandling: "none",
      notFoundHandling: "none",
      runWorkerFirst: ["/*", "!/_next/static/*", "!/*/_next/static/*"],
    },
    env: {
      ASSETS: bindings.assets(),
      IMAGES: bindings.images(),
    },
  }),
});
```

`vite.config.ts`:

```ts
import { defineConfig } from "vite";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";
import { imagesOptimizer } from "@vinext/cloudflare/images/images-optimizer";

export default defineConfig({
  plugins: [
    vinext({ images: { optimizer: imagesOptimizer() } }),
    cloudflare({
      viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
    }),
  ],
});
```

No `wrangler.jsonc` is needed. With this compatibility date, no explicit `nodejs_compat` flag is required. There is no ISR, CDN response cache, KV, R2, database, scheduled trigger, or production domain declared. All requests except hashed framework assets enter the Worker, preserving Next.js redirects, middleware, metadata routes, and not-found behavior.

The build writes the Worker bundle and assets under `.cloudflare/output/v0/workers/default/`, and vinext metadata under `dist/`. Deploy using the CLI below; do not upload `dist`, `.next`, or an `out` directory to Pages. This remains a dynamic application and does not use static export.

## Validation commands

From the repository root, with Node 24.22.0 selected:

```sh
npm ci
npx vinext check
npm run build:vinext
npm run typecheck
npm run lint
npm run start:vinext -- --host 127.0.0.1 --port 3100
```

In a second terminal:

```sh
npm run validate:seo
```

The validator defaults to `http://127.0.0.1:3100`; set `SEO_TEST_ORIGIN` for another local preview. To compare against a captured old implementation, use `npm run validate:seo -- --capture ../seo-baseline.json` on that old server, then `npm run validate:seo -- ../seo-baseline.json` on the new server. The original pre-migration baseline was captured and compared during this migration; the scratch baseline is not part of the application bundle.

The validator compares parsed DOM rather than raw serialized HTML. It retains page text, classes, layout styles, links, image sources and dimensions, metadata values, canonical URLs, and parsed JSON-LD. It ignores attribute ordering, collapsed whitespace, React comments, next/font's internal size-adjust marker, and renderer-specific image hints (`data-nimg`, fetch priority, explicit eager loading, transparent placeholder color). It still checks every referenced local asset over HTTP. The validator does not create referral tokens or call the Supabase POST.

`typecheck` runs `next typegen` before TypeScript because Next.js and vinext both generate `.next/types/routes.d.ts`; regenerating avoids stale mixed route validators. Cloudflare's generated types are included, and build output directories are excluded from lint. A type-only assertion on the referral response JSON accommodates Cloudflare's `Response.json(): unknown` typing without altering emitted behavior.

The original `npm run build` and `npm run start` also passed after initialization. Use `npm run dev:vinext` for Worker development and `npm run dev` for the original Next.js development server.

## Verified behavior and SEO preservation

- All **27 existing fixed/guide pages** return 200, with **26 existing sitemap URLs** and 26 distinct internal link targets preserved.
- Titles, descriptions, canonical URLs, Open Graph/Twitter/robots metadata, JSON-LD, page text, classes, and layout styles match the original local baseline after the renderer normalization described above. No SEO page or CSS was rewritten.
- The built Worker served 448 distinct referenced CSS/JS/font/icon/image URLs successfully. The original Next.js renderer referenced 449; framework assets differ by bundler.
- `/privacy` returns **308** to `/privacy-policy`. `/privacy/` first returns 308 to `/privacy`. `/download/` returns 308 to `/download`. `trailingSlash: false` remains unchanged.
- Known and arbitrary future `/u/[code]` paths return 200 with noindex/nofollow, standalone background, no navbar, and no footer. The original referral endpoint, key, clipboard payload, scheme, and store URLs are unchanged.
- Unpublished guides and unknown routes return 404.
- Both `.well-known` app association files retain their original JSON, JSON Content-Type, and `public, max-age=300` caching. `public/_headers` explicitly preserves these headers through the Cloudflare static asset service; it also keeps hashed framework assets immutable.
- The required `npx @vinext/cloudflare deploy --dry-run` passed. This command checks configuration only: it performs no build, upload, authentication, or deployment.

Existing canonical, sitemap, Open Graph, and structured-data URLs use **`https://www.royalecoachai.com`** and remain unchanged. The homepage canonical is emitted without a trailing slash; its sitemap entry includes `/`, as before. `/open` remains indexable but omitted from the sitemap, as before. `/u/` remains excluded and disallowed; robots also keeps `/api/` disallowed.

No Google Search Console verification token or HTML verification file exists in the repository. Existing external/DNS verification records were untouched. Previous live requests returned Cloudflare HTTP 525, so live HTML parity and the apex-to-www hosting redirect could not be established. Local checks cannot establish live TLS health or guarantee rankings.

## Asset limit resolved with user approval

`public/assets/fankit/hero-king.png` exceeded Workers' 25 MiB per-asset limit: 27,655,432 bytes at 4096×4096, 16 bits per channel. Lossless recompression could not bring it below the limit. The user explicitly approved conversion to 8-bit PNG.

The committed file is 7,846,945 bytes. Its URL, 4096×4096 dimensions, alpha channel, embedded ICC profile, and other PNG metadata are retained. Each original 16-bit channel sample was rounded to its 8-bit equivalent, without resizing, palette quantization, or redesign. This reduces color precision and is not bit-for-bit lossless. The original is recoverable from Git history and was also backed up outside the repository during preparation. No other image was changed.

## Deployment commands — run only when deployment is authorized

Select Node 24.22.0, then:

```sh
npm ci
npm run build:vinext
npm run typecheck
npm run lint
npx cf auth login
npx @vinext/cloudflare deploy --dry-run
npx @vinext/cloudflare deploy
```

The final command **actually deploys**. It was not executed during preparation. The deployment command may build/prerender as part of its own workflow, so retain build-time internet access for Geist font downloads. No application secrets or mandatory environment variables are currently required. Leave `NEXT_PUBLIC_REFERRAL_DEBUG` unset in production. Any future `NEXT_PUBLIC_*` variables must exist at build time; never substitute a private service-role key for the public referral anon key.

ASSETS is managed by the deployment tooling. Before actual deployment, verify the selected Cloudflare account supports the IMAGES binding and its transformation usage/billing. Local optimizer success does not establish that account entitlement. Measure real Workers CPU usage and traffic against Free plan limits; the local build does not guarantee a Free plan capacity fit. vinext and the generated Cloudflare integration are beta dependencies; sourcemap, chunking, route-classification, and deprecated middleware warnings were emitted, but builds completed successfully.

Do not attach `royalecoachai.com` or `www.royalecoachai.com`, modify DNS, enable a domain route, or cut over hosting as part of these commands. The committed configuration contains no production route or domain. A future cutover must separately preserve both hostnames, confirm the existing hostname redirect, retain Search Console TXT and email records, and verify HTTPS, `/privacy`, sitemap, robots, referral handoff on real iOS/Android devices, and app association URLs. Mobile clipboard/app-launch behavior and live traffic capacity were not exercised by the HTTP validator.
