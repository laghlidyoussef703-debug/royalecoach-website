import type { Guide } from './types';
import { STRATEGY_GUIDES } from './strategy-guides';
import { DECK_GUIDES } from './deck-guides';

export type { Guide, GuideFaq, GuideSection, GuideFeatureLink } from './types';

/** All published guides, in index-page display order. */
export const GUIDES: Guide[] = [...STRATEGY_GUIDES, ...DECK_GUIDES];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return GUIDES.map((g) => g.slug);
}
