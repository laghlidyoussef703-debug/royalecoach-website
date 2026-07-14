import Link from 'next/link';
import type { MouseEventHandler } from 'react';

const IOS_URL = 'https://apps.apple.com/app/id6762710841';
const ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.royalecoach.app';

interface StoreBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function AppStoreBadge({
  size = 'md',
  href = IOS_URL,
  onClick,
}: StoreBadgeProps) {
  const dimensions = size === 'sm' ? 'h-11 w-[152px]' : size === 'lg' ? 'h-16 w-[206px]' : 'h-14 w-[178px]';
  const iconSize = size === 'lg' ? 'h-8 w-8' : 'h-7 w-7';
  const smallText = size === 'lg' ? 'text-[12px]' : 'text-[11px]';
  const largeText = size === 'lg' ? 'text-[24px]' : 'text-[20px]';
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      style={{
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
      className={`inline-flex shrink-0 items-center gap-3 rounded-[10px] border border-white/15 bg-black px-4 text-white shadow-[0_8px_18px_rgba(0,0,0,0.16)] transition-colors hover:bg-neutral-900 ${dimensions}`}
      aria-label="Download RoyaleCoach AI on the App Store"
    >
      <svg viewBox="0 0 24 24" className={`flex-shrink-0 fill-white ${iconSize}`} aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div className="text-left leading-none">
        <div className={`font-medium tracking-wide opacity-95 ${smallText}`}>Download on the</div>
        <div className={`-mt-0.5 font-semibold tracking-[-0.01em] ${largeText}`}>App Store</div>
      </div>
    </Link>
  );
}

export function GooglePlayBadge({
  size = 'md',
  href = ANDROID_URL,
  onClick,
}: StoreBadgeProps) {
  const dimensions = size === 'sm' ? 'h-11 w-[160px]' : size === 'lg' ? 'h-16 w-[216px]' : 'h-14 w-[190px]';
  const iconSize = size === 'lg' ? 'h-9 w-9' : 'h-8 w-8';
  const smallText = size === 'lg' ? 'text-[12px]' : 'text-[11px]';
  const largeText = size === 'lg' ? 'text-[23px]' : 'text-[20px]';
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      style={{
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
      className={`inline-flex shrink-0 items-center gap-3 rounded-[10px] border border-white/15 bg-black px-4 text-white shadow-[0_8px_18px_rgba(0,0,0,0.16)] transition-colors hover:bg-neutral-900 ${dimensions}`}
      aria-label="Get RoyaleCoach AI on Google Play"
    >
      <svg viewBox="0 0 512 512" className={`flex-shrink-0 ${iconSize}`} aria-hidden="true">
        <path fill="#00A0FF" d="M73.1 38.2c-9.8 5.4-16.4 15.8-16.4 29.4v376.8c0 13.6 6.6 24 16.4 29.4L287.4 256 73.1 38.2z" />
        <path fill="#00D35F" d="M287.4 256 73.1 38.2c10.4-5.8 24.2-5.5 38.3 2.4l271.8 153.5L287.4 256z" />
        <path fill="#FFD400" d="m383.2 194.1 54.2 30.6c24.1 13.6 24.1 49 0 62.6l-54.2 30.6L287.4 256l95.8-61.9z" />
        <path fill="#FF3333" d="M287.4 256 73.1 473.8c10.4 5.8 24.2 5.5 38.3-2.4l271.8-153.5L287.4 256z" />
      </svg>
      <div className="text-left leading-none">
        <div className={`font-semibold tracking-wide opacity-95 ${smallText}`}>Get it on</div>
        <div className={`-mt-0.5 font-semibold tracking-[-0.01em] ${largeText}`}>Google Play</div>
      </div>
    </Link>
  );
}

interface AppStoreButtonsProps {
  layout?: 'horizontal' | 'vertical' | 'stacked';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function AppStoreButtons({
  layout = 'horizontal',
  size = 'md',
  className = '',
}: AppStoreButtonsProps) {
  return (
    <div
      className={`flex ${layout === 'vertical' ? 'flex-col' : 'flex-wrap'} gap-4 ${className}`}
    >
      <AppStoreBadge size={size} />
      <GooglePlayBadge size={size} />
    </div>
  );
}
