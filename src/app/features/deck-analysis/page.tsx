import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AppStoreButtons } from '@/components/ui/AppStoreButtons';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema, breadcrumbSchema } from '@/lib/jsonld';
import { buildMeta } from '@/lib/metadata';

export const metadata: Metadata = buildMeta({
  title: 'Clash Royale Deck Analyzer',
  description:
    'Analyze any Clash Royale deck with AI. Find hidden weaknesses, upgrade priorities, and synergy gaps. Know what makes the best deck for your exact card levels.',
  path: '/features/deck-analysis',
  ogImage: '/og/deck-analysis.png',
});

const ANALYSIS_ITEMS = [
  {
    title: 'Deck Weaknesses',
    desc: 'Find the matchups, defensive gaps, and pressure patterns that make your deck harder to play.',
  },
  {
    title: 'Synergy Analysis',
    desc: 'See how well your cards support each other and where your win condition needs better backup.',
  },
  {
    title: 'Upgrade Priorities',
    desc: 'Know which cards to upgrade first for the biggest practical impact on your current deck.',
  },
  {
    title: 'Battle Mistake Patterns',
    desc: 'Understand repeated choices from recent battles and what to change in your next matches.',
  },
  {
    title: 'Card Level Gaps',
    desc: 'Spot level differences that put you at a disadvantage against common ladder opponents.',
  },
  {
    title: 'Meta Positioning',
    desc: 'See how your deck fits the current meta and where smart adjustments can help.',
  },
];

const STEPS = [
  {
    n: '1',
    title: 'Enter Your Player Tag',
    desc: 'Add your Clash Royale player tag. No password or account credentials are needed.',
  },
  {
    n: '2',
    title: 'AI Reads Your Deck & Profile',
    desc: 'RoyaleCoach AI reviews public deck, card level, profile, and battle context.',
  },
  {
    n: '3',
    title: 'Get Your Coaching Report',
    desc: 'Receive clear weaknesses, upgrade priorities, and practical fixes.',
  },
];

const SCREENSHOTS = [
  {
    title: 'AI Coaching Report',
    desc: 'Get a full breakdown of your deck with strengths, weaknesses, and actionable advice.',
    src: '/assets/deck-analysis/analysis1.jpeg',
    alt: 'RoyaleCoach AI deck analysis report with strengths, weaknesses, and deck score',
  },
  {
    title: 'Personalized Fix Suggestions',
    desc: 'See recommended collection choices, upgrade priorities, and focused coaching plans.',
    src: '/assets/deck-analysis/analysis2.jpeg',
    alt: 'RoyaleCoach AI coaching recommendations with card upgrades and deck fixes',
  },
];

const BENEFITS = [
  {
    title: 'Stop Guessing',
    desc: 'Understand what to fix instead of making random deck changes.',
  },
  {
    title: 'Improve Faster',
    desc: 'Focus on the highest-impact choices for your cards, levels, and playstyle.',
  },
  {
    title: 'Win More Battles',
    desc: 'Make smarter deck decisions and play with a clearer coaching plan.',
  },
];

const RELATED_FEATURES = [
  {
    title: 'Deck Builder',
    desc: 'Build stronger decks from your real card collection.',
    href: '/features/deck-builder',
  },
  {
    title: 'Meta Decks',
    desc: 'Track top decks and current ladder trends.',
    href: '/features/meta-decks',
  },
  {
    title: 'Top Battles',
    desc: 'Learn from high-level matchups and battle patterns.',
    href: '/features/top-battles',
  },
  {
    title: 'Player Profile',
    desc: 'Review your stats, trophies, and progress.',
    href: '/features/player-profile',
  },
];

function ArrowButton() {
  return (
    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#F1F6FF] transition group-hover:bg-[#1565FF]" aria-hidden="true">
      <span className="h-2.5 w-2.5 rotate-45 border-r-2 border-t-2 border-[#1565FF] transition group-hover:border-white" />
    </span>
  );
}

export default function DeckAnalysisPage() {
  return (
    <>
      <JsonLd data={webPageSchema('AI Clash Royale Deck Analyzer — Find Weaknesses & Upgrade Priorities', 'Analyze your Clash Royale deck with AI to find weaknesses, upgrade priorities, and synergy gaps.', '/features/deck-analysis')} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Features', path: '/features/deck-analysis' }, { name: 'Deck Analysis', path: '/features/deck-analysis' }])} />

      <main className="relative overflow-hidden bg-[#F9FBFF] text-[#0D1B2A]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(21,101,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(21,101,255,0.045)_1px,transparent_1px)] bg-[size:58px_58px]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-[#DDEEFF]/80 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-32 h-80 w-80 rounded-full bg-[#EAF4FF] blur-3xl" />

        <section className="relative px-4 pb-8 pt-10 sm:px-6 lg:px-6 lg:pt-12">
          <div className="mx-auto max-w-[1180px]">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-xs text-[#71809C]">
              <Link href="/" className="hover:text-[#1565FF]">Home</Link>
              <span>/</span>
              <Link href="/features/deck-analysis" className="hover:text-[#1565FF]">Features</Link>
              <span>/</span>
              <span className="font-medium text-[#0D1B2A]">Deck Analysis</span>
            </nav>

            <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="relative z-10">
                <div className="mb-5 inline-flex rounded-full bg-[#EAF2FF] px-4 py-2 font-['Clash'] text-[13px] uppercase text-[#0759CC] shadow-[0_8px_22px_rgba(26,108,246,0.08)]">
                  Feature: Deck Analysis
                </div>
                <h1 className="max-w-[610px] font-['Clash'] text-[40px] leading-[1.04] text-[#0D1B2A] sm:text-[54px]">
                  AI Deck Analysis for <span className="text-[#1565FF]">Clash Royale</span> — Know Exactly What to Fix
                </h1>
                <p className="mt-5 max-w-[540px] text-[17px] leading-8 text-[#253753] sm:text-[18px]">
                  Get a complete AI coaching report that shows your deck weaknesses, upgrade priorities, and exact fixes.
                </p>
                <div className="mt-6">
                  <AppStoreButtons layout="horizontal" size="md" />
                </div>
              </div>

              <div className="relative z-10 flex justify-center lg:justify-end">
                <Image
                  src="/assets/deck-analysis/hero-analysis.png"
                  alt="RoyaleCoach AI deck analysis report with deck score and card recommendations"
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
            <h2 className="mb-7 text-center font-['Clash'] text-[30px] leading-tight text-[#0D1B2A] md:text-[36px]">What Gets Analyzed</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ANALYSIS_ITEMS.map((item) => (
                <article key={item.title} className="min-h-[160px] rounded-[18px] border border-[#E6EDF8] bg-white p-5 text-center shadow-[0_14px_34px_rgba(11,23,48,0.07)]">
                  <h3 className="font-['Clash'] text-[17px] text-[#0D1B2A]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#405071]">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1080px] rounded-[22px] border border-[#E6EDF8] bg-white p-6 shadow-[0_16px_38px_rgba(11,23,48,0.08)]">
            <h2 className="mb-7 text-center font-['Clash'] text-[29px] text-[#0D1B2A]">How It Works</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {STEPS.map((step) => (
                <article key={step.n} className="text-center">
                  <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#1565FF] font-['Clash'] text-lg text-white shadow-[0_10px_24px_rgba(26,108,246,0.25)]">
                    {step.n}
                  </div>
                  <h3 className="font-['Clash'] text-[17px] text-[#0D1B2A]">{step.title}</h3>
                  <p className="mx-auto mt-3 max-w-[260px] text-sm leading-6 text-[#405071]">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1080px]">
            <h2 className="mb-7 text-center font-['Clash'] text-[30px] leading-tight text-[#0D1B2A] md:text-[36px]">See Your Analysis in Action</h2>
            <div className="grid gap-5 lg:grid-cols-2">
              {SCREENSHOTS.map((screen, index) => (
                <article key={screen.title} className="grid items-center gap-5 rounded-[22px] border border-[#E6EDF8] bg-white p-5 shadow-[0_16px_38px_rgba(11,23,48,0.08)] sm:grid-cols-[0.82fr_1.18fr]">
                  <div>
                    <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#1565FF] font-['Clash'] text-sm text-white">{index + 1}</span>
                    <h3 className="font-['Clash'] text-[20px] leading-tight text-[#0D1B2A]">{screen.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#405071]">{screen.desc}</p>
                  </div>
                  <div className="mx-auto w-full max-w-[260px] overflow-hidden rounded-[28px] border-[8px] border-[#101827] bg-[#101827] shadow-[0_18px_36px_rgba(11,23,48,0.18)]">
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      width={590}
                      height={1280}
                      sizes="(max-width: 639px) calc(100vw - 64px), 260px"
                      loading="lazy"
                      className="h-[430px] w-full rounded-[19px] object-cover object-top"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1080px]">
            <h2 className="mb-7 text-center font-['Clash'] text-[30px] leading-tight text-[#0D1B2A] md:text-[36px]">Why This Matters</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {BENEFITS.map((benefit) => (
                <article key={benefit.title} className="rounded-[18px] border border-[#E6EDF8] bg-white p-6 shadow-[0_14px_34px_rgba(11,23,48,0.07)]">
                  <h3 className="font-['Clash'] text-[19px] text-[#0D1B2A]">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#405071]">{benefit.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[820px]">
            <h2 className="text-center font-['Clash'] text-[28px] leading-tight text-[#0D1B2A] md:text-[32px]">What Deck Weaknesses Actually Look Like</h2>
            <p className="mt-4 text-[15px] leading-7 text-[#405071]">
              When players search for the best Clash Royale deck, they usually focus on which cards to add. Deck weaknesses work the other way around &mdash; they are the gaps between your cards. The most common ones the analyzer finds:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3 text-[15px] leading-7 text-[#405071]"><span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1565FF]" /><span><strong className="text-[#16233D]">Synergy gaps</strong> &mdash; eight decent cards that never amplify each other, so every push is exactly the sum of its parts.</span></li>
              <li className="flex gap-3 text-[15px] leading-7 text-[#405071]"><span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1565FF]" /><span><strong className="text-[#16233D]">Elixir imbalance</strong> &mdash; an average cost too high to answer fast pressure, or a defensive cycle too expensive to rotate.</span></li>
              <li className="flex gap-3 text-[15px] leading-7 text-[#405071]"><span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1565FF]" /><span><strong className="text-[#16233D]">Defensive blind spots</strong> &mdash; no clean answer to air pushes, tanks, or spell-resistant swarms.</span></li>
              <li className="flex gap-3 text-[15px] leading-7 text-[#405071]"><span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1565FF]" /><span><strong className="text-[#16233D]">Matchup risks</strong> &mdash; a structure that loses badly to two or three of the most popular meta archetypes.</span></li>
            </ul>
            <p className="mt-4 text-[15px] leading-7 text-[#405071]">
              None of these show up while you are playing. In a match they feel like bad luck; across your battle history they are a pattern, and patterns are exactly what AI analysis is good at finding. That is why the analyzer reads your recent battles alongside your deck &mdash; it separates structural problems from play mistakes, which need different fixes.
            </p>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[820px]">
            <h2 className="text-center font-['Clash'] text-[28px] leading-tight text-[#0D1B2A] md:text-[32px]">From Report to Results</h2>
            <p className="mt-4 text-[15px] leading-7 text-[#405071]">
              An analysis is only useful if you act on it, and the report is written for that. Upgrade priorities tell you where your next gold actually changes interactions &mdash; upgrading the win condition you play every match usually beats spreading gold across cards you rarely draw. Suggested swaps target the specific weakness found, so you change one card with a reason instead of rebuilding on a hunch.
            </p>
            <p className="mt-3 text-[15px] leading-7 text-[#405071]">
              A good rhythm: analyze your deck when you hit a losing streak, after every balance patch, and before spending significant gold. If the analysis says the deck is sound, the next step is play &mdash; review your battles and study how stronger players handle your hard matchups in <Link href="/features/top-battles" className="font-semibold text-[#1565FF] hover:underline">Top Battles</Link>. If the structure is the problem, rebuild around your levels with the <Link href="/features/deck-builder" className="font-semibold text-[#1565FF] hover:underline">AI Deck Builder</Link>. For a deeper walkthrough of how analysis works, read the <Link href="/guides/clash-royale-deck-analyzer" className="font-semibold text-[#1565FF] hover:underline">deck analyzer guide</Link> &mdash; or <Link href="/download" className="font-semibold text-[#1565FF] hover:underline">get the app</Link> and run your first report in under a minute.
            </p>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="relative mx-auto max-w-[1080px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0B56E5] via-[#0968F6] to-[#003EBA] px-6 py-8 text-center text-white shadow-[0_22px_55px_rgba(26,108,246,0.24)] md:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(255,255,255,0.24),transparent_32%)]" />
            <div className="relative z-10">
              <h2 className="font-['Clash'] text-[31px] leading-tight md:text-[40px]">Start Analyzing. Start Improving.</h2>
              <p className="mx-auto mt-3 max-w-xl text-[16px] leading-7 text-blue-50">
                <Link href="/download" className="font-semibold text-white underline underline-offset-2 hover:text-blue-100">Download RoyaleCoach AI</Link> and get your first AI deck analysis.
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
