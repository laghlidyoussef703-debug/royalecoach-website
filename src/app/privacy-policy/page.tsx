import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { buildMeta } from '@/lib/metadata';

export const metadata: Metadata = buildMeta({
  title: 'Privacy Policy — RoyaleCoach AI',
  description:
    "Read RoyaleCoach AI's Privacy Policy. Learn what data we process, how anonymous and linked sessions work, how long data is retained, and your rights.",
  path: '/privacy-policy',
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
        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#1565FF] font-['Clash'] text-sm text-white">
          {number}
        </span>
        <h2 className="font-['Clash'] text-[25px] leading-tight text-[#0D1B2A]">{title}</h2>
      </div>
      <div className="space-y-4 text-[15px] leading-7 text-[#405071]">{children}</div>
    </section>
  );
}

function Subsection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-[16px] border border-[#E6EDF8] bg-[#FBFDFF] p-4">
      <h3 className="font-['Clash'] text-[17px] text-[#0D1B2A]">{title}</h3>
      <div className="mt-2 space-y-2">{children}</div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden bg-[#F9FBFF] text-[#0D1B2A]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(21,101,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(21,101,255,0.045)_1px,transparent_1px)] bg-[size:58px_58px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-[#DDEEFF]/80 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-32 h-80 w-80 rounded-full bg-[#EAF4FF] blur-3xl" />

      <section className="relative px-4 pb-8 pt-12 sm:px-6 lg:px-6">
        <div className="mx-auto grid max-w-[1100px] items-center gap-8 lg:grid-cols-[0.98fr_1.02fr]">
          <div>
            <h1 className="font-['Clash'] text-[44px] leading-tight text-[#0D1B2A] sm:text-[60px]">Privacy Policy</h1>
            <p className="mt-4 text-sm font-semibold text-[#1565FF]">Last Updated: {LAST_UPDATED}</p>
            <p className="mt-6 max-w-[610px] text-[17px] leading-8 text-[#253753]">
              This Privacy Policy explains how Veltrix LLC processes information when you use the RoyaleCoach AI app, website, and related services.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assets/legal/privacy-king.png"
              alt="RoyaleCoach AI privacy and personal data protection"
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
        <SectionCard number="1" title="Who We Are" prominent>
          <p><strong>RoyaleCoach AI is owned and operated by Veltrix LLC</strong>, a Wyoming limited liability company.</p>
          <p>RoyaleCoach AI is the customer-facing product brand used throughout this Policy.</p>
        </SectionCard>

        <SectionCard number="2" title="Information We Process">
          <Subsection title="a) Anonymous Session and Internal Identifier">
            <p>
              Users can initially use RoyaleCoach AI through an anonymous session without creating a traditional account. An anonymous internal identifier may be associated with a Clash Royale player tag, app settings, analysis data, usage records, and subscription status.
            </p>
          </Subsection>

          <Subsection title="b) Player Tag and Public Player Data">
            <p>
              You may provide a Clash Royale player tag. We use it to access available public player information such as decks, cards, trophies, clan information, and battle history for app features and coaching analysis.
            </p>
          </Subsection>

          <Subsection title="c) Linked Authentication Information">
            <p>
              Email, Google, or Apple authentication is not required for normal app use or deck analysis. You may be required to link or sign in with one of these methods when purchasing, restoring, or managing a subscription.
            </p>
            <p>
              When you link an account, we may process the email address, provider identifier, provider type, and basic profile information authorized by that provider. RoyaleCoach AI does not ask you to provide your Google or Apple password and does not receive those provider passwords.
            </p>
          </Subsection>

          <Subsection title="d) Subscription Information">
            <p>
              Apple App Store and Google Play process subscription purchases. We may receive subscription status, entitlement, product, renewal, expiration, and transaction-reference information needed to provide and support paid features. We do not receive or store payment card details.
            </p>
          </Subsection>

          <Subsection title="e) App Usage, Diagnostics, and Communications">
            <p>
              We may process feature usage, analysis history, app settings, device and app version, crash or error information, notification preferences, and support correspondence to operate, secure, troubleshoot, and improve RoyaleCoach AI.
            </p>
          </Subsection>
        </SectionCard>

        <SectionCard number="3" title="How We Use Information">
          <ul className="list-disc space-y-2 pl-5">
            <li>Provide anonymous sessions and linked account functionality.</li>
            <li>Load public player information and generate requested coaching analysis.</li>
            <li>Save app settings, analysis data, and player-specific preferences.</li>
            <li>Confirm and manage subscription entitlements.</li>
            <li>Operate, secure, troubleshoot, and improve the Services.</li>
            <li>Respond to support, privacy, billing, and deletion requests.</li>
            <li>Prevent fraud, abuse, and unauthorized access.</li>
            <li>Comply with legal obligations and enforce our agreements.</li>
          </ul>
          <p className="rounded-[16px] border border-[#D9E8FF] bg-[#F1F7FF] p-4 font-semibold text-[#0D1B2A]">
            We do not sell personal information or share it with third parties for their independent marketing purposes.
          </p>
        </SectionCard>

        <SectionCard number="4" title="Advertising">
          <p>
            RoyaleCoach AI does not currently use a third-party advertising network in the production app. We do not describe advertising identifiers, ad interaction data, or advertising-network collection as current production behavior.
          </p>
          <p>
            If advertising services are introduced in the future, this Privacy Policy will be updated before or when those services become active.
          </p>
        </SectionCard>

        <SectionCard number="5" title="Service Providers">
          <p>We may use service providers to operate specific parts of RoyaleCoach AI, including:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Infrastructure and authentication services that support anonymous and linked sessions.</li>
            <li>Public game-data services used to retrieve information associated with a player tag.</li>
            <li>Apple App Store, Google Play, and subscription-management services used to process and verify subscriptions.</li>
            <li>Hosting, diagnostics, notification, security, and support services used to operate the app and website.</li>
          </ul>
          <p>Providers receive only the information reasonably necessary to perform services for us and are subject to their own terms and privacy practices.</p>
        </SectionCard>

        <SectionCard number="6" title="Data Retention" prominent>
          <p>
            We retain information only for as long as reasonably necessary to provide the Services, maintain account and subscription functionality, support users, protect security, prevent fraud, resolve disputes, and comply with legal obligations.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>Anonymous or linked profile data:</strong> Retained while the profile is active and then deleted or anonymized after a valid deletion request, subject to the exceptions below.</li>
            <li><strong>Subscription and transaction references:</strong> May be retained as needed for billing support, accounting, fraud prevention, disputes, and legal compliance.</li>
            <li><strong>Support and security records:</strong> Retained for as long as reasonably necessary to resolve the request, protect the Services, or meet legal obligations.</li>
            <li><strong>Aggregated or de-identified data:</strong> May be retained when it no longer identifies an individual.</li>
          </ul>
          <p>
            Deletion requests are normally completed within 30 days. Previously deleted profile data is not automatically restored if an anonymous user later enters the same player tag, except that legally or operationally required retained records may remain separate from the new profile.
          </p>
        </SectionCard>

        <SectionCard number="7" title="Security and Credentials">
          <ul className="list-disc space-y-2 pl-5">
            <li>We use encrypted network connections and reasonable administrative, technical, and organizational safeguards.</li>
            <li>No password is required for anonymous use.</li>
            <li>We do not request your Clash Royale password.</li>
            <li>We do not ask users to send Google or Apple credentials, verification codes, API tokens, or private authentication secrets.</li>
            <li>No method of storage or transmission is completely secure, so absolute security cannot be guaranteed.</li>
          </ul>
        </SectionCard>

        <SectionCard number="8" title="Your Choices and Rights">
          <ul className="list-disc space-y-2 pl-5">
            <li>Request access to or correction of personal information associated with a linked profile.</li>
            <li>Delete an anonymous profile through the in-app Delete Account option when available.</li>
            <li>Request deletion of a linked profile by identifying the email address linked to that profile.</li>
            <li>Manage notifications through app or device settings.</li>
            <li>Cancel subscriptions separately through Apple App Store or Google Play.</li>
            <li>Exercise additional privacy rights available under applicable law.</li>
          </ul>
          <p>
            See the <Link href="/delete-account" className="font-semibold text-[#1565FF] hover:underline">Delete Account</Link> page for detailed instructions. Deleting a RoyaleCoach AI profile does not automatically cancel an Apple or Google subscription.
          </p>
        </SectionCard>

        <SectionCard number="9" title="Children's Privacy">
          <p>RoyaleCoach AI is not directed to children under 13, and we do not knowingly collect personal information from children under 13.</p>
          <p>A parent or guardian can contact us to request review or deletion of information believed to relate to a child.</p>
        </SectionCard>

        <SectionCard number="10" title="Policy Changes and Contact">
          <p>We may update this Policy as the Services, legal requirements, or data practices change. The Last Updated date identifies the current version.</p>
          <p>
            For privacy questions or requests, email <a href="mailto:support@royalecoachai.com" className="font-semibold text-[#1565FF] hover:underline">support@royalecoachai.com</a>. Veltrix LLC normally responds within 2&ndash;5 business days, although privacy requests may require additional verification or processing time.
          </p>
          <p>
            You may also review our <Link href="/terms-of-service" className="font-semibold text-[#1565FF] hover:underline">Terms of Service</Link> and <Link href="/contact" className="font-semibold text-[#1565FF] hover:underline">Contact page</Link>.
          </p>
        </SectionCard>

        <section className="rounded-[22px] border border-[#E6EDF8] bg-white p-6 text-[15px] leading-7 text-[#405071] shadow-[0_16px_38px_rgba(11,23,48,0.08)] md:p-8">
          <h2 className="font-['Clash'] text-[25px] text-[#0D1B2A]">Independent App Disclaimer</h2>
          <p className="mt-4">
            RoyaleCoach AI is an independent companion app and is not affiliated with, endorsed by, sponsored by, or officially connected to Supercell Oy. Clash Royale and related trademarks are the property of Supercell Oy.
          </p>
        </section>
      </div>
    </main>
  );
}
