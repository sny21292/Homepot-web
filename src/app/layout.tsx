// Wraps every page: <html>, fonts/styles, header and footer, default SEO tags.
import type { Metadata } from 'next';

import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { SITE_URL } from '@/lib/site';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Homepot: family expense tracker', template: '%s · Homepot' },
  description:
    'Track family spending together. Share household expenses, keep personal ones private. Any currency.',
  openGraph: { images: ['/welcome.png'] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
