import { CTAButton } from './CTAButton';

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
  ctaHref: string;
  badge?: string;
}

export function PricingCard({
  name,
  price,
  period = '/month',
  tagline,
  features,
  highlighted = false,
  ctaLabel,
  ctaHref,
  badge,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl border-2 p-8 flex flex-col h-full transition-all ${
        highlighted
          ? 'border-[#1A6CF6] bg-[#1A6CF6] text-white shadow-2xl'
          : 'border-[#E5E7EB] bg-white text-[#0D0F1A] hover:shadow-md'
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-[#FFC928] text-[#2D2100] text-xs font-bold px-4 py-1.5 rounded-full border border-[#A86C00] shadow-sm">
            {badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <p
          className={`text-xs font-bold uppercase tracking-widest mb-3 ${
            highlighted ? 'text-blue-200' : 'text-[#6B7280]'
          }`}
        >
          {name}
        </p>
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-extrabold">{price}</span>
          {price !== '$0' && (
            <span className={`text-sm ${highlighted ? 'text-blue-200' : 'text-[#6B7280]'}`}>
              {period}
            </span>
          )}
        </div>
        <p className={`mt-2 text-sm leading-relaxed ${highlighted ? 'text-blue-100' : 'text-[#6B7280]'}`}>
          {tagline}
        </p>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <span
              className={`mt-0.5 flex-shrink-0 font-bold ${
                highlighted ? 'text-[#FFC928]' : 'text-[#22C55E]'
              }`}
            >
              ✓
            </span>
            <span className={highlighted ? 'text-blue-50' : 'text-[#18233B]'}>{f}</span>
          </li>
        ))}
      </ul>

      <CTAButton href={ctaHref} variant={highlighted ? 'gold' : 'ghost'} className="w-full justify-center">
        {ctaLabel}
      </CTAButton>
    </div>
  );
}
