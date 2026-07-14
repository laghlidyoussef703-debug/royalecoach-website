import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AppStoreButtons } from '@/components/ui/AppStoreButtons';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema, breadcrumbSchema } from '@/lib/jsonld';
import { buildMeta } from '@/lib/metadata';

export const metadata: Metadata = buildMeta({
  title: 'Clash Royale Top Battles',
  description:
    'Study top Clash Royale battles and learn from strong players. Watch finished battles, compare decks, and understand real high-level gameplay decisions.',
  path: '/features/top-battles',
});

const TOP_BATTLES_SHOWS = [
  {
    title: 'Top Battle Examples',
    desc: 'Watch selected high-level battles from strong players and active ladder matches.',
  },
  {
    title: 'Winning Patterns',
    desc: 'Learn repeated patterns that help better players create pressure and defend cleanly.',
  },
  {
    title: 'Decks in Action',
    desc: 'See how real deck archetypes perform in live matchups instead of only reading deck lists.',
  },
  {
    title: 'Decision-Making Lessons',
    desc: 'Understand key decisions that change momentum, defense, and counterpush timing.',
  },
  {
    title: 'Battle Analysis',
    desc: 'Use battle context to understand what happened and what you can apply to your own games.',
  },
];

const STUDY_BENEFITS = [
  {
    title: 'Learn From Better Players',
    desc: 'Study real gameplay patterns from players who make stronger decisions under pressure.',
  },
  {
    title: 'Understand Real Decisions',
    desc: 'See how deck choices, timing, and elixir management shape actual battles.',
  },
  {
    title: 'Improve Your Game Sense',
    desc: 'Learn patterns, understand decisions, and play smarter in your own matches.',
  },
];

const SCREENSHOTS = [
  {
    title: 'Top Battle Feed',
    desc: 'Browse finished top battles with player names, scores, decks, and matchup context.',
    src: '/assets/top-battles/battles1.jpeg',
    alt: 'RoyaleCoach AI top battles feed with player names, decks, and match scores',
  },
  {
    title: 'Top 100 Battles',
    desc: 'Review more high-level battles and compare how different decks perform in real matches.',
    src: '/assets/top-battles/battles2.jpeg',
    alt: 'RoyaleCoach AI Top 100 battle rankings with high-level matchup results',
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
    title: 'Player Profile',
    desc: 'Track stats and progress.',
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

export default function TopBattlesPage() {
  return (
    <>
      <JsonLd data={webPageSchema('Top Clash Royale Battles — Learn from the Best Players', 'Study top Clash Royale battles, compare decks, and learn from real high-level gameplay.', '/features/top-battles')} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Features', path: '/features/top-battles' }, { name: 'Top Battles', path: '/features/top-battles' }])} />

      <main className="relative overflow-hidden bg-[#F9FBFF] text-[#0D1B2A]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(21,101,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(21,101,255,0.045)_1px,transparent_1px)] bg-[size:58px_58px]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-[#DDEEFF]/80 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-32 h-80 w-80 rounded-full bg-[#EAF4FF] blur-3xl" />

        <section className="relative px-4 pb-8 pt-10 sm:px-6 lg:px-6 lg:pt-12">
          <div className="mx-auto max-w-[1180px]">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-xs text-[#71809C]">
              <Link href="/" className="hover:text-[#1565FF]">Home</Link>
              <span>/</span>
              <Link href="/features/top-battles" className="hover:text-[#1565FF]">Features</Link>
              <span>/</span>
              <span className="font-medium text-[#0D1B2A]">Top Battles</span>
            </nav>

            <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="relative z-10">
                <div className="mb-5 inline-flex rounded-full bg-[#EAF2FF] px-4 py-2 font-['Clash'] text-[13px] uppercase text-[#0759CC] shadow-[0_8px_22px_rgba(26,108,246,0.08)]">
                  Feature: Top Battles
                </div>
                <h1 className="max-w-[610px] font-['Clash'] text-[40px] leading-[1.04] text-[#0D1B2A] sm:text-[54px]">
                  Study the Best Battles. Play Like the <span className="text-[#1565FF]">Best Players.</span>
                </h1>
                <p className="mt-5 max-w-[540px] text-[17px] leading-8 text-[#253753] sm:text-[18px]">
                  Watch top finished battles, compare decks, and learn from real high-level gameplay.
                </p>
                <div className="mt-6">
                  <AppStoreButtons layout="horizontal" size="md" />
                </div>
              </div>

              <div className="relative z-10 flex justify-center lg:justify-end">
                <Image
                  src="/assets/top-battles/hero-battles.png"
                  alt="RoyaleCoach AI top battles feed with player matchup results"
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
            <h2 className="mb-7 text-center font-['Clash'] text-[30px] leading-tight text-[#0D1B2A] md:text-[36px]">What Top Battles Shows</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {TOP_BATTLES_SHOWS.map((item) => (
                <article key={item.title} className="min-h-[168px] rounded-[18px] border border-[#E6EDF8] bg-white p-5 text-center shadow-[0_14px_34px_rgba(11,23,48,0.07)]">
                  <h3 className="font-['Clash'] text-[16px] text-[#0D1B2A]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#405071]">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1080px]">
            <h2 className="mb-7 text-center font-['Clash'] text-[30px] leading-tight text-[#0D1B2A] md:text-[36px]">Why Studying Battles Works</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {STUDY_BENEFITS.map((benefit) => (
                <article key={benefit.title} className="rounded-[18px] border border-[#E6EDF8] bg-white p-6 shadow-[0_14px_34px_rgba(11,23,48,0.07)]">
                  <h3 className="font-['Clash'] text-[19px] text-[#0D1B2A]">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#405071]">{benefit.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1080px]">
            <h2 className="mb-7 text-center font-['Clash'] text-[30px] leading-tight text-[#0D1B2A] md:text-[36px]">Real Battles. Real Learning.</h2>
            <div className="grid gap-5 lg:grid-cols-2">
              {SCREENSHOTS.map((screen) => (
                <article key={screen.title} className="rounded-[22px] border border-[#E6EDF8] bg-white p-5 shadow-[0_16px_38px_rgba(11,23,48,0.08)]">
                  <div className="mb-5">
                    <h3 className="font-['Clash'] text-[21px] leading-tight text-[#0D1B2A]">{screen.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#405071]">{screen.desc}</p>
                  </div>
                  <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-[30px] border-[9px] border-[#101827] bg-[#101827] shadow-[0_18px_36px_rgba(11,23,48,0.18)]">
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      width={740}
                      height={1600}
                      sizes="(max-width: 639px) calc(100vw - 64px), 320px"
                      loading="lazy"
                      className="h-[520px] w-full rounded-[20px] object-cover object-top"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[820px]">
            <h2 className="text-center font-['Clash'] text-[28px] leading-tight text-[#0D1B2A] md:text-[32px]">What to Watch For in Top-Level Gameplay</h2>
            <p className="mt-4 text-[15px] leading-7 text-[#405071]">
              Watching Clash Royale gameplay casually is entertainment; studying it is training. The difference is knowing what to look for. In any top battle, focus on:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3 text-[15px] leading-7 text-[#405071]"><span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1565FF]" /><span><strong className="text-[#16233D]">Elixir management</strong> &mdash; when the player takes fights and when they let damage happen because the trade is bad.</span></li>
              <li className="flex gap-3 text-[15px] leading-7 text-[#405071]"><span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1565FF]" /><span><strong className="text-[#16233D]">Cycle tracking</strong> &mdash; how they time their win condition for the exact moment the opponent&rsquo;s counter is out of rotation.</span></li>
              <li className="flex gap-3 text-[15px] leading-7 text-[#405071]"><span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1565FF]" /><span><strong className="text-[#16233D]">Defense into counter-push</strong> &mdash; how surviving defenders become the escort for the next attack instead of being wasted.</span></li>
              <li className="flex gap-3 text-[15px] leading-7 text-[#405071]"><span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1565FF]" /><span><strong className="text-[#16233D]">Placements under pressure</strong> &mdash; the exact tiles used to pull, kite, and split pushes.</span></li>
            </ul>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[820px]">
            <h2 className="text-center font-['Clash'] text-[28px] leading-tight text-[#0D1B2A] md:text-[32px]">How to Study Battles Without Wasting Time</h2>
            <p className="mt-4 text-[15px] leading-7 text-[#405071]">
              The common mistake is watching only battles featuring your own deck, and only the wins. You learn more from watching both sides of your hardest matchup &mdash; especially the losing side, because it shows which mistakes actually get punished. Pick one focus per battle (just elixir, or just defense) instead of trying to absorb everything; a battle studied twice with two lenses teaches more than five battles skimmed.
            </p>
            <p className="mt-3 text-[15px] leading-7 text-[#405071]">
              Top Battles gives this structure: real high-level matches with AI coaching notes on the decisions that decided them, so battle analysis stops being guesswork. Combine what you see with <Link href="/features/deck-analysis" className="font-semibold text-[#1565FF] hover:underline">Deck Analysis</Link> of your own matches to connect their habits to your mistakes, and see the wider improvement plan in our guide on <Link href="/guides/how-to-get-better-at-clash-royale" className="font-semibold text-[#1565FF] hover:underline">how to get better at Clash Royale</Link>. Then <Link href="/download" className="font-semibold text-[#1565FF] hover:underline">get the app</Link> and start studying tonight&rsquo;s top battles.
            </p>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="relative mx-auto max-w-[1080px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0B56E5] via-[#0968F6] to-[#003EBA] px-6 py-8 text-center text-white shadow-[0_22px_55px_rgba(26,108,246,0.24)] md:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(255,255,255,0.24),transparent_32%)]" />
            <div className="relative z-10">
              <h2 className="font-['Clash'] text-[31px] leading-tight md:text-[40px]">Learn From the Best. Play Smarter.</h2>
              <p className="mx-auto mt-3 max-w-xl text-[16px] leading-7 text-blue-50">
                <Link href="/download" className="font-semibold text-white underline underline-offset-2 hover:text-blue-100">Download RoyaleCoach AI</Link> and study real top battles before your next match.
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
