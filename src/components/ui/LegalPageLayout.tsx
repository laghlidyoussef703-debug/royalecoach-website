import type { ReactNode } from 'react';
import Link from 'next/link';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-[#F8F9FB]">
      {/* Hero header */}
      <div className="bg-[#1A6CF6] py-14 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <nav aria-label="Breadcrumb" className="text-sm mb-4">
            <ol className="flex items-center gap-2 text-blue-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="opacity-40">/</li>
              <li className="text-white/80">{title}</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
          <p className="text-blue-200 mt-3 text-sm">Last Updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-8 md:p-12 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-[#0D0F1A] [&>h2]:mt-10 [&>h2]:mb-3 [&>h2]:first:mt-0 [&>h3]:text-base [&>h3]:font-semibold [&>h3]:text-[#18233B] [&>h3]:mt-6 [&>h3]:mb-2 [&>p]:text-[#6B7280] [&>p]:leading-relaxed [&>p]:mb-4 [&>ul]:text-[#6B7280] [&>ul]:mb-4 [&>ul]:pl-5 [&>ul>li]:leading-relaxed [&>ul>li]:mb-1.5 [&>ul>li]:list-disc [&>ol]:text-[#6B7280] [&>ol]:mb-4 [&>ol]:pl-5 [&>ol>li]:leading-relaxed [&>ol>li]:mb-2 [&>ol>li]:list-decimal [&_a]:text-[#1A6CF6] [&_a]:no-underline [&_a:hover]:underline [&>hr]:border-[#E5E7EB] [&>hr]:my-8">
          {children}
        </div>
      </div>
    </main>
  );
}
