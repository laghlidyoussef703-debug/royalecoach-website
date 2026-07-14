'use client';

// Exact port of royalecoach_clean/public/u/index.html
// DO NOT change any constants, the Supabase endpoint, the clipboard format,
// the deep link scheme, or the store URLs.
// This route is hardcoded in the mobile app at:
//   src/features/squad/attributionLink.ts (INVITE_BASE_URL)
//   src/features/squad/screens/MySquadScreen.tsx
//   src/features/squad/screens/SquadHubScreen.tsx

import { use, useEffect, useRef, useState } from 'react';
import {
  AppStoreBadge,
  GooglePlayBadge,
} from '@/components/ui/AppStoreButtons';

/* ── Constants ─────────────────────────────────────────────── DO NOT CHANGE ── */
const SUPABASE_FUNCTIONS_URL = 'https://login.royalecoachai.com/functions/v1';
// Public anon key — safe by Supabase design; not a secret.
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxdGxwdnJweWF1cnloYmdxcnJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNjUxODUsImV4cCI6MjA5MTk0MTE4NX0.zmFHicOavvEXNJlzxP9YQ_KqbEi4cKeo-Cm6CMoOrXs';
const APPLE_APP_STORE_URL = 'https://apps.apple.com/app/id6762710841';
const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.royalecoach.app';
// Deep link scheme matches app.config.ts scheme: 'royalecoach'
const APP_DEEP_LINK = 'royalecoach://invite';
// Diagnostics gate — the raw clipboard value is only ever rendered when this is
// explicitly enabled in a non-production build. Never true in production.
const REFERRAL_DEBUG =
  process.env.NODE_ENV !== 'production' &&
  process.env.NEXT_PUBLIC_REFERRAL_DEBUG === 'true';
/* ─────────────────────────────────────────────────────────────────────────── */

type Platform = 'ios' | 'android' | 'unknown';
type Status = 'loading' | 'ready' | 'desktop' | 'error';

function detectPlatform(): Platform {
  const ua = navigator.userAgent || '';
  if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
  if (/Android/i.test(ua)) return 'android';
  return 'unknown';
}

function StoreLinks({ platform }: { platform: Platform }) {
  return (
    <>
      {(platform === 'ios' || platform === 'unknown') && (
        <AppStoreBadge href={APPLE_APP_STORE_URL} />
      )}
      {(platform === 'android' || platform === 'unknown') && (
        <GooglePlayBadge href={PLAY_STORE_URL} />
      )}
    </>
  );
}

// ── CSS scoped to .invite-root ───────────────────────────────────────────────
// Ported directly from public/u/index.html <style> block.
// All rules are prefixed with .invite-root to avoid leaking into other pages.
const INVITE_CSS = `
@font-face {
  font-family: 'Clash';
  src: url('/fonts/Clash_Regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

.invite-root {
  color-scheme: light;
  --bg: #FBFAF6;
  --card: #FFFFFF;
  --line: #DDE7F5;
  --text: #18233B;
  --text-strong: #12141B;
  --muted: #526179;
  --blue: #1E73E8;
  --blue-deep: #0759CC;
  --blue-dark: #063E9C;
  --blue-soft: rgba(30, 115, 232, 0.08);
  --blue-border: rgba(30, 115, 232, 0.20);
  --gold: #FFC928;
  --gold-mid: #F5B712;
  --gold-deep: #C98500;
  --green: #22C55E;
  --green-soft: rgba(34, 197, 94, 0.10);

  min-height: 100vh;
  background:
    radial-gradient(circle at top center, rgba(26, 108, 246, 0.08), transparent 45%),
    linear-gradient(180deg, #FFFFFF 0%, #F3F8FF 100%);
  color: var(--text);
  display: flex;
  justify-content: center;
  padding: 20px 12px 24px;
  overflow-x: hidden;
  font-family: 'Clash', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
}

.invite-root *, .invite-root *::before, .invite-root *::after {
  box-sizing: border-box;
}

.invite-root html,
.invite-root button,
.invite-root input,
.invite-root .page,
.invite-root .card,
.invite-root .hero-title,
.invite-root .brand,
.invite-root .cta {
  font-family: 'Clash', system-ui, -apple-system, BlinkMacSystemFont, sans-serif !important;
}

.invite-root .page {
  width: min(430px, calc(100vw - 24px));
  overflow: hidden;
}

/* ── Header row ── */
.invite-root .header-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2px 8px 20px;
}
.invite-root .brand {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}
.invite-root .brand-mark {
  width: 46px;
  height: 46px;
  border-radius: 13px;
  background: linear-gradient(180deg, #FFFFFF 0%, #F0F6FF 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1.5px solid #C9D9F5;
  box-shadow: 0 7px 16px rgba(17, 42, 91, 0.14);
}
.invite-root .brand-mark img {
  width: 40px;
  height: 40px;
  display: block;
  object-fit: contain;
}
.invite-root .brand-name {
  font-size: clamp(22px, 6.7vw, 30px);
  font-weight: 900;
  letter-spacing: 0;
  color: var(--text-strong);
  text-shadow: 0 2px 0 rgba(0,0,0,0.06);
  white-space: nowrap;
}
.invite-root .brand-ai {
  color: var(--blue);
}

/* ── Cards ── */
.invite-root .card {
  background: var(--card);
  border: 1.5px solid #D7E4F5;
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(22, 49, 94, 0.07);
}

/* ── Hero card ── */
.invite-root .hero-card {
  padding: 22px 16px 18px;
  margin-bottom: 12px;
  position: relative;
  overflow: hidden;
}
.invite-root .hero-card::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 82% 24%, rgba(30,115,232,0.10), transparent 28%),
    linear-gradient(180deg, rgba(255,255,255,0.86), rgba(255,255,255,0));
}
.invite-root .hero-top {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 17px;
  position: relative;
  z-index: 1;
}
.invite-root .hero-copy { flex: 1; min-width: 0; }
.invite-root .mini-label {
  display: inline-flex;
  align-items: center;
  background: transparent;
  border: 0;
  color: var(--blue);
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 0;
  margin-bottom: 12px;
  text-shadow: 0 1px 0 rgba(30,115,232,0.08);
}
.invite-root .hero-title {
  font-weight: 900;
  font-size: clamp(36px, 11vw, 47px);
  letter-spacing: 0;
  line-height: 0.98;
  margin: 0 0 15px;
  color: var(--text-strong);
  text-transform: uppercase;
  text-shadow: 0 3px 0 rgba(0,0,0,0.08);
}
.invite-root .hero-copy p {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 17px;
  font-weight: 700;
  color: var(--muted);
  line-height: 1.34;
  margin: 0;
}
.invite-root .hero-art-wrap {
  flex-shrink: 0;
  width: 136px;
  height: 136px;
  margin-top: 42px;
  margin-right: -2px;
  position: relative;
}
.invite-root .hero-illustration { width: 100%; height: 100%; overflow: visible; }

/* ── Status row ── */
.invite-root .status-row {
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(180deg, #F7FBFF 0%, #EEF7FF 100%);
  border: 1.5px solid #CFE4FF;
  border-radius: 14px;
  padding: 13px 14px;
  position: relative;
  z-index: 1;
}
.invite-root .status-icon {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #FFFFFF;
  border: 3px solid #19B939;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.invite-root .status-icon.loading { background: #FFFFFF; border-color: var(--blue); }
.invite-root .status-icon svg { width: 23px; height: 23px; }
.invite-root .status-copy { text-align: left; min-width: 0; }
.invite-root .status-title {
  font-size: 16px;
  font-weight: 900;
  color: #0E1B3D;
  margin: 0 0 4px;
}
.invite-root .status-sub {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13.5px;
  color: #263955;
  margin: 0;
  line-height: 1.35;
}
.invite-root .spinner {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2.5px solid var(--blue-border);
  border-top-color: var(--blue);
  animation: invite-spin 0.8s linear infinite;
}
@keyframes invite-spin { to { transform: rotate(360deg); } }

/* ── CTA buttons ── */
.invite-root button {
  appearance: none;
  border: none;
  font-weight: 900;
  font-family: 'Clash', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  width: 100%;
  cursor: pointer;
}
.invite-root button.primary {
  min-height: 62px;
  background: linear-gradient(180deg, #FFE779 0%, var(--gold) 42%, var(--gold-mid) 72%, var(--gold-deep) 100%);
  color: #2D2100;
  font-size: 18px;
  border-radius: 18px;
  border: 2px solid #A86C00;
  box-shadow: 0 8px 0 #A86C00, 0 16px 24px rgba(201, 133, 0, 0.22);
  padding: 0 18px;
  text-shadow: 0 1px 0 rgba(255,255,255,0.48);
}
.invite-root button.primary:active {
  transform: translateY(4px) scale(0.99);
  box-shadow: 0 4px 0 #A86C00, 0 10px 16px rgba(201, 133, 0, 0.18);
  opacity: 0.94;
}
.invite-root .cta-wrap { margin-top: 12px; }
.invite-root .install-note {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 12.5px;
  color: var(--muted);
  text-align: center;
  margin: 10px 4px 0;
  line-height: 1.4;
}
.invite-root .manual-fallback {
  margin-top: 12px;
  padding: 14px;
  border-radius: 14px;
  background: linear-gradient(180deg, #FFFDF3 0%, #FFF7DE 100%);
  border: 1.5px solid #F0D98A;
}
.invite-root .manual-note {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13.5px;
  color: #4A3A00;
  text-align: center;
  margin: 0 0 10px;
  line-height: 1.4;
}
.invite-root .manual-code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12.5px;
  color: #12141B;
  background: #FFFFFF;
  border: 1.5px solid #E2D4A6;
  border-radius: 10px;
  padding: 10px 12px;
  margin-bottom: 10px;
  word-break: break-all;
  white-space: pre-line;
  text-align: left;
  user-select: all;
}
.invite-root .fallback-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 12px;
}
.invite-root .store-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 12px;
}

/* ── Error card ── */
.invite-root .error-card {
  padding: 18px;
  text-align: center;
  margin: 0 0 12px;
}
.invite-root .error-card h2 {
  font-size: 18px;
  font-weight: 900;
  margin: 0 0 6px;
  color: var(--text-strong);
}
.invite-root .error-card p {
  font-size: 13px;
  color: var(--muted);
  margin: 0 0 14px;
  line-height: 1.45;
}

/* ── Feature row ── */
.invite-root .feature-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  gap: 0;
  margin-top: 16px;
  padding: 14px 8px;
  border-radius: 18px;
  background: linear-gradient(180deg, #F8FCFF 0%, #EFF7FF 100%);
  border: 1.5px solid #D4E7FF;
  box-shadow: 0 8px 20px rgba(22, 49, 94, 0.05);
}
.invite-root .feature-card {
  padding: 4px 8px;
  text-align: center;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  background: transparent;
  min-width: 0;
}
.invite-root .feature-card + .feature-card { border-left: 1.5px solid #C9DBF2; }
.invite-root .feature-icon {
  width: 44px;
  height: 44px;
  margin: 0 auto 9px;
  border-radius: 50%;
  background: linear-gradient(180deg, #1D7AF2 0%, #0759CC 100%);
  border: 2px solid #0646A0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(7, 89, 204, 0.22);
}
.invite-root .feature-icon svg { width: 26px; height: 26px; }
.invite-root .feature-title {
  font-size: 12px;
  font-weight: 900;
  color: var(--text-strong);
  margin: 0 0 5px;
  line-height: 1.12;
}
.invite-root .feature-sub {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 11px;
  color: var(--muted);
  line-height: 1.35;
  margin: 0;
}

/* ── Privacy footer ── */
.invite-root .privacy-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 22px;
}
.invite-root .privacy-title {
  font-size: 15px;
  font-weight: 900;
  color: var(--text-strong);
}
.invite-root .privacy-sub {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 13px;
  color: var(--muted);
  text-align: center;
  margin: 7px 0 0;
  line-height: 1.35;
}
.invite-root .legal-text {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 11px;
  color: var(--muted);
  text-align: center;
  margin: 12px 0 0;
  opacity: 0.85;
}

/* ── Responsive ── */
@media (max-width: 520px) {
  .invite-root { padding-left: 10px; padding-right: 10px; }
  .invite-root .page { width: min(390px, calc(100vw - 20px)); }
  .invite-root .header-row { padding-left: 4px; padding-right: 4px; }
  .invite-root .brand { gap: 8px; }
  .invite-root .brand-mark { width: 40px; height: 40px; border-radius: 12px; }
  .invite-root .brand-mark img { width: 35px; height: 35px; }
  .invite-root .brand-name { font-size: 21px; }
  .invite-root .hero-card { padding: 19px 14px 16px; }
  .invite-root .hero-top { gap: 6px; }
  .invite-root .hero-title { font-size: 36px; }
  .invite-root .hero-copy p { font-size: 16px; }
  .invite-root .hero-art-wrap { width: 104px; height: 104px; margin-top: 62px; margin-right: -8px; }
  .invite-root .feature-row { padding-left: 5px; padding-right: 5px; }
  .invite-root .feature-card { padding-left: 5px; padding-right: 5px; }
  .invite-root .feature-icon { width: 38px; height: 38px; }
  .invite-root .feature-icon svg { width: 23px; height: 23px; }
  .invite-root .feature-title { font-size: 10.5px; }
  .invite-root .feature-sub { font-size: 9.5px; }
}
`;

// ── Component ────────────────────────────────────────────────────────────────

export default function InvitePage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  // params is a Promise in Next.js 16 — use() unwraps it synchronously
  const { code } = use(params);

  const [status, setStatus] = useState<Status>('loading');
  const [fallbackVisible, setFallbackVisible] = useState(false);
  // True from clipboard-write success until either the app takes over (page
  // hidden) or the fallback timer fires — drives the "Opening…" status text.
  const [openingApp, setOpeningApp] = useState(false);
  const [platform, setPlatform] = useState<Platform>('unknown');
  // The click token, kept in state so it can be written to the clipboard on the
  // user-gesture tap. The token is NEVER rendered in production UI — it travels
  // only inside the clipboard value `royalecoach_invite=<token>`.
  const [token, setToken] = useState<string | null>(null);
  // Shown when the clipboard write fails — a friendly retry, no token exposed.
  const [captureFailed, setCaptureFailed] = useState(false);

  // Flipped true once the OS hands off to the installed app (pagehide / tab
  // hidden). Guards the fallback timer so store buttons never appear after a
  // successful open.
  const didLeavePageRef = useRef(false);
  // Handle for the pending "show store fallback" timer, so we can cancel it on
  // unmount / re-tap.
  const fallbackTimerRef = useRef<number | null>(null);

  const tokenCreated = token !== null;
  const clipboardValue = token ? `royalecoach_invite=${token}` : '';

  useEffect(() => {
    async function run() {
      const plt = detectPlatform();
      setPlatform(plt);

      if (!code) {
        setStatus('error');
        return;
      }

      // Call Supabase edge function to validate invite code and get a short-lived token
      let token: string | null = null;
      try {
        const res = await fetch(
          `${SUPABASE_FUNCTIONS_URL}/squad-click-token-create`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              apikey: SUPABASE_ANON_KEY,
              Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            },
            body: JSON.stringify({
              public_invite_code: code,
              platform_hint: plt,
            }),
          },
        );
        const data = await res.json();
        if (data?.ok && data.token) {
          token = data.token;
        }
      } catch {
        // Network / parse failure — treat as invalid invite
      }

      if (!token) {
        setStatus('error');
        return;
      }

      console.log('[ReferralLanding] token_created', {
        hasToken: true,
        tokenPrefix: token.slice(0, 9),
      });
      // Keep the token in state so it can be written to the clipboard from the
      // user-gesture tap below. It is never rendered — it travels only inside
      // the clipboard value `royalecoach_invite=<token>`.
      setToken(token);
      setStatus(plt === 'unknown' ? 'desktop' : 'ready');
    }

    run().catch(() => setStatus('error'));
  }, [code]);

  // Detect when the OS hands off to the installed app. A successful custom-
  // scheme open backgrounds the page (pagehide) or hides the tab
  // (visibilitychange → document.hidden). Either signal flips didLeavePageRef —
  // so the fallback timer won't reveal store buttons — and hides any that were
  // already shown. If the app is NOT installed, neither event fires and the
  // timer in handleOpenApp surfaces the store fallback instead.
  useEffect(() => {
    const markLeft = () => {
      didLeavePageRef.current = true;
      setFallbackVisible(false);
    };

    const onVisibility = () => {
      if (document.hidden) markLeft();
    };

    window.addEventListener('pagehide', markLeft);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.removeEventListener('pagehide', markLeft);
      document.removeEventListener('visibilitychange', onVisibility);
      if (fallbackTimerRef.current) window.clearTimeout(fallbackTimerRef.current);
    };
  }, []);

  // Opens the custom scheme via direct top-level navigation. On iOS Safari the
  // hidden-iframe trick does NOT launch an installed app, so the page never
  // backgrounds and the store fallback wrongly appears. Assigning
  // window.location.href reliably hands off to the installed app (pagehide /
  // visibilitychange then fire, cancelling the fallback). If the app is absent,
  // Safari may show its "cannot open the page" alert; after the user dismisses
  // it the page is still visible, so the timeout surfaces the store fallback.
  function openCustomSchemeSafely() {
    window.location.href = APP_DEEP_LINK;
  }

  // Writes `royalecoach_invite=<token>` to the clipboard from inside the user
  // gesture (iOS requires a gesture for clipboard writes), then attempts to open
  // royalecoach://invite via a hidden iframe. If the app opens, the page is
  // backgrounded and no store buttons are shown; if it doesn't, a 1600ms timer
  // reveals the store fallback. The app reads the clipboard on boot/foreground
  // (iOS "Allow Paste" is expected). The token is never shown to the user.
  async function handleOpenApp() {
    if (!token || !token.startsWith('rc_click_')) {
      console.log('[ReferralLanding] clipboard_write_failed', {
        reason: 'missing_or_invalid_token',
      });
      setCaptureFailed(true);
      return;
    }

    try {
      setCaptureFailed(false);
      setFallbackVisible(false);
      setOpeningApp(false);
      didLeavePageRef.current = false;
      if (fallbackTimerRef.current) {
        window.clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
      }

      console.log('[ReferralLanding] clipboard_write_attempt', {
        hasToken: true,
        tokenPrefix: 'rc_click_',
      });

      if (!navigator.clipboard?.writeText) throw new Error('clipboard_api_unavailable');
      // Write EXACTLY `royalecoach_invite=<token>` and await success before
      // attempting the open — opening too early can navigate away mid-write and
      // leave the clipboard empty.
      await navigator.clipboard.writeText(clipboardValue);

      console.log('[ReferralLanding] clipboard_write_success', {
        hasToken: true,
        tokenPrefix: 'rc_click_',
      });

      setOpeningApp(true);

      console.log('[ReferralLanding] open_app_attempt');

      // Arm the fallback timer BEFORE navigating — the top-level location
      // assignment below can synchronously hand off to the app. If the app took
      // over, the page is hidden/backgrounded and didLeavePageRef is set, so we
      // never surface store buttons on a successful open. Only when the page is
      // still here and visible do we conclude the app isn't installed and reveal
      // the fallback.
      fallbackTimerRef.current = window.setTimeout(() => {
        if (!didLeavePageRef.current && !document.hidden) {
          setFallbackVisible(true);
          setOpeningApp(false);
          console.log('[ReferralLanding] fallback_visible', { platform });
        }
      }, 1800);

      openCustomSchemeSafely();
    } catch (error) {
      console.log('[ReferralLanding] clipboard_write_failed', {
        message: error instanceof Error ? error.message : String(error),
      });
      setCaptureFailed(true);
      setFallbackVisible(true);
      setOpeningApp(false);
    }
  }

  const readySubtitle = "We'll connect your invite automatically when you open the app.";

  return (
    <>
      <style>{INVITE_CSS}</style>
      <div className="invite-root">
        <main className="page">

          {/* ── Header ── */}
          <div className="header-row">
            <div className="brand">
              <div className="brand-mark">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/logo-mark.png" alt="" aria-hidden="true" />
              </div>
              <span className="brand-name">
                RoyaleCoach <span className="brand-ai">AI</span>
              </span>
            </div>
          </div>

          {/* ── Hero card ── */}
          <div className="card hero-card">
            <div className="hero-top">
              <div className="hero-copy">
                <span className="mini-label">Squad Invite</span>
                <h1 className="hero-title">
                  Your invite
                  <br />
                  is ready!
                </h1>
                <p>
                  AI coaching from your deck,
                  <br />
                  battles, and clan data.
                </p>
              </div>
              <div className="hero-art-wrap">
                {/* SVG illustration — exact copy from original */}
                <svg
                  className="hero-illustration"
                  viewBox="0 0 150 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="78" cy="126" rx="48" ry="11" fill="#0A2A66" opacity="0.13" />
                  <rect x="40" y="29" width="74" height="98" rx="13" transform="rotate(-10 40 29)" fill="#17284F" opacity="0.28" />
                  <rect x="32" y="21" width="74" height="98" rx="13" transform="rotate(-6 32 21)" fill="#253C78" stroke="#314B8A" strokeWidth="2" />
                  <rect x="42" y="19" width="74" height="98" rx="13" transform="rotate(8 42 19)" fill="url(#rewardBack)" stroke="#AFCBFF" strokeWidth="2.2" />
                  <rect x="49" y="30" width="60" height="22" rx="7" transform="rotate(8 49 30)" fill="#111A33" opacity="0.12" />
                  <path d="M57 42l43 6" stroke="#DCE9FF" strokeWidth="4" strokeLinecap="round" />
                  <path d="M57 57l35 5" stroke="#DCE9FF" strokeWidth="4" strokeLinecap="round" />
                  <rect x="30" y="55" width="84" height="58" rx="13" transform="rotate(-3 30 55)" fill="url(#rewardFront)" stroke="#0A4DB8" strokeWidth="2.5" />
                  <path d="M32 77l82-4" stroke="#5EA2FF" strokeWidth="14" opacity="0.42" />
                  <rect x="45" y="71" width="37" height="27" rx="6" transform="rotate(-3 45 71)" fill="#FFC928" stroke="#A86C00" strokeWidth="2" />
                  <path d="M63 70l2 29" stroke="#A86C00" strokeWidth="2" />
                  <path d="M45 84l37-2" stroke="#A86C00" strokeWidth="2" />
                  <path d="M62.7 70c-7.2-11.7-18.5-3.2-9.7 5.8" stroke="#FFC928" strokeWidth="4" strokeLinecap="round" />
                  <path d="M65.1 69.8c5.8-12.4 18.1-5.3 10.4 4.6" stroke="#FFC928" strokeWidth="4" strokeLinecap="round" />
                  <path d="M90 89l15-.8" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
                  <path d="M90 101l25-1.4" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
                  <circle cx="111" cy="42" r="16" fill="#FFC928" stroke="#A86C00" strokeWidth="2.2" />
                  <path d="M111 34l3 6.1 6.7 1-4.9 4.7 1.2 6.7-6-3.2-6 3.2 1.2-6.7-4.9-4.7 6.7-1 3-6.1z" fill="#FFFFFF" />
                  <path d="M22 54l3.2 5.8L31 63l-5.8 3.2L22 72l-3.2-5.8L13 63l5.8-3.2L22 54z" fill="#FFC928" />
                  <path d="M126 79l2.8 5.2 5.2 2.8-5.2 2.8-2.8 5.2-2.8-5.2-5.2-2.8 5.2-2.8 2.8-5.2z" fill="#FFC928" />
                  <defs>
                    <linearGradient id="rewardBack" x1="73" y1="18" x2="73" y2="118" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFFFFF" />
                      <stop offset="1" stopColor="#EEF5FF" />
                    </linearGradient>
                    <linearGradient id="rewardFront" x1="72" y1="55" x2="72" y2="114" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2F8BFF" />
                      <stop offset="1" stopColor="#0759CC" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* ── Status row ── */}
            {status === 'loading' && (
              <div className="status-row">
                <div className="status-icon loading">
                  <div className="spinner" />
                </div>
                <div className="status-copy">
                  <p className="status-title">Preparing your invite…</p>
                  <p className="status-sub">One moment.</p>
                </div>
              </div>
            )}

            {status === 'ready' && (
              <div className="status-row">
                <div className="status-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12.5l4.2 4.2L19 6.5" stroke="#22C55E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="status-copy">
                  <p className="status-title">Invite prepared</p>
                  <p className="status-sub">{readySubtitle}</p>
                </div>
              </div>
            )}

            {status === 'desktop' && (
              <div className="status-row">
                <div className="status-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12.5l4.2 4.2L19 6.5" stroke="#22C55E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="status-copy">
                  <p className="status-title">Invite prepared</p>
                  <p className="status-sub">Open RoyaleCoach AI on your phone to connect your invite.</p>
                </div>
              </div>
            )}
          </div>

          {/* ── CTAs ── */}
          {(status === 'ready' || status === 'desktop') && (
            <div className="cta-wrap">
              <button className="primary" onClick={handleOpenApp}>
                Open RoyaleCoach AI
              </button>

              {/* Clipboard write succeeded — invite staged, attempting to open
                  the app. Never shows the raw token. */}
              {openingApp && !captureFailed && (
                <p className="install-note">
                  Invite prepared. Opening RoyaleCoach AI...
                </p>
              )}

              {/* Could not stage the invite on the clipboard — friendly retry,
                  no token. */}
              {captureFailed && (
                <p className="install-note">
                  Could not prepare invite. Tap Open RoyaleCoach AI again.
                </p>
              )}

              {/* Dev-only diagnostics — never rendered in production, and never
                  showing the raw token. Status flags only. */}
              {REFERRAL_DEBUG && (
                <div className="manual-fallback">
                  <p className="manual-note">DEBUG (dev only)</p>
                  <div className="manual-code">
                    tokenCreated: {String(tokenCreated)}{'\n'}
                    openingApp: {String(openingApp)}{'\n'}
                    platform: {platform}
                  </div>
                </div>
              )}

              {fallbackVisible && (
                <>
                  <p className="install-note">
                    If RoyaleCoach AI is not installed, download it first. Your invite is already prepared.
                  </p>
                  <div className="fallback-wrap">
                    <StoreLinks platform={platform} />
                  </div>
                  <p className="install-note">
                    After installing, open RoyaleCoach AI and tap Allow Paste to connect your invite reward.
                  </p>
                </>
              )}
            </div>
          )}

          {/* ── Error state ── */}
          {status === 'error' && (
            <div className="card error-card">
              <h2>Invite unavailable</h2>
              <p>This invite link may be expired or invalid.</p>
              <div className="store-row">
                <StoreLinks platform={platform} />
              </div>
            </div>
          )}

          {/* ── Feature row ── */}
          <div className="feature-row">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="5" width="12" height="15" rx="2" fill="#FFFFFF" stroke="#082F7A" strokeWidth="1.4" />
                  <path d="M9 4h6v3H9z" fill="#FFC928" stroke="#082F7A" strokeWidth="1.2" />
                  <path d="M9 13l2 2 4-4.5" stroke="#1E73E8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="feature-title">Invite Connected</p>
              <p className="feature-sub">Saved and linked in the app.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3l7 2.8v5.4c0 4.8-3.2 7.8-7 8.8-3.8-1-7-4-7-8.8V5.8L12 3z" fill="#FFC928" stroke="#082F7A" strokeWidth="1.4" />
                  <path d="M12 6l4.2 1.7v3.2c0 2.9-1.8 4.7-4.2 5.5-2.4-.8-4.2-2.6-4.2-5.5V7.7L12 6z" fill="#FFFFFF" />
                  <path d="M9.6 11.6l1.5 1.6 3.3-3.8" stroke="#1E73E8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="feature-title">New Users Only</p>
              <p className="feature-sub">Rewards are for new players.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5h8v3c0 3.4-1.7 5.5-4 6.2C9.7 13.5 8 11.4 8 8V5z" fill="#FFC928" stroke="#082F7A" strokeWidth="1.4" />
                  <path d="M8 7H5.5c0 3 1.3 4.7 3.7 5.1M16 7h2.5c0 3-1.3 4.7-3.7 5.1" stroke="#FFC928" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M12 14v3" stroke="#082F7A" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M8.5 19h7" stroke="#082F7A" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </div>
              <p className="feature-title">First Analysis</p>
              <p className="feature-sub">Activates rewards.</p>
            </div>
          </div>

          {/* ── Privacy footer ── */}
          <div className="privacy-row">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 10V8a4 4 0 118 0v2" stroke="#1E73E8" strokeWidth="2" strokeLinecap="round" />
              <rect x="5.5" y="10" width="13" height="10" rx="2" fill="#1E73E8" />
              <path d="M12 14v2" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="privacy-title">Secure. Private. Safe.</span>
          </div>
          <p className="privacy-sub">Your invite is only used to connect rewards.</p>
          <p className="legal-text">RoyaleCoach AI is not affiliated with Supercell.</p>

        </main>
      </div>
    </>
  );
}
