import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { JsonLd } from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/jsonld';
import { buildMeta } from '@/lib/metadata';

export const metadata: Metadata = buildMeta({
  title: 'RoyaleCoach AI Affiliate Program',
  description:
    'Partner with RoyaleCoach AI and help Clash Royale players discover AI coaching. Apply to our creator and affiliate program.',
  path: '/affiliate',
});

const audienceCards = [
  {
    title: 'Content Creators',
    text: 'YouTube, TikTok, Instagram, and short-form creators who make Clash Royale content.',
  },
  {
    title: 'Streamers',
    text: 'Twitch, YouTube Live, and Kick streamers who connect with Clash Royale players.',
  },
  {
    title: 'Community Managers',
    text: 'Discord, clan, and community owners focused on Clash Royale.',
  },
  {
    title: 'Bloggers & Writers',
    text: 'Writers creating guides, articles, reviews, or tutorials about Clash Royale.',
  },
];

const steps = [
  {
    title: 'Apply',
    text: 'Send your application and tell us about your audience.',
  },
  {
    title: 'Get Approved',
    text: 'If accepted, we will provide partner details and promotional assets.',
  },
  {
    title: 'Earn Rewards',
    text: 'Earn rewards based on the active partner terms.',
  },
];

const benefits = [
  {
    title: 'Earn Rewards',
    text: 'Partner rewards based on successful referrals or agreed campaign terms.',
  },
  {
    title: 'Free Pro Access',
    text: 'Active partners may receive Pro access.',
  },
  {
    title: 'Tracking & Dashboard',
    text: 'Tracking/dashboard may be provided when available.',
  },
  {
    title: 'Partner Support',
    text: 'Get support for approved partner campaigns.',
  },
];

const rules = [
  'You must clearly disclose that RoyaleCoach AI is an independent companion app.',
  'Do not claim RoyaleCoach AI is affiliated with, endorsed by, sponsored by, or officially connected to Supercell Oy.',
  'Do not promise guaranteed wins, trophies, rankings, or results.',
  'Do not promote hacks, cheats, exploits, mods, bypasses, or unfair advantages.',
  'Do not spam, mislead users, or misuse the RoyaleCoach AI brand.',
  'Follow FTC, ASA, and other applicable disclosure rules.',
  'RoyaleCoach AI may refuse, suspend, or terminate any partnership that violates the rules.',
];

const faqItems = [
  {
    question: 'How do I join the program?',
    answer:
      'Email support@royalecoachai.com with subject “Affiliate Application” and include your channels, audience size, and why you want to partner.',
  },
  {
    question: 'Who can apply?',
    answer:
      'Creators, streamers, Discord/community managers, bloggers, and Clash Royale content pages can apply.',
  },
  {
    question: 'Do I get a special link?',
    answer: 'Approved partners may receive partner tracking details when the program is active.',
  },
  {
    question: 'How do rewards work?',
    answer: 'Rewards depend on the approved partner terms and campaign setup.',
  },
  {
    question: 'Can I promote on multiple platforms?',
    answer: 'Yes, approved partners may promote on multiple channels if they follow the rules.',
  },
  {
    question: 'What claims are not allowed?',
    answer: 'No official Supercell claims, no guaranteed wins, and no hack/cheat/exploit claims.',
  },
];

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-9 max-w-[720px] text-center">
      {eyebrow ? (
        <p className="mb-3 font-['Clash'] text-xs uppercase tracking-[0.22em] text-[#1565FF]">{eyebrow}</p>
      ) : null}
      <h2 className="font-['Clash'] text-[32px] leading-tight text-[#0D1B2A] sm:text-[40px]">{title}</h2>
      {text ? <p className="mt-3 text-[16px] leading-7 text-[#405071]">{text}</p> : null}
    </div>
  );
}

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[20px] border border-[#E6EDF8] bg-white p-6 shadow-[0_16px_38px_rgba(11,23,48,0.08)]">
      {children}
    </div>
  );
}

function NumberBadge({ value }: { value: number }) {
  return (
    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#1565FF] font-['Clash'] text-sm text-white">
      {value}
    </span>
  );
}

export default function AffiliatePage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          'Affiliate & Creator Program — RoyaleCoach AI',
          'Partner with RoyaleCoach AI and help Clash Royale players discover AI coaching.',
          '/affiliate',
        )}
      />

      <main className="relative overflow-hidden bg-[#F9FBFF] text-[#0D1B2A]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(21,101,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(21,101,255,0.045)_1px,transparent_1px)] bg-[size:58px_58px]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-[#DDEEFF]/80 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-32 h-80 w-80 rounded-full bg-[#EAF4FF] blur-3xl" />

        <section className="relative px-4 pb-12 pt-12 sm:px-6 lg:px-6">
          <div className="mx-auto grid max-w-[1100px] items-center gap-8 lg:grid-cols-[0.96fr_1.04fr]">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-[#EAF3FF] px-4 py-2 font-['Clash'] text-xs uppercase tracking-[0.18em] text-[#1565FF]">
                Affiliate & Creator Program
              </p>
              <h1 className="font-['Clash'] text-[42px] leading-tight text-[#0D1B2A] sm:text-[58px]">
                Partner With RoyaleCoach AI — Grow Together
              </h1>
              <p className="mt-6 max-w-[610px] text-[17px] leading-8 text-[#253753]">
                Join our creator and partner program and help Clash Royale players discover smarter AI coaching.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:support@royalecoachai.com?subject=Affiliate%20Application"
                  className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#1565FF] px-6 font-['Clash'] text-sm text-white shadow-[0_12px_24px_rgba(21,101,255,0.24)] transition hover:-translate-y-0.5 hover:bg-[#0D55DD]"
                >
                  Apply to Partner Program
                </a>
                <a
                  href="#learn-more"
                  className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-[#D7E4F7] bg-white px-6 font-['Clash'] text-sm text-[#1565FF] shadow-[0_8px_18px_rgba(11,23,48,0.08)] transition hover:-translate-y-0.5"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src="/assets/affiliate/affiliate-hero.png"
                alt="RoyaleCoach AI creator and affiliate partnership program"
                width={640}
                height={408}
                sizes="(max-width: 1023px) calc(100vw - 32px), 560px"
                preload
                className="h-auto w-full max-w-[560px] object-contain drop-shadow-[0_28px_32px_rgba(11,23,48,0.12)]"
              />
            </div>
          </div>
        </section>

        <div id="learn-more" className="relative mx-auto max-w-[1100px] space-y-16 px-4 pb-12 sm:px-6 lg:px-6">
          <section>
            <SectionHeader title="Who This Is For" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {audienceCards.map((item) => (
                <Card key={item.title}>
                  <h3 className="font-['Clash'] text-[20px] leading-tight text-[#0D1B2A]">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[#405071]">{item.text}</p>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <SectionHeader title="How It Works" />
            <div className="grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => (
                <Card key={step.title}>
                  <div className="mb-4 flex items-center gap-3">
                    <NumberBadge value={index + 1} />
                    <h3 className="font-['Clash'] text-[20px] text-[#0D1B2A]">{step.title}</h3>
                  </div>
                  <p className="text-[15px] leading-7 text-[#405071]">{step.text}</p>
                </Card>
              ))}
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="font-['Clash'] text-xs uppercase text-[#1565FF]">Application details</p>
              <h2 className="mt-3 font-['Clash'] text-[30px] leading-tight text-[#0D1B2A] md:text-[36px]">
                What to Include When You Apply
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-[#405071]">
                Applications are reviewed for audience fit, content quality, and a creator&rsquo;s
                ability to describe RoyaleCoach AI accurately. A large following is not the only
                consideration: focused guides, useful community discussions, and a trusted niche
                audience can also make a strong application.
              </p>
              <p className="mt-3 text-[15px] leading-7 text-[#405071]">
                Email the channels you manage, approximate audience size, primary countries and
                languages, examples of recent Clash Royale content, and the formats you want to
                use. Explain whether you plan a review, tutorial, stream segment, newsletter,
                community post, or another clearly disclosed promotion.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="border-l-4 border-[#1565FF] bg-white p-5 shadow-[0_14px_34px_rgba(11,23,48,0.07)]">
                <h3 className="font-['Clash'] text-[19px] text-[#0D1B2A]">Show the Real Product</h3>
                <p className="mt-3 text-sm leading-7 text-[#405071]">
                  Demonstrate relevant app screens such as deck analysis, deck building, meta
                  decks, top battles, or player stats. Creators can <Link href="/download" className="font-semibold text-[#1565FF] hover:underline">download the coaching app</Link> first to understand what their audience will see.
                </p>
              </article>
              <article className="border-l-4 border-[#32B955] bg-white p-5 shadow-[0_14px_34px_rgba(11,23,48,0.07)]">
                <h3 className="font-['Clash'] text-[19px] text-[#0D1B2A]">Use Audience-First Channels</h3>
                <p className="mt-3 text-sm leading-7 text-[#405071]">
                  Approved promotion may include videos, livestreams, blogs, social posts,
                  newsletters, Discord communities, or clan resources. Each placement should be
                  relevant, clearly disclosed, and useful without unsolicited messages.
                </p>
              </article>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[22px] border border-[#DCEAFF] bg-[#EEF6FF] p-6 shadow-[0_16px_38px_rgba(11,23,48,0.08)] md:p-8">
              <h2 className="font-['Clash'] text-[30px] text-[#0D1B2A]">Benefits</h2>
              <p className="mt-2 text-[15px] leading-7 text-[#405071]">
                Details may vary by campaign and approval status.
              </p>
              <div className="mt-6 space-y-5">
                {benefits.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-['Clash'] text-[18px] text-[#0D1B2A]">{item.title}</h3>
                    <p className="mt-1 text-[15px] leading-7 text-[#405071]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[22px] border border-[#F4DFA8] bg-[#FFF8E7] p-6 shadow-[0_16px_38px_rgba(11,23,48,0.08)] md:p-8">
              <h2 className="font-['Clash'] text-[30px] text-[#0D1B2A]">Affiliate Rules</h2>
              <div className="mt-6 space-y-4">
                {rules.map((rule) => (
                  <div key={rule} className="flex gap-3 text-[15px] leading-7 text-[#253753]">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#F4B22A]" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-[#D9E8FF] bg-[#F2F7FF] px-5 py-8 md:px-8">
            <div className="grid gap-7 lg:grid-cols-2">
              <div>
                <h2 className="font-['Clash'] text-[27px] leading-tight text-[#0D1B2A]">Partner Responsibilities</h2>
                <p className="mt-3 text-[15px] leading-7 text-[#405071]">
                  Partners are responsible for honest demonstrations, visible advertising or
                  affiliate disclosures, and keeping descriptions consistent with the current
                  app. Promotions must not imply a relationship with Supercell or promise a
                  particular gameplay result. Partners should also respect platform rules,
                  intellectual property, audience privacy, and any campaign instructions supplied
                  after approval.
                </p>
              </div>
              <div>
                <h2 className="font-['Clash'] text-[27px] leading-tight text-[#0D1B2A]">Rewards and Terms May Vary</h2>
                <p className="mt-3 text-[15px] leading-7 text-[#405071]">
                  Approval does not guarantee a fixed commission, free access, dashboard, campaign,
                  or duration. Available rewards, attribution methods, eligibility, payment timing,
                  and geographic limits may vary by partner and campaign. The written terms shared
                  at approval govern each arrangement and may be updated or ended according to
                  those terms. Review the <Link href="/terms-of-service" className="font-semibold text-[#1565FF] hover:underline">RoyaleCoach AI terms</Link> and <Link href="/faq" className="font-semibold text-[#1565FF] hover:underline">program FAQ</Link> before applying.
                </p>
              </div>
            </div>
          </section>

          <section>
            <SectionHeader title="Affiliate FAQ" />
            <div className="grid gap-4 lg:grid-cols-2">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[18px] border border-[#E6EDF8] bg-white p-5 shadow-[0_12px_28px_rgba(11,23,48,0.06)]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-['Clash'] text-[16px] text-[#0D1B2A]">
                    {item.question}
                    <span className="text-[#1565FF] transition group-open:rotate-180" aria-hidden="true">
                      v
                    </span>
                  </summary>
                  <p className="mt-4 text-[15px] leading-7 text-[#405071]">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="overflow-hidden rounded-[24px] bg-[#1565FF] p-6 shadow-[0_18px_42px_rgba(21,101,255,0.22)] md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-['Clash'] text-[30px] leading-tight text-white">Ready to grow with us?</h2>
                <p className="mt-2 max-w-[560px] text-[16px] leading-7 text-[#DCEAFF]">
                  Apply now and tell us about your audience.
                </p>
              </div>
              <a
                href="mailto:support@royalecoachai.com?subject=Affiliate%20Application"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-5 font-['Clash'] text-sm text-[#1565FF] shadow-[0_8px_18px_rgba(11,23,48,0.16)] transition hover:-translate-y-0.5"
              >
                support@royalecoachai.com
              </a>
            </div>
          </section>

          <section className="rounded-[22px] border border-[#E6EDF8] bg-white p-6 shadow-[0_16px_38px_rgba(11,23,48,0.08)] md:p-8">
            <h2 className="font-['Clash'] text-[24px] text-[#0D1B2A]">Important Disclaimer</h2>
            <p className="mt-3 text-[15px] leading-7 text-[#405071]">
              RoyaleCoach AI is an independent companion app and is not affiliated with, endorsed by, sponsored by, or officially connected to Supercell Oy in any way. Clash Royale® is a registered trademark of Supercell Oy.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
              <Link href="/pricing" className="text-[#1565FF] hover:underline">Pricing</Link>
              <Link href="/faq" className="text-[#1565FF] hover:underline">FAQ</Link>
              <Link href="/download" className="text-[#1565FF] hover:underline">Download</Link>
              <Link href="/terms-of-service" className="text-[#1565FF] hover:underline">Terms of Service</Link>
              <a href="mailto:support@royalecoachai.com" className="text-[#1565FF] hover:underline">support@royalecoachai.com</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
