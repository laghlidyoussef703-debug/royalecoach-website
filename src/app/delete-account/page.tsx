import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { buildMeta } from '@/lib/metadata';

export const metadata: Metadata = buildMeta({
  title: 'Delete Account — RoyaleCoach AI',
  description:
    'Learn how to delete your RoyaleCoach AI account and data, request deletion by email, and cancel subscriptions through Apple App Store or Google Play.',
  path: '/delete-account',
});

const appSteps = [
  'Open RoyaleCoach AI',
  'Tap Profile / Settings',
  'Scroll to Account Settings',
  'Tap Delete Account',
  'Confirm deletion',
];

const emailDetails = [
  'The email address linked to the RoyaleCoach AI profile',
  'Your Clash Royale player tag, if available',
  'A clear request to delete the linked RoyaleCoach AI profile',
];

const neverSendItems = [
  'Passwords',
  'Google or Apple credentials',
  'Verification codes',
  'Clash Royale API tokens',
  'Private authentication secrets',
];

const deletedItems = [
  'RoyaleCoach AI account/profile',
  'Saved player tag(s)',
  'App preferences and settings',
  'Saved analysis/build history where linked to the account',
  'Push notification tokens',
  'Associated personal data stored by RoyaleCoach AI',
];

const retainedItems = [
  'Transaction or subscription references needed for billing support, accounting, or tax purposes',
  'Refund and dispute records',
  'Fraud-prevention and security records',
  'Records that must be retained under applicable law',
];

const iosSteps = [
  'Open iPhone Settings',
  'Tap your Apple ID',
  'Tap Subscriptions',
  'Select RoyaleCoach AI',
  'Tap Cancel Subscription',
];

const androidSteps = [
  'Open Google Play Store',
  'Tap your profile icon',
  'Tap Payments & subscriptions',
  'Tap Subscriptions',
  'Select RoyaleCoach AI',
  'Tap Cancel subscription',
];

const importantNotes = [
  'Deleting a profile is permanent. Previously deleted profile data is not automatically restored.',
  'An anonymous user may later enter the same player tag and start again with a new anonymous profile.',
  'If you used Apple or Google sign-in, you may separately manage provider permissions in your device or provider account settings.',
  'Deleting RoyaleCoach AI does not delete your Clash Royale account or any data controlled by Supercell.',
];

function SectionCard({
  number,
  title,
  children,
  accent = 'blue',
}: {
  number: string;
  title: string;
  children: ReactNode;
  accent?: 'blue' | 'green' | 'amber' | 'red';
}) {
  const accentClass = {
    blue: 'bg-[#1565FF]',
    green: 'bg-[#1FA971]',
    amber: 'bg-[#F4B22A]',
    red: 'bg-[#D94141]',
  }[accent];

  return (
    <section className="rounded-[22px] border border-[#E6EDF8] bg-white p-6 shadow-[0_16px_38px_rgba(11,23,48,0.08)] md:p-8">
      <div className="mb-5 flex items-center gap-3">
        <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${accentClass} font-['Clash'] text-sm text-white`}>
          {number}
        </span>
        <h2 className="font-['Clash'] text-[24px] leading-tight text-[#0D1B2A]">{title}</h2>
      </div>
      <div className="space-y-4 text-[15px] leading-7 text-[#405071]">{children}</div>
    </section>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item, index) => (
        <li key={item} className="flex gap-3 text-[#253753]">
          <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-[#EEF5FF] font-['Clash'] text-xs text-[#1565FF]">
            {index + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

function PlainList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[#253753]">
          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#1565FF]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function DeleteAccountPage() {
  return (
    <main className="relative overflow-hidden bg-[#F9FBFF] text-[#0D1B2A]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(21,101,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(21,101,255,0.045)_1px,transparent_1px)] bg-[size:58px_58px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-[#DDEEFF]/80 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-32 h-80 w-80 rounded-full bg-[#EAF4FF] blur-3xl" />

      <section className="relative px-4 pb-8 pt-12 sm:px-6 lg:px-6">
        <div className="mx-auto grid max-w-[1100px] items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <h1 className="font-['Clash'] text-[42px] leading-tight text-[#0D1B2A] sm:text-[58px]">
              Delete Your RoyaleCoach AI Account
            </h1>
            <p className="mt-6 max-w-[650px] text-[17px] leading-8 text-[#253753]">
              RoyaleCoach AI is owned and operated by Veltrix LLC. You can delete an anonymous or linked profile and associated data by following the instructions below.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/assets/legal/delete-king.png"
              alt="RoyaleCoach AI account and personal data deletion"
              width={640}
              height={408}
              sizes="(max-width: 1023px) calc(100vw - 32px), 520px"
              preload
              className="h-auto w-full max-w-[520px] object-contain drop-shadow-[0_28px_32px_rgba(11,23,48,0.12)]"
            />
          </div>
        </div>
      </section>

      <div className="relative mx-auto max-w-[1100px] space-y-6 px-4 pb-12 sm:px-6 lg:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <SectionCard number="1" title="Anonymous Profile">
            <p>Use the in-app Delete Account option when it is available:</p>
            <NumberedList items={appSteps} />
            <div className="rounded-2xl bg-[#EEF5FF] p-4 text-sm font-semibold text-[#1B4F96]">
              After deletion, you may later enter the same Clash Royale player tag and create a new anonymous profile. Previously deleted profile data is not automatically restored.
            </div>
            <p>
              Data may remain only when retention is necessary for legal compliance, fraud prevention, billing support, dispute resolution, or security. Any retained records remain separate from a newly created anonymous profile.
            </p>
          </SectionCard>

          <SectionCard number="2" title="Linked Profile and Email Request">
            <p>
              If your profile is linked through Email, Google, or Apple, a manual deletion request must identify the email address linked to that profile. You can also email us if you cannot access the in-app option.
            </p>
            <a
              href="mailto:support@royalecoachai.com?subject=Account%20Deletion%20Request"
              className="inline-flex rounded-2xl bg-[#EEF5FF] px-5 py-4 font-['Clash'] text-[17px] text-[#1565FF] hover:bg-[#E2EEFF]"
            >
              support@royalecoachai.com
            </a>
            <div>
              <p className="mb-3 font-semibold text-[#0D1B2A]">Please include:</p>
              <PlainList items={emailDetails} />
            </div>
            <div className="rounded-2xl border border-[#FFD3D3] bg-[#FFF1F1] p-4">
              <p className="mb-3 font-semibold text-[#9E1F1F]">Never send:</p>
              <PlainList items={neverSendItems} />
            </div>
            <p className="font-semibold text-[#0D1B2A]">Deletion requests are processed within 30 days.</p>
          </SectionCard>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <SectionCard number="3" title="What Gets Deleted" accent="green">
            <PlainList items={deletedItems} />
            <p className="text-sm">
              This list covers data stored by RoyaleCoach AI. It does not include data controlled by Apple, Google, Supercell, or other third-party platforms.
            </p>
          </SectionCard>

          <SectionCard number="4" title="Data That May Be Retained" accent="amber">
            <p>
              Some data may be retained for a limited time when required for legal, security, accounting, fraud-prevention, or dispute-resolution purposes.
            </p>
            <PlainList items={retainedItems} />
            <div className="rounded-2xl bg-[#FFF8E6] p-4 text-sm font-semibold text-[#7A5516]">
              Retained data is not used for marketing purposes.
            </div>
          </SectionCard>
        </div>

        <SectionCard number="5" title="Subscription Cancellation Reminder" accent="red">
          <div className="rounded-2xl border border-[#FFD3D3] bg-[#FFF1F1] p-5">
            <p className="font-['Clash'] text-[20px] text-[#9E1F1F]">
              Deleting your RoyaleCoach AI profile does NOT automatically cancel an active subscription.
            </p>
            <p className="mt-3 text-[#7A2525]">
              Subscriptions must be cancelled separately through Apple App Store or Google Play. To avoid future charges, cancel through the store account used for purchase.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#E6EDF8] bg-[#F8FBFF] p-5">
              <h3 className="mb-4 font-['Clash'] text-[18px] text-[#0D1B2A]">For iOS / App Store</h3>
              <NumberedList items={iosSteps} />
            </div>
            <div className="rounded-2xl border border-[#E6EDF8] bg-[#F8FBFF] p-5">
              <h3 className="mb-4 font-['Clash'] text-[18px] text-[#0D1B2A]">For Android / Google Play</h3>
              <NumberedList items={androidSteps} />
            </div>
          </div>
        </SectionCard>

        <div className="grid gap-6 lg:grid-cols-2">
          <SectionCard number="6" title="Need Help?">
            <p>If you have questions or need assistance with deleting your profile, contact Veltrix LLC support.</p>
            <a
              href="mailto:support@royalecoachai.com"
              className="inline-flex rounded-2xl bg-[#EEF5FF] px-5 py-4 font-['Clash'] text-[17px] text-[#1565FF] hover:bg-[#E2EEFF]"
            >
              support@royalecoachai.com
            </a>
          </SectionCard>

          <SectionCard number="7" title="Important Notes">
            <PlainList items={importantNotes} />
          </SectionCard>
        </div>

        <section className="overflow-hidden rounded-[24px] bg-[#1565FF] p-6 shadow-[0_18px_42px_rgba(21,101,255,0.22)] md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-['Clash'] text-[30px] leading-tight text-white">Your Data. Your Choice.</h2>
              <p className="mt-2 max-w-[560px] text-[16px] leading-7 text-[#DCEAFF]">
                We respect your privacy and give you control over your account.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/privacy-policy"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-5 font-['Clash'] text-sm text-[#1565FF] shadow-[0_8px_18px_rgba(11,23,48,0.16)] transition hover:-translate-y-0.5"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/35 bg-white/12 px-5 font-['Clash'] text-sm text-white transition hover:-translate-y-0.5 hover:bg-white/18"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
