import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AppStoreButtons } from '@/components/ui/AppStoreButtons';
import { buildMeta } from '@/lib/metadata';

export const metadata: Metadata = buildMeta({
  title: 'RoyaleCoach AI — Clash Royale AI Coach',
  description:
    'Analyze your Clash Royale deck, discover meta decks, track stats, and improve with AI coaching built for real Clash Royale players.',
  path: '/',
});

const STATS = [
  { image: '/assets/cards/player-profile.webp', title: 'Player tag only', text: 'No password needed' },
  { image: '/assets/cards/battle.png', title: 'Battle-aware advice', text: 'Review recent matches' },
  { image: '/assets/cards/tournament.png', title: 'Secure companion', text: 'Independent and private' },
  { image: '/assets/cards/trophy.png', title: 'Actionable coaching', text: 'Clear next steps' },
];

const FEATURES = [
  {
    title: 'Deck Analysis',
    desc: 'Get AI-powered feedback on your deck instantly.',
    href: '/features/deck-analysis',
  },
  {
    title: 'Deck Builder',
    desc: 'Build the perfect deck with AI recommendations.',
    href: '/features/deck-builder',
  },
  {
    title: 'Meta Decks',
    desc: 'Explore top meta decks and stay ahead of the game.',
    href: '/features/meta-decks',
  },
  {
    title: 'Top Battles',
    desc: 'Watch and learn from the best players.',
    href: '/features/top-battles',
  },
  {
    title: 'Player Profile',
    desc: 'Track your stats and progress in real-time.',
    href: '/features/player-profile',
  },
];

const STEPS = [
  {
    step: '1',
    title: 'Enter Your Tag',
    desc: 'Add your player tag and let AI analyze your data.',
  },
  {
    step: '2',
    title: 'Get AI Analysis',
    desc: 'Receive personalized insights and smart recommendations.',
  },
  {
    step: '3',
    title: 'Improve & Climb',
    desc: 'Apply the tips, win more battles, and climb the ladder.',
  },
];

function AssetIcon({
  src,
  alt,
  size = 'md',
}: {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const shell = size === 'sm' ? 'h-11 w-11 rounded-[14px]' : size === 'lg' ? 'h-[78px] w-[78px] rounded-[20px]' : 'h-[70px] w-[70px] rounded-[18px]';
  const image = size === 'sm' ? 'h-8 w-8' : size === 'lg' ? 'h-16 w-16' : 'h-14 w-14';
  const imageSize = size === 'sm' ? 40 : size === 'lg' ? 72 : 64;

  return (
    <div className={`relative flex flex-shrink-0 items-center justify-center bg-[#F0F6FF] shadow-[inset_0_4px_18px_rgba(26,108,246,0.08)] ${shell}`}>
      <Image
        src={src}
        alt={alt}
        width={imageSize}
        height={imageSize}
        className={`object-contain drop-shadow-[0_6px_10px_rgba(11,23,48,0.18)] ${image}`}
      />
    </div>
  );
}

function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="mx-auto mb-7 max-w-3xl text-center">
      {kicker ? (
        <p className="mb-2 font-['Clash'] text-xs uppercase text-[#1565FF]">{kicker}</p>
      ) : null}
      <h2 className="font-['Clash'] text-[30px] leading-tight text-[#0D1B2A] md:text-[36px]">{title}</h2>
    </div>
  );
}

function ArrowButton() {
  return (
    <span className="mx-auto mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#F1F6FF] transition group-hover:bg-[#1565FF]" aria-hidden="true">
      <span className="h-2.5 w-2.5 rotate-45 border-r-2 border-t-2 border-[#1565FF] transition group-hover:border-white" />
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      <main className="relative overflow-hidden bg-[#F9FBFF] text-[#0D1B2A]">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-[#DDEEFF]/80 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 top-44 h-80 w-80 rounded-full bg-[#EAF4FF] blur-3xl" />

        <section className="relative bg-[radial-gradient(circle_at_70%_12%,rgba(26,108,246,0.16)_0%,rgba(234,244,255,0.68)_28%,rgba(255,255,255,0.96)_58%,rgba(247,250,255,0.98)_100%)] px-4 pb-0 pt-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1180px] px-2 pb-7 pt-8 sm:px-6 lg:px-8 lg:pb-0">
            <div className="grid items-center gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#EAF2FF] px-4 py-2 font-['Clash'] text-[13px] uppercase text-[#0759CC] shadow-[0_8px_22px_rgba(26,108,246,0.08)]">
                <Image src="/assets/cards/crown-blue.png" alt="" width={22} height={22} className="h-5 w-5 object-contain" />
                AI-powered coaching
              </div>
              <h1 className="max-w-[545px] font-['Clash'] text-[42px] leading-[1.03] text-[#0D1B2A] sm:text-[55px] lg:text-[60px]">
                Your Personal <span className="text-[#1565FF]">AI Coach</span> for Clash Royale
              </h1>
              <p className="mt-5 max-w-[500px] text-[17px] leading-8 text-[#405071] sm:text-[18px]">
                Analyze your deck, learn from your battles, and climb the ladder with AI-powered insights built for real players.
              </p>
              <div className="mt-6">
                <AppStoreButtons layout="horizontal" size="md" />
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:justify-end">
              <Image
                src="/assets/home/section2.png"
                alt="RoyaleCoach AI coaching app home screen with deck analysis tools"
                width={437}
                height={487}
                sizes="(max-width: 1023px) calc(100vw - 32px), 437px"
                preload
                className="h-auto w-full max-w-[437px] object-contain"
              />
            </div>
            </div>
          </div>

        </section>

        <section className="relative px-4 pt-8 sm:px-6 lg:px-6">
          <div className="relative z-20 mx-auto max-w-[1080px]">
            <div className="grid gap-2 rounded-[22px] border border-[#E6EDF8] bg-white p-3 shadow-[0_18px_44px_rgba(11,23,48,0.10)] sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((item) => (
                <div key={item.title} className="flex min-h-[70px] items-center gap-3 border-[#E6EDF8] px-3 py-2 lg:border-r lg:last:border-r-0">
                  <AssetIcon src={item.image} alt="" size="sm" />
                  <div>
                    <p className="font-['Clash'] text-[15px] text-[#1565FF]">{item.title}</p>
                    <p className="mt-0.5 text-[13px] leading-5 text-[#4B5875]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 py-9 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1180px]">
            <SectionTitle kicker="Powerful features" title="Everything You Need to Improve" />
            <p className="mx-auto -mt-3 mb-7 max-w-[720px] text-center text-[15px] leading-7 text-[#405071]">
              RoyaleCoach AI turns your public game data into practical coaching. The AI reads your
              current deck and card levels, points out weaknesses and synergy gaps, tells you which
              upgrades matter most, and keeps you current on the meta decks you will actually face.
              You can <Link href="/features/deck-analysis" className="font-semibold text-[#1565FF] hover:underline">explore deck analysis</Link>,{' '}
              <Link href="/features/meta-decks" className="font-semibold text-[#1565FF] hover:underline">browse meta decks</Link>, or
              build a new deck around the cards you already own.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {FEATURES.map((feature) => (
                <Link
                  href={feature.href}
                  key={feature.href}
                  className="group flex min-h-[188px] flex-col rounded-[22px] border border-[#E6EDF8] bg-white px-5 py-6 text-center shadow-[0_14px_34px_rgba(11,23,48,0.07)] transition hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(26,108,246,0.14)]"
                >
                  <h3 className="font-['Clash'] text-[18px] text-[#0D1B2A]">{feature.title}</h3>
                  <p className="mt-3 flex-1 text-[13px] leading-6 text-[#405071]">{feature.desc}</p>
                  <ArrowButton />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-9 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1080px]">
            <SectionTitle kicker="How it works" title="Improve in 3 Simple Steps" />
            <p className="mx-auto -mt-3 mb-7 max-w-[720px] text-center text-[15px] leading-7 text-[#405071]">
              No linked sign-in is needed for normal coaching &mdash; just your player tag. The app
              pulls your profile, stats, and recent battles, and the AI looks for the patterns
              behind your losses: repeated mistakes, bad matchups, and cards holding your deck back.
            </p>
            <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch">
              {STEPS.map((step, index) => (
                <div key={step.step} className="relative rounded-[22px] border border-[#E6EDF8] bg-white p-6 shadow-[0_14px_34px_rgba(11,23,48,0.07)]">
                  {index < STEPS.length - 1 ? (
                    <div className="absolute left-full top-1/2 hidden h-px w-12 border-t-2 border-dashed border-[#1565FF]/35 lg:block" />
                  ) : null}
                  <div className="absolute -top-4 left-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#1565FF] font-['Clash'] text-lg text-white shadow-[0_10px_24px_rgba(26,108,246,0.25)]">
                    {step.step}
                  </div>
                  <div className="pt-7">
                    <h3 className="font-['Clash'] text-xl text-[#0D1B2A]">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#405071]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-9 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[820px] text-center">
            <h2 className="font-['Clash'] text-[26px] leading-tight text-[#0D1B2A] md:text-[30px]">
              Built for Players Who Want to Actually Improve
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#405071]">
              Most players plateau because they never find out why they lose. Tier lists show
              decks that work for someone else; replays fly by too fast to learn from. RoyaleCoach
              AI closes that gap with coaching on your own matches: it reviews your battle history
              for recurring mistakes, studies top battles so you can learn from the best players,
              and explains its advice in plain language instead of raw stats.
            </p>
            <p className="mt-3 text-[15px] leading-7 text-[#405071]">
              The app is free to download on iOS and Android, and it never asks for your password.
              Want to go deeper first? <Link href="/guides" className="font-semibold text-[#1565FF] hover:underline">Read Clash Royale guides</Link>{' '}
              or <Link href="/faq" className="font-semibold text-[#1565FF] hover:underline">read the FAQ</Link>.
            </p>
          </div>
        </section>

        <section className="px-4 pb-10 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1080px] border-y border-[#D9E8FF] bg-[#F2F7FF] px-5 py-8 md:px-8">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="font-['Clash'] text-xs uppercase text-[#1565FF]">A repeatable improvement loop</p>
              <h2 className="mt-3 font-['Clash'] text-[28px] leading-tight text-[#0D1B2A] md:text-[34px]">
                How to Get Better at Clash Royale With Focused Practice
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[#405071]">
                Useful Clash Royale tips should lead to a decision you can test, not another list
                to memorize. RoyaleCoach AI organizes your public player data into a simple loop:
                diagnose one problem, make a measured change, play enough battles to learn, and
                review the new evidence before changing the deck again.
              </p>
              <p className="mt-3 text-[15px] leading-7 text-[#405071]">
                That makes the app useful at different stages of play. Newer players can learn why
                a deck needs reliable offense and defense instead of copying eight popular cards.
                Mid-ladder players can separate card-level problems from strategy mistakes.
                Experienced competitors can compare small deck changes, matchup trends, and battle
                patterns without losing the context of their own collection and season progress.
              </p>
            </div>

            <div className="mt-7 grid gap-6 md:grid-cols-3">
              <article>
                <h3 className="font-['Clash'] text-xl text-[#0D1B2A]">1. Fix the Highest-Impact Issue</h3>
                <p className="mt-3 text-sm leading-7 text-[#405071]">
                  Start with the weakness that affects the most matchups: a missing win condition,
                  weak air defense, awkward elixir curve, or underleveled core card. The AI coach
                  explains why that issue matters and highlights upgrade priorities, so you can
                  spend gold where it changes real interactions.
                </p>
              </article>
              <article>
                <h3 className="font-['Clash'] text-xl text-[#0D1B2A]">2. Learn From Better Examples</h3>
                <p className="mt-3 text-sm leading-7 text-[#405071]">
                  Compare your list with current archetypes, then study how strong players handle
                  similar matchups. <Link href="/features/meta-decks" className="font-semibold text-[#1565FF] hover:underline">Meta deck data</Link> shows what is performing, while <Link href="/features/top-battles" className="font-semibold text-[#1565FF] hover:underline">top battle reviews</Link> turn high-level play into choices you can recognize in your own games.
                </p>
              </article>
              <article>
                <h3 className="font-['Clash'] text-xl text-[#0D1B2A]">3. Review Progress, Not One Result</h3>
                <p className="mt-3 text-sm leading-7 text-[#405071]">
                  One win or loss says little. Use your <Link href="/features/player-profile" className="font-semibold text-[#1565FF] hover:underline">player stats and battle history</Link> to find repeated outcomes across a set of matches. Keep changes that improve consistency, revisit coaching when a pattern remains, and use the <Link href="/features/deck-builder" className="font-semibold text-[#1565FF] hover:underline">AI deck builder</Link> when the deck needs a more complete rethink.
                </p>
              </article>
            </div>

            <p className="mx-auto mt-7 max-w-[760px] text-center text-[15px] leading-7 text-[#405071]">
              This workflow helps new players learn deck fundamentals, returning players understand
              a changed meta, and competitive players prepare more deliberately. Explore the
              <Link href="/guides" className="font-semibold text-[#1565FF] hover:underline"> strategy guides</Link> for matchup concepts, then <Link href="/download" className="font-semibold text-[#1565FF] hover:underline">download RoyaleCoach AI</Link> to apply them to your own profile.
            </p>
          </div>
        </section>

        <section className="px-4 pb-10 sm:px-6 lg:px-6">
          <div className="relative mx-auto grid max-w-[1180px] items-center gap-6 overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0B56E5] via-[#0968F6] to-[#003EBA] p-7 text-white shadow-[0_22px_55px_rgba(26,108,246,0.24)] md:grid-cols-[1.02fr_0.98fr] md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(255,255,255,0.22),transparent_34%)]" />
            <div className="relative z-10">
              <h2 className="font-['Clash'] text-[34px] leading-tight md:text-[46px]">
                Stop Guessing. <span className="text-[#FFD23F]">Start Winning.</span>
              </h2>
              <p className="mt-4 max-w-xl text-[17px] leading-8 text-blue-50">
                Join players improving every day —{' '}
                <Link href="/download" className="font-semibold text-white underline underline-offset-2 hover:text-blue-100">download RoyaleCoach AI</Link>{' '}
                free on iOS &amp; Android.
              </p>
              <div className="mt-6">
                <AppStoreButtons layout="horizontal" size="lg" />
              </div>
            </div>
            <div className="relative z-10 mt-6 flex items-center justify-center md:mt-0 md:min-h-[230px] md:justify-end">
              <Image
                src="/assets/home/section-7.png"
                alt=""
                width={462}
                height={250}
                sizes="(max-width: 767px) calc(100vw - 56px), 462px"
                loading="lazy"
                className="h-auto w-full max-w-[462px] object-contain"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
