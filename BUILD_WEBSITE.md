# BUILD_WEBSITE.md — RoyaleCoach AI Marketing Website

> **Implementation guide for the RoyaleCoach AI Next.js marketing website.**
> Read this document fully before writing a single line of code.
> Every section has checklists, safety rules, exact file paths, and expected results.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Referral System Protection Plan](#2-referral-system-protection-plan) ⚠️ READ FIRST
3. [Reference Images](#3-reference-images)
4. [Project Structure](#4-project-structure)
5. [Design System & Tokens](#5-design-system--tokens)
6. [Reusable Components](#6-reusable-components)
7. [Step 1 — Initialize the Project](#step-1--initialize-the-project)
8. [Step 2 — Recreate /u/[code] Exactly](#step-2--recreate-ucode-exactly)
9. [Step 3 — Test /u/DC98FW Locally](#step-3--test-udc98fw-locally)
10. [Step 4 — Build 13 Marketing Pages](#step-4--build-13-marketing-pages)
11. [Step 5 — Deploy to Vercel Preview](#step-5--deploy-to-vercel-preview)
12. [Step 6 — Test /u/DC98FW on Preview](#step-6--test-udc98fw-on-preview)
13. [Step 7 — Production Domain Switch](#step-7--production-domain-switch)
14. [SEO Implementation Plan](#14-seo-implementation-plan)
15. [Schema Markup Plan](#15-schema-markup-plan)
16. [Legal Safety Rules](#16-legal-safety-rules)
17. [Final Pre-Production Checklist](#17-final-pre-production-checklist)

---

## 1. Project Overview

### Locations

| Item | Path |
|---|---|
| **New website project** | `C:\Users\TOSHIBA\Desktop\app_coaching\royalecoach-website` |
| **Mobile app / current static website** | `C:\Users\TOSHIBA\Desktop\app_coaching\royalecoach_clean` |
| **Current live invite page** | `C:\Users\TOSHIBA\Desktop\app_coaching\royalecoach_clean\public\u\index.html` |
| **Reference design images** | `C:\Users\TOSHIBA\Desktop\app_coaching\royalecoach_clean\image_web\` |
| **Brand assets** | `C:\Users\TOSHIBA\Desktop\app_coaching\royalecoach_clean\public\brand\` |

### Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel
- **Domain:** `www.royalecoachai.com`

### Website Goal

The website is a **marketing and SEO website only**. It promotes the RoyaleCoach AI mobile app and drives downloads on iOS and Android. It is NOT a replacement for the app. The `/u/[code]` route is a **functional referral route** used by real app users — not a marketing page.

### Pages

| # | Page | Route | Type |
|---|---|---|---|
| 1 | Homepage | `/` | Marketing / SEO |
| 2 | Download | `/download` | Marketing / Conversion |
| 3 | Pricing | `/pricing` | Marketing / Conversion |
| 4 | FAQ | `/faq` | Marketing / SEO |
| 5 | Deck Analysis | `/features/deck-analysis` | Feature / SEO |
| 6 | Deck Builder | `/features/deck-builder` | Feature / SEO |
| 7 | Meta Decks | `/features/meta-decks` | Feature / SEO |
| 8 | Top Battles | `/features/top-battles` | Feature / SEO |
| 9 | Player Profile | `/features/player-profile` | Feature / SEO |
| 10 | Privacy Policy | `/privacy-policy` | Legal |
| 11 | Terms of Service | `/terms-of-service` | Legal |
| 12 | Delete Account | `/delete-account` | Legal / Support |
| 13 | Affiliate | `/affiliate` | Marketing |
| 14 | Referral Route | `/u/[code]` | **Functional — protected** |

---

## 2. Referral System Protection Plan

> ⚠️ **CRITICAL — Read before building anything else.**
> Breaking this route breaks real user referral links already shared in the wild.

### 2.1 Why /u/[code] Is Critical

Every user of the RoyaleCoach AI app has a personal invite link:

```
https://www.royalecoachai.com/u/{publicInviteCode}
```

Example of a real link: `https://www.royalecoachai.com/u/DC98FW`

This URL is **hardcoded in three places in the mobile app source code**:

```
royalecoach_clean/src/features/squad/attributionLink.ts      (line 25 — canonical)
royalecoach_clean/src/features/squad/screens/MySquadScreen.tsx (line 30)
royalecoach_clean/src/features/squad/screens/SquadHubScreen.tsx (line 35)
```

The constant in all three files is:
```ts
const INVITE_BASE_URL = 'https://www.royalecoachai.com/u/';
```

**You cannot change this URL format.** A new app release would be required to change it, and old app versions would still use the old format. The route must work forever.

### 2.2 How the Old Static Route Works

The current implementation is a single static HTML file served for all `/u/*` paths:

**File:** `royalecoach_clean/public/u/index.html`

**Vercel rewrite in** `royalecoach_clean/vercel.json`:
```json
{
  "outputDirectory": "public",
  "rewrites": [
    { "source": "/u/:code", "destination": "/u/index.html" }
  ]
}
```

**Full flow when a user opens `/u/DC98FW`:**

```
1. Browser opens https://www.royalecoachai.com/u/DC98FW
2. index.html is served (noindex — not indexed by Google)
3. JS extracts "DC98FW" from the URL path:
   window.location.pathname.split("/").filter(Boolean) → ["u","DC98FW"]
4. JS calls Supabase edge function:
   POST https://login.royalecoachai.com/functions/v1/squad-click-token-create
   Headers: { apikey: ANON_KEY, Authorization: "Bearer " + ANON_KEY }
   Body: { public_invite_code: "DC98FW", platform_hint: "ios"|"android"|"unknown" }
   Response: { ok: true, token: "short-lived-jwt-or-uuid" }
5. If token received → write to clipboard:
   navigator.clipboard.writeText("royalecoach_invite=" + token)
6. Show "Open RoyaleCoach AI" button
7. On button tap → attempt deep link: royalecoach://invite
   - If app installed → OS switches to app → app reads clipboard → attribution captured
   - If not installed → after 1800ms → show App Store / Play Store fallback button
8. If token NOT received (invalid code) → show error card + store buttons directly
```

**Key constants that must be preserved exactly:**

| Constant | Value |
|---|---|
| Supabase functions URL | `https://login.royalecoachai.com/functions/v1` |
| Edge function name | `squad-click-token-create` |
| Supabase anon key | See `public/u/index.html` line 549 — copy exactly |
| App Store URL | `https://apps.apple.com/app/id6762710841` |
| Play Store URL | `https://play.google.com/store/apps/details?id=com.royalecoach.app` |
| Deep link scheme | `royalecoach://invite` |
| Clipboard prefix | `royalecoach_invite=` |
| Open detect timeout | `1800` ms |

### 2.3 How to Recreate It in Next.js App Router

In Next.js App Router, create a **dynamic route** that catches all `/u/[code]` paths:

```
src/app/u/[code]/page.tsx
```

**This page MUST be:**
- A `'use client'` component (the entire logic is browser JS — no server rendering needed)
- `noindex, nofollow` via `generateMetadata()` at the layout or page level
- Excluded from `sitemap.ts` entirely
- A pixel-perfect recreation of `public/u/index.html` — same HTML structure, same JS logic, same CSS

**Do NOT:**
- Use `fetch()` server-side for the Supabase call (the anon key is designed to be public per Supabase's own model, but the call must happen client-side to access `navigator.clipboard` and `window.location`)
- Add this route to `sitemap.ts`
- Add any tracking or analytics to this page beyond what already exists
- Link this page to or from the `/affiliate` page

### 2.4 Route File to Create

```
src/app/u/
  [code]/
    page.tsx     ← 'use client' — full referral page logic
    layout.tsx   ← optional: sets noindex metadata at layout level
```

**Recommended: use a `layout.tsx` inside `u/[code]/` to enforce noindex:**

```tsx
// src/app/u/[code]/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function InviteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

**The `page.tsx` itself:**

```tsx
'use client';
// Full port of public/u/index.html
// Copy all CSS into a <style> tag using next/head or inline <style jsx>
// Copy all JS logic from the <script> block into React useEffect
// Keep the exact same HTML structure
// Keep the exact same constants (Supabase URL, anon key, store URLs, deep link)
```

### 2.5 How to Keep noindex Metadata

Use two layers of protection:

**Layer 1 — `layout.tsx` in the `u/[code]` folder (recommended primary method):**
```tsx
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};
```

**Layer 2 — Also add the meta tag directly in the page head via the HTML template** (belt-and-suspenders, matches the original `<meta name="robots" content="noindex">`).

**Verify it works:**
After `npm run build`, check `.next/server/app/u/[code]/page.html` — it must contain:
```html
<meta name="robots" content="noindex,nofollow">
```

### 2.6 How to Test Locally

```
http://localhost:3000/u/DC98FW
```

**Expected behavior:**
1. Page loads with the "Preparing your invite…" spinner
2. Supabase edge function is called (check Network tab in DevTools)
3. If `DC98FW` is a valid invite code → spinner changes to "Invite prepared" green check
4. "Open RoyaleCoach AI" button appears
5. Clicking the button attempts `royalecoach://` deep link
6. After 1800ms with no app switch detected → App Store / Play Store fallback appears

**Expected behavior for invalid code:**
1. Spinner shows briefly
2. Supabase returns no token / error
3. "Invite unavailable" error card appears
4. Store buttons appear for correct platform

### 2.7 How to Test on Vercel Preview

```
https://[PREVIEW_DOMAIN].vercel.app/u/DC98FW
```

Check:
- [ ] Supabase call succeeds (no CORS error — the Supabase project allows `*` origin)
- [ ] Clipboard write is attempted (HTTPS is required — preview Vercel URL is HTTPS ✓)
- [ ] Deep link `royalecoach://invite` is attempted on tap
- [ ] Fallback buttons point to correct App Store and Play Store URLs
- [ ] Page `<head>` contains `<meta name="robots" content="noindex,nofollow">`
- [ ] Page does NOT appear in `sitemap.xml`

### 2.8 What Must Be Checked Before Production Domain Switch

> ⛔ Do NOT point `www.royalecoachai.com` to the new project until ALL of these pass:

- [ ] `https://PREVIEW/u/DC98FW` — full flow works end-to-end
- [ ] Token created by Supabase (confirmed in Network tab)
- [ ] Clipboard written (confirmed by opening app after visiting preview link on real phone)
- [ ] App opens via deep link OR fallback button appears correctly
- [ ] `<meta name="robots" content="noindex">` confirmed in page source
- [ ] `/u/DC98FW` not in `sitemap.xml`
- [ ] No console errors on the invite page
- [ ] Works on real iPhone and real Android device (not just desktop simulation)

### 2.9 The /affiliate Page Is Completely Separate

The `/affiliate` route at `src/app/affiliate/page.tsx` is a **pure marketing page** that explains the partner/creator program. It has:
- No connection to the Supabase `squad-click-token-create` function
- No connection to clipboard logic
- No connection to the `/u/` route
- No affiliate tracking links generated on this page
- It is indexed by Google (opposite of `/u/[code]`)

Do not link `/affiliate` to `/u/[code]` in any way.

---

## 3. Reference Images

> **Before building each page, open the reference image for that page.**
> The images are design mockups/references showing the intended layout.
> Use them as visual references — do not slavishly copy every pixel, but match the layout intent.

### Image Folder

```
C:\Users\TOSHIBA\Desktop\app_coaching\royalecoach_clean\image_web\
```

### Actual Files (verified — do not guess filenames)

| Page | Route | Reference Image | File Exists? |
|---|---|---|---|
| Homepage | `/` | `image_web/homeWeb.png` | ✅ |
| Download | `/download` | `image_web/downloadWeb.png` | ✅ |
| Pricing | `/pricing` | `image_web/pricing.png` | ✅ |
| FAQ | `/faq` | `image_web/feq.png` | ✅ (note: filename is `feq.png`, not `faq.png`) |
| Deck Analysis | `/features/deck-analysis` | `image_web/deckweb.png` | ✅ (shared with Deck Builder) |
| Deck Builder | `/features/deck-builder` | `image_web/deckweb.png` | ✅ (shared reference) |
| Meta Decks | `/features/meta-decks` | `image_web/metaWeb.png` | ✅ |
| Top Battles | `/features/top-battles` | *(no dedicated image — use `metaWeb.png` as layout reference)* | ⚠️ Missing |
| Player Profile | `/features/player-profile` | `image_web/profilweb.png` | ✅ |
| Privacy Policy | `/privacy-policy` | `image_web/privacy-policy.png` | ✅ |
| Terms of Service | `/terms-of-service` | `image_web/terms-of-service.png` | ✅ |
| Delete Account | `/delete-account` | `image_web/delete-account.png` | ✅ |
| Affiliate | `/affiliate` | *(no dedicated image — use layout from `homeWeb.png` as reference)* | ⚠️ Missing |
| Referral `/u/[code]` | `/u/[code]` | *(recreate from source HTML exactly — no image needed)* | N/A |

**Missing images for:** Top Battles, Affiliate. For these two pages, build using the content plan in Step 4 and use `homeWeb.png` or `metaWeb.png` as general layout reference.

### How to Use Reference Images During Development

Before building each page:
1. Open the reference image: `C:\Users\TOSHIBA\Desktop\app_coaching\royalecoach_clean\image_web\[filename]`
2. Note the section order, card layouts, typography hierarchy, and spacing
3. Note which sections use the blue/gold color scheme
4. Match the general layout while applying the design system tokens from Section 5

---

## 4. Project Structure

The project already exists at:
```
C:\Users\TOSHIBA\Desktop\app_coaching\royalecoach-website\
```

With initial scaffold:
```
royalecoach-website/
├── src/
│   └── app/
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx        ← global root layout (add Navbar + Footer here)
│       └── page.tsx          ← homepage
├── public/                   ← static assets
├── next.config.ts
├── package.json              ← Next.js 16, React 19, Tailwind v4
├── tsconfig.json
└── BUILD_WEBSITE.md          ← this file
```

### Target Structure After Full Build

```
royalecoach-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    ← root layout (Navbar + Footer + global meta)
│   │   ├── page.tsx                      ← Homepage /
│   │   ├── globals.css
│   │   ├── sitemap.ts                    ← dynamic sitemap (excludes /u/*)
│   │   ├── robots.ts                     ← robots.txt
│   │   ├── download/
│   │   │   └── page.tsx
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   ├── faq/
│   │   │   └── page.tsx
│   │   ├── features/
│   │   │   ├── deck-analysis/
│   │   │   │   └── page.tsx
│   │   │   ├── deck-builder/
│   │   │   │   └── page.tsx
│   │   │   ├── meta-decks/
│   │   │   │   └── page.tsx
│   │   │   ├── top-battles/
│   │   │   │   └── page.tsx
│   │   │   └── player-profile/
│   │   │       └── page.tsx
│   │   ├── privacy-policy/
│   │   │   └── page.tsx
│   │   ├── terms-of-service/
│   │   │   └── page.tsx
│   │   ├── delete-account/
│   │   │   └── page.tsx
│   │   ├── affiliate/
│   │   │   └── page.tsx
│   │   └── u/
│   │       └── [code]/
│   │           ├── layout.tsx            ← noindex metadata
│   │           └── page.tsx              ← 'use client' — full referral logic
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/
│   │   │   ├── CTAButton.tsx
│   │   │   ├── AppStoreButtons.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── FeatureCard.tsx
│   │   │   ├── PricingCard.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   ├── PhoneMockup.tsx
│   │   │   └── LegalPageLayout.tsx
│   │   └── seo/
│   │       └── JsonLd.tsx               ← JSON-LD renderer component
│   └── lib/
│       ├── metadata.ts                   ← shared metadata helpers
│       └── jsonld.ts                     ← JSON-LD object builders
├── public/
│   ├── brand/
│   │   ├── logo-mark.png               ← copy from royalecoach_clean/public/brand/
│   │   └── logo_wordmark_horizontal.png
│   ├── fonts/
│   │   └── Clash_Regular.otf           ← copy from royalecoach_clean/public/fonts/
│   ├── og/                             ← Open Graph images (1200×630)
│   │   ├── default.png
│   │   ├── download.png
│   │   ├── pricing.png
│   │   └── (one per major page)
│   └── screenshots/                    ← app screenshots (WebP, <150KB each)
│       ├── deck-analysis.webp
│       ├── deck-builder.webp
│       ├── meta-decks.webp
│       ├── player-profile.webp
│       └── coaching-chat.webp
├── next.config.ts
├── package.json
└── BUILD_WEBSITE.md
```

---

## 5. Design System & Tokens

Define these in `globals.css` as CSS custom properties and as Tailwind v4 theme values.

### Color Palette

```css
/* globals.css — CSS custom properties */
:root {
  /* Backgrounds */
  --bg-base:        #FFFFFF;
  --bg-soft:        #F8F9FB;
  --bg-blue-tint:   #F0F4FF;

  /* Brand */
  --blue:           #1A6CF6;
  --blue-deep:      #0759CC;
  --blue-dark:      #063E9C;
  --blue-soft:      rgba(26, 108, 246, 0.08);

  /* Gold (CTAs) */
  --gold:           #FFC928;
  --gold-mid:       #F5B712;
  --gold-deep:      #C98500;

  /* Text */
  --text-primary:   #0D0F1A;
  --text-secondary: #18233B;
  --text-muted:     #6B7280;

  /* Borders */
  --border:         #E5E7EB;
  --border-blue:    rgba(26, 108, 246, 0.20);

  /* Status */
  --green:          #22C55E;
}
```

### Tailwind v4 Theme Extension

```ts
// next.config.ts or tailwind config — extend theme with brand tokens
// Use Tailwind v4's CSS-based config (no tailwind.config.js needed in v4)
// Reference tokens via @theme in globals.css:
@theme {
  --color-brand-blue: #1A6CF6;
  --color-brand-blue-deep: #0759CC;
  --color-brand-gold: #FFC928;
  --color-brand-navy: #0D0F1A;
  --color-brand-soft: #F8F9FB;
  --font-sans: 'Inter', system-ui, sans-serif;
  --radius-card: 1rem;       /* 16px */
  --radius-card-lg: 1.25rem; /* 20px */
  --radius-btn: 0.5rem;      /* 8px */
}
```

### Typography Scale

| Element | Size | Weight | Color |
|---|---|---|---|
| H1 | 48–64px (clamp) | 800 | `--text-primary` |
| H2 | 32–40px (clamp) | 700 | `--text-primary` |
| H3 | 22–26px | 600 | `--text-secondary` |
| Body large | 18–20px | 400 | `--text-secondary` |
| Body | 16px | 400 | `--text-muted` |
| Caption | 13–14px | 400 | `--text-muted` |
| Button | 16–18px | 700 | depends on variant |

### Button Variants

| Variant | Background | Text | Border | Use |
|---|---|---|---|---|
| Primary (gold) | Gold gradient | `#2D2100` | `#A86C00` | Main CTA |
| Secondary (blue) | `--blue` | `#FFFFFF` | none | Secondary CTA |
| Ghost | transparent | `--blue` | `--blue` | Tertiary / nav |
| Outline light | `#FFFFFF` | `--text-primary` | `--border` | In dark sections |

### Card Style

```css
.card {
  background: #FFFFFF;
  border: 1.5px solid #E5E7EB;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
}
```

---

## 6. Reusable Components

Build these components before building any page.

### 6.1 Navbar (`components/layout/Navbar.tsx`)

```
Structure:
  Left:   Logo (logo-mark.png + "RoyaleCoach AI" wordmark)
  Center: Features ▾  |  Pricing  |  FAQ  |  Affiliate
  Right:  [Download — gold CTA button]

Features dropdown items:
  → Deck Analysis (/features/deck-analysis)
  → Deck Builder (/features/deck-builder)
  → Meta Decks (/features/meta-decks)
  → Top Battles (/features/top-battles)
  → Player Profile (/features/player-profile)

Mobile:
  Hamburger menu
  Drawer with all links + full-width gold Download button
  Sticky: yes (position: sticky; top: 0; z-index: 50)
  After 200px scroll: slim sticky bottom bar on mobile with store badges
```

### 6.2 Footer (`components/layout/Footer.tsx`)

```
4 columns:
  Product:  Home, Download, Pricing, Affiliate
  Features: Deck Analysis, Deck Builder, Meta Decks, Top Battles, Player Profile
  Support:  FAQ, Delete Account, support@royalecoachai.com
  Legal:    Privacy Policy, Terms of Service

Social row: Twitter/X, TikTok, Reddit, Discord (placeholder links)

Disclaimer band (darker bg):
  "RoyaleCoach AI is an independent companion app and is not affiliated with,
   endorsed by, sponsored by, or officially connected to Supercell Oy in any way.
   Clash Royale® is a registered trademark of Supercell Oy. All game content,
   names, and trademarks are property of their respective owners."

Copyright: "© 2025 RoyaleCoach AI. All rights reserved."
```

### 6.3 CTAButton (`components/ui/CTAButton.tsx`)

Props: `variant: 'gold' | 'blue' | 'ghost' | 'outline'`, `href`, `size`, `children`

### 6.4 AppStoreButtons (`components/ui/AppStoreButtons.tsx`)

```
Props: layout: 'horizontal' | 'vertical' | 'stacked'
iOS URL:     https://apps.apple.com/app/id6762710841
Android URL: https://play.google.com/store/apps/details?id=com.royalecoach.app
Use official badge image files (download from Apple/Google guidelines)
Minimum tap target: 44px height
```

### 6.5 SectionHeader (`components/ui/SectionHeader.tsx`)

Props: `eyebrow` (optional chip text), `h2`, `subheadline`, `align: 'left' | 'center'`

### 6.6 FeatureCard (`components/ui/FeatureCard.tsx`)

Props: `icon`, `title`, `description`, `href` (optional link)

### 6.7 PricingCard (`components/ui/PricingCard.tsx`)

Props: `tier: 'free' | 'pro' | 'clan'`, `price`, `features[]`, `highlighted`, `cta`

### 6.8 FAQAccordion (`components/ui/FAQAccordion.tsx`)

Props: `items: Array<{ question: string, answer: string }>`
Behavior: expand/collapse on click, one open at a time, accessible (aria-expanded)

### 6.9 PhoneMockup (`components/ui/PhoneMockup.tsx`)

Props: `screenshot: string` (image path), `alt: string`
Wraps screenshot in a phone frame SVG or CSS-based device frame.

### 6.10 LegalPageLayout (`components/ui/LegalPageLayout.tsx`)

Props: `title`, `lastUpdated`, `children`
Renders: page title, date, max-width 720px container, clean section headings.

### 6.11 JsonLd (`components/seo/JsonLd.tsx`)

```tsx
// Renders JSON-LD as a <script type="application/ld+json"> tag
// Takes a plain JS object and stringifies it safely
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

---

## Step 1 — Initialize the Project

> The project already exists. This step covers what still needs to be set up.

### 1.1 Checklist

- [ ] Confirm `npm install` has run (`node_modules` exists ✅ already verified)
- [ ] Copy brand assets from mobile app:
  ```
  Source: royalecoach_clean/public/brand/logo-mark.png
          royalecoach_clean/public/brand/logo_wordmark_horizontal.png
  Dest:   royalecoach-website/public/brand/
  ```
- [ ] Copy font file:
  ```
  Source: royalecoach_clean/public/fonts/Clash_Regular.otf
  Dest:   royalecoach-website/public/fonts/
  ```
- [ ] Copy `app-ads.txt`:
  ```
  Source: royalecoach_clean/public/app-ads.txt
  Dest:   royalecoach-website/public/app-ads.txt
  ```
  (AdMob requires this to be served at the domain root)
- [ ] Create `public/screenshots/` folder for app screenshots
- [ ] Create `public/og/` folder for Open Graph images (1200×630 PNG)

### 1.2 Configure globals.css

Replace the default `globals.css` content with:
- CSS custom properties (design tokens from Section 5)
- `@font-face` for Clash font
- Base reset and body styles
- Tailwind v4 `@import` and `@theme` block

### 1.3 Configure Root Layout

`src/app/layout.tsx`:
- Import and render `<Navbar />` and `<Footer />`
- Set global `metadata` object:
  ```ts
  export const metadata: Metadata = {
    metadataBase: new URL('https://www.royalecoachai.com'),
    title: {
      default: 'RoyaleCoach AI — AI-Powered Clash Royale Coach & Deck Analyzer',
      template: '%s | RoyaleCoach AI',
    },
    description: 'Analyze your Clash Royale deck, discover weaknesses, build better decks, and climb the ladder with AI coaching. Free on iOS & Android.',
    openGraph: {
      type: 'website',
      siteName: 'RoyaleCoach AI',
      images: [{ url: '/og/default.png', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image' },
  };
  ```
- Add `<Organization>` JSON-LD in the layout body (renders on every page)

### 1.4 Configure next.config.ts

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // No trailing slash on URLs
  trailingSlash: false,
  // Compress images
  images: {
    formats: ['image/webp'],
  },
};

export default nextConfig;
```

### 1.5 Test Commands

```bash
cd "C:\Users\TOSHIBA\Desktop\app_coaching\royalecoach-website"
npm run dev
# Expected: server running at http://localhost:3000
# Expected: no TypeScript errors
# Expected: Tailwind styles applying
```

---

## Step 2 — Recreate /u/[code] Exactly

> ⚠️ Do this BEFORE building any marketing page. It is the most critical route.

### 2.1 Files to Create

```
src/app/u/[code]/layout.tsx    ← noindex metadata
src/app/u/[code]/page.tsx      ← 'use client' — full referral logic
```

### 2.2 layout.tsx

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  title: 'RoyaleCoach AI — Your invite is ready',
  description: 'Join RoyaleCoach AI with your friend\'s invite.',
};

export default function InviteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

### 2.3 page.tsx Structure

The `page.tsx` must be a `'use client'` component that replicates `public/u/index.html` exactly. Implementation approach:

```tsx
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// ── Constants (copy exact values from public/u/index.html) ──────────────────
const SUPABASE_FUNCTIONS_URL = 'https://login.royalecoachai.com/functions/v1';
const SUPABASE_ANON_KEY = '[copy exact value from public/u/index.html line 549]';
const APPLE_APP_STORE_URL = 'https://apps.apple.com/app/id6762710841';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.royalecoach.app';
const APP_DEEP_LINK = 'royalecoach://invite';
const OPEN_DETECT_TIMEOUT_MS = 1800;
const CLIPBOARD_PREFIX = 'royalecoach_invite=';

// ── Platform detection ───────────────────────────────────────────────────────
function detectPlatform(): 'ios' | 'android' | 'unknown' {
  const ua = navigator.userAgent || '';
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
  if (/Android/i.test(ua)) return 'android';
  return 'unknown';
}

// ── Port all JS logic from the <script> block ────────────────────────────────
// attemptOpenApp(), showInvalidLinkFallback(), main() etc.
// Use useEffect to run main() on mount
// Use useState for UI states: 'loading' | 'ready' | 'desktop' | 'error'
```

**CSS approach:** Inline the styles either as:
- A `<style>` JSX element rendered at the top of the component (cleanest for pixel-perfect match)
- Or as Tailwind classes (acceptable if you replicate the exact visual output)

The inline `<style>` approach is safer and guarantees the page looks identical to the original.

### 2.4 Verify noindex Is Rendered

After `npm run dev`:
```bash
curl http://localhost:3000/u/DC98FW
# Look for: <meta name="robots" content="noindex,nofollow">
# in the HTML source
```

Or in browser: View Page Source → search for "robots".

### 2.5 Checklist

- [ ] `src/app/u/[code]/layout.tsx` created with `robots: { index: false, follow: false }`
- [ ] `src/app/u/[code]/page.tsx` created as `'use client'`
- [ ] All constants copied exactly from `public/u/index.html`
- [ ] `detectPlatform()` function ported
- [ ] `attemptOpenApp()` function ported with visibility/blur/pagehide listeners
- [ ] `main()` async function ported and called in `useEffect([], [])`
- [ ] All UI states handled: loading, ready, desktop, error
- [ ] CSS styles match original (inline style tag or CSS module)
- [ ] Page renders at `http://localhost:3000/u/DC98FW`
- [ ] Page is NOT in `sitemap.ts`
- [ ] Page is NOT linked from Navbar or Footer
- [ ] Page is NOT linked from `/affiliate`

---

## Step 3 — Test /u/DC98FW Locally

### 3.1 Start Dev Server

```bash
npm run dev
```

Open: `http://localhost:3000/u/DC98FW`

### 3.2 Tests to Run

| Test | How to Check | Expected Result |
|---|---|---|
| Page renders | Load in browser | Shows "Preparing your invite…" spinner |
| Code extracted from URL | Console log or debugger | `code = "DC98FW"` |
| Supabase call made | DevTools → Network tab | `POST squad-click-token-create` visible |
| Valid token response | Network tab → Response | `{ ok: true, token: "..." }` |
| UI updates | Watch page | Spinner → "Invite prepared" green check |
| CTA appears | Watch page | "Open RoyaleCoach AI" button appears |
| noindex in head | View Page Source | `<meta name="robots" content="noindex` |
| Not in sitemap | `http://localhost:3000/sitemap.xml` | `/u/DC98FW` not listed |

### 3.3 Mobile Test (Important)

Use Chrome DevTools → Toggle Device Toolbar → iPhone 15 Pro viewport:
- Page fits within 390px width
- All buttons are at least 48px tall
- Text is readable
- Gold "Open RoyaleCoach AI" button is prominent

### 3.4 Error State Test

Open: `http://localhost:3000/u/INVALID123`

Expected:
- Supabase returns error or `ok: false`
- "Invite unavailable" error card shows
- Platform-appropriate store button appears

### 3.5 Checklist

- [ ] `/u/DC98FW` renders without errors
- [ ] `/u/INVALID123` shows error state
- [ ] Network tab shows Supabase call
- [ ] `noindex` confirmed in page source
- [ ] Not in sitemap
- [ ] Mobile layout correct at 390px

---

## Step 4 — Build 13 Marketing Pages

> Build all 13 marketing/legal pages. For each page: read the reference image first, then build.

---

### Page 1 — Homepage `/`

**Reference image:** `image_web/homeWeb.png`

**Page goal:** Convert organic and direct visitors to app downloads. Establish trust.

**SEO:**
- Title: `RoyaleCoach AI — AI-Powered Clash Royale Coach & Deck Analyzer`
- Meta description: `Analyze your Clash Royale deck, discover weaknesses, build better decks, and climb the ladder with AI coaching. Free on iOS & Android.`
- H1: `Your Personal AI Coach for Clash Royale`
- Schema: `MobileApplication` JSON-LD

**Sections in order:**
```
1. Hero
   - Eyebrow chip: "AI-Powered · Free to Download"
   - H1: "Your Personal AI Coach for Clash Royale"
   - Subheadline: "Stop guessing why you lose. Enter your player tag and get
     instant AI coaching — deck weaknesses, upgrade priorities, meta insights,
     and battle analysis. Built for players who want to actually improve."
   - App Store + Google Play buttons (stacked mobile, side-by-side desktop)
   - Micro-copy: "Free to download · No password required · Pro plan available"
   - Trust badges row: Secure, iOS & Android, Privacy first
   - Right side: phone mockup with Deck Analysis screenshot

2. Social Proof Bar (light blue bg)
   - "Trusted by thousands of Clash Royale players"
   - "Free on iOS and Android"
   - "AI-powered coaching — not generic tips"
   - "Your account is always safe"

3. Problem → Solution
   - H2: "Tired of Losing Without Knowing Why?"
   - 3 problem cards: "Hidden deck weaknesses", "Copied decks don't fit",
     "Same mistakes every game"
   - Divider arrow
   - H3: "RoyaleCoach AI Gives You the Feedback You Were Missing"

4. Feature Highlights (6 cards)
   - Deck Analysis, Deck Builder, Meta Decks, Top Battles, Player Profile, AI Chat (Pro)

5. How It Works (3 steps)
   - Enter player tag → AI reads profile → Get coaching report

6. Screenshots Carousel
   - 5 real app screenshots with captions
   - H2: "See What Real AI Coaching Looks Like"

7. Free vs Pro Teaser
   - H2: "Start Free. Go Pro When You're Ready."
   - Mini comparison table
   - CTAs: "Download Free" + "See Pro Plans →"

8. FAQ Preview (5 questions, accordion)
   - "See all FAQ →" link

9. Final Download CTA Section (blue bg)
   - H2: "Stop Losing. Start Improving."
   - Store buttons (white on blue)
```

**Internal links:** `/features/*`, `/pricing`, `/faq`, `/download`

**CTA buttons:**
- Hero: App Store + Google Play (gold primary)
- Free vs Pro: "Download Free" (gold) + "See Pro Plans" (ghost)
- Final: App Store + Google Play (white on blue bg)

**Mobile layout:** Hero stacks vertically (headline → CTA → mockup below). Feature cards single column. Screenshots horizontal swipe carousel.

**Safety notes:** No "official Supercell" language. No "guaranteed wins". Footer disclaimer required.

---

### Page 2 — Download `/download`

**Reference image:** `image_web/downloadWeb.png`

**Page goal:** Maximum download conversion. Single focus.

**SEO:**
- Title: `Download RoyaleCoach AI — Free on iOS & Android`
- Meta description: `Download RoyaleCoach AI free on iPhone and Android. Get AI deck coaching, meta decks, battle analysis, and deck builder. No password required.`
- H1: `Download RoyaleCoach AI — Free on iOS & Android`
- Schema: `MobileApplication` JSON-LD

**Sections in order:**
```
1. Hero Download Block (centered)
   - App icon (88px) + app name
   - H1 above
   - App Store + Google Play badges (large, prominent)
   - "iOS 15+ · Android 8.0+ · iPad Supported · Free Download"
   - Two phone mockups side by side

2. Why Download (4 cards)
   - Safe & Secure, Instant AI Coaching, Free to Start, Always Current

3. Device Compatibility
   - Apple: iOS 15.0+, iPhone 8+, iPad
   - Android: Android 8.0+, all major brands

4. App Screenshots (3 screenshots)

5. Privacy / No Password Callout (blue border box)
   - "No Password. Ever." with lock icon

6. Mini FAQ (5 questions)

7. Final Download CTA (blue bg)
```

**Internal links:** `/pricing`, `/faq`

**CTA:** Download buttons only. No distractions. No other nav links in hero area.

**Mobile:** Buttons full width, 52px minimum height. Screenshots single swipeable carousel.

---

### Page 3 — Pricing `/pricing`

**Reference image:** `image_web/pricing.png`

**Page goal:** Convert to Pro or Clan Pro. Build trust in subscription model.

**SEO:**
- Title: `RoyaleCoach AI Pricing — Free, Pro & Clan Pro Plans`
- Meta description: `Start free or upgrade to Pro ($2.99/mo) or Clan Pro ($4.99/mo) for advanced AI coaching, full battle history, unlimited deck builds, and clan features.`
- H1: `Simple, Transparent Pricing`
- Schema: `Product` + `Offer` JSON-LD for each plan

**Sections in order:**
```
1. Headline Block
   - H1: "Simple, Transparent Pricing"
   - Subheadline about App Store/Google Play managed subscriptions

2. Three Pricing Cards
   FREE ($0)
     - Basic deck analysis, player profile, top 10 meta decks,
       1 deck build/day, last 5 battles
     - CTA: "Download Free"

   PRO — $2.99/month ("Most Popular" badge in gold)
     - Everything in Free + deep AI reports, full battle history,
       unlimited deck builds, full meta rankings, AI coaching chat,
       priority support
     - CTA: "Get Pro — $2.99/mo"

   CLAN PRO — $4.99/month
     - Everything in Pro + clan performance reports, clan battle analysis,
       clan deck recommendations, war strategy coaching
     - CTA: "Get Clan Pro — $4.99/mo"

3. Full Feature Comparison Table (scrollable on mobile)

4. Subscription Info Box
   - "Managed by Apple/Google — we never store payment details"
   - Cancel anytime note
   - Auto-renewal explanation

5. Pricing FAQ (6 questions)

6. Final CTA (blue bg)
   - "Start Free — Upgrade When You're Ready"
```

**Internal links:** `/download`, `/features/*`, `/faq`

**Mobile:** Cards full-width stacked. Table horizontal scroll. "Most Popular" badge clearly visible.

---

### Page 4 — FAQ `/faq`

**Reference image:** `image_web/feq.png`

**Page goal:** Answer all user questions. Build trust. Rank for question-based queries.

**SEO:**
- Title: `FAQ — RoyaleCoach AI | Clash Royale AI Coaching App`
- Meta description: `Answers to the most common questions about RoyaleCoach AI — how it works, privacy, subscriptions, Supercell affiliation, deck analysis, and more.`
- H1: `Frequently Asked Questions`
- Schema: `FAQPage` JSON-LD — include ALL questions

**Questions (minimum 22 — organized by category):**

```
Category: About the App
  Q1: What is RoyaleCoach AI?
  Q2: Is RoyaleCoach AI an official Supercell or Clash Royale app?
      A: No. RoyaleCoach AI is a fully independent companion app. It is not affiliated
         with, endorsed by, sponsored by, or officially connected to Supercell Oy.
  Q3: Who made RoyaleCoach AI?
  Q4: What platforms is it on?

Category: Privacy & Security
  Q5: Do I need my Clash Royale password?
      A: Never. We only need your player tag (e.g. #ABC123).
  Q6: Is my data safe?
  Q7: What data do you collect?
  Q8: How do I delete my account?

Category: Deck Analysis
  Q9: How does AI deck analysis work?
  Q10: How accurate is the AI?
  Q11: Can I analyze any player's deck?

Category: Deck Builder
  Q12: How does the Deck Builder work?
  Q13: Are suggestions based on the current meta?

Category: Meta Decks
  Q14: How often is meta data updated?
  Q15: Where does meta data come from?

Category: Pro Plan & Subscriptions
  Q16: What does Pro include?
  Q17: What does Clan Pro include?
  Q18: How much does Pro cost?
  Q19: How do I cancel?
      A: Cancel through App Store (Settings → Apple ID → Subscriptions)
         or Google Play (Profile → Payments → Subscriptions).
  Q20: Is there a free trial?
  Q21: Does RoyaleCoach AI store payment details?
      A: No. Billing is handled entirely by Apple or Google.

Category: Affiliate / Partner
  Q22: Do you have a creator program?
      A: Yes. Visit /affiliate for details.
```

**Internal links:** `/delete-account`, `/privacy-policy`, `/affiliate`, `/download`, `/pricing`

**Schema:** Full `FAQPage` JSON-LD — this is critical for Google FAQ rich results.

**Mobile:** Large accordion tap targets (min 48px). Category headers as visual separators.

---

### Page 5 — Deck Analysis `/features/deck-analysis`

**Reference image:** `image_web/deckweb.png`

**Page goal:** Rank for "clash royale deck analyzer". Convert players frustrated with losing.

**SEO:**
- Title: `AI Clash Royale Deck Analyzer — Find Weaknesses & Upgrade Priorities | RoyaleCoach AI`
- Meta description: `Analyze your Clash Royale deck with AI. Discover weaknesses, synergy gaps, upgrade priorities, and battle mistakes. Free on iOS & Android.`
- H1: `AI Deck Analysis for Clash Royale — Know Exactly What to Fix`
- Schema: `WebPage` JSON-LD + BreadcrumbList

**Sections:**
```
1. Hero (eyebrow: "Feature: Deck Analysis" + H1 + sub + CTA + phone mockup)
2. What Gets Analyzed (6-point list with icons)
   - Deck Weaknesses, Synergy Analysis, Upgrade Priorities,
     Battle Mistake Patterns, Card Level Gaps, Meta Positioning
3. How It Works (3 steps)
4. Screenshot Deep Dive (2 screenshots)
5. Why This Matters (body text about plateauing)
6. Download CTA (blue bg)
7. Related Features (→ Deck Builder, → Meta Decks, → Top Battles)
```

**Keywords:** `clash royale deck analyzer`, `analyze my clash royale deck`, `clash royale deck weaknesses`, `clash royale upgrade priority`

**Internal links:** `/features/deck-builder`, `/features/meta-decks`, `/features/top-battles`, `/download`, `/pricing`

**Breadcrumb:** Home → Features → Deck Analysis

---

### Page 6 — Deck Builder `/features/deck-builder`

**Reference image:** `image_web/deckweb.png`

**Page goal:** Rank for "clash royale deck builder". Convert players wanting a deck for their cards.

**SEO:**
- Title: `AI Clash Royale Deck Builder — Build the Best Deck for Your Cards | RoyaleCoach AI`
- Meta description: `Build the perfect Clash Royale deck for your card collection. AI creates decks matched to your playstyle, cards, and the current meta. Free on iOS & Android.`
- H1: `Build the Best Deck for Your Cards — Not Someone Else's`
- Schema: `WebPage` JSON-LD + BreadcrumbList

**Sections:**
```
1. Hero
2. Problem: Why Copy-Pasted Decks Don't Work (3 cards)
3. How the Builder Works (3 steps)
4. What the Builder Considers (6-point checklist)
5. Screenshot
6. Free vs Pro note (1 deck/day free, unlimited Pro)
7. Download CTA
8. Related Features
```

**Keywords:** `clash royale deck builder`, `build deck for my cards`, `clash royale ai deck builder`

---

### Page 7 — Meta Decks `/features/meta-decks`

**Reference image:** `image_web/metaWeb.png`

**Page goal:** Rank for "clash royale meta decks". High-volume informational keyword.

**SEO:**
- Title: `Clash Royale Meta Decks — Best Decks Right Now | RoyaleCoach AI`
- Meta description: `Browse the top Clash Royale meta decks updated every season. See deck rankings, card trends, and win rates in the RoyaleCoach AI app.`
- H1: `Always Know What's Winning in Clash Royale`
- Schema: `WebPage` JSON-LD + BreadcrumbList

**Sections:**
```
1. Hero
2. What Meta Decks Shows (4 cards: Top Decks, Card Trends, Deck Rankings, Season Insights)
3. Why the Meta Matters (body text)
4. Screenshots (2)
5. Free vs Pro note (Top 10 free, full rankings Pro)
6. Download CTA
7. Related Features
```

**Keywords:** `clash royale meta decks`, `best clash royale decks right now`, `clash royale deck rankings`

---

### Page 8 — Top Battles `/features/top-battles`

**Reference image:** `image_web/metaWeb.png` (use as layout reference — no dedicated image)

**Page goal:** Rank for "clash royale top battles". Target improvement-motivated players.

**SEO:**
- Title: `Top Clash Royale Battles — Learn from the Best Players | RoyaleCoach AI`
- Meta description: `Study top Clash Royale battles and learn what separates good players from great ones. Battle analysis and key insights in the RoyaleCoach AI app.`
- H1: `Study the Best Battles. Play Like the Best Players.`
- Schema: `WebPage` JSON-LD + BreadcrumbList

**Sections:**
```
1. Hero
2. What Top Battles Shows (5-point list with icons)
3. Why Studying Battles Works (body text on film study analogy)
4. Screenshots (2)
5. Download CTA
6. Related Features
```

**Keywords:** `clash royale top battles`, `learn from clash royale battles`, `clash royale battle analysis`

---

### Page 9 — Player Profile `/features/player-profile`

**Reference image:** `image_web/profilweb.png`

**Page goal:** Rank for "clash royale player stats". Emphasize security (no password needed).

**SEO:**
- Title: `Clash Royale Player Profile & Stats Tracker | RoyaleCoach AI`
- Meta description: `Track your full Clash Royale player profile: trophies, current deck, clan, card levels, and battle history. No password required. Free on iOS & Android.`
- H1: `Your Complete Clash Royale Player Profile — All in One Place`
- Schema: `WebPage` JSON-LD + BreadcrumbList

**Sections:**
```
1. Hero
2. What Your Profile Shows (6 points: Trophies, Current Deck, Clan, Cards, Battles, Level)
3. Security Callout (blue border box: "No Password. Ever.")
4. How to Find Your Player Tag (numbered steps)
5. Screenshot
6. Download CTA (with "Just your player tag. No password.")
7. Related Features
```

**Keywords:** `clash royale player profile`, `clash royale player stats tracker`

**Security emphasis:** Repeat "no password required" in hero, security box, CTA, and in alt text context.

---

### Page 10 — Privacy Policy `/privacy-policy`

**Reference image:** `image_web/privacy-policy.png`

**Page goal:** Legal compliance. Required for App Store, Google Play, AdMob, Tremendous.

**SEO:**
- Title: `Privacy Policy — RoyaleCoach AI`
- Meta description: `Read RoyaleCoach AI's Privacy Policy. Learn what data we collect, how we use it, and your rights.`
- H1: `Privacy Policy`
- Schema: None required. Add `noindex` only if you prefer legal pages unindexed (optional).

**Sections:**
```
Last Updated: [date]

1. Information We Collect
   a) Player Tag
   b) Public Player Data (via official Clash Royale API)
   c) Account Data (email + hashed password)
   d) Subscription Data (status only, via Apple/Google)
   e) Analytics Data (anonymized, opt-out available)
   f) Advertising Data (AdMob — anonymized device identifiers)
   g) Support Communication (email correspondence)

2. How We Use Your Information
   - Provide features, authenticate sessions, confirm subscriptions,
     improve app, respond to support, comply with law
   - "We do not sell, rent, or share your personal data with third parties
     for their marketing purposes."

3. Data Storage and Security
   - HTTPS for all transmission
   - Encrypted credentials
   - Data retained only as long as necessary

4. Third-Party Services
   - Clash Royale API (Supercell)
   - Apple App Store / Google Play (subscriptions)
   - Google AdMob (free version ads)
   - Analytics provider (if applicable)

5. Children's Privacy
   - Not directed to children under 13
   - Contact to remove if applicable

6. Your Rights
   - Access, correction, deletion, consent withdrawal
   - EU/UK: right to lodge complaint with supervisory authority

7. Data Deletion
   - See /delete-account for instructions
   - Processed within 30 days

8. Changes to This Policy

9. Contact
   - support@royalecoachai.com
```

**Component:** Use `<LegalPageLayout>` wrapper.

**Internal links:** `/delete-account`, `/terms-of-service`

---

### Page 11 — Terms of Service `/terms-of-service`

**Reference image:** `image_web/terms-of-service.png`

**Page goal:** Legal protection. Required by App Store and Google Play.

**SEO:**
- Title: `Terms of Service — RoyaleCoach AI`
- Meta description: `Read the RoyaleCoach AI Terms of Service covering app usage, subscriptions, AI coaching disclaimer, and limitation of liability.`
- H1: `Terms of Service`

**Sections:**
```
Last Updated: [date]

1. Acceptance of Terms
2. Independent App — No Supercell Affiliation
   MUST include: "RoyaleCoach AI is an independent companion application.
   It is not affiliated with, endorsed by, sponsored by, or officially connected
   to Supercell Oy in any way. Clash Royale® is a registered trademark of Supercell Oy."
3. App Usage (personal use only, player tag requirement, age 13+)
4. Subscriptions (App Store/Google Play managed, auto-renewal, no direct refunds)
5. AI-Generated Coaching — No Guaranteed Results
   MUST include: "We do not guarantee any specific improvement in win rate,
   trophies, or ranking. Coaching suggestions are for educational and entertainment
   purposes. Results vary based on player skill, effort, and in-game conditions."
6. Intellectual Property
7. Limitation of Liability
8. Termination
9. Changes to Terms
10. Contact
```

**Component:** Use `<LegalPageLayout>` wrapper.

---

### Page 12 — Delete Account `/delete-account`

**Reference image:** `image_web/delete-account.png`

**Page goal:** App Store compliance (iOS 17+ enforcement). GDPR/CCPA requirement.

**SEO:**
- Title: `Delete Account — RoyaleCoach AI`
- Meta description: `Learn how to delete your RoyaleCoach AI account and data. Step-by-step instructions and support contact.`
- H1: `Delete Your RoyaleCoach AI Account`

**Sections:**
```
1. Intro
2. Delete from App (numbered step-by-step)
   1. Open RoyaleCoach AI
   2. Tap Profile / Settings icon
   3. Scroll to "Account Settings"
   4. Tap "Delete Account"
   5. Confirm deletion
3. Delete via Email
   - support@royalecoachai.com
   - Include email and/or player tag
   - Processed within 30 days
4. What Gets Deleted (checklist: account, saved tags, history, preferences)
5. Data Retained (legal/compliance: transaction records, fraud prevention)
6. Subscription Cancellation Reminder (warning box)
   - Cancel via App Store / Google Play BEFORE deleting account
   - Step-by-step for iPhone and Android
7. Support Contact
```

**Component:** Use `<LegalPageLayout>` wrapper.

**Internal links:** `/privacy-policy`, `/terms-of-service`

---

### Page 13 — Affiliate `/affiliate`

**Reference image:** No dedicated image. Use `image_web/homeWeb.png` as layout reference.

**Page goal:** Attract content creators, streamers, Discord managers to partner program.

**SEO:**
- Title: `Affiliate & Creator Program — RoyaleCoach AI`
- Meta description: `Partner with RoyaleCoach AI and earn rewards by promoting the AI coaching app for Clash Royale. Apply to our affiliate and creator program.`
- H1: `Partner With RoyaleCoach AI — Grow Together`
- Schema: `WebPage` JSON-LD

**Sections:**
```
1. Hero
   - Eyebrow: "Affiliate & Creator Program"
   - H1 + subheadline
   - CTA: "Apply to Partner Program" (mailto or form)

2. Who This Is For (4 cards)
   - Content Creators (YouTube, TikTok)
   - Streamers (Twitch, YouTube Live)
   - Community Managers (Discord servers)
   - Bloggers & Writers

3. How It Works (3 steps)
   - Apply → Get your link → Earn rewards

4. Benefits (placeholder section — update when program defined)
   - Earnings per conversion (TBD)
   - Free Pro account for active partners
   - Dashboard & tracking (TBD)
   - Partner support

5. Affiliate Rules
   - Clear disclosure: must say "independent app, not affiliated with Supercell"
   - No "guaranteed wins", "hacks", "cheats" claims
   - No spam
   - FTC/ASA disclosure compliance
   - Violations = immediate removal

6. Affiliate FAQ (6 questions)

7. Apply CTA (blue bg)
   - Email CTA: support@royalecoachai.com (subject: "Affiliate Application")

8. Legal disclaimer for affiliate partners
```

**Internal links:** `/pricing`, `/faq`, `/download`

**Safety note:** `/affiliate` has ZERO connection to `/u/[code]`. Do not link them.

---

## 14. SEO Implementation Plan

### 14.1 sitemap.ts

```ts
// src/app/sitemap.ts
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.royalecoachai.com';
  const now = new Date();

  return [
    { url: base + '/',                          lastModified: now, priority: 1.0, changeFrequency: 'weekly' },
    { url: base + '/download',                  lastModified: now, priority: 0.9, changeFrequency: 'monthly' },
    { url: base + '/pricing',                   lastModified: now, priority: 0.9, changeFrequency: 'monthly' },
    { url: base + '/faq',                       lastModified: now, priority: 0.8, changeFrequency: 'monthly' },
    { url: base + '/features/deck-analysis',    lastModified: now, priority: 0.8, changeFrequency: 'monthly' },
    { url: base + '/features/deck-builder',     lastModified: now, priority: 0.8, changeFrequency: 'monthly' },
    { url: base + '/features/meta-decks',       lastModified: now, priority: 0.8, changeFrequency: 'weekly' },
    { url: base + '/features/top-battles',      lastModified: now, priority: 0.7, changeFrequency: 'weekly' },
    { url: base + '/features/player-profile',   lastModified: now, priority: 0.7, changeFrequency: 'monthly' },
    { url: base + '/affiliate',                 lastModified: now, priority: 0.6, changeFrequency: 'monthly' },
    { url: base + '/privacy-policy',            lastModified: now, priority: 0.3, changeFrequency: 'yearly' },
    { url: base + '/terms-of-service',          lastModified: now, priority: 0.3, changeFrequency: 'yearly' },
    { url: base + '/delete-account',            lastModified: now, priority: 0.3, changeFrequency: 'yearly' },
    // ⚠️ /u/[code] is intentionally EXCLUDED — noindex functional route
  ];
}
```

### 14.2 robots.ts

```ts
// src/app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/u/', '/api/'],
      },
    ],
    sitemap: 'https://www.royalecoachai.com/sitemap.xml',
  };
}
```

> `/u/` is disallowed in robots.txt as an additional protection layer.

### 14.3 Canonical URLs

Every `generateMetadata()` must include:
```ts
alternates: {
  canonical: 'https://www.royalecoachai.com/[page-slug]',
},
```

### 14.4 Open Graph Images

Create 1200×630 PNG files in `public/og/`:
- `default.png` — used for homepage and fallback
- `download.png`
- `pricing.png`
- `faq.png`
- `deck-analysis.png`
- `deck-builder.png`
- `meta-decks.png`
- `player-profile.png`

Design: Dark blue background, app logo center-left, page title large, tagline below, App Store + Play Store badges bottom-right.

### 14.5 Internal Linking Rules

- Every page must have a path to `/download` within 1–2 clicks
- Every feature page links to related features
- Every blog-style content paragraph links to the most relevant feature page
- Navbar and footer provide site-wide linking
- No orphan pages (every page reachable from at least 2 other pages)

### 14.6 Image SEO

- All images use `next/image` with explicit `width` and `height`
- All images have descriptive `alt` text with keyword context
- App screenshots: WebP format, max 150KB each
- OG images: PNG, exactly 1200×630
- Hero image: `priority={true}` for LCP optimization

### 14.7 Performance Targets

| Metric | Target |
|---|---|
| LCP | < 2.5s on mobile |
| CLS | < 0.1 |
| FID/INP | < 200ms |
| First Byte | < 600ms |
| Lighthouse Mobile | 90+ |

Use:
- `next/font` with `display: 'swap'`
- `priority` prop on above-fold images
- No autoplay video
- No heavy third-party scripts in `<head>` (defer analytics)
- Lazy load all below-fold images

---

## 15. Schema Markup Plan

### 15.1 Organization (global — in root layout)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RoyaleCoach AI",
  "url": "https://www.royalecoachai.com",
  "logo": "https://www.royalecoachai.com/brand/logo-mark.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "support@royalecoachai.com",
    "contactType": "customer support"
  }
}
```

### 15.2 MobileApplication (Homepage + Download)

```json
{
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "RoyaleCoach AI",
  "applicationCategory": "GameApplication",
  "operatingSystem": "iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://www.royalecoachai.com",
  "downloadUrl": "https://apps.apple.com/app/id6762710841"
}
```

### 15.3 Product + Offer (Pricing)

One `Product` per plan:
```json
{
  "@type": "Product",
  "name": "RoyaleCoach AI Pro",
  "description": "Advanced AI coaching for Clash Royale",
  "offers": {
    "@type": "Offer",
    "price": "2.99",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "billingDuration": "P1M"
    }
  }
}
```

### 15.4 FAQPage (FAQ page — critical for rich results)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is RoyaleCoach AI an official Supercell app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. RoyaleCoach AI is an independent companion app and is not affiliated with, endorsed by, or connected to Supercell Oy in any way."
      }
    }
    // ... all 22+ questions
  ]
}
```

> **Validate all JSON-LD at:** https://validator.schema.org before launch.

### 15.5 BreadcrumbList (Feature pages)

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.royalecoachai.com/" },
    { "@type": "ListItem", "position": 2, "name": "Features", "item": "https://www.royalecoachai.com/features/" },
    { "@type": "ListItem", "position": 3, "name": "Deck Analysis", "item": "https://www.royalecoachai.com/features/deck-analysis" }
  ]
}
```

### 15.6 WebPage (Feature pages + Affiliate)

```json
{
  "@type": "WebPage",
  "name": "AI Clash Royale Deck Analyzer",
  "url": "https://www.royalecoachai.com/features/deck-analysis",
  "description": "...",
  "isPartOf": { "@type": "WebSite", "url": "https://www.royalecoachai.com" }
}
```

### 15.7 /u/[code] — No Schema

The referral page must not have any schema markup. It is noindex and excluded from sitemaps.

---

## 16. Legal Safety Rules

### Words That Must NEVER Appear on Any Marketing Page

```
❌ "official Clash Royale app"
❌ "official Supercell app"
❌ "Supercell approved"
❌ "Supercell partner"
❌ "guaranteed wins"
❌ "win every game"
❌ "win guaranteed"
❌ "rank up guaranteed"
❌ "hack"
❌ "cheat"
❌ "exploit"
❌ "mod"
❌ "bypass"
```

### Required Disclaimer (Footer on Every Page)

```
RoyaleCoach AI is an independent companion app and is not affiliated with,
endorsed by, sponsored by, or officially connected to Supercell Oy in any way.
Clash Royale® is a registered trademark of Supercell Oy. All game content,
names, and trademarks are property of their respective owners.
```

### AI Coaching Disclaimer (Pricing + Terms)

```
RoyaleCoach AI provides AI-generated coaching suggestions for educational
and entertainment purposes. We do not guarantee specific in-game results,
win rates, or ranking improvements. Individual results will vary based on
player skill, effort, and in-game conditions.
```

### Data Access Statement (FAQ + Privacy)

```
We access only the public player data associated with the player tag you provide.
We use the official Clash Royale API. We do not access your Clash Royale
account login, device contacts, location, or payment information.
```

---

## Step 5 — Deploy to Vercel Preview

### 5.1 Pre-Deploy Checklist

- [ ] `npm run lint` passes with zero errors
- [ ] `npm run build` passes with zero errors
- [ ] `/u/DC98FW` works locally (full flow verified in Step 3)
- [ ] All 13 marketing pages render without errors
- [ ] No TypeScript errors
- [ ] All `generateMetadata()` exports are present on every page
- [ ] `sitemap.ts` built and accessible at `http://localhost:3000/sitemap.xml`
- [ ] `robots.ts` built and accessible at `http://localhost:3000/robots.txt`
- [ ] No broken internal links

### 5.2 Create Preview Deployment

```bash
cd "C:\Users\TOSHIBA\Desktop\app_coaching\royalecoach-website"

# Install Vercel CLI if not installed
npm i -g vercel

# Deploy to preview (NOT production)
vercel

# When prompted:
# - Link to existing project? → Yes (or create new named "royalecoach-website-new")
# - Do NOT select the existing "royalecoach-clean" project
# - Deploy to: Preview (default)
```

### 5.3 Note the Preview URL

Vercel will output a preview URL like:
```
https://royalecoach-website-[random].vercel.app
```

Save this URL. Do not configure the production domain yet.

### 5.4 Environment

No environment variables are needed for the marketing pages. The `/u/[code]` page uses hardcoded public constants (the Supabase anon key is intentionally public — this is by Supabase design for client-side usage).

---

## Step 6 — Test /u/DC98FW on Preview

### 6.1 Full Test Suite on Preview URL

Replace `[PREVIEW]` with your actual Vercel preview URL.

```
https://[PREVIEW].vercel.app/u/DC98FW
```

| Test | URL / Method | Expected |
|---|---|---|
| Invite page loads | `[PREVIEW]/u/DC98FW` | Spinner → "Invite prepared" |
| noindex in source | View Page Source | `<meta name="robots" content="noindex` |
| Not in sitemap | `[PREVIEW]/sitemap.xml` | `/u/DC98FW` not listed |
| Robots.txt disallows | `[PREVIEW]/robots.txt` | `Disallow: /u/` |
| Supabase call | DevTools Network tab | `squad-click-token-create` → `{ok:true,token:"..."}` |
| Clipboard write | DevTools Console (after token) | No clipboard error |
| Deep link on tap | Click "Open RoyaleCoach AI" on mobile | App opens or fallback shows |
| App Store fallback | On iPhone, 1800ms after tap | App Store button appears |
| Play Store fallback | On Android, 1800ms after tap | Play Store button appears |
| Invalid code | `[PREVIEW]/u/BADCODE` | "Invite unavailable" card |
| All 13 pages load | Manually visit each | No 404, no JS errors |
| Disclaimer present | Check footer | Full Supercell disclaimer visible |
| Homepage loads | `[PREVIEW]/` | Full hero, all sections |

### 6.2 Real Device Test (Required Before Production)

Test on a real iPhone and a real Android phone (not simulator):

1. Send yourself the preview URL: `https://[PREVIEW]/u/DC98FW`
2. Open on iPhone (Safari)
3. Verify: spinner → green check → "Open RoyaleCoach AI" button
4. Tap the button
5. If app installed: app opens
6. If not installed: App Store opens after 1800ms
7. Repeat on Android Chrome

---

## Step 7 — Production Domain Switch

> ⛔ **Only proceed if ALL tests in Step 6 pass on real devices.**

### 7.1 Current Production Setup

The current website serving `www.royalecoachai.com` is:
```
Project: royalecoach-clean (Vercel)
Config:  royalecoach_clean/vercel.json → outputDirectory: "public"
```

### 7.2 Pre-Switch Final Checklist

- [ ] `/u/DC98FW` works on Vercel preview (full flow, real iPhone, real Android)
- [ ] Token created by Supabase confirmed (Network tab)
- [ ] Clipboard written confirmed (app reads it on open)
- [ ] Deep link `royalecoach://invite` opens app
- [ ] App Store fallback works on iOS
- [ ] Play Store fallback works on Android
- [ ] `noindex` confirmed on `/u/` pages
- [ ] `/u/DC98FW` NOT in sitemap
- [ ] `Disallow: /u/` in robots.txt
- [ ] `npm run build` passes cleanly
- [ ] All 13 pages render correctly on preview
- [ ] Footer disclaimer present on all pages
- [ ] No Supercell affiliation claims
- [ ] No "guaranteed wins" language
- [ ] `app-ads.txt` served at `/app-ads.txt`
- [ ] `privacy-policy` page live
- [ ] `terms-of-service` page live
- [ ] `delete-account` page live

### 7.3 Domain Switch Steps

1. In Vercel dashboard, open the **new website project** (not `royalecoach-clean`)
2. Go to: Settings → Domains
3. Add domain: `www.royalecoachai.com`
4. Vercel will show DNS records to update
5. In your DNS provider, update the DNS records as shown
6. Wait for DNS propagation (typically 5–30 minutes)
7. Verify: `https://www.royalecoachai.com/u/DC98FW` — full flow works
8. Verify: `https://www.royalecoachai.com/` — homepage loads correctly

### 7.4 Post-Switch Verification

```
https://www.royalecoachai.com/               → Homepage
https://www.royalecoachai.com/u/DC98FW       → Invite page (full flow)
https://www.royalecoachai.com/sitemap.xml    → Sitemap (no /u/ entries)
https://www.royalecoachai.com/robots.txt     → Disallow: /u/
https://www.royalecoachai.com/app-ads.txt    → AdMob file served
```

---

## Test Commands Reference

```bash
cd "C:\Users\TOSHIBA\Desktop\app_coaching\royalecoach-website"

# Lint
npm run lint

# Type check
npx tsc --noEmit

# Build
npm run build

# Start dev server
npm run dev

# Test URLs (dev server must be running)
# http://localhost:3000                         → Homepage
# http://localhost:3000/download                → Download
# http://localhost:3000/pricing                 → Pricing
# http://localhost:3000/faq                     → FAQ
# http://localhost:3000/features/deck-analysis  → Deck Analysis
# http://localhost:3000/features/deck-builder   → Deck Builder
# http://localhost:3000/features/meta-decks     → Meta Decks
# http://localhost:3000/features/top-battles    → Top Battles
# http://localhost:3000/features/player-profile → Player Profile
# http://localhost:3000/privacy-policy          → Privacy Policy
# http://localhost:3000/terms-of-service        → Terms of Service
# http://localhost:3000/delete-account          → Delete Account
# http://localhost:3000/affiliate               → Affiliate
# http://localhost:3000/u/DC98FW               ← REFERRAL TEST — must work
# http://localhost:3000/sitemap.xml             ← must NOT contain /u/
# http://localhost:3000/robots.txt              ← must disallow /u/
```

---

## 17. Final Pre-Production Checklist

### Referral System

- [ ] `/u/DC98FW` works locally
- [ ] `/u/DC98FW` works on Vercel preview
- [ ] `/u/DC98FW` works on real iPhone (Safari)
- [ ] `/u/DC98FW` works on real Android (Chrome)
- [ ] Token created by Supabase `squad-click-token-create`
- [ ] Clipboard written in format `royalecoach_invite={token}`
- [ ] Deep link `royalecoach://invite` attempted on button tap
- [ ] App Store fallback works after 1800ms (iOS)
- [ ] Play Store fallback works after 1800ms (Android)
- [ ] Invalid code shows error state
- [ ] `/u/[code]` has `noindex,nofollow` meta tag
- [ ] `/u/[code]` excluded from `sitemap.ts`
- [ ] `Disallow: /u/` in `robots.ts`
- [ ] `/affiliate` has ZERO connection to `/u/` logic

### SEO

- [ ] `sitemap.ts` includes all 13 marketing/legal pages
- [ ] `sitemap.ts` excludes `/u/` entirely
- [ ] `robots.ts` valid — `Disallow: /u/`
- [ ] All 13 pages have unique `<title>` tags
- [ ] All 13 pages have unique `<meta name="description">` tags
- [ ] All 13 pages have `<link rel="canonical">` pointing to correct URL
- [ ] All 13 pages have Open Graph tags (`og:title`, `og:description`, `og:image`)
- [ ] All 13 pages have Twitter card tags
- [ ] One H1 per page (no more, no less)
- [ ] No duplicate H1s across pages

### Schema / JSON-LD

- [ ] Homepage: `MobileApplication` JSON-LD valid
- [ ] Download: `MobileApplication` JSON-LD valid
- [ ] Pricing: `Product` + `Offer` JSON-LD for 3 plans valid
- [ ] FAQ: `FAQPage` JSON-LD with all questions valid
- [ ] Feature pages: `WebPage` + `BreadcrumbList` JSON-LD valid
- [ ] Affiliate: `WebPage` JSON-LD valid
- [ ] All JSON-LD validated at https://validator.schema.org
- [ ] `/u/[code]` has NO schema markup

### Legal & Safety

- [ ] Footer disclaimer on ALL 13 marketing pages
- [ ] Disclaimer on `/u/[code]` page (already in original HTML — keep it)
- [ ] No "official Supercell" claims anywhere
- [ ] No "official Clash Royale" claims anywhere
- [ ] No "guaranteed wins" language anywhere
- [ ] No "hack", "cheat", "exploit", "mod" language anywhere
- [ ] Privacy Policy live and complete
- [ ] Terms of Service live and complete
- [ ] Delete Account page live and complete
- [ ] AI coaching disclaimer in Pricing and Terms
- [ ] "No password required" language on Download and Player Profile

### Technical

- [ ] `npm run lint` passes (zero errors)
- [ ] `npm run build` passes (zero errors)
- [ ] `npx tsc --noEmit` passes (zero TypeScript errors)
- [ ] All internal links resolve (no 404s)
- [ ] All images have `alt` text
- [ ] All images use `next/image` with `width` and `height`
- [ ] Hero images use `priority={true}`
- [ ] `app-ads.txt` served at `/app-ads.txt` (copy from mobile app's `public/`)
- [ ] Brand assets in `public/brand/` (logo-mark.png, wordmark)
- [ ] Font file in `public/fonts/Clash_Regular.otf`
- [ ] No console errors in browser DevTools

### Accessibility

- [ ] All buttons have accessible text (not just icons)
- [ ] All accordions use `aria-expanded`
- [ ] All images have `alt` attributes
- [ ] Color contrast meets WCAG AA (4.5:1 for body text, 3:1 for large text)
- [ ] Keyboard navigation works on all interactive elements

### Mobile

- [ ] Homepage renders correctly at 390px width
- [ ] All buttons minimum 48px tap target height
- [ ] No horizontal scroll on any page
- [ ] Screenshots carousel swipeable on mobile
- [ ] Sticky bottom download bar works on mobile scroll
- [ ] Pricing table scrolls horizontally on mobile
- [ ] Navigation drawer opens and closes correctly

### Production Domain

- [ ] Production domain NOT switched until all above checks pass
- [ ] DNS records ready to update in DNS provider
- [ ] Vercel new project has domain configured in Settings → Domains
- [ ] Post-switch test plan ready (URLs to verify immediately after switch)

---

## Appendix: SEO Skill Usage Guide

When building each page, invoke the relevant Claude Code skills:

| Task | Skill to Use |
|---|---|
| Per-page SEO content and copy | `/seo-content` |
| JSON-LD schema for a page | `/seo-schema` or `/schema-markup` |
| Sitemap and robots planning | `/seo-sitemap` |
| Technical SEO checklist | `/seo-technical` |
| Landing page section structure | `/landing-page-generator` |
| App Store / Play Store trust copy | `/app-store-optimization` |
| Overall keyword strategy | `/seo` |
| Individual page SEO brief | `/seo-page` |
| Post-build audit | `/seo-audit` |

---

*End of BUILD_WEBSITE.md*
*Last updated: 2026-07-06*
*Project: RoyaleCoach AI Marketing Website*
*Location: C:\Users\TOSHIBA\Desktop\app_coaching\royalecoach-website\BUILD_WEBSITE.md*
