import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AppStoreButtons } from '@/components/ui/AppStoreButtons';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema, breadcrumbSchema } from '@/lib/jsonld';
import { buildMeta } from '@/lib/metadata';

export const metadata: Metadata = buildMeta({
  title: 'Clash Royale Stats Tracker & Player Profile',
  description:
    'Free Clash Royale stats tracker and profile viewer — check trophies, current deck, clan info, card collection, and battle history from just a player tag. No password required.',
  path: '/features/player-profile',
});

const PROFILE_FEATURES = [
  {
    title: 'Trophies',
    desc: 'Track current trophies, personal bests, and progress over time.',
  },
  {
    title: 'Current Deck',
    desc: 'See the active deck connected to your public player profile.',
  },
  {
    title: 'Clan Info',
    desc: 'View clan name, role, and profile context in one place.',
  },
  {
    title: 'Card Collection',
    desc: 'Review cards, levels, and collection progress from your profile.',
  },
  {
    title: 'Recent Battles',
    desc: 'Understand recent match activity and battle history patterns.',
  },
  {
    title: 'Player Level / XP',
    desc: 'Follow player level, XP, and long-term account progress.',
  },
];

const TAG_STEPS = [
  {
    n: '1',
    title: 'Open Clash Royale',
    desc: 'Launch Clash Royale on your device.',
  },
  {
    n: '2',
    title: 'Go to Profile',
    desc: 'Open your player profile from the main screen.',
  },
  {
    n: '3',
    title: 'Copy your player tag',
    desc: 'Find the tag under your name and copy it.',
  },
  {
    n: '4',
    title: 'Paste it in RoyaleCoach AI',
    desc: 'Use the tag to load public profile data in seconds.',
  },
];

const RELATED_FEATURES = [
  {
    title: 'Deck Analysis',
    desc: 'Analyze your deck and get AI advice.',
    href: '/features/deck-analysis',
  },
  {
    title: 'Deck Builder',
    desc: 'Build the best deck for your cards.',
    href: '/features/deck-builder',
  },
  {
    title: 'Meta Decks',
    desc: 'See the top meta decks right now.',
    href: '/features/meta-decks',
  },
  {
    title: 'Top Battles',
    desc: 'Watch top players and learn.',
    href: '/features/top-battles',
  },
];

function ArrowButton() {
  return (
    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#F1F6FF] transition group-hover:bg-[#1565FF]" aria-hidden="true">
      <span className="h-2.5 w-2.5 rotate-45 border-r-2 border-t-2 border-[#1565FF] transition group-hover:border-white" />
    </span>
  );
}

export default function PlayerProfilePage() {
  return (
    <>
      <JsonLd data={webPageSchema('Clash Royale Player Profile & Stats Tracker', 'Track your Clash Royale player profile, trophies, current deck, clan info, card collection, recent battles, and progress using only your player tag.', '/features/player-profile')} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Features', path: '/features/player-profile' }, { name: 'Player Profile', path: '/features/player-profile' }])} />

      <main className="relative overflow-hidden bg-[#F9FBFF] text-[#0D1B2A]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(21,101,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(21,101,255,0.045)_1px,transparent_1px)] bg-[size:58px_58px]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-[#DDEEFF]/80 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-32 h-80 w-80 rounded-full bg-[#EAF4FF] blur-3xl" />

        <section className="relative px-4 pb-8 pt-10 sm:px-6 lg:px-6 lg:pt-12">
          <div className="mx-auto max-w-[1180px]">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-xs text-[#71809C]">
              <Link href="/" className="hover:text-[#1565FF]">Home</Link>
              <span>/</span>
              <Link href="/features/player-profile" className="hover:text-[#1565FF]">Features</Link>
              <span>/</span>
              <span className="font-medium text-[#0D1B2A]">Player Profile</span>
            </nav>

            <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="relative z-10">
                <div className="mb-5 inline-flex rounded-full bg-[#EAF2FF] px-4 py-2 font-['Clash'] text-[13px] uppercase text-[#0759CC] shadow-[0_8px_22px_rgba(26,108,246,0.08)]">
                  Feature: Player Profile
                </div>
                <h1 className="max-w-[640px] font-['Clash'] text-[40px] leading-[1.04] text-[#0D1B2A] sm:text-[54px]">
                  Your Complete Clash Royale Player Profile — <span className="text-[#1565FF]">All in One Place</span>
                </h1>
                <p className="mt-5 max-w-[560px] text-[17px] leading-8 text-[#253753] sm:text-[18px]">
                  Track your trophies, current deck, clan info, card collection, battle history, and player progress using only your player tag. No password required.
                </p>
                <div className="mt-6">
                  <AppStoreButtons layout="horizontal" size="md" />
                </div>
              </div>

              <div className="relative z-10 flex justify-center lg:justify-end">
                <Image
                  src="/assets/player-profile/hero-profile.png"
                  alt="RoyaleCoach AI player profile with trophies, battle statistics, and card levels"
                  width={568}
                  height={640}
                  sizes="(max-width: 1023px) calc(100vw - 32px), 560px"
                  preload
                  className="h-auto w-full max-w-[560px] object-contain drop-shadow-[0_28px_32px_rgba(11,23,48,0.12)]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1080px]">
            <h2 className="mb-7 text-center font-['Clash'] text-[30px] leading-tight text-[#0D1B2A] md:text-[36px]">What Your Profile Shows</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PROFILE_FEATURES.map((item) => (
                <article key={item.title} className="min-h-[148px] rounded-[18px] border border-[#E6EDF8] bg-white p-5 text-center shadow-[0_14px_34px_rgba(11,23,48,0.07)]">
                  <h3 className="font-['Clash'] text-[17px] text-[#0D1B2A]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#405071]">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 py-6 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1080px] rounded-[22px] border border-[#B7E8C9] bg-[#EDFFF4] p-6 shadow-[0_16px_38px_rgba(11,23,48,0.07)]">
            <h2 className="font-['Clash'] text-[27px] text-[#0D1B2A]">No Password. Ever.</h2>
            <p className="mt-3 max-w-3xl text-[16px] leading-8 text-[#253753]">
              RoyaleCoach AI only uses your player tag and public player data. We never ask for your Clash Royale password.
            </p>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1080px]">
            <h2 className="mb-7 text-center font-['Clash'] text-[30px] leading-tight text-[#0D1B2A] md:text-[36px]">How to Find Your Player Tag</h2>
            <div className="grid gap-4 md:grid-cols-4">
              {TAG_STEPS.map((step) => (
                <article key={step.n} className="rounded-[18px] border border-[#E6EDF8] bg-white p-5 text-center shadow-[0_14px_34px_rgba(11,23,48,0.07)]">
                  <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#1565FF] font-['Clash'] text-base text-white shadow-[0_10px_24px_rgba(26,108,246,0.25)]">
                    {step.n}
                  </div>
                  <h3 className="font-['Clash'] text-[16px] text-[#0D1B2A]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#405071]">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto grid max-w-[1080px] items-center gap-6 rounded-[22px] border border-[#E6EDF8] bg-white p-6 shadow-[0_16px_38px_rgba(11,23,48,0.08)] lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <h2 className="font-['Clash'] text-[31px] leading-tight text-[#0D1B2A] md:text-[36px]">Your Profile. Your Stats. All in One Place.</h2>
              <p className="mt-4 text-[16px] leading-8 text-[#405071]">
                View your profile, trophies, clan, win rate, battles, cards, and badges from a real app screen. The profile loads from public player data using your player tag.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-[320px] overflow-hidden rounded-[30px] border-[9px] border-[#101827] bg-[#101827] shadow-[0_18px_36px_rgba(11,23,48,0.18)]">
                <Image
                  src="/assets/player-profile/profil.jpeg"
                  alt="RoyaleCoach AI player statistics screen with arena, trophies, and battle record"
                  width={590}
                  height={1280}
                  sizes="(max-width: 639px) calc(100vw - 64px), 320px"
                  loading="lazy"
                  className="h-[520px] w-full rounded-[20px] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[820px]">
            <h2 className="text-center font-['Clash'] text-[28px] leading-tight text-[#0D1B2A] md:text-[32px]">What Your Clash Royale Stats Actually Tell You</h2>
            <p className="mt-4 text-[15px] leading-7 text-[#405071]">
              The game itself shows surprisingly little about your own play. Your full profile &mdash; unlocked by just your player tag &mdash; carries far more signal:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3 text-[15px] leading-7 text-[#405071]"><span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1565FF]" /><span><strong className="text-[#16233D]">Trophies and path progress</strong> &mdash; where you are and how it is trending, not just the current number.</span></li>
              <li className="flex gap-3 text-[15px] leading-7 text-[#405071]"><span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1565FF]" /><span><strong className="text-[#16233D]">Current deck and card collection</strong> &mdash; with levels, the raw material for every upgrade and deck decision.</span></li>
              <li className="flex gap-3 text-[15px] leading-7 text-[#405071]"><span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1565FF]" /><span><strong className="text-[#16233D]">Battle history</strong> &mdash; recent results, the decks you faced, and the matchups that keep costing you trophies.</span></li>
              <li className="flex gap-3 text-[15px] leading-7 text-[#405071]"><span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1565FF]" /><span><strong className="text-[#16233D]">Clan data</strong> &mdash; membership, activity, and how you compare with clanmates.</span></li>
            </ul>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[820px]">
            <h2 className="text-center font-['Clash'] text-[28px] leading-tight text-[#0D1B2A] md:text-[32px]">From Stats to Better Decisions</h2>
            <p className="mt-4 text-[15px] leading-7 text-[#405071]">
              Trophy count is a lagging indicator &mdash; it tells you where you have been. The leading indicators are your recent win rate, your results by opposing archetype, and your card level gaps against players at your trophy goal. Tracking those three turns a vague feeling like &ldquo;I keep losing lately&rdquo; into a specific, fixable problem, and they respond to changes weeks before your trophy count does.
            </p>
            <p className="mt-3 text-[15px] leading-7 text-[#405071]">
              Because any public tag works, the profile is also a study tool: look up stronger players who run your deck and compare levels, swaps, and recent results. And unlike a plain stats site, RoyaleCoach AI interprets the numbers &mdash; <Link href="/features/deck-analysis" className="font-semibold text-[#1565FF] hover:underline">Deck Analysis</Link> turns your history into coaching, and <Link href="/features/meta-decks" className="font-semibold text-[#1565FF] hover:underline">Meta Decks</Link> shows the field you are climbing through. The full walkthrough is in our <Link href="/guides/clash-royale-stats-tracker" className="font-semibold text-[#1565FF] hover:underline">stats tracker guide</Link>, or <Link href="/download" className="font-semibold text-[#1565FF] hover:underline">get the app</Link> and load your profile in seconds &mdash; no password, ever.
            </p>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="relative mx-auto max-w-[1080px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0B56E5] via-[#0968F6] to-[#003EBA] px-6 py-8 text-center text-white shadow-[0_22px_55px_rgba(26,108,246,0.24)] md:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(255,255,255,0.24),transparent_32%)]" />
            <div className="relative z-10">
              <h2 className="font-['Clash'] text-[31px] leading-tight md:text-[40px]">Just Your Player Tag. No Password.</h2>
              <p className="mx-auto mt-3 max-w-xl text-[16px] leading-7 text-blue-50">
                <Link href="/download" className="font-semibold text-white underline underline-offset-2 hover:text-blue-100">Download RoyaleCoach AI</Link> and track your profile in seconds.
              </p>
              <div className="mt-6 flex justify-center">
                <AppStoreButtons layout="horizontal" size="md" />
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-4 pb-10 pt-4 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1080px]">
            <h2 className="mb-5 text-center font-['Clash'] text-[22px] text-[#0D1B2A]">Explore More Features</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {RELATED_FEATURES.map((feature) => (
                <Link
                  key={feature.href}
                  href={feature.href}
                  className="group flex min-h-[126px] items-center justify-between gap-4 rounded-[18px] border border-[#E6EDF8] bg-white p-5 shadow-[0_14px_34px_rgba(11,23,48,0.07)] transition hover:-translate-y-1 hover:border-[#1565FF]/45 hover:shadow-[0_20px_44px_rgba(26,108,246,0.14)]"
                >
                  <span>
                    <span className="block font-['Clash'] text-[17px] text-[#0D1B2A]">{feature.title}</span>
                    <span className="mt-2 block text-sm leading-6 text-[#405071]">{feature.desc}</span>
                  </span>
                  <ArrowButton />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
