interface SectionHeaderProps {
  eyebrow?: string;
  h2: string;
  subheadline?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  h2,
  subheadline,
  align = 'center',
  light = false,
  className = '',
}: SectionHeaderProps) {
  const isCenter = align === 'center';
  return (
    <div className={`${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-2xl ${className}`}>
      {eyebrow && (
        <span
          className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${
            light
              ? 'bg-white/20 text-white'
              : 'bg-[#1A6CF6]/10 text-[#1A6CF6]'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-[#0D0F1A]'
        }`}
      >
        {h2}
      </h2>
      {subheadline && (
        <p
          className={`text-base md:text-lg leading-relaxed ${
            light ? 'text-blue-100' : 'text-[#6B7280]'
          }`}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
}
