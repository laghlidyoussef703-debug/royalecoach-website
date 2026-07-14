import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { headers } from 'next/headers';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { orgSchema } from '@/lib/jsonld';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.royalecoachai.com'),
  title: {
    default: 'RoyaleCoach AI — Clash Royale AI Coach',
    template: '%s | RoyaleCoach AI',
  },
  description:
    'Analyze your Clash Royale deck, discover meta decks, track stats, and improve with AI coaching on iOS and Android.',
  openGraph: {
    type: 'website',
    siteName: 'RoyaleCoach AI',
    images: [{ url: '/brand/logo_wordmark_horizontal.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  // Default allow indexing — /u/[code] layout overrides this to noindex,nofollow
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Middleware sets x-pathname so we can hide Navbar/Footer on invite pages.
  // /u/[code] must render as a standalone page with no site navigation.
  const heads = await headers();
  const pathname = heads.get('x-pathname') ?? '';
  const isInvitePage = pathname.startsWith('/u/');

  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen flex flex-col">
        <JsonLd data={orgSchema()} />
        {!isInvitePage && <Navbar />}
        <div className={isInvitePage ? 'flex-1' : 'royale-page-bg flex-1'}>{children}</div>
        {!isInvitePage && <Footer />}
      </body>
    </html>
  );
}
