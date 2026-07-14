import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AppStoreButtons } from '@/components/ui/AppStoreButtons';
import { JsonLd } from '@/components/seo/JsonLd';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/jsonld';
import { buildMeta } from '@/lib/metadata';
import { GUIDES, getGuide } from '@/content/guides';

const GUIDES_PUBLISHED = '2026-07-10';

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return buildMeta({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/guides/${guide.slug}`,
  });
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 font-['Clash'] text-[26px] leading-tight text-[#0D1B2A] md:text-[30px]">
      {children}
    </h2>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[16px] leading-7 text-[#253753]">
          <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1565FF]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <>
      <JsonLd
        data={articleSchema({
          headline: guide.h1,
          description: guide.metaDescription,
          path: `/guides/${guide.slug}`,
          datePublished: GUIDES_PUBLISHED,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Guides', path: '/guides' },
          { name: guide.h1, path: `/guides/${guide.slug}` },
        ])}
      />
      <JsonLd data={faqSchema(guide.faqs)} />

      <main className="relative overflow-hidden bg-[#F9FBFF] text-[#0D1B2A]">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#DDEEFF]/70 blur-3xl" />

        <article className="relative mx-auto max-w-[820px] px-4 pb-12 pt-10 sm:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-1.5 text-xs text-[#71809C]">
            <Link href="/" className="hover:text-[#1565FF]">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-[#1565FF]">Guides</Link>
            <span>/</span>
            <span className="font-medium text-[#0D1B2A]">{guide.category}</span>
          </nav>

          {/* Header */}
          <div className="mb-2 inline-flex rounded-full bg-[#EAF2FF] px-4 py-2 font-['Clash'] text-[12px] uppercase text-[#0759CC]">
            {guide.category} · {guide.readingMinutes} min read
          </div>
          <h1 className="mt-3 font-['Clash'] text-[34px] leading-[1.08] text-[#0D1B2A] sm:text-[44px]">
            {guide.h1}
          </h1>

          {/* Intro */}
          <div className="mt-6 space-y-4">
            {guide.intro.map((p) => (
              <p key={p.slice(0, 40)} className="text-[17px] leading-8 text-[#253753]">{p}</p>
            ))}
          </div>

          {/* Body sections */}
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <SectionHeading>{section.heading}</SectionHeading>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-[16px] leading-8 text-[#253753]">{p}</p>
              ))}
              {section.bullets ? <BulletList items={section.bullets} /> : null}
            </section>
          ))}

          {/* Tips */}
          <section className="mt-10 rounded-[20px] border border-[#D9E8FF] bg-[#EEF6FF] p-6 sm:p-7">
            <h2 className="font-['Clash'] text-[24px] leading-tight text-[#0D1B2A]">{guide.tips.heading}</h2>
            <BulletList items={guide.tips.items} />
          </section>

          {/* Mistakes */}
          <section className="mt-6 rounded-[20px] border border-[#F3E2C0] bg-[#FFF9EC] p-6 sm:p-7">
            <h2 className="font-['Clash'] text-[24px] leading-tight text-[#0D1B2A]">{guide.mistakes.heading}</h2>
            <BulletList items={guide.mistakes.items} />
          </section>

          {/* How RoyaleCoach AI helps */}
          <section>
            <SectionHeading>{guide.appHelp.heading}</SectionHeading>
            {guide.appHelp.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 text-[16px] leading-8 text-[#253753]">{p}</p>
            ))}
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {guide.appHelp.features.map((feature) => (
                <Link
                  key={feature.href}
                  href={feature.href}
                  className="group rounded-[18px] border border-[#E6EDF8] bg-white p-5 shadow-[0_10px_26px_rgba(11,23,48,0.06)] transition hover:-translate-y-0.5 hover:border-[#1565FF]/45 hover:shadow-[0_16px_34px_rgba(26,108,246,0.12)]"
                >
                  <span className="block font-['Clash'] text-[16px] text-[#0D1B2A] group-hover:text-[#1565FF]">
                    {feature.label}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-[#405071]">{feature.description}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section>
            <SectionHeading>Frequently Asked Questions</SectionHeading>
            <div className="mt-5 space-y-4">
              {guide.faqs.map((faq) => (
                <div key={faq.question} className="rounded-[18px] border border-[#E6EDF8] bg-white p-5 shadow-[0_10px_26px_rgba(11,23,48,0.06)]">
                  <h3 className="font-['Clash'] text-[17px] text-[#0D1B2A]">{faq.question}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-[#405071]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="relative mt-10 overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0B56E5] via-[#0968F6] to-[#003EBA] px-6 py-8 text-center text-white shadow-[0_22px_55px_rgba(26,108,246,0.24)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(255,255,255,0.24),transparent_32%)]" />
            <div className="relative z-10">
              <h2 className="font-['Clash'] text-[27px] leading-tight md:text-[32px]">
                Get Your Own AI Coaching Report
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[15px] leading-7 text-blue-50">
                <Link href="/download" className="font-semibold text-white underline underline-offset-2 hover:text-blue-100">Download RoyaleCoach AI</Link> free
                — enter your player tag and get deck analysis, meta insights, and battle coaching. No password, ever.
              </p>
              <div className="mt-6 flex justify-center">
                <AppStoreButtons layout="horizontal" size="md" />
              </div>
            </div>
          </section>

          {/* Related guides */}
          <section className="mt-10">
            <h2 className="font-['Clash'] text-[22px] text-[#0D1B2A]">Keep Reading</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {guide.related.map((rel) => (
                <Link
                  key={rel.href}
                  href={rel.href}
                  className="group flex items-center justify-between gap-3 rounded-[16px] border border-[#E6EDF8] bg-white p-4 shadow-[0_10px_26px_rgba(11,23,48,0.06)] transition hover:-translate-y-0.5 hover:border-[#1565FF]/45"
                >
                  <span className="text-sm font-semibold text-[#0D1B2A] group-hover:text-[#1565FF]">{rel.label}</span>
                  <span aria-hidden="true" className="h-2 w-2 flex-shrink-0 rotate-45 border-r-2 border-t-2 border-[#1565FF]" />
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
