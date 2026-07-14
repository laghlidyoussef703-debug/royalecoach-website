import type { MetadataRoute } from 'next';
import { getAllGuideSlugs } from '@/content/guides';

// /u/[code] is intentionally EXCLUDED — it is a noindex functional referral
// route used by the mobile app, not a page Google should ever index.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.royalecoachai.com';
  const now = new Date();

  const guideEntries: MetadataRoute.Sitemap = [
    {
      url: base + '/guides',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...getAllGuideSlugs().map((slug) => ({
      url: `${base}/guides/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  return [
    ...guideEntries,
    {
      url: base + '/',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: base + '/download',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: base + '/pricing',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: base + '/faq',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: base + '/features/deck-analysis',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: base + '/features/deck-builder',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: base + '/features/meta-decks',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: base + '/features/top-battles',
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: base + '/features/player-profile',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: base + '/affiliate',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: base + '/about',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: base + '/contact',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: base + '/privacy-policy',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: base + '/terms-of-service',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: base + '/delete-account',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
