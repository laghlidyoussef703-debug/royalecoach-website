import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, webPageSchema } from '@/lib/jsonld';
import { buildMeta } from '@/lib/metadata';

export const metadata: Metadata = buildMeta({
  title: 'About RoyaleCoach AI',
  description:
    'Learn about RoyaleCoach AI, the independent Clash Royale companion app developed, owned, and operated by Veltrix LLC.',
  path: '/about',
});

const CAPABILITIES = [
  {
    title: 'Personal Coaching',
    text: 'Turn public player data into practical deck analysis, upgrade priorities, battle learning, and strategy recommendations.',
  },
  {
    title: 'Better Deck Decisions',
    text: 'Build and compare decks using a player’s actual card collection, levels, profile context, and current strategy needs.',
  },
  {
    title: 'Clear Player Insights',
    text: 'Make trophies, recent battles, card levels, meta trends, and player statistics easier to understand and use.',
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          'About RoyaleCoach AI',
          'RoyaleCoach AI is an independent Clash Royale companion app developed, owned, and operated by Veltrix LLC.',
          '/about',
        )}
      />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])} />

      <main className="relative overflow-hidden bg-[#F9FBFF] text-[#0D1B2A]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(21,101,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(21,101,255,0.045)_1px,transparent_1px)] bg-[size:58px_58px]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-[#DDEEFF]/80 blur-3xl" />

        <section className="relative px-4 pb-10 pt-10 sm:px-6 lg:px-6 lg:pt-12">
          <div className="mx-auto max-w-[1100px]">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-xs text-[#71809C]">
              <Link href="/" className="hover:text-[#1565FF]">Home</Link>
              <span>/</span>
              <span className="font-medium text-[#0D1B2A]">About</span>
            </nav>

            <div className="grid items-center gap-8 lg:grid-cols-[0.96fr_1.04fr]">
              <div className="relative z-10">
                <p className="mb-4 inline-flex rounded-full bg-[#EAF3FF] px-4 py-2 font-['Clash'] text-xs uppercase text-[#1565FF]">
                  About RoyaleCoach AI
                </p>
                <h1 className="font-['Clash'] text-[42px] leading-tight text-[#0D1B2A] sm:text-[58px]">
                  Smarter Coaching for <span className="text-[#1565FF]">Clash Royale Players</span>
                </h1>
                <p className="mt-6 max-w-[610px] text-[17px] leading-8 text-[#253753]">
                  RoyaleCoach AI is an independent companion app that helps players understand their decks, battles, card progress, and next strategic decisions.
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/assets/home/section2.png"
                  alt="RoyaleCoach AI coaching app home screen"
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

        <section className="relative px-4 py-8 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1000px]">
            <div className="mx-auto max-w-[780px] text-center">
              <p className="font-['Clash'] text-xs uppercase text-[#1565FF]">Our mission</p>
              <h2 className="mt-3 font-['Clash'] text-[30px] leading-tight text-[#0D1B2A] md:text-[38px]">
                Make Useful Coaching Easier to Access
              </h2>
              <p className="mt-4 text-[16px] leading-8 text-[#405071]">
                Our mission is to help Clash Royale players replace guesswork with clear, relevant feedback. RoyaleCoach AI combines public player information with AI-powered analysis so players can identify deck weaknesses, build around their real collection, learn from battles, and make more deliberate upgrade and strategy choices.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {CAPABILITIES.map((item) => (
                <article key={item.title} className="rounded-[18px] border border-[#E6EDF8] bg-white p-6 shadow-[0_14px_34px_rgba(11,23,48,0.07)]">
                  <h3 className="font-['Clash'] text-[20px] text-[#0D1B2A]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#405071]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 py-10 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1000px] rounded-[22px] border border-[#D9E8FF] bg-[#EEF6FF] p-6 shadow-[0_16px_38px_rgba(11,23,48,0.08)] md:p-8">
            <h2 className="font-['Clash'] text-[28px] text-[#0D1B2A]">About Veltrix LLC</h2>
            <p className="mt-4 text-[16px] leading-8 text-[#405071]">
              RoyaleCoach AI is developed, owned, and operated by Veltrix LLC, a Wyoming limited liability company. We build AI-powered tools that help Clash Royale players improve through deck analysis, deck building, player insights, battle learning, and strategy recommendations.
            </p>
            <p className="mt-3 text-[16px] leading-8 text-[#405071]">
              For product or company questions, contact <a href="mailto:support@royalecoachai.com" className="font-semibold text-[#1565FF] hover:underline">support@royalecoachai.com</a> or visit our <Link href="/contact" className="font-semibold text-[#1565FF] hover:underline">Contact page</Link>.
            </p>
          </div>
        </section>

        <section className="relative px-4 pb-12 sm:px-6 lg:px-6">
          <div className="mx-auto max-w-[1000px] rounded-[22px] border border-[#E6EDF8] bg-white p-6 shadow-[0_16px_38px_rgba(11,23,48,0.08)] md:p-8">
            <h2 className="font-['Clash'] text-[24px] text-[#0D1B2A]">Independent App Disclaimer</h2>
            <p className="mt-3 text-[15px] leading-7 text-[#405071]">
              RoyaleCoach AI is an independent companion app and is not affiliated with, endorsed by, sponsored by, or officially connected to Supercell Oy. Clash Royale and related trademarks are the property of Supercell Oy.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
