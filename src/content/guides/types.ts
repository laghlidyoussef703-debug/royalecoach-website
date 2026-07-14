export type GuideFaq = { question: string; answer: string };

export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GuideFeatureLink = {
  label: string;
  href: string;
  description: string;
};

export type Guide = {
  slug: string;
  category: 'Decks' | 'Meta' | 'Tools' | 'Improvement' | 'Deck Guide' | 'Stats';
  metaTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  readingMinutes: number;
  /** Short one-liner for the /guides index card. */
  cardSummary: string;
  intro: string[];
  sections: GuideSection[];
  tips: { heading: string; items: string[] };
  mistakes: { heading: string; items: string[] };
  appHelp: { heading: string; paragraphs: string[]; features: GuideFeatureLink[] };
  faqs: GuideFaq[];
  related: { label: string; href: string }[];
};
