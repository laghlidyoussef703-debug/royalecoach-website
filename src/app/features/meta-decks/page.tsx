import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AppStoreButtons } from '@/components/ui/AppStoreButtons';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema, breadcrumbSchema } from '@/lib/jsonld';
import { buildMeta } from '@/lib/metadata';

export const metadata: Metadata = buildMeta({
  title: 'Best Clash Royale Meta Decks & Rankings',
  description:
    'See the best Clash Royale meta decks with live rankings, card trends, and season insights built from real battle data — then adapt what is winning to your own cards.',
  path: '/features/meta-decks',
  ogImage: '/og/meta-decks.png',
});

const META_SHOWS = [
  {
    title: 'Top Decks',
    desc: 'Browse strong decks used by high-performing players and understand what is currently popular.',
  },
  {
    title: 'Card Trends',
    desc: 'Track which cards are rising or falling in usage so you can plan smarter choices.',
  },
  {
    title: 'Deck Rankings',
    desc: 'Explore ranked deck archetypes, matchup patterns, and common ladder strategies.',
  },
  {
    title: 'Season Insights',
    desc: 'See how balance changes and player behavior shift the meta over the season.',
  },
];

const META_BENEFITS = [
  {
    title: 'Stay Ahead',
    desc: 'Understand what is currently popular before it surprises you in your next matches.',
  },
  {
    title: 'Better Decisions',
    desc: 'Use meta context to choose smarter counters, deck swaps, and upgrade priorities.',
  },
  {
    title: 'Adapt Every Season',
    desc: 'Follow how the meta changes and adjust your deck plan as trends move.',
  },
];

const RELATED_FEATURES = [
  {
    title: 'Deck Analysis',
    desc: 'Analyze your deck and find weaknesses.',
    href: '/features/deck-analysis',
  },
  {
    title: 'Deck Builder',
    desc: 'Build the best deck for your cards.',
    href: '/features/deck-builder',
  },
  {
    title: 'Top Battles',
    desc: 'Watch top players and learn from real matches.',
    href: '/features/top-battles',
  },
  {
    title: 'Player Profile',
    desc: 'Track your stats and progress.',
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

export default function MetaDecksPage() {
  return (
    <>
      <JsonLd data={webPageSchema('Clash Royale Meta Decks — Best Decks Right Now', 'Browse top Clash Royale meta decks, card trends, deck rankings, and season insights built from real battle data.', '/features/meta-decks')} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Features', path: '/features/meta-decks' }, { name: 'Meta Decks', path: '/features/meta-decks' }])} />

      <main className="relative overflow-hidden bg-[#F9FBFF] text-[#0D1B2A]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(21,101,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(21,101,255,0.045)_1px,transparent_1px)] bg-[size:58px_58px]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-[#DDEEFF]/80 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-32 h-80 w-80 rounded-full bg-[#EAF4FF] blur-3xl" />

        <section className="relative px-4 pb-8 pt-10 sm:px-6 lg:px-6 lg:pt-12">
          <div className="mx-auto max-w-[1180px]">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-xs text-[#71809C]">
              <Link href="/" className="hover:text-[#1565FF]">Home</Link>
              <span>/</span>
              <Link href="/features/meta-decks" className="hover:text-[#1565FF]">Features</Link>
              <span>/</span>
              <span className="font-medium text-[#0D1B2A]">Meta Decks</span>
            </nav>

            <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="relative z-10">
                <div className="mb-5 inline-flex rounded-full bg-[#EAF2FF] px-4 py-2 font-['Clash'] text-[13px] uppercase text-[#0759CC] shadow-[0_8px_22px_rgba(26,108,246,0.08)]">
                  Feature: Meta Decks
                </div>
                <h1 className="max-w-[610px] font-['Clash'] text-[40px] leading-[1.04] text-[#0D1B2A] sm:text-[54px]">
                  Always Know What&rsquo;s Winning in <span className="text-[#1565FF]">Clash Royale</span>
                </h1>
                <p className="mt-5 max-w-[540px] text-[17px] leading-8 text-[#253753] sm:text-[18px]">
                  Browse top meta decks, card trends, deck rankings, and season insights built from real battle data.
                </p>
                <div className="mt-6">
                  <AppStoreButtons layout="horizontal" size="md" />
                </div>
              </div>

              <div className="relative z-10 flex justify-center lg:justify-end">
                <Image
                  src="/assets/meta-decks/hero-meta.png"
                  alt="RoyaleCoach AI meta decks rankings and deck performance preview"
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
            <h2 className="mb-7 text-center font-['Clash'] text-[30px] leading-tight text-[#0D1B2A] md:text-[36px]">What Meta Decks Shows</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {META_SHOWS.map((item) => (
                <article key={item.title} className="min-h-[160px] rounded-[18px] border border-[#E6EDF8] bg-white p-5 text-center shadow-[0_14px_34px_rgba(11,23,48,0.07)]">
                  <h3 className="font-['Clash'] text-[17px] text-[#0D1B2A]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#405071]">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1080px]">
            <h2 className="mb-7 text-center font-['Clash'] text-[30px] leading-tight text-[#0D1B2A] md:text-[36px]">Why the Meta Matters</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {META_BENEFITS.map((benefit) => (
                <article key={benefit.title} className="rounded-[18px] border border-[#E6EDF8] bg-white p-6 shadow-[0_14px_34px_rgba(11,23,48,0.07)]">
                  <h3 className="font-['Clash'] text-[19px] text-[#0D1B2A]">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#405071]">{benefit.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto grid max-w-[1080px] items-center gap-6 rounded-[22px] border border-[#E6EDF8] bg-white p-6 shadow-[0_16px_38px_rgba(11,23,48,0.08)] lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <h2 className="font-['Clash'] text-[31px] leading-tight text-[#0D1B2A] md:text-[36px]">Real-Time Meta Insights</h2>
              <p className="mt-4 text-[16px] leading-8 text-[#405071]">
                Explore current meta cards and decks from the app. RoyaleCoach AI helps you understand what is currently popular and plan smarter counters before your next match.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[16px] border border-[#E6EDF8] bg-[#F7FAFF] p-4">
                  <h3 className="font-['Clash'] text-[17px] text-[#0D1B2A]">Top Cards</h3>
                  <p className="mt-2 text-sm leading-6 text-[#405071]">See rising usage and strong cards for the current patch.</p>
                </div>
                <div className="rounded-[16px] border border-[#E6EDF8] bg-[#F7FAFF] p-4">
                  <h3 className="font-['Clash'] text-[17px] text-[#0D1B2A]">Top Decks</h3>
                  <p className="mt-2 text-sm leading-6 text-[#405071]">Compare archetypes, tiers, and common deck structures.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-[320px] overflow-hidden rounded-[30px] border-[9px] border-[#101827] bg-[#101827] shadow-[0_18px_36px_rgba(11,23,48,0.18)]">
                <Image
                  src="/assets/meta-decks/meta.jpeg"
                  alt="RoyaleCoach AI meta decks screen with win rates and deck details"
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
            <h2 className="text-center font-['Clash'] text-[28px] leading-tight text-[#0D1B2A] md:text-[32px]">What &ldquo;Meta&rdquo; Means &mdash; and Why Decks Rise and Fall</h2>
            <p className="mt-4 text-[15px] leading-7 text-[#405071]">
              The meta is simply the set of decks winning most often right now. It shifts for three reasons: balance patches buff and nerf cards, new cards and evolutions reshape old archetypes, and players adapt to each other &mdash; when one deck dominates, its counters rise, then counters to the counters. That is why a deck that felt unbeatable last season can feel ordinary today, even though nothing about your play changed.
            </p>
            <p className="mt-3 text-[15px] leading-7 text-[#405071]">
              The names rotate, but the same families keep returning: Hog 2.6 and other cycle decks, Log bait, Mega Knight bridge spam, Royal Giant, Lumberloon, and heavy beatdown. Learning to recognize these archetypes in the first thirty seconds of a match matters more than memorizing any single deck list &mdash; each family has a game plan against your deck, and you should have one against theirs.
            </p>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[820px]">
            <h2 className="text-center font-['Clash'] text-[28px] leading-tight text-[#0D1B2A] md:text-[32px]">How to Use Meta Decks Without Getting Burned</h2>
            <p className="mt-4 text-[15px] leading-7 text-[#405071]">
              The classic mistake is copying the #1 meta deck with under-leveled cards. Meta rankings assume tournament-standard levels; two levels down, the interactions the deck depends on stop working, and you lose more than you did with your old deck. Before switching, compare the meta list against your collection &mdash; often the smarter move is adapting the archetype to your levels: keep the game plan, swap the cards you cannot support for equivalents you can.
            </p>
            <p className="mt-3 text-[15px] leading-7 text-[#405071]">
              RoyaleCoach AI makes that comparison directly: card rankings and trends show what is winning, and because the app knows your collection, you can see how a meta deck translates to your account before committing gold. Pair it with <Link href="/features/deck-analysis" className="font-semibold text-[#1565FF] hover:underline">Deck Analysis</Link> to check your current deck against the field, or read the <Link href="/guides/clash-royale-meta-decks" className="font-semibold text-[#1565FF] hover:underline">meta decks guide</Link> and the <Link href="/guides/hog-2-6-deck-guide" className="font-semibold text-[#1565FF] hover:underline">Hog 2.6 deep-dive</Link> to study the archetypes themselves. Ready to see the current rankings? <Link href="/download" className="font-semibold text-[#1565FF] hover:underline">Get the app</Link> &mdash; it is free to download.
            </p>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="relative mx-auto max-w-[1080px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0B56E5] via-[#0968F6] to-[#003EBA] px-6 py-8 text-center text-white shadow-[0_22px_55px_rgba(26,108,246,0.24)] md:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(255,255,255,0.24),transparent_32%)]" />
            <div className="relative z-10">
              <h2 className="font-['Clash'] text-[31px] leading-tight md:text-[40px]">Stay Updated. Play Smarter.</h2>
              <p className="mx-auto mt-3 max-w-xl text-[16px] leading-7 text-blue-50">
                <Link href="/download" className="font-semibold text-white underline underline-offset-2 hover:text-blue-100">Download RoyaleCoach AI</Link> and explore the meta before your next match.
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
