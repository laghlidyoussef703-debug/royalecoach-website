import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'gold' | 'blue' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

const variantClasses: Record<Variant, string> = {
  gold: 'font-[\'Clash\'] bg-gradient-to-b from-[#FFDF70] via-[#FFC928] to-[#F5A800] text-[#2D2100] border border-[#FFEBA8]/70 shadow-[0_4px_0_0_#A86C00,0_10px_20px_-6px_rgba(184,120,0,0.45)] hover:brightness-[1.04] active:translate-y-[3px] active:shadow-[0_1px_0_0_#A86C00] transition-all duration-150',
  blue: 'font-[\'Clash\'] bg-gradient-to-b from-[#3B92FF] to-[#0C5FE0] text-white border border-[#7CB4FF]/40 shadow-[0_4px_0_0_#063E9C,0_10px_20px_-6px_rgba(6,62,156,0.45)] hover:brightness-[1.04] active:translate-y-[3px] active:shadow-[0_1px_0_0_#063E9C] transition-all duration-150',
  ghost: 'font-[\'Clash\'] bg-transparent text-[#1A6CF6] border-2 border-[#1A6CF6] hover:bg-[#1A6CF6] hover:text-white transition-all duration-150',
  outline: 'font-[\'Clash\'] bg-white text-[#0D0F1A] border border-[#E5E7EB] hover:border-[#1A6CF6] hover:text-[#1A6CF6] transition-all duration-150',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-[14px]',
  md: 'px-6 py-3 text-base rounded-[18px]',
  lg: 'px-8 py-4 text-lg rounded-[18px]',
};

interface CTAButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function CTAButton({
  variant = 'gold',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  external = false,
}: CTAButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
