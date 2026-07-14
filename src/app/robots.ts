import type { MetadataRoute } from 'next';

// /u/ is disallowed — it is a functional referral route, not a crawlable page.
// The noindex meta tag on /u/[code] is the primary signal; this is a second layer.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/u/', '/api/'],
      },
    ],
    sitemap: 'https://www.royalecoachai.com/sitemap.xml',
  };
}
