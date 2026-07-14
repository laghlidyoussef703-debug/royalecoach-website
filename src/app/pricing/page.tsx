import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AppStoreButtons } from '@/components/ui/AppStoreButtons';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqSchema, pricingProductSchema } from '@/lib/jsonld';
import { buildMeta } from '@/lib/metadata';

export const metadata: Metadata = buildMeta({
  title: 'RoyaleCoach AI Pricing',
  description:
    'Start free. Upgrade to Pro for $2.99/month for deep AI deck analysis, unlimited deck builds, and full Clash Royale meta decks. Cancel anytime. No hidden fees.',
  path: '/pricing',
});

const PLANS = [
  {
    name: 'Free',
    price: '$0',
    period: 'Forever free',
    subtitle: 'For all players',
    badge: null,
    tone: 'free',
    features: [
      'Basic deck analysis',
      'Deck Builder limited',
      'Meta Decks preview',
      'Top Battles preview',
      'Player Profile',
    ],
    ctaLabel: 'Download Free',
  },
  {
    name: 'Pro',
    price: '$2.99',
    period: '/month',
    subtitle: 'For serious players',
    badge: 'Most Popular',
    tone: 'pro',
    features: [
      'Unlimited Deck Analyses',
      'Unlimited Deck Builder',
      'Advanced Meta Decks',
      'Full Top Battles access',
      'Detailed Player Profile',
      'Advanced AI Insights',
    ],
    ctaLabel: 'Upgrade to Pro',
  },
  {
    name: 'Clan Pro',
    price: '$4.99',
    period: '/month',
    subtitle: 'For clans & leaders',
    badge: 'For Clan Leaders',
    tone: 'clan',
    features: [
      'Everything in Pro',
      'Clan analytics',
      'War & performance tracking',
      'Clan leaderboard',
      'Priority support',
      'New features early access',
    ],
    ctaLabel: 'Upgrade to Clan Pro',
  },
];

const COMPARE_ROWS = [
  { feature: 'Deck Analyses', free: 'Basic', pro: 'Unlimited', clan: 'Unlimited' },
  { feature: 'Deck Builder', free: 'Limited', pro: 'Unlimited', clan: 'Unlimited' },
  { feature: 'Meta Decks', free: 'Preview', pro: 'Advanced', clan: 'Advanced' },
  { feature: 'Top Battles', free: 'Preview', pro: 'Full access', clan: 'Full access' },
  { feature: 'Player Profile', free: 'Included', pro: 'Detailed', clan: 'Detailed + history' },
  { feature: 'Advanced AI Insights', free: 'Not included', pro: 'Included', clan: 'Included' },
  { feature: 'Ads', free: 'No active ad network', pro: 'No ads', clan: 'No ads' },
  { feature: 'Clan Features', free: 'Not included', pro: 'Not included', clan: 'Included' },
  { feature: 'Priority Support', free: 'Not included', pro: 'Not included', clan: 'Included' },
];

const INFO_CARDS = [
  {
    title: 'Managed by Apple & Google',
    desc: 'Secure subscription billing through the App Store and Google Play.',
  },
  {
    title: 'Cancel Anytime',
    desc: 'You control your subscription in your Apple or Google account.',
  },
  {
    title: 'We Never Store Payment Details',
    desc: 'RoyaleCoach AI never receives or stores your payment card details.',
  },
];

const PRICING_FAQ = [
  {
    question: 'Is RoyaleCoach AI free to use?',
    answer: 'Yes. RoyaleCoach AI is free to download and includes a free tier for players who want to start with basic coaching tools.',
  },
  {
    question: 'How does the Pro subscription work?',
    answer: 'Pro unlocks deeper coaching tools for $2.99/month. Subscriptions are managed by Apple or Google and renew unless cancelled before the renewal date.',
  },
  {
    question: 'How can I cancel my subscription?',
    answer: 'Cancel anytime from your App Store or Google Play subscription settings. Your access continues until the end of the current billing period.',
  },
  {
    question: 'Which payment methods do you accept?',
    answer: 'Payments are handled by the App Store and Google Play, so available payment methods depend on your Apple or Google account.',
  },
  {
    question: 'Will I lose my data if I cancel?',
    answer: 'No. Cancelling stops future subscription renewals, but your basic RoyaleCoach AI account and public player data remain available.',
  },
  {
    question: 'Is my data safe?',
    answer: 'Yes. RoyaleCoach AI uses public player data and never stores your payment card details.',
  },
];

function CheckIcon({ tone = 'blue' }: { tone?: 'blue' | 'gold' | 'green' }) {
  const color = tone === 'gold' ? '#D99A00' : tone === 'green' ? '#22A855' : '#1565FF';

  return (
    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: color }} aria-hidden="true">
      <svg viewBox="0 0 16 16" className="h-3 w-3 fill-none stroke-white stroke-[2.6]">
        <path d="m3.2 8.2 3 3.1 6.6-6.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function CompareValue({ value, tone = 'blue' }: { value: string; tone?: 'blue' | 'gold' }) {
  if (value === 'Included' || value === 'Unlimited') {
    return (
      <span className="inline-flex items-center justify-center gap-2 font-bold text-[#1565FF]">
        <CheckIcon tone={tone} />
        {value}
      </span>
    );
  }

  if (value === 'Not included') {
    return <span className="text-[#71809C]">Not included</span>;
  }

  return <span>{value}</span>;
}

function PlanCard({ plan }: { plan: (typeof PLANS)[number] }) {
  const isPro = plan.tone === 'pro';
  const isClan = plan.tone === 'clan';

  return (
    <article
      className={`relative flex min-h-[515px] flex-col rounded-[22px] border bg-white px-6 pb-6 shadow-[0_16px_38px_rgba(11,23,48,0.09)] ${
        plan.badge ? 'pt-10' : 'pt-6'
      } ${
        isPro
          ? 'border-[#1565FF] ring-2 ring-[#1565FF]/10 md:-mt-3 md:min-h-[545px]'
          : isClan
          ? 'border-[#E7B127]/45'
          : 'border-[#E6EDF8]'
      }`}
    >
      {plan.badge ? (
        <div className="absolute -top-4 left-1/2 z-10 w-max max-w-[calc(100%_-_2rem)] -translate-x-1/2">
          <span
            className={`inline-flex max-w-full items-center justify-center whitespace-nowrap rounded-full px-5 py-2 text-center font-['Clash'] text-[12px] leading-none uppercase text-white shadow-[0_10px_20px_rgba(11,23,48,0.16)] ${
              isClan ? 'bg-[#D99A00]' : 'bg-[#1565FF]'
            }`}
          >
            {plan.badge}
          </span>
        </div>
      ) : null}

      <div className="text-center">
        <h2 className={`font-['Clash'] text-[31px] leading-tight ${isPro ? 'text-[#1565FF]' : isClan ? 'text-[#D99A00]' : 'text-[#0D1B2A]'}`}>
          {plan.name}
        </h2>
        <p className="mt-1 text-sm font-semibold text-[#71809C]">{plan.subtitle}</p>
        <div className="mt-5 flex items-end justify-center gap-1">
          <span className={`font-['Clash'] text-[52px] leading-none ${isClan ? 'text-[#D99A00]' : isPro ? 'text-[#1565FF]' : 'text-[#0D1B2A]'}`}>
            {plan.price}
          </span>
          {plan.period === '/month' ? <span className="mb-2 text-sm font-bold text-[#405071]">{plan.period}</span> : null}
        </div>
        <p className="mt-2 text-sm text-[#405071]">{plan.period === '/month' ? 'Cancel anytime' : plan.period}</p>
      </div>

      <ul className="mt-7 flex-1 space-y-0 divide-y divide-[#E9EEF7]">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 py-3 text-sm font-semibold text-[#16233D]">
            <CheckIcon tone={isClan ? 'gold' : isPro ? 'blue' : 'green'} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/download"
        className={`mt-7 flex h-12 items-center justify-center rounded-[12px] px-5 text-center font-['Clash'] text-sm transition ${
          isClan
            ? 'bg-[#D99A00] text-white shadow-[0_12px_22px_rgba(217,154,0,0.22)] hover:bg-[#C98E00]'
            : isPro
            ? 'bg-[#1565FF] text-white shadow-[0_12px_22px_rgba(21,101,255,0.24)] hover:bg-[#0759CC]'
            : 'border border-[#BED3F7] bg-[#F7FAFF] text-[#1565FF] hover:bg-[#EAF2FF]'
        }`}
      >
        {plan.ctaLabel}
      </Link>
    </article>
  );
}

export default function PricingPage() {
  return (
    <>
      <JsonLd data={pricingProductSchema()} />
      <JsonLd data={faqSchema(PRICING_FAQ)} />

      <main className="relative overflow-hidden bg-[#F9FBFF] text-[#0D1B2A]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(21,101,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(21,101,255,0.045)_1px,transparent_1px)] bg-[size:58px_58px]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-[#DDEEFF]/80 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-32 h-80 w-80 rounded-full bg-[#EAF4FF] blur-3xl" />

        <section className="relative px-4 pb-8 pt-10 sm:px-6 lg:px-6 lg:pt-12">
          <div className="mx-auto grid max-w-[1180px] items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative z-10">
              <div className="mb-5 inline-flex rounded-full bg-[#EAF2FF] px-4 py-2 font-['Clash'] text-[13px] uppercase text-[#0759CC] shadow-[0_8px_22px_rgba(26,108,246,0.08)]">
                Pricing
              </div>
              <h1 className="max-w-[560px] font-['Clash'] text-[43px] leading-[1.04] text-[#0D1B2A] sm:text-[58px]">
                Simple, Transparent <span className="text-[#1565FF]">Pricing</span>
              </h1>
              <p className="mt-5 max-w-[520px] text-[17px] leading-8 text-[#253753] sm:text-[18px]">
                Start free, upgrade when you need deeper coaching. Subscriptions are managed securely through the App Store and Google Play.
              </p>
              <div className="mt-6">
                <AppStoreButtons layout="horizontal" size="md" />
              </div>
            </div>

            <div className="relative z-10 flex justify-center lg:justify-end">
              <Image
                src="/assets/pricing/pricing-king.png"
                alt="RoyaleCoach AI subscription plans represented by the King and reward chests"
                width={638}
                height={409}
                sizes="(max-width: 1023px) calc(100vw - 32px), 620px"
                preload
                className="h-auto w-full max-w-[620px] object-contain drop-shadow-[0_28px_32px_rgba(11,23,48,0.12)]"
              />
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto grid max-w-[1040px] gap-6 md:grid-cols-3 md:items-stretch">
            {PLANS.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1040px] rounded-[22px] border border-[#E6EDF8] bg-white p-5 shadow-[0_16px_38px_rgba(11,23,48,0.08)] sm:p-7">
            <h2 className="mb-5 font-['Clash'] text-[24px] text-[#0D1B2A]">Compare Plans</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#E6EDF8]">
                    <th className="px-3 py-3 text-left font-['Clash'] text-[18px] text-[#0D1B2A]">Feature</th>
                    <th className="px-3 py-3 text-center font-['Clash'] text-[18px] text-[#0D1B2A]">Free</th>
                    <th className="px-3 py-3 text-center font-['Clash'] text-[18px] text-[#1565FF]">Pro</th>
                    <th className="px-3 py-3 text-center font-['Clash'] text-[18px] text-[#D99A00]">Clan Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row, index) => (
                    <tr key={row.feature} className={index % 2 === 1 ? 'bg-[#F7FAFF]' : 'bg-white'}>
                      <td className="px-3 py-3 font-semibold text-[#16233D]">{row.feature}</td>
                      <td className="px-3 py-3 text-center text-[#405071]">
                        <CompareValue value={row.free} />
                      </td>
                      <td className="px-3 py-3 text-center font-semibold text-[#1565FF]">
                        <CompareValue value={row.pro} />
                      </td>
                      <td className="px-3 py-3 text-center font-semibold text-[#D99A00]">
                        <CompareValue value={row.clan} tone="gold" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto grid max-w-[1040px] gap-4 rounded-[22px] border border-[#D9E8FF] bg-[#EEF6FF] p-5 shadow-[0_16px_38px_rgba(11,23,48,0.08)] md:grid-cols-3">
            {INFO_CARDS.map((card) => (
              <article key={card.title} className="rounded-[18px] bg-white/50 p-5 md:bg-transparent md:px-4 md:py-3">
                <h2 className="font-['Clash'] text-[17px] leading-tight text-[#0D1B2A]">{card.title}</h2>
                <p className="mt-2 text-[13px] leading-5 text-[#405071]">{card.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1040px]">
            <div className="mx-auto mb-7 max-w-[760px] text-center">
              <p className="mb-2 font-['Clash'] text-xs uppercase text-[#1565FF]">Choose by how you play</p>
              <h2 className="font-['Clash'] text-[28px] leading-tight text-[#0D1B2A] md:text-[34px]">
                Which RoyaleCoach AI Plan Fits You?
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[#405071]">
                The best plan depends on how often you review matches and whether you coach only
                yourself or help manage a clan. Every player can begin with the Free plan, learn
                the workflow, and upgrade inside the app only when the added depth is useful.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <article className="border-t-4 border-[#32B955] bg-white px-5 py-6 shadow-[0_14px_34px_rgba(11,23,48,0.07)]">
                <h3 className="font-['Clash'] text-xl text-[#0D1B2A]">Free for Learning the Basics</h3>
                <p className="mt-3 text-sm leading-7 text-[#405071]">
                  Free suits casual players and anyone testing a Clash Royale coaching app for the
                  first time. Use basic deck analysis to spot obvious balance problems, check your
                  player profile, preview the meta, and try the builder before paying anything.
                </p>
              </article>

              <article className="border-t-4 border-[#1565FF] bg-white px-5 py-6 shadow-[0_14px_34px_rgba(11,23,48,0.07)]">
                <h3 className="font-['Clash'] text-xl text-[#0D1B2A]">Pro for Consistent Practice</h3>
                <p className="mt-3 text-sm leading-7 text-[#405071]">
                  Pro is for active ladder players who compare decks, review losses, and make
                  regular card decisions. Unlimited analyses and builds remove the daily limit,
                  while advanced meta, battle, and profile tools give your practice more context.
                  See how the <Link href="/features/deck-analysis" className="font-semibold text-[#1565FF] hover:underline">deck analysis</Link> works before choosing.
                </p>
              </article>

              <article className="border-t-4 border-[#D99A00] bg-white px-5 py-6 shadow-[0_14px_34px_rgba(11,23,48,0.07)]">
                <h3 className="font-['Clash'] text-xl text-[#0D1B2A]">Clan Pro for Shared Decisions</h3>
                <p className="mt-3 text-sm leading-7 text-[#405071]">
                  Clan Pro is intended for leaders and organized groups that need clan-wide
                  performance, war, and leaderboard context in addition to personal Pro tools. It
                  is the practical choice when coaching decisions affect several members instead
                  of one account.
                </p>
              </article>
            </div>

            <div className="mt-6 border-l-4 border-[#1565FF] bg-[#EEF6FF] px-5 py-5 md:px-7">
              <h3 className="font-['Clash'] text-[20px] text-[#0D1B2A]">Subscription Control Stays With You</h3>
              <p className="mt-3 text-sm leading-7 text-[#405071]">
                Pro and Clan Pro are monthly subscriptions purchased through Apple or Google.
                They renew according to the terms shown by your store until you cancel in your
                App Store or Google Play subscription settings. Cancelling stops a future renewal;
                paid access normally continues through the current billing period. Store policies
                and local pricing can vary, so review the confirmation screen before subscribing.
                Email, Google, or Apple authentication is required to purchase or manage a plan,
                but is not required for normal free use or deck analysis.
                For cancellation and billing answers, visit the <Link href="/faq" className="font-semibold text-[#1565FF] hover:underline">subscription FAQ</Link>.
              </p>
              <p className="mt-3 text-sm leading-7 text-[#405071]">
                Coaching can identify patterns and suggest better decisions, but no plan promises
                a specific trophy total, ranking, or match outcome. You can always <Link href="/download" className="font-semibold text-[#1565FF] hover:underline">download RoyaleCoach AI</Link> and start with Free before deciding whether paid tools fit your routine.
              </p>
            </div>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1040px]">
            <h2 className="mb-6 text-center font-['Clash'] text-[27px] text-[#0D1B2A]">Frequently Asked Questions</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {PRICING_FAQ.map((faq) => (
                <details key={faq.question} className="group rounded-[14px] border border-[#E6EDF8] bg-white px-5 py-4 shadow-[0_10px_24px_rgba(11,23,48,0.05)]">
                  <summary className="cursor-pointer list-none text-sm font-bold text-[#16233D]">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-[#405071]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 pb-10 pt-6 sm:px-6 lg:px-6">
          <div className="relative mx-auto grid max-w-[1040px] items-center gap-5 overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0B56E5] via-[#0968F6] to-[#003EBA] px-6 py-5 text-white shadow-[0_22px_55px_rgba(26,108,246,0.24)] md:grid-cols-[170px_1fr]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_77%_38%,rgba(255,255,255,0.24),transparent_32%)]" />
            <div className="relative z-10 hidden items-end justify-center self-end md:flex">
              <Image
                src="/assets/pricing/king-thumbs-up.png"
                alt=""
                width={180}
                height={140}
                sizes="150px"
                loading="lazy"
                className="h-auto w-full max-w-[150px] object-contain"
              />
            </div>
            <div className="relative z-10 text-center">
              <h2 className="font-['Clash'] text-[28px] leading-tight md:text-[34px]">Start Free &mdash; Upgrade When You&rsquo;re Ready</h2>
              <p className="mt-3 text-[15px] leading-7 text-blue-50">Join Clash Royale players improving with smarter AI coaching.</p>
              <div className="mt-5 flex justify-center">
                <AppStoreButtons layout="horizontal" size="md" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
