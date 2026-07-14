import type { Metadata } from 'next';

// This layout forces noindex,nofollow on every /u/[code] page.
// The /u/[code] route is a functional referral route used by the mobile app.
// It must NEVER appear in Google search results.
export const metadata: Metadata = {
  title: 'RoyaleCoach AI — Your invite is ready',
  description: "Join RoyaleCoach AI with your friend's invite.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function InviteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
