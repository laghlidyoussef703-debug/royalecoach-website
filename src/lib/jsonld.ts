const BASE = 'https://www.royalecoachai.com';

export function orgSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Veltrix LLC',
    legalName: 'Veltrix LLC',
    alternateName: 'RoyaleCoach AI',
    url: BASE,
    logo: `${BASE}/brand/logo-mark.png`,
    brand: { '@type': 'Brand', name: 'RoyaleCoach AI' },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@royalecoachai.com',
      contactType: 'customer support',
    },
  };
}

export function pricingProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'RoyaleCoach AI',
    image: [`${BASE}/brand/logo_wordmark_horizontal.png`],
    description:
      'RoyaleCoach AI plans for Clash Royale deck analysis, deck building, meta insights, battle learning, player statistics, and clan tools.',
    url: `${BASE}/pricing`,
    brand: { '@type': 'Brand', name: 'RoyaleCoach AI' },
    offers: [
      {
        '@type': 'Offer',
        name: 'RoyaleCoach AI Free',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `${BASE}/pricing`,
      },
      {
        '@type': 'Offer',
        name: 'RoyaleCoach AI Pro Monthly',
        price: '2.99',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `${BASE}/pricing`,
      },
      {
        '@type': 'Offer',
        name: 'RoyaleCoach AI Clan Pro Monthly',
        price: '4.99',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: `${BASE}/pricing`,
      },
    ],
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE}${item.path}`,
    })),
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    url: `${BASE}${input.path}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}${input.path}` },
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: { '@type': 'Organization', name: 'RoyaleCoach AI', url: BASE },
    publisher: {
      '@type': 'Organization',
      name: 'RoyaleCoach AI',
      logo: { '@type': 'ImageObject', url: `${BASE}/brand/logo-mark.png` },
    },
  };
}

export function webPageSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${BASE}${path}`,
    isPartOf: { '@type': 'WebSite', url: BASE },
  };
}
