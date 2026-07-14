import type { Guide } from './types';

/**
 * Deck archetype guides — Hog 2.6, Log Bait, Mega Knight, Lumberloon.
 * Card lists describe the classic/standard version of each archetype;
 * copy deliberately avoids "current win rate" claims that go stale.
 */
export const DECK_GUIDES: Guide[] = [
  {
    slug: 'hog-2-6-deck-guide',
    category: 'Deck Guide',
    metaTitle: 'Hog 2.6 Deck Guide',
    metaDescription:
      'The complete Hog 2.6 cycle deck guide: the classic 8 cards, how to pilot the deck in each phase, matchup tips, and the mistakes that lose Hog cycle games.',
    h1: 'Hog 2.6 Deck Guide: The Classic Cycle Deck Explained',
    primaryKeyword: 'hog 2.6 deck',
    readingMinutes: 7,
    cardSummary: 'The legendary 2.6 elixir Hog cycle deck — cards, gameplan, matchups.',
    intro: [
      'Hog 2.6 is the most famous deck in Clash Royale history. Named after its 2.6 average elixir cost, it has survived years of balance changes and meta shifts because its core idea never stops working: cycle back to Hog Rider faster than your opponent can cycle to their counter.',
      'It is also one of the hardest decks to play well. This guide covers the card list, the game plan phase by phase, and the matchup knowledge that separates 2.6 specialists from everyone else.',
    ],
    sections: [
      {
        heading: 'The Classic Hog 2.6 Card List',
        paragraphs: [
          'The standard list has been stable for years:',
        ],
        bullets: [
          'Hog Rider (4) — your only win condition; every other card exists to support him.',
          'Musketeer (4) — primary ranged damage and air defense.',
          'Cannon (3) — pulls tanks and Hog Riders; your defensive anchor.',
          'Fireball (4) — medium spell for Musketeer-class support troops.',
          'The Log (2) — swarm control and chip damage.',
          'Ice Golem (2) — mini-tank for kiting and shielding the Hog.',
          'Ice Spirit (1) — cheap freeze for defense and Hog support.',
          'Skeletons (1) — cycle card and single-target distraction.',
        ],
      },
      {
        heading: 'The Game Plan, Phase by Phase',
        paragraphs: [
          'Single elixir: play patiently. Learn the opponent’s deck, take cheap Hog pushes when their counter is out of rotation (Hog + Ice Spirit is the classic play), and defend with minimal elixir. You do not need big damage yet — chip and information are enough.',
          'Double elixir: your cycle advantage grows. Keep constant Hog pressure so the opponent can never build a full push, and defend with Cannon + Musketeer + spirits. In overtime, a well-timed Hog + Fireball prediction often closes the match.',
        ],
      },
      {
        heading: 'Key Matchups',
        paragraphs: [
          'Hog 2.6 has famous matchup dynamics you must know:',
        ],
        bullets: [
          'Versus beatdown (Golem, Lava Hound): favorable if you punish every tank placement in the opposite lane immediately.',
          'Versus X-Bow / mortar: a cycle mirror — protect your Cannon and out-rotate their siege placements.',
          'Versus bridge spam: hard — you must pre-position Cannon and keep Skeletons for Bandit/Battle Ram.',
          'Versus Log bait: manage The Log carefully; it is your only clean Goblin Barrel answer.',
          'Versus Mega Knight decks: kite with Ice Golem and Skeletons; never let the Cannon die for free.',
        ],
      },
    ],
    tips: {
      heading: 'Practical Hog 2.6 Tips',
      items: [
        'Learn exact Cannon placements — usually 4-2 or 3-3 from the river depending on the threat.',
        'Use Ice Golem to kite melee troops into the opposite lane; it buys huge elixir value.',
        'Send Hog + Ice Spirit the moment their building or tank-killer is out of cycle.',
        'Fireball prediction on defending troops wins overtime games — watch where they always defend.',
        'Never stop counting elixir: 2.6 lives and dies on out-cycling counters.',
      ],
    },
    mistakes: {
      heading: 'Mistakes That Lose 2.6 Games',
      items: [
        'Overcommitting two support cards behind the Hog — 2.6 pushes are cheap by design.',
        'Wasting The Log early against bait decks.',
        'Placing Cannon reactively instead of pre-emptively against fast pressure.',
        'Ignoring opposite-lane punishment when beatdown players invest at the back.',
        'Playing 2.6 with under-leveled Musketeer — her interactions are level-critical.',
      ],
    },
    appHelp: {
      heading: 'How RoyaleCoach AI Helps You Master Hog 2.6',
      paragraphs: [
        'Cycle decks punish invisible mistakes: one wasted Log or a late Cannon decides matches. RoyaleCoach AI reviews your real battles to spot those recurring errors, checks whether your card levels support the deck at your trophy range, and shows how top players pilot the same list in hard matchups.',
      ],
      features: [
        { label: 'Deck Analysis', href: '/features/deck-analysis', description: 'See if your levels and habits fit Hog 2.6.' },
        { label: 'Top Battles', href: '/features/top-battles', description: 'Watch high-level Hog cycle play in real matches.' },
        { label: 'Meta Decks', href: '/features/meta-decks', description: 'Check how cycle decks sit in the current meta.' },
      ],
    },
    faqs: [
      {
        question: 'Why is it called Hog 2.6?',
        answer:
          'The deck’s average elixir cost is 2.6 — the total cost of all eight cards (21 elixir) divided by eight. The name stuck and now refers to this specific card list.',
      },
      {
        question: 'Is Hog 2.6 good for beginners?',
        answer:
          'It is cheap to upgrade (mostly commons and rares) but mechanically demanding. Beginners can learn it, but expect a long learning curve — the deck rewards hundreds of matches of practice.',
      },
      {
        question: 'What are common swaps in Hog 2.6?',
        answer:
          'Popular variations include Tesla or Bomb Tower for Cannon, Firecracker or Archers for Musketeer, and Earthquake for Fireball. Each swap changes key matchups, so change one card at a time.',
      },
      {
        question: 'What counters Hog 2.6?',
        answer:
          'Bridge spam and heavy-swarm decks pressure it hardest, and strong building placement blunts the Hog itself. No counter is absolute — piloting skill decides most 2.6 matchups.',
      },
    ],
    related: [
      { label: 'Best Clash Royale Decks', href: '/guides/best-clash-royale-decks' },
      { label: 'Log Bait Deck Guide', href: '/guides/log-bait-deck-guide' },
      { label: 'How to Get Better at Clash Royale', href: '/guides/how-to-get-better-at-clash-royale' },
    ],
  },

  {
    slug: 'log-bait-deck-guide',
    category: 'Deck Guide',
    metaTitle: 'Log Bait Deck Guide',
    metaDescription:
      'Learn the classic Log bait deck: Goblin Barrel, Princess, and the art of baiting out small spells. Card list, game plan, matchups, and common mistakes.',
    h1: 'Log Bait Deck Guide: Punish Every Spell They Waste',
    primaryKeyword: 'log bait deck',
    readingMinutes: 7,
    cardSummary: 'The Goblin Barrel bait archetype — force spells out, then punish.',
    intro: [
      'Log bait is built on a simple psychological trap: the opponent has one or two small spells, and your deck has three or four cards that demand them. Whichever threat they spell, another one punishes them for it.',
      'The archetype revolves around Goblin Barrel — three goblins on their tower that only a spell answers cleanly. This guide covers the classic list, the baiting game plan, and how to win the spell war.',
    ],
    sections: [
      {
        heading: 'The Classic Log Bait Card List',
        paragraphs: [
          'The traditional list looks like this:',
        ],
        bullets: [
          'Goblin Barrel (3) — the win condition; punishes any missing small spell.',
          'Princess (3) — long-range chip that demands The Log.',
          'Goblin Gang (3) — swarm defense that also baits spells.',
          'Knight (3) — the deck’s only muscle; tanks for everything.',
          'Inferno Tower (5) — stops tanks that bait decks otherwise cannot handle.',
          'Rocket (6) — heavy spell for damage races and stubborn defenses.',
          'Ice Spirit (1) — cycle and freeze utility.',
          'The Log (2) — your own swarm answer and chip tool.',
        ],
      },
      {
        heading: 'The Baiting Game Plan',
        paragraphs: [
          'Early game: identify their small spells and count them. Play Princess at the bridge or Goblin Gang defensively and watch what they use. The moment their Log or Zap is spent, throw the Goblin Barrel — that timing is the entire archetype.',
          'Late game: if towers are close in health, Rocket becomes a second win condition. Many Log bait wins end with Rocket cycling in overtime while Knight and Goblin Gang hold the bridge.',
        ],
      },
      {
        heading: 'Barrel Placement Matters',
        paragraphs: [
          'Predictable barrels get answered even without spells. Vary your placements: the standard center-tower throw, the edge placement that dodges some spell placements, and occasionally a pre-placed anticipation throw when you know their rotation. Against players who defend with troops instead of spells, watch where they place and adjust the barrel to land opposite it.',
        ],
      },
    ],
    tips: {
      heading: 'Practical Log Bait Tips',
      items: [
        'Count their small spells out loud — barrel timing is everything.',
        'Protect your Inferno Tower against beatdown; it is your only tank answer.',
        'Use Knight actively on defense, then let him tank for the next Barrel.',
        'Save Rocket value for towers in overtime unless a big push forces it.',
        'Princess at the river forces a response every single time — free value if ignored.',
      ],
    },
    mistakes: {
      heading: 'Mistakes That Lose Bait Games',
      items: [
        'Throwing the first Barrel before learning their spell set.',
        'Spamming all bait cards at once so one spell answers everything.',
        'Using your own Log for chip damage and having nothing for their Goblin Gang.',
        'Rocketing troops when the math said to race towers instead.',
        'Panic-placing Inferno Tower too early against beatdown.',
      ],
    },
    appHelp: {
      heading: 'How RoyaleCoach AI Helps Your Bait Game',
      paragraphs: [
        'Bait is a discipline deck — wins come from spell counting and patience, and losses come from invisible timing errors. RoyaleCoach AI reviews your battles to find those patterns, checks your deck structure if you are running a bait variant, and shows the current meta so you know how many Log-carrying decks you will actually face.',
      ],
      features: [
        { label: 'Deck Analysis', href: '/features/deck-analysis', description: 'Diagnose your bait variant’s structure and your play patterns.' },
        { label: 'Meta Decks', href: '/features/meta-decks', description: 'See how spell-heavy the current meta is.' },
        { label: 'Top Battles', href: '/features/top-battles', description: 'Watch expert barrel placement and spell baiting.' },
      ],
    },
    faqs: [
      {
        question: 'What does "bait" mean in Clash Royale?',
        answer:
          'Playing cards that force the opponent to spend a specific counter (usually a small spell), so your real threat lands unanswered afterwards. Log bait targets The Log and Zap specifically.',
      },
      {
        question: 'Is Log bait good against beatdown?',
        answer:
          'It is playable but demanding — Inferno Tower must get value every push, and Rocket often has to remove key support troops. Protect the Inferno from Zap/Fisherman tricks.',
      },
      {
        question: 'What are common Log bait variations?',
        answer:
          'Popular swaps include Goblin Cage or Tesla for Inferno Tower, Dart Goblin or Firecracker for Princess, and Tornado versions built around activating the King Tower.',
      },
      {
        question: 'How do I beat Log bait?',
        answer:
          'Track your own spells with discipline, defend barrels with troop placements when possible, and pressure the opposite lane — bait decks have thin defenses against heavy pushes once Inferno Tower is gone.',
      },
    ],
    related: [
      { label: 'Hog 2.6 Deck Guide', href: '/guides/hog-2-6-deck-guide' },
      { label: 'Clash Royale Meta Decks', href: '/guides/clash-royale-meta-decks' },
      { label: 'Mega Knight Deck Guide', href: '/guides/mega-knight-deck-guide' },
    ],
  },

  {
    slug: 'mega-knight-deck-guide',
    category: 'Deck Guide',
    metaTitle: 'Best Mega Knight Deck Guide',
    metaDescription:
      'How to build and play Mega Knight decks: the best win condition pairings, when to drop the Mega Knight, matchup advice, and the mistakes that waste 7 elixir.',
    h1: 'Mega Knight Deck Guide: Big Jumps, Bigger Value',
    primaryKeyword: 'mega knight deck',
    readingMinutes: 7,
    cardSummary: 'How to get real value from 7 elixir — pairings, timing, counters.',
    intro: [
      'Mega Knight is one of the most played — and most misplayed — cards in Clash Royale. For 7 elixir you get a jumping, splashing tank that can erase a whole push on defense and snowball into a counter-attack.',
      'The difference between Mega Knight decks that dominate mid-ladder and the ones that feed easy wins is simple: value. This guide covers how to build around him, when to play him, and how to avoid the classic 7-elixir mistakes.',
    ],
    sections: [
      {
        heading: 'A Typical Mega Knight Deck',
        paragraphs: [
          'Mega Knight is not a true win condition — he needs a partner that targets buildings. A classic bridge-spam style list:',
        ],
        bullets: [
          'Mega Knight (7) — defensive anchor and counter-push tank.',
          'Battle Ram or Ram Rider (4/5) — the actual building-targeting win condition.',
          'Bandit (3) — cheap bridge pressure with dash invulnerability.',
          'Electro Wizard (4) — air defense, resets, and push support.',
          'Bats or Skeleton Barrel (2/3) — cheap swarm and bait.',
          'Zap or Snowball (2) — small spell for swarms and resets.',
          'Poison or Fireball (4) — medium spell for support troops.',
          'Miner or Goblin Drill (3/4) — chip damage and tower distraction (common variants).',
        ],
      },
      {
        heading: 'The Golden Rule: Mega Knight Is a Defensive Card',
        paragraphs: [
          'Dropping Mega Knight at the bridge as an opener is the most common mistake in the game. Alone, he walks slowly into a swarm or a tank-killer and dies for zero value. His spawn damage and jump exist to punish clumps of enemy troops on your side of the arena.',
          'Play him on defense against grouped pushes, get a multi-card elixir trade, and then counter-attack behind the surviving Mega Knight with your win condition. That sequencing is the whole archetype.',
        ],
      },
      {
        heading: 'Key Matchups',
        paragraphs: [
          'Know where the deck is strong and where it struggles:',
        ],
        bullets: [
          'Versus swarm/bait decks: excellent — his splash erases their defense cheaply.',
          'Versus bridge spam mirrors: whoever defends first usually wins the counter-push war.',
          'Versus P.E.K.K.A: bad news — never send Mega Knight into her lane without support.',
          'Versus Inferno Tower/Dragon decks: you need resets (Electro Wizard, Zap) timed precisely.',
          'Versus air decks (Lava Hound): Mega Knight does nothing against air — your support cards carry.',
        ],
      },
    ],
    tips: {
      heading: 'Practical Mega Knight Tips',
      items: [
        'Use spawn damage — drop him on top of grouped troops, not next to them.',
        'Defend first, then counter-push behind him with Battle Ram or Bandit.',
        'Keep a reset card in hand when Inferno threats are in their rotation.',
        'Split your bridge pressure between lanes to stretch their defenses.',
        'Track his jump: he leaps to ground troops crossing the river — use that to protect your tower.',
      ],
    },
    mistakes: {
      heading: 'Mistakes That Waste 7 Elixir',
      items: [
        'Opening the match with a naked Mega Knight at the bridge.',
        'Sending him into P.E.K.K.A, Mini P.E.K.K.A, or Inferno without support or resets.',
        'Using him against single ranged troops — 7 elixir to answer a 3-elixir card.',
        'Forgetting he cannot hit air and having no plan against Balloon.',
        'Stacking your whole push in one lane into a Tornado + splash defense.',
      ],
    },
    appHelp: {
      heading: 'How RoyaleCoach AI Improves Your Mega Knight Play',
      paragraphs: [
        'Mega Knight decks live or die on value decisions, and value leaks are hard to see in your own games. RoyaleCoach AI analyzes your battles for exactly these patterns — where your 7 elixir went and what it traded for — and checks whether your variant has the resets and air cover its matchups demand.',
      ],
      features: [
        { label: 'Deck Analysis', href: '/features/deck-analysis', description: 'Find the structural gaps in your Mega Knight variant.' },
        { label: 'Deck Builder', href: '/features/deck-builder', description: 'Build a Mega Knight deck around your actual card levels.' },
        { label: 'Meta Decks', href: '/features/meta-decks', description: 'See where Mega Knight sits in the current meta rankings.' },
      ],
    },
    faqs: [
      {
        question: 'Is Mega Knight a win condition?',
        answer:
          'Not really — he targets troops, not buildings. He is a defensive anchor and counter-push tank; pair him with a building-targeting card like Battle Ram, Ram Rider, Miner, or Goblin Drill to actually close games.',
      },
      {
        question: 'What is the best Mega Knight deck?',
        answer:
          'Bridge-spam style lists (Mega Knight + Battle Ram + Bandit + Electro Wizard) are the classic template, and Miner/Goblin Drill variants are common too. The best version depends on your card levels — build around what you own.',
      },
      {
        question: 'How do I counter Mega Knight?',
        answer:
          'Single-target tank-killers (P.E.K.K.A, Mini P.E.K.K.A, Inferno Tower) beat him cleanly, and spreading your troops denies his splash value. Never clump defenders where he lands.',
      },
      {
        question: 'Why do higher-level players say Mega Knight is overrated?',
        answer:
          'At top level, opponents punish low-value Mega Knight plays ruthlessly, and his weaknesses (no air targeting, expensive) matter more. Played with discipline he remains strong; played on autopilot he feeds elixir advantages.',
      },
    ],
    related: [
      { label: 'Best Clash Royale Decks', href: '/guides/best-clash-royale-decks' },
      { label: 'AI Deck Builder Guide', href: '/guides/best-clash-royale-deck-builder' },
      { label: 'Lumberloon Deck Guide', href: '/guides/lumberloon-deck-guide' },
    ],
  },

  {
    slug: 'lumberloon-deck-guide',
    category: 'Deck Guide',
    metaTitle: 'Lumberloon Deck Guide',
    metaDescription:
      'The Lumberloon (Lumberjack + Balloon) deck explained: the classic card list, the rage-fueled push that defines it, matchups, timing, and common mistakes.',
    h1: 'Lumberloon Deck Guide: The Rage-Fueled Balloon Push',
    primaryKeyword: 'lumberloon deck',
    readingMinutes: 7,
    cardSummary: 'Lumberjack + Balloon — one of the scariest pushes in the game.',
    intro: [
      'Lumberloon is the combination of Lumberjack and Balloon — and one of the most feared pushes in Clash Royale. The Lumberjack runs ahead, tanks tower shots, and when he dies, his dropped Rage speeds up the Balloon behind him. If even one raged Balloon bomb connects, the tower is usually finished.',
      'This guide covers the classic Lumberloon Freeze list, how to time the push, and the matchup knowledge that keeps the deck honest.',
    ],
    sections: [
      {
        heading: 'The Classic Lumberloon Freeze List',
        paragraphs: [
          'The most established version pairs the combo with Freeze and solid air-defense support:',
        ],
        bullets: [
          'Balloon (5) — the win condition; massive death-bomb damage even when stopped.',
          'Lumberjack (4) — the tank/rage engine that makes the Balloon terrifying.',
          'Freeze (4) — locks defending troops and towers while the Balloon connects.',
          'Inferno Dragon (4) — melts tanks and defends beatdown pushes.',
          'Electro Dragon or Ice Golem (5/2) — chain resets or a cheap kiting tank, by variant.',
          'Bowler or Barbarian Barrel (5/2) — ground control that shrugs off swarms.',
          'Tornado (3) — pulls defenders away from the Balloon and activates King Tower.',
          'Zap or Snowball (2) — resets and swarm cleanup.',
        ],
      },
      {
        heading: 'How to Play the Push',
        paragraphs: [
          'The full Lumberjack + Balloon push costs 9 elixir, so timing is everything. The standard windows: right after you defend successfully (your defenders become the escort), at the start of double elixir, and immediately after the opponent commits heavy elixir elsewhere.',
          'Placement matters: Lumberjack directly in front of the Balloon at the bridge, aimed at the same lane. Hold Freeze for the moment their defense clusters — freezing one Musketeer is a waste; freezing a Musketeer, a building, and the tower wins games.',
        ],
      },
      {
        heading: 'Defending with an Offense Deck',
        paragraphs: [
          'Lumberloon defends with its support cards: Inferno Dragon handles tanks, Tornado + Bowler controls ground swarms, and Lumberjack himself is an excellent defensive card whose death-Rage then powers the counter-push. The deck’s real weakness is sustained cheap pressure — it has no building, so Hog and Ram decks force awkward Tornado defenses.',
        ],
      },
    ],
    tips: {
      heading: 'Practical Lumberloon Tips',
      items: [
        'Push after defending — surviving troops turn a 9-elixir gamble into a supported attack.',
        'Save Freeze for clustered defenses, not single troops.',
        'Use Tornado to drag Balloon-defenders out of range at the last second.',
        'Learn King Tower activation with Tornado — it changes every future defense.',
        'Vary your timing; predictable Balloon pushes get pre-answered with buildings.',
      ],
    },
    mistakes: {
      heading: 'Mistakes That Sink the Balloon',
      items: [
        'Sending the 9-elixir combo blind into a full-elixir opponent.',
        'Freezing early and watching fresh defenders walk in unfrozen.',
        'Using Lumberjack on defense and immediately losing your push threat — plan rotations.',
        'Ignoring the opponent’s building placements instead of baiting them first.',
        'Having no answer plan for Hog cycle chip — the matchup is a damage race you must count.',
      ],
    },
    appHelp: {
      heading: 'How RoyaleCoach AI Helps Your Lumberloon Game',
      paragraphs: [
        'Lumberloon is a timing deck: the same push wins or loses depending on when you commit. RoyaleCoach AI reviews your battle history to show where your big pushes leaked value, whether your variant’s defense holds up against the decks you actually face, and how top players time the same combo.',
      ],
      features: [
        { label: 'Deck Analysis', href: '/features/deck-analysis', description: 'Check your Lumberloon variant’s defensive structure.' },
        { label: 'Deck Builder', href: '/features/deck-builder', description: 'Build a Lumberjack + Balloon deck around your card levels.' },
        { label: 'Meta Decks', href: '/features/meta-decks', description: 'See how Lumberloon compares to the current meta.' },
      ],
    },
    faqs: [
      {
        question: 'What is Lumberloon?',
        answer:
          'The Lumberjack + Balloon combo: Lumberjack tanks and drops Rage on death, which speeds up the Balloon behind him. It is one of the highest-damage pushes in Clash Royale.',
      },
      {
        question: 'What is the best Lumberloon deck?',
        answer:
          'Lumberloon Freeze is the classic template — Balloon, Lumberjack, Freeze, Inferno Dragon, Tornado, plus ground control and a small spell. Variants swap Bowler, Electro Dragon, and Ice Golem by preference and levels.',
      },
      {
        question: 'How do I defend against Lumberloon?',
        answer:
          'Keep a building or strong air answer in rotation, spread defenders so one Freeze cannot lock everything, and pressure the opposite lane so the 9-elixir combo can never launch safely.',
      },
      {
        question: 'Is Lumberloon good on ladder?',
        answer:
          'It is a perennial ladder archetype — Balloon’s death bomb means even "failed" pushes deal damage. Success depends on disciplined timing and knowing the Hog-cycle and bait matchups.',
      },
    ],
    related: [
      { label: 'Mega Knight Deck Guide', href: '/guides/mega-knight-deck-guide' },
      { label: 'Clash Royale Meta Decks', href: '/guides/clash-royale-meta-decks' },
      { label: 'Best Clash Royale Decks', href: '/guides/best-clash-royale-decks' },
    ],
  },
];
