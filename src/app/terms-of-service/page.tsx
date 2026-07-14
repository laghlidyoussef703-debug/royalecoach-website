import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { buildMeta } from '@/lib/metadata';

export const metadata: Metadata = buildMeta({
  title: 'Terms of Service — RoyaleCoach AI',
  description:
    'Read the RoyaleCoach AI Terms of Service covering anonymous use, linked accounts, subscriptions, AI recommendations, acceptable use, and governing law.',
  path: '/terms-of-service',
});

const LAST_UPDATED = 'July 10, 2026';

function SectionCard({
  number,
  title,
  children,
  prominent = false,
}: {
  number: string;
  title: string;
  children: ReactNode;
  prominent?: boolean;
}) {
  return (
    <section className={`rounded-[22px] border bg-white p-6 shadow-[0_16px_38px_rgba(11,23,48,0.08)] md:p-8 ${prominent ? 'border-[#1565FF]/30 ring-2 ring-[#1565FF]/10' : 'border-[#E6EDF8]'}`}>
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#1565FF] font-['Clash'] text-sm text-white">{number}</span>
        <h2 className="font-['Clash'] text-[25px] leading-tight text-[#0D1B2A]">{title}</h2>
      </div>
      <div className="space-y-4 text-[15px] leading-7 text-[#405071]">{children}</div>
    </section>
  );
}

export default function TermsOfServicePage() {
  return (
    <main className="relative overflow-hidden bg-[#F9FBFF] text-[#0D1B2A]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(21,101,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(21,101,255,0.045)_1px,transparent_1px)] bg-[size:58px_58px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-[#DDEEFF]/80 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-32 h-80 w-80 rounded-full bg-[#EAF4FF] blur-3xl" />

      <section className="relative px-4 pb-8 pt-12 sm:px-6 lg:px-6">
        <div className="mx-auto grid max-w-[1100px] items-center gap-8 lg:grid-cols-[0.98fr_1.02fr]">
          <div>
            <h1 className="font-['Clash'] text-[44px] leading-tight text-[#0D1B2A] sm:text-[60px]">Terms of Service</h1>
            <p className="mt-4 text-sm font-semibold text-[#1565FF]">Last Updated: {LAST_UPDATED}</p>
            <p className="mt-6 max-w-[610px] text-[17px] leading-8 text-[#253753]">
              These Terms govern your use of the RoyaleCoach AI app, website, and related services provided by Veltrix LLC.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assets/legal/terms-king.png"
              alt="RoyaleCoach AI terms of service and user agreement"
              width={638}
              height={409}
              sizes="(max-width: 1023px) calc(100vw - 32px), 560px"
              preload
              className="h-auto w-full max-w-[560px] object-contain drop-shadow-[0_28px_32px_rgba(11,23,48,0.12)]"
            />
          </div>
        </div>
      </section>

      <div className="relative mx-auto max-w-[1100px] space-y-6 px-4 pb-12 sm:px-6 lg:px-6">
        <SectionCard number="1" title="Agreement and Operator" prominent>
          <p>
            RoyaleCoach AI is a product developed, owned, and operated by <strong>Veltrix LLC</strong>, a Wyoming limited liability company. References to “RoyaleCoach AI,” “we,” “us,” or “our” in these Terms refer to Veltrix LLC as the provider of the Services.
          </p>
          <p>By accessing or using the Services, you agree to these Terms and our <Link href="/privacy-policy" className="font-semibold text-[#1565FF] hover:underline">Privacy Policy</Link>. If you do not agree, do not use the Services.</p>
        </SectionCard>

        <SectionCard number="2" title="Anonymous Sessions and Linked Accounts">
          <p>
            RoyaleCoach AI supports anonymous sessions for ordinary use. You can access normal app functionality, including deck analysis, without creating a traditional account and without providing a password.
          </p>
          <p>
            Email, Google, or Apple linking or sign-in is required when purchasing, restoring, or managing a subscription. You are responsible for maintaining access to the linked authentication method and for the activity associated with your profile.
          </p>
          <p>
            RoyaleCoach AI does not ask you to provide Google or Apple passwords. Never send passwords, verification codes, API tokens, or private authentication secrets to support.
          </p>
        </SectionCard>

        <SectionCard number="3" title="Service and AI Recommendations">
          <p>
            RoyaleCoach AI uses available public player data and automated systems to provide deck analysis, deck-building suggestions, player insights, battle learning, clan tools, and strategy recommendations.
          </p>
          <p className="font-semibold text-[#0D1B2A]">
            AI-generated recommendations are informational and educational. They do not guarantee wins, trophies, rankings, improvement, or any other gameplay result.
          </p>
          <p>Recommendations may be incomplete, unavailable, or incorrect. You remain responsible for gameplay, upgrade, purchase, and account decisions.</p>
        </SectionCard>

        <SectionCard number="4" title="Subscriptions and Billing" prominent>
          <p>Some features require a Pro or Clan Pro subscription.</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Subscriptions are purchased and billed through Apple App Store or Google Play.</li>
            <li>Available pricing and billing terms are shown before purchase and may vary by country or store.</li>
            <li>Subscriptions renew according to the terms shown by Apple or Google unless canceled through the applicable store.</li>
            <li>Refund requests are handled by Apple or Google under their policies.</li>
            <li>Veltrix LLC does not receive or store payment card details.</li>
            <li>Deleting a RoyaleCoach AI profile does not automatically cancel a subscription.</li>
          </ul>
        </SectionCard>

        <SectionCard number="5" title="Acceptable Use">
          <p>You may use RoyaleCoach AI only for lawful, personal purposes consistent with these Terms.</p>
          <p>You must not:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Attempt unauthorized access to the Services, another user’s profile, or connected infrastructure.</li>
            <li>Interfere with, overload, damage, or circumvent security or access controls.</li>
            <li>Reverse engineer, scrape, copy, resell, or commercially exploit the Services except as permitted by law or written authorization.</li>
            <li>Use the Services for fraud, abuse, harassment, spam, unlawful activity, or infringement of another party’s rights.</li>
            <li>Submit malicious code, false information, stolen credentials, or data you are not authorized to use.</li>
          </ul>
        </SectionCard>

        <SectionCard number="6" title="Suspension, Termination, and Deletion">
          <p>
            We may restrict, suspend, or terminate access when reasonably necessary to address a violation of these Terms, fraud, abuse, security risk, legal requirement, or harm to the Services or others.
          </p>
          <p>You may stop using RoyaleCoach AI at any time and may request profile deletion through the in-app option or the <Link href="/delete-account" className="font-semibold text-[#1565FF] hover:underline">Delete Account page</Link>.</p>
          <p>Sections that by their nature should survive termination, including intellectual property, disclaimers, liability limitations, and governing law, remain effective.</p>
        </SectionCard>

        <SectionCard number="7" title="Intellectual Property">
          <p>
            RoyaleCoach AI software, branding, original text, interfaces, design elements, and other original materials are owned by Veltrix LLC or its licensors and are protected by applicable intellectual property laws.
          </p>
          <p>These Terms provide a limited, revocable, non-transferable right to use the Services. They do not transfer ownership of any intellectual property.</p>
        </SectionCard>

        <SectionCard number="8" title="Service Availability and Changes">
          <p>
            We may maintain, update, add, remove, suspend, or discontinue features when reasonably necessary for product, technical, security, legal, or business reasons.
          </p>
          <p>The Services may be interrupted by maintenance, network conditions, app-store services, public game-data availability, third-party systems, or events outside our reasonable control.</p>
          <p>We do not guarantee that the Services or any particular feature will always be available, uninterrupted, or error-free.</p>
        </SectionCard>

        <SectionCard number="9" title="Disclaimers and Limitation of Liability">
          <p>The Services are provided “as is” and “as available” to the maximum extent permitted by law.</p>
          <p>
            To the maximum extent permitted by applicable law, Veltrix LLC and its affiliates, officers, employees, contractors, and licensors are not liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost data, revenue, profits, trophies, rankings, gameplay results, or business opportunities arising from use of the Services.
          </p>
          <p>Nothing in these Terms excludes liability that cannot lawfully be excluded or limited.</p>
        </SectionCard>

        <SectionCard number="10" title="Governing Law" prominent>
          <p className="font-semibold text-[#0D1B2A]">
            These Terms are governed by and construed in accordance with the laws of the State of Wyoming, United States, without regard to its conflict-of-law principles.
          </p>
        </SectionCard>

        <SectionCard number="11" title="Independent App — No Supercell Affiliation">
          <p className="font-semibold text-[#0D1B2A]">
            RoyaleCoach AI is an independent companion app and is not affiliated with, endorsed by, sponsored by, or officially connected to Supercell Oy.
          </p>
          <p>Clash Royale names, images, game content, trademarks, and related materials belong to their respective owners, including Supercell Oy.</p>
        </SectionCard>

        <SectionCard number="12" title="Changes and Contact">
          <p>We may update these Terms from time to time. The Last Updated date identifies the current version.</p>
          <p>
            Questions about these Terms can be sent to <a href="mailto:support@royalecoachai.com" className="font-semibold text-[#1565FF] hover:underline">support@royalecoachai.com</a>. Veltrix LLC normally responds within 2&ndash;5 business days.
          </p>
          <p>See also our <Link href="/privacy-policy" className="font-semibold text-[#1565FF] hover:underline">Privacy Policy</Link>, <Link href="/delete-account" className="font-semibold text-[#1565FF] hover:underline">Delete Account page</Link>, and <Link href="/contact" className="font-semibold text-[#1565FF] hover:underline">Contact page</Link>.</p>
        </SectionCard>
      </div>
    </main>
  );
}
