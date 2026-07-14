import Link from 'next/link';
import type { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
}

export function FeatureCard({ icon, title, description, href }: FeatureCardProps) {
  const inner = (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#1A6CF6]/25 transition-all duration-200 h-full flex flex-col">
      <div className="w-12 h-12 bg-[#F0F4FF] rounded-xl flex items-center justify-center mb-4 text-[#1A6CF6] text-2xl flex-shrink-0">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[#0D0F1A] mb-2">{title}</h3>
      <p className="text-sm text-[#6B7280] leading-relaxed flex-1">{description}</p>
      {href && (
        <div className="mt-4 text-sm font-semibold text-[#1A6CF6] flex items-center gap-1">
          Learn more <span aria-hidden="true">→</span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {inner}
      </Link>
    );
  }
  return inner;
}
