import type { Metadata } from 'next';
import Link from 'next/link';
import { AppStoreButtons } from '@/components/ui/AppStoreButtons';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, webPageSchema } from '@/lib/jsonld';
import { buildMeta } from '@/lib/metadata';
import { GUIDES } from '@/content/guides';

export const metadata: Metadata = buildMeta({
  title: 'Clash Royale Guides',
  description:
    'Free Clash Royale guides: best decks, meta explanations, deck building, Hog 2.6, Log bait, Mega Knight, Lumberloon, and practical tips to climb the ladder.',
  path: '/guides',
});

export default function GuidesIndexPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          'Clash Royale Guides — Decks, Meta, Tips & Stats',
          'Free Clash Royale guides covering decks, the meta, deck building, archetype deep-dives, and improvement tips.',
          '/guides',
        )}
      />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Guides', path: '/guides' }])} />

      <main className="relative overflow-hidden bg-[#F9FBFF] text-[#0D1B2A]">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#DDEEFF]/70 blur-3xl" />

        <section className="relative px-4 pb-4 pt-12 sm:px-6">
          <div className="mx-auto max-w-[1080px] text-center">
            <div className="mb-4 inline-flex rounded-full bg-[#EAF2FF] px-4 py-2 font-['Clash'] text-[13px] uppercase text-[#0759CC]">
              Guides &amp; Strategy
            </div>
            <h1 className="mx-auto max-w-[760px] font-['Clash'] text-[38px] leading-[1.06] text-[#0D1B2A] sm:text-[52px]">
              Clash Royale Guides: Decks, Meta &amp; Tips
            </h1>
            <p className="mx-auto mt-5 max-w-[620px] text-[17px] leading-8 text-[#253753]">
              Practical guides on decks, the meta, deck building, and getting better —
              written to help you climb, with AI coaching one tap away.
            </p>
          </div>
        </section>

        <section className="relative px-4 py-8 sm:px-6">
          <div className="mx-auto grid max-w-[1080px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {GUIDES.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group flex flex-col rounded-[20px] border border-[#E6EDF8] bg-white p-6 shadow-[0_14px_34px_rgba(11,23,48,0.07)] transition hover:-translate-y-1 hover:border-[#1565FF]/45 hover:shadow-[0_20px_44px_rgba(26,108,246,0.14)]"
              >
                <span className="mb-3 inline-flex w-fit rounded-full bg-[#EAF2FF] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#0759CC]">
                  {guide.category}
                </span>
                <h2 className="font-['Clash'] text-[19px] leading-snug text-[#0D1B2A] group-hover:text-[#1565FF]">
                  {guide.h1}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-[#405071]">{guide.cardSummary}</p>
                <span className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#1565FF]">
                  Read guide
                  <span aria-hidden="true" className="h-2 w-2 rotate-45 border-r-2 border-t-2 border-current transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="relative px-4 pb-12 pt-4 sm:px-6">
          <div className="relative mx-auto max-w-[1080px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0B56E5] via-[#0968F6] to-[#003EBA] px-6 py-8 text-center text-white shadow-[0_22px_55px_rgba(26,108,246,0.24)] md:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(255,255,255,0.24),transparent_32%)]" />
            <div className="relative z-10">
              <h2 className="font-['Clash'] text-[29px] leading-tight md:text-[36px]">
                Reading Helps. Coaching on Your Own Battles Helps More.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[15px] leading-7 text-blue-50">
                <Link href="/download" className="font-semibold text-white underline underline-offset-2 hover:text-blue-100">Download RoyaleCoach AI</Link>{' '}
                and get personalized deck analysis from your player tag — free on iOS &amp; Android.
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
