import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, webPageSchema } from '@/lib/jsonld';
import { buildMeta } from '@/lib/metadata';

export const metadata: Metadata = buildMeta({
  title: 'Contact RoyaleCoach AI Support',
  description:
    'Contact Veltrix LLC for RoyaleCoach AI app support, privacy requests, account deletion, subscription questions, or business inquiries.',
  path: '/contact',
});

const CONTACT_REASONS = [
  {
    title: 'Technical app support',
    description: 'Help with app access, unexpected behavior, player tags, or feature questions.',
  },
  {
    title: 'Subscription and billing questions',
    description: 'Guidance on where to manage a plan, cancellation, or store refund request.',
  },
  {
    title: 'Privacy and account deletion',
    description: 'Privacy requests and help deleting a linked RoyaleCoach AI profile.',
  },
  {
    title: 'Business and affiliate inquiries',
    description: 'Questions about appropriate business or affiliate opportunities.',
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          'Contact RoyaleCoach AI',
          'Contact Veltrix LLC for RoyaleCoach AI support, privacy, account, subscription, billing, business, or affiliate questions.',
          '/contact',
        )}
      />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])} />

      <main className="relative overflow-hidden bg-[#F9FBFF] text-[#0D1B2A]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(21,101,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(21,101,255,0.045)_1px,transparent_1px)] bg-[size:58px_58px]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[980px] -translate-x-1/2 rounded-full bg-[#DDEEFF]/80 blur-3xl" />

        <section className="relative px-4 pb-10 pt-10 sm:px-6 lg:px-6 lg:pt-12">
          <div className="mx-auto max-w-[1040px]">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-xs text-[#71809C]">
              <Link href="/" className="hover:text-[#1565FF]">Home</Link>
              <span>/</span>
              <span className="font-medium text-[#0D1B2A]">Contact</span>
            </nav>

            <div className="grid items-center gap-8 lg:grid-cols-[0.96fr_1.04fr]">
              <div>
                <p className="mb-4 inline-flex rounded-full bg-[#EAF3FF] px-4 py-2 font-['Clash'] text-xs uppercase text-[#1565FF]">
                  Contact
                </p>
                <h1 className="font-['Clash'] text-[42px] leading-tight text-[#0D1B2A] sm:text-[58px]">
                  Contact <span className="text-[#1565FF]">RoyaleCoach AI</span>
                </h1>
                <p className="mt-6 max-w-[610px] text-[17px] leading-8 text-[#253753]">
                  RoyaleCoach AI is owned and operated by Veltrix LLC. Our support team normally responds within 2&ndash;5 business days.
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/assets/faq/support-shield.png"
                  alt="RoyaleCoach AI customer support"
                  width={130}
                  height={130}
                  sizes="130px"
                  preload
                  className="h-auto w-full max-w-[180px] rounded-[24px] object-contain drop-shadow-[0_24px_28px_rgba(11,23,48,0.14)]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-4 pb-12 pt-6 sm:px-6 lg:px-6">
          <div className="mx-auto grid max-w-[900px] gap-6 md:grid-cols-[1.05fr_0.95fr]">
            <article className="rounded-[22px] border border-[#E6EDF8] bg-white p-6 shadow-[0_16px_38px_rgba(11,23,48,0.08)] md:p-8">
              <h2 className="font-['Clash'] text-[27px] text-[#0D1B2A]">Contact Details</h2>
              <dl className="mt-6 space-y-4 text-[15px] leading-7">
                <div>
                  <dt className="font-semibold text-[#71809C]">Product</dt>
                  <dd className="text-[#253753]">RoyaleCoach AI</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#71809C]">Company</dt>
                  <dd className="text-[#253753]">Veltrix LLC</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#71809C]">Support email</dt>
                  <dd className="text-[#253753]">support@royalecoachai.com</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#71809C]">Normal response time</dt>
                  <dd className="text-[#253753]">Within 2&ndash;5 business days</dd>
                </div>
              </dl>
              <a
                href="mailto:support@royalecoachai.com?subject=RoyaleCoach%20AI%20Support"
                className="mt-7 inline-flex min-h-12 items-center justify-center rounded-2xl bg-[#1565FF] px-6 font-['Clash'] text-sm text-white shadow-[0_12px_24px_rgba(21,101,255,0.24)] transition hover:bg-[#0D55DD]"
              >
                Email RoyaleCoach AI Support
              </a>
            </article>

            <article className="rounded-[22px] border border-[#D9E8FF] bg-[#EEF6FF] p-6 shadow-[0_16px_38px_rgba(11,23,48,0.08)] md:p-8">
              <h2 className="font-['Clash'] text-[27px] text-[#0D1B2A]">How We Can Help</h2>
              <p className="mt-4 text-sm leading-7 text-[#405071]">
                Contact support when you need help specific to your use of RoyaleCoach AI. For
                quick answers about features and subscriptions, you can also check the{' '}
                <Link href="/faq" className="font-semibold text-[#1565FF] hover:underline">FAQ</Link>.
              </p>
              <ul className="mt-6 space-y-4">
                {CONTACT_REASONS.map((reason) => (
                  <li key={reason.title} className="flex gap-3 text-[15px] leading-7 text-[#253753]">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#1565FF]" />
                    <span>
                      <strong className="text-[#16233D]">{reason.title}:</strong>{' '}
                      {reason.description}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="relative px-4 pb-12 sm:px-6 lg:px-6">
          <div className="mx-auto grid max-w-[900px] gap-6 md:grid-cols-2">
            <article className="rounded-[22px] border border-[#E6EDF8] bg-white p-6 shadow-[0_16px_38px_rgba(11,23,48,0.08)] md:p-8">
              <h2 className="font-['Clash'] text-[24px] text-[#0D1B2A]">What to Include in Your Message</h2>
              <p className="mt-4 text-sm leading-7 text-[#405071]">
                Give us a short description of the issue, your device platform (iOS or Android),
                and the app version if you know it. Include your Clash Royale player tag when it
                is relevant. Only include a linked email when it is needed for a linked-account
                deletion request.
              </p>
              <p className="mt-4 text-sm font-semibold leading-7 text-[#253753]">
                Do not send passwords, Apple or Google credentials, API tokens, or verification codes.
              </p>
            </article>

            <article className="rounded-[22px] border border-[#D9E8FF] bg-[#EEF6FF] p-6 shadow-[0_16px_38px_rgba(11,23,48,0.08)] md:p-8">
              <h2 className="font-['Clash'] text-[24px] text-[#0D1B2A]">Response Time</h2>
              <p className="mt-4 text-sm leading-7 text-[#405071]">
                We normally aim to respond within 2&ndash;5 business days. A clear description and
                the relevant device details help us understand your request without unnecessary
                follow-up messages.
              </p>
            </article>

            <article className="rounded-[22px] border border-[#E6EDF8] bg-white p-6 shadow-[0_16px_38px_rgba(11,23,48,0.08)] md:p-8">
              <h2 className="font-['Clash'] text-[24px] text-[#0D1B2A]">Billing Support</h2>
              <p className="mt-4 text-sm leading-7 text-[#405071]">
                Apple and Google manage subscription billing. You may need to use the App Store or
                Google Play to cancel a subscription or request a refund under the applicable
                store policy. Deleting a RoyaleCoach AI profile does not automatically cancel an
                active subscription. See the <Link href="/faq" className="font-semibold text-[#1565FF] hover:underline">FAQ</Link>{' '}
                for subscription guidance.
              </p>
            </article>

            <article className="rounded-[22px] border border-[#E6EDF8] bg-white p-6 shadow-[0_16px_38px_rgba(11,23,48,0.08)] md:p-8">
              <h2 className="font-['Clash'] text-[24px] text-[#0D1B2A]">Company Information</h2>
              <p className="mt-4 text-sm leading-7 text-[#405071]">
                RoyaleCoach AI is owned and operated by Veltrix LLC, a Wyoming limited liability
                company. Our support email is support@royalecoachai.com. Before contacting us, you
                may also review our <Link href="/privacy-policy" className="font-semibold text-[#1565FF] hover:underline">Privacy Policy</Link>,{' '}
                <Link href="/terms-of-service" className="font-semibold text-[#1565FF] hover:underline">Terms of Service</Link>, or{' '}
                <Link href="/delete-account" className="font-semibold text-[#1565FF] hover:underline">account deletion instructions</Link>.
              </p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
