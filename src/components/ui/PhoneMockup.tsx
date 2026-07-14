export type PhoneVariant = 'analysis' | 'builder' | 'meta' | 'profile' | 'battles' | 'download';

interface Props {
  variant?: PhoneVariant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  alt?: string;
}

const CARDS: [string, string][] = [
  ['bg-blue-500', '⚔️'], ['bg-red-500', '🛡️'], ['bg-emerald-600', '⚡'], ['bg-purple-600', '💥'],
  ['bg-amber-500', '🧊'], ['bg-orange-500', '🔥'], ['bg-teal-600', '💎'], ['bg-pink-600', '👑'],
];

function CardGrid() {
  return (
    <div className="grid grid-cols-4 gap-1">
      {CARDS.map(([bg, icon], i) => (
        <div key={i} className={`${bg} rounded aspect-[3/4] flex items-center justify-center text-[10px] leading-none`}>
          {icon}
        </div>
      ))}
    </div>
  );
}

function AnalysisContent() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <div className="bg-[#1A6CF6] px-3 pb-3 text-center">
        <p className="text-white/60 text-[7px] mb-1">Deck Score</p>
        <div className="w-12 h-12 border-2 border-[#FFC928] rounded-full flex items-center justify-center mx-auto">
          <span className="text-[#FFC928] font-extrabold text-sm">78</span>
        </div>
        <p className="text-white/50 text-[6px] mt-0.5">Good — fixable</p>
      </div>
      <div className="bg-[#0D1B35] px-2 py-2 flex-1">
        <p className="text-white/40 text-[6px] uppercase tracking-wider mb-1">Your Deck</p>
        <CardGrid />
        <div className="mt-2 space-y-1">
          <div className="bg-red-500/20 border border-red-500/30 rounded px-1.5 py-0.5 flex items-center gap-1">
            <span className="text-red-400 text-[7px]">⚠</span>
            <span className="text-red-300 text-[6px]">Weak vs. air units</span>
          </div>
          <div className="bg-amber-500/20 border border-amber-500/30 rounded px-1.5 py-0.5 flex items-center gap-1">
            <span className="text-amber-400 text-[7px]">↑</span>
            <span className="text-amber-300 text-[6px]">Upgrade Fireball first</span>
          </div>
        </div>
      </div>
      <div className="bg-[#0B1730] px-2 py-1.5">
        <div className="bg-[#FFC928] rounded py-1 text-center">
          <span className="text-[#0B1730] font-bold text-[8px]">Analyze My Deck</span>
        </div>
      </div>
    </div>
  );
}

function ProfileContent() {
  return (
    <div className="flex flex-col flex-1 bg-[#0D1B35] overflow-hidden">
      <div className="bg-[#1A6CF6] px-3 py-2 text-center">
        <div className="w-10 h-10 bg-[#FFC928] rounded-full mx-auto mb-1 flex items-center justify-center text-lg">👑</div>
        <p className="text-white font-bold text-[9px]">Player #ABC123</p>
        <p className="text-white/60 text-[7px]">Arena 13 — 5,420 🏆</p>
      </div>
      <div className="px-2 py-2 space-y-1.5 flex-1">
        {[['🏆 Trophies', '5,420'], ['🃏 Deck', 'Hog Cycle'], ['🏰 Clan', 'Royal Squad'], ['📊 Win Rate', '58.3%']].map(([label, val]) => (
          <div key={label} className="flex items-center justify-between bg-white/5 rounded px-2 py-1">
            <span className="text-white/60 text-[7px]">{label}</span>
            <span className="text-white font-semibold text-[7px]">{val}</span>
          </div>
        ))}
      </div>
      <div className="bg-[#0B1730] px-2 py-1.5">
        <div className="bg-[#FFC928] rounded py-1 text-center">
          <span className="text-[#0B1730] font-bold text-[8px]">See Full Profile</span>
        </div>
      </div>
    </div>
  );
}

function MetaContent() {
  const decks = [
    { rank: '1', name: 'Hog 2.6 Cycle', rate: '61%', trend: '↑' },
    { rank: '2', name: 'Pekka Bridge Spam', rate: '59%', trend: '→' },
    { rank: '3', name: 'Lava Hound', rate: '57%', trend: '↓' },
    { rank: '4', name: 'Miner Control', rate: '56%', trend: '↑' },
  ];
  return (
    <div className="flex flex-col flex-1 bg-[#0D1B35] overflow-hidden">
      <div className="bg-[#1A6CF6] px-3 py-2 flex items-center justify-between">
        <p className="text-white font-bold text-[9px]">Top Meta Decks</p>
        <span className="bg-[#FFC928] text-[#0B1730] text-[6px] font-bold px-1.5 py-0.5 rounded">LIVE</span>
      </div>
      <div className="px-2 py-2 space-y-1.5 flex-1">
        {decks.map((d) => (
          <div key={d.rank} className="flex items-center gap-2 bg-white/5 rounded px-2 py-1.5">
            <span className="text-[#FFC928] font-bold text-[8px] w-3">#{d.rank}</span>
            <div className="flex-1 min-w-0">
              <p className="text-white text-[7px] font-semibold truncate">{d.name}</p>
              <p className="text-white/40 text-[6px]">Win rate: {d.rate}</p>
            </div>
            <span className={`text-[9px] ${d.trend === '↑' ? 'text-green-400' : d.trend === '↓' ? 'text-red-400' : 'text-white/40'}`}>{d.trend}</span>
          </div>
        ))}
      </div>
      <div className="bg-[#0B1730] px-2 py-1.5">
        <div className="bg-[#FFC928] rounded py-1 text-center">
          <span className="text-[#0B1730] font-bold text-[8px]">See All Meta Decks</span>
        </div>
      </div>
    </div>
  );
}

function BuilderContent() {
  return (
    <div className="flex flex-col flex-1 bg-[#0D1B35] overflow-hidden">
      <div className="bg-[#1A6CF6] px-3 py-2">
        <p className="text-white font-bold text-[9px]">Deck Builder</p>
        <p className="text-white/60 text-[7px]">AI builds for your cards</p>
      </div>
      <div className="px-2 py-2 flex-1">
        <p className="text-white/40 text-[6px] uppercase tracking-wider mb-1">AI Built Deck</p>
        <CardGrid />
        <div className="mt-2 bg-white/5 rounded px-2 py-1.5">
          <p className="text-white/60 text-[6px] mb-1">Elixir Balance</p>
          <div className="flex gap-0.5 items-end" style={{ height: 14 }}>
            {[3, 5, 4, 2, 4, 3, 5, 4].map((h, i) => (
              <div key={i} className="flex-1 bg-[#1A6CF6] rounded-sm" style={{ height: `${(h / 5) * 100}%` }} />
            ))}
          </div>
          <p className="text-right text-white/40 text-[6px] mt-0.5">3.6 avg elixir</p>
        </div>
      </div>
      <div className="bg-[#0B1730] px-2 py-1.5">
        <div className="bg-[#FFC928] rounded py-1 text-center">
          <span className="text-[#0B1730] font-bold text-[8px]">Build My Deck</span>
        </div>
      </div>
    </div>
  );
}

function BattlesContent() {
  const battles = [
    { result: 'W', opp: 'vs Hog Rider', crowns: '2-1', pts: '+29' },
    { result: 'L', opp: 'vs Lava Hound', crowns: '1-2', pts: '-18' },
    { result: 'W', opp: 'vs Giant', crowns: '3-0', pts: '+31' },
  ];
  return (
    <div className="flex flex-col flex-1 bg-[#0D1B35] overflow-hidden">
      <div className="bg-[#1A6CF6] px-3 py-2">
        <p className="text-white font-bold text-[9px]">Top Battles</p>
        <p className="text-white/60 text-[7px]">Learn from the best</p>
      </div>
      <div className="px-2 py-2 space-y-1.5 flex-1">
        {battles.map((b, i) => (
          <div key={i} className="flex items-center gap-2 bg-white/5 rounded px-2 py-1.5">
            <span className={`text-[8px] font-bold w-4 h-4 rounded flex items-center justify-center ${b.result === 'W' ? 'bg-green-500' : 'bg-red-500'} text-white`}>{b.result}</span>
            <div className="flex-1">
              <p className="text-white text-[7px] font-semibold">{b.opp}</p>
              <p className="text-white/40 text-[6px]">{b.crowns} crowns</p>
            </div>
            <span className={`text-[7px] font-bold ${b.result === 'W' ? 'text-green-400' : 'text-red-400'}`}>{b.pts}</span>
          </div>
        ))}
        <div className="bg-[#1A6CF6]/20 border border-[#1A6CF6]/30 rounded px-2 py-1 text-center">
          <span className="text-[#93BBFF] text-[7px]">AI Analysis Available</span>
        </div>
      </div>
      <div className="bg-[#0B1730] px-2 py-1.5">
        <div className="bg-[#FFC928] rounded py-1 text-center">
          <span className="text-[#0B1730] font-bold text-[8px]">Study Battles</span>
        </div>
      </div>
    </div>
  );
}

function DownloadContent() {
  return (
    <div className="flex flex-col flex-1 bg-[#1A6CF6] overflow-hidden">
      <div className="flex-1 flex flex-col items-center justify-center px-3 py-4 text-center">
        <div className="w-14 h-14 bg-[#FFC928] rounded-2xl flex items-center justify-center text-2xl mb-3 shadow-lg">👑</div>
        <p className="text-white font-extrabold text-xs leading-tight mb-1">Ready to improve<br />your game?</p>
        <p className="text-white/60 text-[7px] mb-3">Enter your player tag to start</p>
        <div className="w-full bg-white/15 rounded-lg px-2 py-1.5 flex items-center gap-1 mb-2">
          <span className="text-white/50 text-[8px]">#</span>
          <span className="text-white text-[8px]">ABC123</span>
        </div>
        <div className="w-full bg-[#FFC928] rounded-lg py-1.5 text-center">
          <span className="text-[#0B1730] font-bold text-[8px]">Analyze My Deck</span>
        </div>
      </div>
      <div className="bg-[#0B1730] px-2 py-1.5">
        <p className="text-white/40 text-[6px] text-center">Free · No password · iOS &amp; Android</p>
      </div>
    </div>
  );
}

const CONTENT_MAP: Record<PhoneVariant, () => React.JSX.Element> = {
  analysis: AnalysisContent,
  profile: ProfileContent,
  meta: MetaContent,
  builder: BuilderContent,
  battles: BattlesContent,
  download: DownloadContent,
};

const SIZES = {
  sm: { outer: 'w-40 h-[330px]', inset: 'inset-[3px]', rounded: 'rounded-[28px]', inner: 'rounded-[25px]', bar: 'w-16' },
  md: { outer: 'w-52 h-[430px]', inset: 'inset-[3px]', rounded: 'rounded-[34px]', inner: 'rounded-[31px]', bar: 'w-20' },
  lg: { outer: 'w-60 h-[500px]', inset: 'inset-[4px]', rounded: 'rounded-[40px]', inner: 'rounded-[36px]', bar: 'w-24' },
};

export function PhoneMockup({ variant = 'analysis', size = 'md', className = '', alt }: Props) {
  const s = SIZES[size];
  const ContentComponent = CONTENT_MAP[variant];
  return (
    <div className={`relative ${s.outer} select-none ${className}`} role="img" aria-label={alt ?? 'RoyaleCoach AI app screenshot'}>
      {/* Shell */}
      <div className={`absolute inset-0 bg-white ${s.rounded} shadow-2xl border-2 border-gray-200`} />
      {/* Side buttons */}
      <div className="absolute left-0 top-16 w-[3px] h-5 bg-gray-300 rounded-r" />
      <div className="absolute left-0 top-24 w-[3px] h-8 bg-gray-300 rounded-r" />
      <div className="absolute right-0 top-20 w-[3px] h-12 bg-gray-300 rounded-l" />
      {/* Screen */}
      <div className={`absolute ${s.inset} ${s.inner} overflow-hidden bg-[#0B1730] flex flex-col`}>
        {/* Status bar */}
        <div className="h-6 bg-[#0B1730] flex items-center justify-between px-3 flex-shrink-0">
          <span className="text-white/60 text-[7px] font-medium">9:41</span>
          <div className="w-12 h-2 bg-black/50 rounded-full" />
          <div className="flex items-center gap-0.5">
            <div className="w-2.5 h-1.5 bg-white/50 rounded-sm" />
            <div className="w-1 h-1.5 bg-white/80 rounded-sm" />
          </div>
        </div>
        {/* App header */}
        <div className="bg-[#1A6CF6] px-2 py-1.5 flex items-center gap-1.5 flex-shrink-0">
          <div className="w-4 h-4 bg-[#FFC928] rounded-full flex items-center justify-center text-[7px] leading-none">👑</div>
          <span className="text-white text-[8px] font-bold flex-1 leading-none">RoyaleCoach AI</span>
          <div className="bg-[#FFC928]/20 border border-[#FFC928]/40 rounded px-1 py-px">
            <span className="text-[#FFC928] text-[6px] font-bold">PRO</span>
          </div>
        </div>
        <ContentComponent />
      </div>
      {/* Home bar */}
      <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 ${s.bar} h-[3px] bg-gray-400/50 rounded-full`} />
    </div>
  );
}
