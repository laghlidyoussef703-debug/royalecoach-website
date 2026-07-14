import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AppStoreButtons } from '@/components/ui/AppStoreButtons';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqSchema } from '@/lib/jsonld';
import { buildMeta } from '@/lib/metadata';

export const metadata: Metadata = buildMeta({
  title: 'RoyaleCoach AI FAQ',
  description:
    'Answers to the most common questions about RoyaleCoach AI — how to get better at Clash Royale, deck analysis, meta decks, subscriptions, and privacy.',
  path: '/faq',
});

const CATEGORIES = [
  {
    label: 'About the App',
    items: [
      {
        question: 'What is RoyaleCoach AI?',
        answer:
          'RoyaleCoach AI is an independent AI-powered companion app for Clash Royale players. It uses public player data and AI coaching logic to deliver deck feedback, upgrade priorities, meta insights, and battle analysis.',
      },
      {
        question: 'Is RoyaleCoach AI free to use?',
        answer:
          'Yes. RoyaleCoach AI is free to download and includes free coaching tools. Pro and Clan Pro are optional upgrades for players who want deeper reports and more features.',
      },
      {
        question: 'How does RoyaleCoach AI work?',
        answer:
          'Enter a player tag, then RoyaleCoach AI uses an anonymous session to read public player data and turn it into practical coaching advice. Email, Google, or Apple sign-in is not required for normal use or deck analysis.',
      },
      {
        question: 'Is RoyaleCoach AI an official Supercell or Clash Royale app?',
        answer:
          'No. RoyaleCoach AI is an independent companion app and is not affiliated with, endorsed by, sponsored by, or officially connected to Supercell Oy. Clash Royale is a trademark of Supercell Oy.',
      },
      {
        question: 'Who made RoyaleCoach AI?',
        answer:
          'RoyaleCoach AI is built by an independent team of Clash Royale players and AI engineers. The team is not employed by or affiliated with Supercell.',
      },
      {
        question: 'What platforms is it on?',
        answer:
          'RoyaleCoach AI is available on iOS and Android. You can download it from the App Store or Google Play.',
      },
    ],
  },
  {
    label: 'Privacy & Security',
    items: [
      {
        question: 'Do I need my Clash Royale password?',
        answer:
          'No. RoyaleCoach AI never asks for your Clash Royale password. Normal use starts with an anonymous session and only needs your player tag. A linked Email, Google, or Apple account is required only for subscription purchase or management.',
      },
      {
        question: 'Is my data safe?',
        answer:
          'Yes. RoyaleCoach AI uses secure connections and does not sell your personal data. Payment details are handled by Apple or Google, not by RoyaleCoach AI.',
      },
      {
        question: 'What data do you collect?',
        answer:
          'RoyaleCoach AI may process an anonymous internal identifier, player tag, public player data, app settings, analysis and usage records, and subscription status. Email or authentication-provider information is processed only when you link an account or use subscription functionality.',
      },
      {
        question: 'How do I delete my account?',
        answer:
          'Use Delete Account inside the app when available. For a profile linked through Email, Google, or Apple, an email request must identify the linked email address. Profile deletion does not cancel an App Store or Google Play subscription.',
      },
    ],
  },
  {
    label: 'Deck Analysis',
    items: [
      {
        question: 'How does AI deck analysis work?',
        answer:
          'RoyaleCoach AI reviews your deck cards, average elixir, win conditions, defensive coverage, card levels, and recent battle context to identify strengths and weaknesses.',
      },
      {
        question: 'How accurate is the AI?',
        answer:
          'The analysis is designed to give practical coaching guidance from public game data and observed patterns. It can help spot issues, but it cannot guarantee outcomes in live matches.',
      },
      {
        question: "Can I analyze any player's deck?",
        answer:
          'Yes. If you have a valid player tag and the data is public, RoyaleCoach AI can review that player profile and deck information.',
      },
      {
        question: 'What information do I need for analysis?',
        answer:
          'You only need a Clash Royale player tag. RoyaleCoach AI does not need account credentials.',
      },
    ],
  },
  {
    label: 'Deck Builder',
    items: [
      {
        question: 'How does the Deck Builder work?',
        answer:
          'The Deck Builder uses your card collection, card levels, and current strategy needs to suggest decks that fit what you can realistically play.',
      },
      {
        question: 'Are suggestions based on the current meta?',
        answer:
          'Yes. Deck suggestions consider current meta trends along with your available cards and levels.',
      },
      {
        question: 'Can I save my decks?',
        answer:
          'Deck saving depends on your app plan and current app version. The builder is designed to help you review and reuse recommended deck ideas.',
      },
    ],
  },
  {
    label: 'Meta Decks',
    items: [
      {
        question: 'How often is meta data updated?',
        answer:
          'Meta data is updated regularly during active seasons so rankings and trends stay useful as balance changes and player behavior shift.',
      },
      {
        question: 'Where does meta data come from?',
        answer:
          'Meta rankings are derived from aggregated public battle data and observable performance trends. RoyaleCoach AI does not claim to receive official private data from Supercell.',
      },
    ],
  },
  {
    label: 'Pro Plan & Subscriptions',
    items: [
      {
        question: 'What does Pro include?',
        answer:
          'Pro includes unlimited deck analyses, unlimited Deck Builder, advanced Meta Decks, full Top Battles access, detailed Player Profile, and advanced AI insights.',
      },
      {
        question: 'What does Clan Pro include?',
        answer:
          'Clan Pro includes everything in Pro plus clan analytics, war and performance tracking, clan leaderboard tools, priority support, and early access to selected new features.',
      },
      {
        question: 'How much does Pro cost?',
        answer:
          'Pro costs $2.99/month. Clan Pro costs $4.99/month. Prices may vary slightly by country because subscriptions are managed by the App Store and Google Play.',
      },
      {
        question: 'How do I cancel?',
        answer:
          'Cancel through your App Store or Google Play subscription settings. RoyaleCoach AI cannot cancel an Apple or Google subscription on your behalf.',
      },
      {
        question: 'Is there a free trial?',
        answer:
          'Trial availability can vary by platform, region, and current store offers. The free tier is always available.',
      },
      {
        question: 'Does RoyaleCoach AI store payment details?',
        answer:
          'No. Payments are handled by Apple and Google. RoyaleCoach AI never receives, stores, or processes your payment card details.',
      },
    ],
  },
  {
    label: 'Affiliate / Partner',
    items: [
      {
        question: 'Do you have a creator program?',
        answer:
          'Yes. RoyaleCoach AI has an affiliate and creator program for content creators, streamers, community managers, and partners. Contact support or visit the affiliate page for details.',
      },
    ],
  },
];

const ALL_ITEMS = CATEGORIES.flatMap((category) => category.items);
const TOTAL_COUNT = ALL_ITEMS.length;
const CATEGORY_TABS = [
  { label: 'All Questions', count: TOTAL_COUNT },
  ...CATEGORIES.map((category) => ({ label: category.label, count: category.items.length })),
];

function Chevron() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 flex-shrink-0 stroke-[#0D1B2A] stroke-2 transition group-open:rotate-180" aria-hidden="true">
      <path d="m5 7.5 5 5 5-5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  return (
    <details className="group rounded-[14px] border border-[#E6EDF8] bg-white shadow-[0_10px_24px_rgba(11,23,48,0.05)]">
      <summary className="flex min-h-[58px] cursor-pointer list-none items-center justify-between gap-4 px-5 py-4">
        <span className="text-[15px] font-bold leading-6 text-[#0D1B2A]">
          {index}. {question}
        </span>
        <Chevron />
      </summary>
      <div className="border-t border-[#E6EDF8] px-5 pb-5 pt-4">
        <p className="text-sm leading-7 text-[#405071]">{answer}</p>
      </div>
    </details>
  );
}

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema(ALL_ITEMS)} />

      <main className="relative overflow-hidden bg-[#F9FBFF] text-[#0D1B2A]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(21,101,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(21,101,255,0.045)_1px,transparent_1px)] bg-[size:58px_58px]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-[#DDEEFF]/80 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-32 h-80 w-80 rounded-full bg-[#EAF4FF] blur-3xl" />

        <section className="relative px-4 pb-8 pt-10 sm:px-6 lg:px-6 lg:pt-12">
          <div className="mx-auto grid max-w-[1180px] items-center gap-8 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="relative z-10">
              <div className="mb-5 inline-flex rounded-full bg-[#EAF2FF] px-4 py-2 font-['Clash'] text-[13px] uppercase text-[#0759CC] shadow-[0_8px_22px_rgba(26,108,246,0.08)]">
                FAQ
              </div>
              <h1 className="max-w-[560px] font-['Clash'] text-[43px] leading-[1.04] text-[#0D1B2A] sm:text-[58px]">
                Frequently Asked <span className="text-[#1565FF]">Questions</span>
              </h1>
              <p className="mt-5 max-w-[540px] text-[17px] leading-8 text-[#253753] sm:text-[18px]">
                Find answers about RoyaleCoach AI, privacy, subscriptions, deck analysis, and more.
              </p>
              <div className="mt-6">
                <AppStoreButtons layout="horizontal" size="md" />
              </div>
            </div>

            <div className="relative z-10 flex justify-center lg:justify-end">
              <Image
                src="/assets/faq/faq-king.png"
                alt="RoyaleCoach AI help center for app, privacy, and subscription questions"
                width={638}
                height={409}
                sizes="(max-width: 1023px) calc(100vw - 32px), 620px"
                preload
                className="h-auto w-full max-w-[620px] object-contain drop-shadow-[0_28px_32px_rgba(11,23,48,0.12)]"
              />
            </div>
          </div>
        </section>

        <section className="relative px-4 py-6 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1080px] rounded-[22px] border border-[#E6EDF8] bg-white p-4 shadow-[0_16px_38px_rgba(11,23,48,0.08)]">
            <div className="flex gap-3 overflow-x-auto pb-1">
              {CATEGORY_TABS.map((tab, index) => (
                <div
                  key={tab.label}
                  className={`flex min-h-[86px] min-w-[132px] flex-shrink-0 flex-col items-center justify-center rounded-[14px] px-4 text-center ${
                    index === 0 ? 'bg-[#1565FF] text-white shadow-[0_12px_22px_rgba(21,101,255,0.20)]' : 'bg-white text-[#0D1B2A]'
                  }`}
                >
                  <span className="font-['Clash'] text-[13px] leading-5">{tab.label}</span>
                  <span className={`mt-1 text-sm font-bold ${index === 0 ? 'text-blue-100' : 'text-[#1565FF]'}`}>{tab.count}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto grid max-w-[1080px] gap-5 lg:grid-cols-2">
            {ALL_ITEMS.map((item, index) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} index={index + 1} />
            ))}
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto grid max-w-[1080px] items-center gap-6 rounded-[22px] border border-[#D9E8FF] bg-[#EEF6FF] p-7 shadow-[0_16px_38px_rgba(11,23,48,0.08)] md:grid-cols-[150px_1fr_260px]">
            <div className="flex justify-center">
              <Image
                src="/assets/faq/support-shield.png"
                alt=""
                width={130}
                height={130}
                sizes="112px"
                loading="lazy"
                className="h-auto w-full max-w-[112px] rounded-[18px] object-contain"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-['Clash'] text-[27px] leading-tight text-[#0D1B2A]">Still need help?</h2>
              <p className="mt-3 text-[16px] leading-7 text-[#253753]">
                Our support team is here for you. Send us a message and we&rsquo;ll get back to you.
              </p>
              <p className="mt-3 text-sm leading-6 text-[#405071]">
                Helpful pages: <Link href="/download" className="font-semibold text-[#1565FF] hover:underline">Download</Link> ·{' '}
                <Link href="/pricing" className="font-semibold text-[#1565FF] hover:underline">Pricing</Link> ·{' '}
                <Link href="/affiliate" className="font-semibold text-[#1565FF] hover:underline">Creator Program</Link> ·{' '}
                <Link href="/privacy-policy" className="font-semibold text-[#1565FF] hover:underline">Privacy Policy</Link> ·{' '}
                <Link href="/terms-of-service" className="font-semibold text-[#1565FF] hover:underline">Terms of Service</Link> ·{' '}
                <Link href="/delete-account" className="font-semibold text-[#1565FF] hover:underline">Delete Account</Link>
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <a
                href="mailto:support@royalecoachai.com"
                className="flex h-14 w-full max-w-[230px] items-center justify-center rounded-[12px] bg-[#1565FF] px-6 font-['Clash'] text-sm text-white shadow-[0_12px_22px_rgba(21,101,255,0.24)] transition hover:bg-[#0759CC]"
              >
                Contact Support
              </a>
            </div>
          </div>
        </section>

        <section className="relative px-4 pb-10 pt-6 sm:px-6 lg:px-6">
          <div className="relative mx-auto overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0B56E5] via-[#0968F6] to-[#003EBA] px-6 py-8 text-center text-white shadow-[0_22px_55px_rgba(26,108,246,0.24)] md:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(255,255,255,0.24),transparent_32%)]" />
            <div className="relative z-10">
              <h2 className="font-['Clash'] text-[31px] leading-tight md:text-[40px]">Download RoyaleCoach AI</h2>
              <p className="mx-auto mt-3 max-w-xl text-[16px] leading-7 text-blue-50">
                Join Clash Royale players improving with smarter AI coaching.
              </p>
              <div className="mt-6 flex justify-center">
                <AppStoreButtons layout="horizontal" size="md" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
