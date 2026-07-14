export type IconName =
  | 'bolt'
  | 'shield'
  | 'lock'
  | 'brain'
  | 'phone'
  | 'users'
  | 'trophy'
  | 'star'
  | 'tag'
  | 'download'
  | 'search'
  | 'cards'
  | 'chart'
  | 'swords'
  | 'user';

interface IconProps {
  name: IconName;
  className?: string;
}

const PATHS: Record<IconName, string> = {
  bolt: 'M13 2 4 14h6l-1 8 9-12h-6l1-8Z',
  shield: 'M12 2.5 4.5 5.5v5.2c0 5 3.2 8.9 7.5 10.3 4.3-1.4 7.5-5.3 7.5-10.3V5.5L12 2.5Z',
  lock: 'M6 10V7.5a6 6 0 1 1 12 0V10M5.5 10h13a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19.5v-8A1.5 1.5 0 0 1 5.5 10Z',
  brain: 'M9 3.5c-1.9 0-3.4 1.5-3.4 3.3 0 .4.06.8.18 1.15A3.4 3.4 0 0 0 4 11.2c0 1.4.85 2.6 2.06 3.1a3.5 3.5 0 0 0 3.44 4.2H10V3.6a3.4 3.4 0 0 0-1-.1Zm6 0c1.9 0 3.4 1.5 3.4 3.3 0 .4-.06.8-.18 1.15A3.4 3.4 0 0 1 20 11.2c0 1.4-.85 2.6-2.06 3.1a3.5 3.5 0 0 1-3.44 4.2H14V3.6c.32-.07.65-.1 1-.1Z',
  phone: 'M7.5 2.5h9a1.5 1.5 0 0 1 1.5 1.5v16a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V4a1.5 1.5 0 0 1 1.5-1.5ZM11 19h2',
  users: 'M9 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7-1.5a2.75 2.75 0 1 0 0-5.5M2.5 20c.7-3.4 3.4-5.5 6.5-5.5s5.8 2.1 6.5 5.5M16 14.7c2.5.4 4.5 2.3 5 5.3',
  trophy: 'M7 4h10v3.5A5 5 0 0 1 12 12.5 5 5 0 0 1 7 7.5V4Zm10 1h2a2.5 2.5 0 0 1-2.5 2.5M7 5H5a2.5 2.5 0 0 0 2.5 2.5M12 12.5V16m-3 5.5h6M9 21.5c0-2 1.3-3 3-3s3 1 3 3',
  star: 'm12 3 2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6L3.3 9.2l6.1-.6L12 3Z',
  tag: 'M11.3 3.5H5A1.5 1.5 0 0 0 3.5 5v6.3c0 .4.16.78.44 1.06l8.7 8.7a1.5 1.5 0 0 0 2.12 0l6.3-6.3a1.5 1.5 0 0 0 0-2.12l-8.7-8.7a1.5 1.5 0 0 0-1.06-.44ZM8 8.5h.01',
  download: 'M12 3.5v11m0 0-4-4m4 4 4-4M5 17.5v2a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5v-2',
  search: 'm20.5 20.5-3.6-3.6m1.6-5.4a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z',
  cards: 'M4 8.5A1.5 1.5 0 0 1 5.5 7h7A1.5 1.5 0 0 1 14 8.5v9A1.5 1.5 0 0 1 12.5 19h-7A1.5 1.5 0 0 1 4 17.5v-9Zm6-4.3 6.9 1.8a1.5 1.5 0 0 1 1.08 1.83l-.6 2.27',
  chart: 'M4 20V10m6.5 10V4M17 20v-6.5M3 20.5h18',
  swords: 'M6 3 3 6l9 9 3-3-9-9Zm12 12-3 3 3 3 2-2-2-4ZM18 3l3 3-9 9-3-3 9-9ZM3 21l3-3',
  user: 'M12 12a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Zm-8 8c1-4 4.2-6.5 8-6.5s7 2.5 8 6.5',
};

export function Icon({ name, className = 'h-5 w-5' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
