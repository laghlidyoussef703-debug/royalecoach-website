import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AppStoreButtons } from '@/components/ui/AppStoreButtons';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema, breadcrumbSchema } from '@/lib/jsonld';
import { buildMeta } from '@/lib/metadata';

export const metadata: Metadata = buildMeta({
  title: 'Clash Royale Deck Builder & Deck Calculator',
  description:
    'AI Clash Royale deck builder and deck calculator that matches decks to your card levels. Get balanced elixir, synergy, and personalized suggestions from your own collection.',
  path: '/features/deck-builder',
  ogImage: '/og/deck-builder.png',
});

const COPY_PROBLEMS = [
  {
    title: "Decks Don't Fit Everyone",
    desc: 'Every player has different cards, levels, habits, and preferences. A popular deck can still be wrong for your account.',
  },
  {
    title: 'Card Levels Matter',
    desc: 'A strong deck on paper can fall apart when your key cards are under-leveled for your current opponents.',
  },
  {
    title: 'Playstyle Makes a Difference',
    desc: 'Cycle, control, bait, and beatdown all reward different decisions. Your deck should match how you like to play.',
  },
];

const STEPS = [
  {
    n: '1',
    title: 'Enter Your Player Tag',
    desc: 'Add your Clash Royale player tag so RoyaleCoach AI can read your public profile.',
  },
  {
    n: '2',
    title: 'AI Checks Your Cards & Profile',
    desc: 'The builder reviews your collection, card levels, profile context, and recent performance.',
  },
  {
    n: '3',
    title: 'Get Your Best Deck',
    desc: 'Receive a custom deck built around cards you own and can realistically use.',
  },
];

const CONSIDERS = [
  {
    title: 'Card Collection',
    desc: 'Uses the cards you actually have available.',
  },
  {
    title: 'Card Levels',
    desc: 'Builds around your strongest usable levels.',
  },
  {
    title: 'Elixir Cost',
    desc: 'Balances average elixir for the way you play.',
  },
  {
    title: 'Synergy',
    desc: 'Picks cards that support the same win plan.',
  },
  {
    title: 'Win Condition',
    desc: 'Centers the deck around a clear path to tower damage.',
  },
  {
    title: 'Current Meta',
    desc: 'Adapts suggestions to current trends and common matchups.',
  },
];

const SMARTER_BUILDING = [
  {
    title: 'Uses your card levels',
    desc: 'Builds around the cards you can realistically play well right now.',
  },
  {
    title: 'Balances elixir',
    desc: 'Keeps the deck practical for defense, pressure, and cycle decisions.',
  },
  {
    title: 'Finds better synergy',
    desc: 'Looks for cards that support the same plan instead of pulling in different directions.',
  },
];

const RELATED_FEATURES = [
  {
    title: 'Deck Analysis',
    desc: 'Find weaknesses and upgrade priorities.',
    href: '/features/deck-analysis',
  },
  {
    title: 'Meta Decks',
    desc: 'Discover top decks from the current meta.',
    href: '/features/meta-decks',
  },
  {
    title: 'Top Battles',
    desc: 'Watch and learn from stronger players.',
    href: '/features/top-battles',
  },
  {
    title: 'Player Profile',
    desc: 'Track your progress and stats.',
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

export default function DeckBuilderPage() {
  return (
    <>
      <JsonLd data={webPageSchema('AI Clash Royale Deck Builder', 'Build the best Clash Royale deck for your specific cards, card levels, playstyle, and current meta.', '/features/deck-builder')} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Features', path: '/features/deck-builder' }, { name: 'Deck Builder', path: '/features/deck-builder' }])} />

      <main className="relative overflow-hidden bg-[#F9FBFF] text-[#0D1B2A]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(21,101,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(21,101,255,0.045)_1px,transparent_1px)] bg-[size:58px_58px]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-[#DDEEFF]/80 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-32 h-80 w-80 rounded-full bg-[#EAF4FF] blur-3xl" />

        <section className="relative px-4 pb-8 pt-10 sm:px-6 lg:px-6 lg:pt-12">
          <div className="mx-auto max-w-[1180px]">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-xs text-[#71809C]">
              <Link href="/" className="hover:text-[#1565FF]">Home</Link>
              <span>/</span>
              <Link href="/features/deck-builder" className="hover:text-[#1565FF]">Features</Link>
              <span>/</span>
              <span className="font-medium text-[#0D1B2A]">Deck Builder</span>
            </nav>

            <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="relative z-10">
                <div className="mb-5 inline-flex rounded-full bg-[#EAF2FF] px-4 py-2 font-['Clash'] text-[13px] uppercase text-[#0759CC] shadow-[0_8px_22px_rgba(26,108,246,0.08)]">
                  Feature: Deck Builder
                </div>
                <h1 className="max-w-[610px] font-['Clash'] text-[40px] leading-[1.04] text-[#0D1B2A] sm:text-[54px]">
                  Build the Best Deck for <span className="text-[#1565FF]">Your Cards</span> — Not Someone Else&apos;s
                </h1>
                <p className="mt-5 max-w-[540px] text-[17px] leading-8 text-[#253753] sm:text-[18px]">
                  Create a smart deck based on your card collection, levels, playstyle, and current meta.
                </p>
                <div className="mt-6">
                  <AppStoreButtons layout="horizontal" size="md" />
                </div>
              </div>

              <div className="relative z-10 flex justify-center lg:justify-end">
                <Image
                  src="/assets/deck-builder/hero-builder.png"
                  alt="RoyaleCoach AI deck builder preview with recommended Clash Royale cards"
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
            <h2 className="mb-7 text-center font-['Clash'] text-[30px] leading-tight text-[#0D1B2A] md:text-[36px]">Why Copy-Pasted Decks Don&rsquo;t Work</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {COPY_PROBLEMS.map((item) => (
                <article key={item.title} className="rounded-[18px] border border-[#E6EDF8] bg-white p-6 text-center shadow-[0_14px_34px_rgba(11,23,48,0.07)]">
                  <h3 className="font-['Clash'] text-[18px] text-[#0D1B2A]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#405071]">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1080px] rounded-[22px] border border-[#E6EDF8] bg-white p-6 shadow-[0_16px_38px_rgba(11,23,48,0.08)]">
            <h2 className="mb-7 text-center font-['Clash'] text-[29px] text-[#0D1B2A]">How the Builder Works</h2>
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
            <h2 className="mb-7 text-center font-['Clash'] text-[30px] leading-tight text-[#0D1B2A] md:text-[36px]">What the Builder Considers</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CONSIDERS.map((item) => (
                <article key={item.title} className="min-h-[140px] rounded-[18px] border border-[#E6EDF8] bg-white p-5 text-center shadow-[0_14px_34px_rgba(11,23,48,0.07)]">
                  <h3 className="font-['Clash'] text-[17px] text-[#0D1B2A]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#405071]">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto grid max-w-[1080px] items-center gap-6 rounded-[22px] border border-[#E6EDF8] bg-white p-6 shadow-[0_16px_38px_rgba(11,23,48,0.08)] lg:grid-cols-[0.96fr_1.04fr]">
            <div className="flex justify-center">
              <div className="w-full max-w-[320px] overflow-hidden rounded-[30px] border-[9px] border-[#101827] bg-[#101827] shadow-[0_18px_36px_rgba(11,23,48,0.18)]">
                <Image
                  src="/assets/deck-builder/build1.jpeg"
                  alt="RoyaleCoach AI deck builder showing a personalized eight-card deck"
                  width={740}
                  height={1600}
                  sizes="(max-width: 639px) calc(100vw - 64px), 320px"
                  loading="lazy"
                  className="h-[520px] w-full rounded-[20px] object-cover object-top"
                />
              </div>
            </div>
            <div className="rounded-[20px] bg-[#FFF7DF] p-6">
              <h2 className="font-['Clash'] text-[30px] leading-tight text-[#0D1B2A]">Smarter Deck Building</h2>
              <div className="mt-5 space-y-4">
                {SMARTER_BUILDING.map((item) => (
                  <article key={item.title} className="rounded-[16px] bg-white p-5 shadow-[0_12px_24px_rgba(11,23,48,0.06)]">
                    <h3 className="font-['Clash'] text-[20px] text-[#0D1B2A]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#405071]">
                      {item.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[820px]">
            <h2 className="text-center font-['Clash'] text-[28px] leading-tight text-[#0D1B2A] md:text-[32px]">The Anatomy of a Balanced Deck</h2>
            <p className="mt-4 text-[15px] leading-7 text-[#405071]">
              Every deck that wins consistently fills the same roles, whatever the archetype. When you build a Clash Royale deck &mdash; by hand or with AI &mdash; check it against this structure:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3 text-[15px] leading-7 text-[#405071]"><span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1565FF]" /><span><strong className="text-[#16233D]">A win condition</strong> &mdash; one card whose job is tower damage. Without it, perfect defense still ends in a draw.</span></li>
              <li className="flex gap-3 text-[15px] leading-7 text-[#405071]"><span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1565FF]" /><span><strong className="text-[#16233D]">Support and air cover</strong> &mdash; ranged troops that protect your push, at least two of them able to hit air.</span></li>
              <li className="flex gap-3 text-[15px] leading-7 text-[#405071]"><span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1565FF]" /><span><strong className="text-[#16233D]">Spell balance</strong> &mdash; one cheap spell for swarms, one medium or heavy spell for support troops and races.</span></li>
              <li className="flex gap-3 text-[15px] leading-7 text-[#405071]"><span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1565FF]" /><span><strong className="text-[#16233D]">A sensible elixir curve</strong> &mdash; most balanced decks average 3.0&ndash;3.8, with a cheap defensive cycle you can afford under pressure.</span></li>
            </ul>
            <p className="mt-4 text-[15px] leading-7 text-[#405071]">
              Archetype comes after structure. Whether you lean cycle, beatdown, control, bait, or bridge spam should follow from your best cards and how you like to play &mdash; the structure above stays the same in all of them.
            </p>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[820px]">
            <h2 className="text-center font-['Clash'] text-[28px] leading-tight text-[#0D1B2A] md:text-[32px]">Why Random Card Picks Fail</h2>
            <p className="mt-4 text-[15px] leading-7 text-[#405071]">
              The two most common ways players build decks are picking their eight favorite cards, or copying a list from a tier site. Both fail for the same reason: they ignore your collection. Favorite-card decks usually stack overlapping roles and leave blind spots &mdash; three win conditions and no air defense. Copied decks assume card levels you may not have; a meta list with your key cards two levels down loses interactions the deck depends on.
            </p>
            <p className="mt-3 text-[15px] leading-7 text-[#405071]">
              The AI Deck Builder starts from your real cards and levels instead. It fills every role with the strongest option you actually own, balances the elixir curve, and explains each choice so you learn the framework while using it. Once the deck is built, run it through <Link href="/features/deck-analysis" className="font-semibold text-[#1565FF] hover:underline">Deck Analysis</Link> to stress-test it, and check it against what is winning in <Link href="/features/meta-decks" className="font-semibold text-[#1565FF] hover:underline">Meta Decks</Link>. For the full step-by-step framework, read our <Link href="/guides/best-clash-royale-deck-builder" className="font-semibold text-[#1565FF] hover:underline">deck building guide</Link> &mdash; or <Link href="/download" className="font-semibold text-[#1565FF] hover:underline">get the app</Link> and let the AI build your first deck now.
            </p>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="relative mx-auto max-w-[1080px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0B56E5] via-[#0968F6] to-[#003EBA] px-6 py-8 text-center text-white shadow-[0_22px_55px_rgba(26,108,246,0.24)] md:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(255,255,255,0.24),transparent_32%)]" />
            <div className="relative z-10">
              <h2 className="font-['Clash'] text-[31px] leading-tight md:text-[40px]">Build Better Decks. Win More.</h2>
              <p className="mx-auto mt-3 max-w-xl text-[16px] leading-7 text-blue-50">
                <Link href="/download" className="font-semibold text-white underline underline-offset-2 hover:text-blue-100">Download RoyaleCoach AI</Link> and let AI build the perfect deck for you.
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
