import type { Metadata } from 'next';
import Image from 'next/image';
import {
  AppStoreBadge,
  GooglePlayBadge,
} from '@/components/ui/AppStoreButtons';
import { buildMeta } from '@/lib/metadata';

export const metadata: Metadata = buildMeta({
  title: 'Open RoyaleCoach AI',
  description:
    'Open RoyaleCoach AI or download the app for iOS and Android.',
  path: '/open',
});

export default function OpenRoyaleCoachPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[radial-gradient(circle_at_top,rgba(21,101,255,0.14),transparent_42%),#F7FAFF] px-4 py-16 text-[#0D1B2A]">
      <section className="w-full max-w-[620px] rounded-[28px] border border-[#DCE7F7] bg-white px-6 py-10 text-center shadow-[0_24px_70px_rgba(11,23,48,0.12)] sm:px-10">
        <Image
          src="/brand/logo-mark.png"
          alt=""
          width={84}
          height={84}
          className="mx-auto h-[84px] w-[84px] object-contain"
          priority
        />
        <h1 className="mt-6 font-['Clash'] text-[32px] leading-tight sm:text-[40px]">
          Open RoyaleCoach AI
        </h1>
        <p className="mx-auto mt-4 max-w-[480px] font-sans text-[16px] leading-7 text-[#4B5875]">
          If the app is installed, it should open automatically. If not, download it below.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <AppStoreBadge size="lg" />
          <GooglePlayBadge size="lg" />
        </div>

        <a
          href="royalecoach://invite"
          className="mt-7 inline-block font-sans text-sm font-semibold text-[#0759CC] underline underline-offset-4"
        >
          Having trouble? Open app manually
        </a>
      </section>
    </main>
  );
}
