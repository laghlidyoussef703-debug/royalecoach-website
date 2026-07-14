import Link from 'next/link';
import Image from 'next/image';

const PRODUCT = [
  { label: 'Deck Analysis', href: '/features/deck-analysis' },
  { label: 'Clash Royale Guides', href: '/guides' },
  { label: 'RoyaleCoach AI Pricing', href: '/pricing' },
  { label: 'Download RoyaleCoach AI', href: '/download' },
  { label: 'Creator Program', href: '/affiliate' },
];

const SUPPORT = [
  { label: 'RoyaleCoach AI FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Delete Account', href: '/delete-account' },
];

const LEGAL = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
];

const COMPANY = [
  { label: 'About Us', href: '/about' },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="mb-4 font-['Clash'] text-sm uppercase text-white">{title}</h2>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={`${title}-${link.href}-${link.label}`}>
            <Link href={link.href} className="text-sm text-[#C7D3E6] transition-colors hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#F9FBFF] px-4 pb-8 sm:px-6 lg:px-6" role="contentinfo">
      <div className="mx-auto max-w-[1180px] rounded-[30px] bg-[radial-gradient(circle_at_18%_18%,rgba(26,108,246,0.22),transparent_28%),linear-gradient(135deg,#061225_0%,#071B34_58%,#041122_100%)] px-8 py-9 text-white shadow-[0_22px_50px_rgba(11,23,48,0.22)] md:px-12">
        <div className="grid gap-9 md:grid-cols-[1.55fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-3">
              <Image
                src="/brand/logo-mark.png"
                alt=""
                width={38}
                height={38}
                className="rounded-xl"
                loading="lazy"
              />
              <span className="font-['Clash'] text-[24px] text-white">
                RoyaleCoach <span className="text-[#2F86FF]">AI</span>
              </span>
            </Link>
            <p className="max-w-[220px] text-base leading-7 text-[#C7D3E6]">
              Your personal AI coach for Clash Royale.
            </p>
            <p className="mt-3 max-w-[240px] text-sm leading-6 text-[#AFC0D8]">
              RoyaleCoach AI is owned and operated by Veltrix LLC.
            </p>
          </div>

          <FooterColumn title="Product" links={PRODUCT} />
          <FooterColumn title="Support" links={SUPPORT} />
          <FooterColumn title="Legal" links={LEGAL} />
          <FooterColumn title="Company" links={COMPANY} />
        </div>

        <div className="mt-9 border-t border-white/10 pt-6 text-center">
          <p className="mx-auto max-w-4xl text-xs leading-6 text-[#B7C4D8]">
            RoyaleCoach AI is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and Supercell is not responsible for it.
            All Clash Royale and Supercell assets are trademarks of Supercell Oy.
          </p>
        </div>
      </div>
    </footer>
  );
}
