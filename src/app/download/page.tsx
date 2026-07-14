import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AppStoreButtons } from '@/components/ui/AppStoreButtons';
import { buildMeta } from '@/lib/metadata';

export const metadata: Metadata = buildMeta({
  title: 'Download RoyaleCoach AI for iOS & Android',
  description:
    'Download RoyaleCoach AI free on iOS and Android. Get AI deck analysis, meta decks, Clash Royale stats tracking, and personalized coaching tips — no password required.',
  path: '/download',
});

const BENEFITS = [
  {
    icon: 'shield',
    title: 'Safe & Secure',
    desc: 'No password or Supercell login required. Your data stays protected.',
  },
  {
    icon: 'coach',
    title: 'Instant AI Coaching',
    desc: 'Get AI-powered deck analysis and personalized improvement tips instantly.',
  },
  {
    icon: 'gift',
    title: 'Free to Start',
    desc: 'Powerful coaching features are available for free. Upgrade anytime for more.',
  },
  {
    icon: 'refresh',
    title: 'Always Current',
    desc: 'Up-to-date meta decks, balance changes, and top strategies.',
  },
];

const DEVICES = [
  { title: 'iOS / iPhone / iPad', desc: 'Built for Apple players who want fast deck advice on the go.', accent: 'blue' },
  { title: 'Android', desc: 'Available for Android players with the same coaching tools and meta insights.', accent: 'green' },
];

const SCREENSHOTS = [
  { title: 'Deck Analysis', src: '/assets/download/analysis.jpeg', alt: 'RoyaleCoach AI deck analysis results with deck score and coaching feedback' },
  { title: 'Deck Builder', src: '/assets/download/build.jpeg', alt: 'RoyaleCoach AI deck builder with a recommended Clash Royale card lineup' },
  { title: 'Meta Decks', src: '/assets/download/meta.jpeg', alt: 'RoyaleCoach AI meta decks rankings with deck performance details' },
  { title: 'Top Battles', src: '/assets/download/arena.jpeg', alt: 'RoyaleCoach AI top battles feed with player matchup results' },
  { title: 'Player Profile / Arena', src: '/assets/download/profile.jpeg', alt: 'RoyaleCoach AI player profile with arena and trophy statistics' },
];

const FAQS = [
  {
    question: 'Is RoyaleCoach AI free?',
    answer: 'Yes. RoyaleCoach AI is free to download and free to start using.',
  },
  {
    question: 'Do I need my Clash Royale password?',
    answer: 'No. RoyaleCoach AI never asks for your password and only uses your player tag and public player data.',
  },
  {
    question: 'Is it available on iOS and Android?',
    answer: 'Yes. You can download RoyaleCoach AI from the App Store and Google Play.',
  },
  {
    question: 'Can I upgrade later?',
    answer: 'Yes. Start free, then upgrade later if you want deeper coaching reports and more tools.',
  },
  {
    question: 'Is my data safe?',
    answer: 'Yes. The app uses public player data and does not require access to your Clash Royale account credentials.',
  },
];

type BenefitIcon = 'shield' | 'coach' | 'gift' | 'refresh';

function BenefitIconArt({ icon }: { icon: BenefitIcon }) {
  const common = 'h-9 w-9';

  if (icon === 'shield') {
    return (
      <svg viewBox="0 0 48 48" className={common} aria-hidden="true">
        <path fill="#1565FF" d="M24 4 8 10v12c0 10.1 6.6 18.9 16 22 9.4-3.1 16-11.9 16-22V10L24 4Z" />
        <path fill="#DDEBFF" d="m22.1 30.7-7-7 3.1-3.1 3.9 3.8 8.6-8.6 3.1 3.1-11.7 11.8Z" />
      </svg>
    );
  }

  if (icon === 'coach') {
    return (
      <svg viewBox="0 0 48 48" className={common} aria-hidden="true">
        <path fill="#8D4BFF" d="M17 8a9 9 0 0 0-5 16.5V33a5 5 0 0 0 8.7 3.4A7.5 7.5 0 0 0 24 38V10.5A8.9 8.9 0 0 0 17 8Z" />
        <path fill="#B88CFF" d="M31 8a8.9 8.9 0 0 0-7 2.5V38a7.5 7.5 0 0 0 3.3-1.6A5 5 0 0 0 36 33v-8.5A9 9 0 0 0 31 8Z" />
        <path fill="#F4EDFF" d="M16 20h5v4h-5v-4Zm11 0h5v4h-5v-4Z" />
      </svg>
    );
  }

  if (icon === 'gift') {
    return (
      <svg viewBox="0 0 48 48" className={common} aria-hidden="true">
        <path fill="#32B955" d="M8 18h32v8H8v-8Zm4 8h24v16H12V26Z" />
        <path fill="#DFF8E5" d="M22 18h4v24h-4V18Z" />
        <path fill="#32B955" d="M17.1 7.5c4.6 0 6.9 5.1 6.9 10.5h-8.7A5.3 5.3 0 0 1 10 12.7c0-2.9 2.3-5.2 7.1-5.2Zm13.8 0c-4.6 0-6.9 5.1-6.9 10.5h8.7a5.3 5.3 0 0 0 5.3-5.3c0-2.9-2.3-5.2-7.1-5.2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className={common} aria-hidden="true">
      <path fill="none" stroke="#F59E0B" strokeLinecap="round" strokeWidth="5" d="M38 20a14 14 0 0 0-25-7" />
      <path fill="#F59E0B" d="M10 5v12h12L10 5Z" />
      <path fill="none" stroke="#F59E0B" strokeLinecap="round" strokeWidth="5" d="M10 28a14 14 0 0 0 25 7" />
      <path fill="#F59E0B" d="M38 43V31H26l12 12Z" />
    </svg>
  );
}

export default function DownloadPage() {
  return (
    <>
      <main className="relative overflow-hidden bg-[#F9FBFF] text-[#0D1B2A]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(21,101,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(21,101,255,0.045)_1px,transparent_1px)] bg-[size:58px_58px]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-[#DDEEFF]/80 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 top-44 h-80 w-80 rounded-full bg-[#EAF4FF] blur-3xl" />

        <section className="relative px-4 pb-8 pt-10 sm:px-6 lg:px-6 lg:pt-12">
          <div className="mx-auto grid max-w-[1180px] items-center gap-8 lg:grid-cols-[0.94fr_1.06fr]">
            <div className="relative z-10">
              <div className="mb-5 inline-flex rounded-full bg-[#EAF2FF] px-4 py-2 font-['Clash'] text-[13px] uppercase text-[#0759CC] shadow-[0_8px_22px_rgba(26,108,246,0.08)]">
                Download RoyaleCoach AI
              </div>
              <h1 className="max-w-[590px] font-['Clash'] text-[39px] leading-[1.04] text-[#0D1B2A] sm:text-[52px] lg:text-[58px]">
                Download RoyaleCoach <span className="text-[#1565FF]">AI</span> — Free on iOS & Android
              </h1>
              <p className="mt-5 max-w-[540px] text-[17px] leading-8 text-[#405071] sm:text-[18px]">
                Your personal Clash Royale coach for AI deck analysis, meta decks, top battles, and practical tips that help you improve faster.
              </p>
              <div className="mt-6">
                <AppStoreButtons layout="horizontal" size="md" />
              </div>
              <p className="mt-5 text-sm font-semibold text-[#304260]">
                Safe and secure. No password. iOS and Android.
              </p>
            </div>

            <div className="relative z-10 flex justify-center lg:justify-end">
              <Image
                src="/assets/download/download-phones.png"
                alt="RoyaleCoach AI coaching app screens on iPhone and Android phones"
                width={638}
                height={409}
                sizes="(max-width: 1023px) calc(100vw - 32px), 620px"
                preload
                className="h-auto w-full max-w-[620px] object-contain"
              />
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1180px]">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {BENEFITS.map((benefit) => (
                <article
                  key={benefit.title}
                  className="flex min-h-[132px] items-start gap-4 rounded-[18px] border border-[#E6EDF8] bg-white p-5 shadow-[0_14px_34px_rgba(11,23,48,0.07)]"
                >
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-[18px] bg-[#F0F6FF]">
                    <BenefitIconArt icon={benefit.icon as BenefitIcon} />
                  </div>
                  <div>
                    <h2 className="font-['Clash'] text-[17px] text-[#0D1B2A]">{benefit.title}</h2>
                    <p className="mt-2 text-[13px] leading-6 text-[#405071]">{benefit.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[980px]">
            <div className="mb-6 text-center">
              <p className="mb-2 font-['Clash'] text-xs uppercase text-[#1565FF]">Device compatibility</p>
              <h2 className="font-['Clash'] text-[30px] leading-tight text-[#0D1B2A] md:text-[36px]">Play, Analyze, Improve Anywhere</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {DEVICES.map((device) => (
                <article key={device.title} className="rounded-[22px] border border-[#E6EDF8] bg-white p-6 shadow-[0_14px_34px_rgba(11,23,48,0.07)]">
                  <div className={`mb-4 h-2 w-16 rounded-full ${device.accent === 'green' ? 'bg-[#32B955]' : 'bg-[#1565FF]'}`} />
                  <h3 className="font-['Clash'] text-xl text-[#0D1B2A]">{device.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#405071]">{device.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 py-9 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-7 text-center">
              <h2 className="font-['Clash'] text-[30px] leading-tight text-[#0D1B2A] md:text-[36px]">See RoyaleCoach AI in Action</h2>
            </div>
            <div className="flex snap-x gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
              {SCREENSHOTS.map((screen) => (
                <article key={screen.title} className="w-[212px] flex-shrink-0 snap-start md:w-auto">
                  <div className="overflow-hidden rounded-[22px] border border-[#BFC9D8] bg-white shadow-[0_16px_34px_rgba(11,23,48,0.14)]">
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      width={590}
                      height={1280}
                      sizes="(max-width: 767px) 212px, (max-width: 1279px) 18vw, 212px"
                      loading="lazy"
                      className="h-[332px] w-full object-cover object-top md:h-[300px] lg:h-[332px]"
                    />
                  </div>
                  <h3 className="mt-3 text-center font-['Clash'] text-sm text-[#0D1B2A]">{screen.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto grid max-w-[1180px] gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[22px] border border-[#E6EDF8] bg-white p-6 shadow-[0_14px_34px_rgba(11,23,48,0.07)]">
              <h2 className="font-['Clash'] text-xl text-[#0D1B2A]">Mini FAQ</h2>
              <div className="mt-4 space-y-3">
                {FAQS.map((faq) => (
                  <details key={faq.question} className="group rounded-[14px] border border-[#E6EDF8] bg-[#FBFDFF] px-4 py-3">
                    <summary className="cursor-pointer list-none text-sm font-bold text-[#253753]">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-sm leading-6 text-[#405071]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="rounded-[22px] border border-[#E6EDF8] bg-white p-7 shadow-[0_14px_34px_rgba(11,23,48,0.07)]">
              <div className="flex h-full items-center gap-6">
                <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-[#EAF2FF]">
                  <BenefitIconArt icon="shield" />
                </div>
                <div>
                  <h2 className="font-['Clash'] text-[24px] text-[#0D1B2A]">No Password. Ever.</h2>
                  <p className="mt-4 text-[16px] leading-8 text-[#405071]">
                    RoyaleCoach AI only uses your player tag and public player data. We never ask for your Clash Royale password or access your account credentials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[820px]">
            <h2 className="text-center font-['Clash'] text-[28px] leading-tight text-[#0D1B2A] md:text-[32px]">What You Get After Installing</h2>
            <p className="mt-4 text-[15px] leading-7 text-[#405071]">
              RoyaleCoach AI is a full coaching toolkit, not a single feature. After you download the app on iOS or Android, you can run an AI <Link href="/features/deck-analysis" className="font-semibold text-[#1565FF] hover:underline">deck analysis</Link> that finds weaknesses and upgrade priorities, build decks around your real card levels with the <Link href="/features/deck-builder" className="font-semibold text-[#1565FF] hover:underline">deck builder</Link>, browse current <Link href="/features/meta-decks" className="font-semibold text-[#1565FF] hover:underline">meta decks</Link> and card trends, study <Link href="/features/top-battles" className="font-semibold text-[#1565FF] hover:underline">top battles</Link> with coaching notes, and track your full <Link href="/features/player-profile" className="font-semibold text-[#1565FF] hover:underline">player profile</Link> and battle history.
            </p>
            <p className="mt-3 text-[15px] leading-7 text-[#405071]">
              The core app is free. If you later want deeper reports, unlimited deck builds, and AI coaching chat, plans are listed on the <Link href="/pricing" className="font-semibold text-[#1565FF] hover:underline">pricing page</Link> &mdash; subscriptions are managed entirely by Apple and Google.
            </p>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[820px]">
            <h2 className="text-center font-['Clash'] text-[28px] leading-tight text-[#0D1B2A] md:text-[32px]">Getting Started: Just Your Player Tag</h2>
              <p className="mt-4 text-[15px] leading-7 text-[#405071]">
                Setup takes under a minute. Open Clash Royale, tap your name at the top of the home screen, and copy your player tag (the code starting with #). Enter that tag in RoyaleCoach AI and the app reads available public game data &mdash; deck, card collection, trophies, clan, and recent battles. No linked sign-in or password is required for normal app use or deck analysis. Email, Google, or Apple authentication is only required when purchasing or managing a subscription, and RoyaleCoach AI never asks for Google or Apple passwords.
              </p>
              <ol className="mt-5 grid gap-4 sm:grid-cols-3">
                <li className="border-t-2 border-[#1565FF] pt-3 text-sm leading-6 text-[#405071]">
                  <strong className="block text-[#0D1B2A]">1. Add your tag</strong>
                  Check that every letter and number matches your in-game profile.
                </li>
                <li className="border-t-2 border-[#1565FF] pt-3 text-sm leading-6 text-[#405071]">
                  <strong className="block text-[#0D1B2A]">2. Review your profile</strong>
                  Confirm your deck, trophies, card levels, clan, and recent battles loaded correctly.
                </li>
                <li className="border-t-2 border-[#1565FF] pt-3 text-sm leading-6 text-[#405071]">
                  <strong className="block text-[#0D1B2A]">3. Choose one next action</strong>
                  Run a deck analysis, test a build, or study a matchup before your next session.
                </li>
              </ol>
              <p className="mt-3 text-[15px] leading-7 text-[#405071]">
                This is also what separates a coaching app from a basic stats website. A stats site shows you numbers; RoyaleCoach AI interprets them &mdash; why you keep losing certain matchups, which card upgrade changes the most interactions, and what to practice next. Read the <Link href="/guides" className="font-semibold text-[#1565FF] hover:underline">Clash Royale guides</Link> for more strategy context, or visit the <Link href="/faq" className="font-semibold text-[#1565FF] hover:underline">FAQ</Link> for safety and privacy answers.
              </p>
          </div>
        </section>

        <section className="relative px-4 pb-10 pt-6 sm:px-6 lg:px-6">
          <div className="relative mx-auto grid max-w-[1180px] items-center gap-6 overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0B56E5] via-[#0968F6] to-[#003EBA] p-6 text-white shadow-[0_22px_55px_rgba(26,108,246,0.24)] md:grid-cols-[0.72fr_1.28fr] lg:grid-cols-[0.78fr_1.22fr]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_35%,rgba(255,255,255,0.24),transparent_32%)]" />
            <div className="relative z-10 text-center md:text-left">
              <h2 className="font-['Clash'] text-[31px] leading-tight md:text-[38px]">Ready to Improve?</h2>
              <p className="mt-3 text-[16px] leading-7 text-blue-50">Join Clash Royale players improving with smarter AI coaching.</p>
              <div className="mt-5 flex justify-center md:justify-start">
                <AppStoreButtons layout="horizontal" size="md" />
              </div>
              <p className="mt-4 text-sm text-blue-100">
                Want more details first? Compare <Link href="/pricing" className="font-semibold text-white underline underline-offset-2 hover:text-blue-50">Free, Pro &amp; Clan Pro plans</Link> or read the <Link href="/faq" className="font-semibold text-white underline underline-offset-2 hover:text-blue-50">FAQ</Link>.
              </p>
            </div>
            <div className="relative z-10 flex justify-center md:justify-end">
              <Image
                src="/assets/download/section-7.png"
                alt=""
                width={462}
                height={250}
                sizes="(max-width: 767px) calc(100vw - 48px), 462px"
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
