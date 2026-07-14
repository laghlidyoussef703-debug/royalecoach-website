'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FEATURES = [
  { label: 'Deck Analysis', href: '/features/deck-analysis' },
  { label: 'Deck Builder', href: '/features/deck-builder' },
  { label: 'Meta Decks', href: '/features/meta-decks' },
  { label: 'Top Battles', href: '/features/top-battles' },
  { label: 'Player Profile', href: '/features/player-profile' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu on route change / resize
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full px-3 pt-2">
      <div
        className={`mx-auto max-w-[1180px] rounded-[18px] border border-[#E6ECF3] bg-white/96 px-4 shadow-[0_12px_30px_rgba(11,23,48,0.07)] backdrop-blur transition-shadow duration-200 sm:px-6 ${
          scrolled ? 'shadow-[0_16px_34px_rgba(11,23,48,0.12)]' : ''
        }`}
      >
        <div className="flex h-[66px] items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex flex-shrink-0 items-center gap-2" onClick={() => setMobileOpen(false)}>
            <Image
              src="/brand/logo-mark.png"
              alt="RoyaleCoach AI app logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-lg"
              loading="lazy"
            />
            <span className="whitespace-nowrap font-['Clash'] text-[22px] text-[#0D1B2A] sm:text-[23px]">
              RoyaleCoach <span className="text-[#1A6CF6]">AI</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-5 md:flex">
            {/* Features dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setFeaturesOpen(true)}
              onMouseLeave={() => setFeaturesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 rounded-lg px-2 py-2 text-sm font-semibold text-[#0D1B2A] transition-colors hover:text-[#1565FF]"
                aria-expanded={featuresOpen}
                aria-haspopup="true"
              >
                Features
                <span className={`mt-[-2px] h-2 w-2 rotate-45 border-b-2 border-r-2 border-current transition-transform duration-200 ${featuresOpen ? 'rotate-[225deg]' : ''}`} aria-hidden="true" />
              </button>
              {featuresOpen && (
                <div className="absolute left-1/2 top-full z-50 mt-1 w-60 -translate-x-1/2 rounded-[18px] border border-[#E5EAF2] bg-white py-2 shadow-[0_18px_38px_rgba(11,23,48,0.14)]">
                  {FEATURES.map((f) => (
                    <Link
                      key={f.href}
                      href={f.href}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-[#18233B] transition-colors hover:bg-[#F0F6FF] hover:text-[#1565FF]"
                    >
                      {f.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/guides" className="rounded-lg px-2 py-2 text-sm font-semibold text-[#0D1B2A] transition-colors hover:text-[#1565FF]">
              Guides
            </Link>
            <Link href="/pricing" className="rounded-lg px-2 py-2 text-sm font-semibold text-[#0D1B2A] transition-colors hover:text-[#1565FF]">
              Pricing
            </Link>
            <Link href="/faq" className="rounded-lg px-2 py-2 text-sm font-semibold text-[#0D1B2A] transition-colors hover:text-[#1565FF]">
              FAQ
            </Link>
            <Link href="/affiliate" className="rounded-lg px-2 py-2 text-sm font-semibold text-[#0D1B2A] transition-colors hover:text-[#1565FF]">
              Affiliate
            </Link>
          </div>

          {/* Desktop CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/download"
              className="hidden items-center rounded-[10px] border border-[#A86C00] bg-gradient-to-b from-[#FFE277] via-[#FFD23F] to-[#F5A800] px-6 py-3 font-['Clash'] text-sm text-[#1C1600] shadow-[0_3px_0_0_#A86C00,0_10px_18px_-7px_rgba(184,120,0,0.5)] transition-all duration-150 hover:brightness-[1.04] active:translate-y-[2px] active:shadow-[0_1px_0_0_#A86C00] md:inline-flex"
            >
              Download RoyaleCoach AI
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-10 p-2 rounded-lg hover:bg-[#F8F9FB] transition-colors"
            >
              <span className={`block w-5 h-0.5 bg-[#0D0F1A] rounded transition-transform duration-200 origin-center ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-[#0D0F1A] rounded transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-[#0D0F1A] rounded transition-transform duration-200 origin-center ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div id="mobile-menu" className="mx-auto mt-2 max-w-[1180px] rounded-[18px] border border-[#E5EAF2] bg-white p-5 shadow-[0_16px_34px_rgba(11,23,48,0.10)] md:hidden">
          <div className="space-y-4">
            <div>
              <p className="px-2 pb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#6B7280]">Features</p>
              <div className="space-y-1">
                {FEATURES.map((f) => (
                  <Link
                    key={f.href}
                    href={f.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex min-h-12 items-center rounded-[15px] px-4 py-3 text-sm font-medium text-[#18233B] transition-colors hover:bg-[#EEF6FF] hover:text-[#1A6CF6] active:bg-[#E5F0FF]"
                  >
                    {f.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-[#E5EAF2]" />

            <div className="space-y-1">
              {[
                { label: 'Guides', href: '/guides' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Affiliate', href: '/affiliate' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-12 items-center rounded-[15px] px-4 py-3 text-sm font-medium text-[#18233B] transition-colors hover:bg-[#EEF6FF] hover:text-[#1A6CF6] active:bg-[#E5F0FF]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-1">
              <Link
                href="/download"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full font-['Clash'] bg-gradient-to-b from-[#FFDF70] via-[#FFC928] to-[#F5A800] text-[#2D2100] text-base px-5 py-4 rounded-[18px] border border-[#FFEBA8]/70 shadow-[0_4px_0_0_#A86C00,0_10px_18px_-6px_rgba(184,120,0,0.4)] active:translate-y-[3px] active:shadow-[0_1px_0_0_#A86C00] transition-all duration-150"
              >
                Download RoyaleCoach AI
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
