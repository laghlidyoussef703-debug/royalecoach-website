import type { Metadata } from 'next';

const BASE = 'https://www.royalecoachai.com';

export function buildMeta({
  title,
  description,
  path,
  // public/og/ does not exist yet — fall back to the brand wordmark that ships in public/brand/.
  // When real 1200×630 OG images are added under public/og/, switch this default back to '/og/default.png'.
  ogImage = '/brand/logo_wordmark_horizontal.png',
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}): Metadata {
  const url = `${BASE}${path}`;
  return {
    // Absolute: page titles are already final — prevents the root layout's
    // title.template from appending "| RoyaleCoach AI" a second time.
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'RoyaleCoach AI',
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
