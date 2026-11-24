// Wraps every page: <html>, fonts (self-hosted at build time by next/font), header,
// footer and default SEO tags.
import type { Metadata, Viewport } from 'next';
import { DM_Sans, Nunito } from 'next/font/google';

import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { SITE_URL } from '@/lib/site';

import './globals.css';

const nunito = Nunito({ subsets: ['latin'], weight: ['700', '800', '900'], variable: '--font-nunito' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Homepot: your family's money, in one pot", template: '%s · Homepot' },
  description:
    'A free family expense tracker. Share household spending, keep personal expenses private, in any currency.',
  openGraph: { images: ['/welcome.png'], siteName: 'Homepot', type: 'website' },
};

export const viewport: Viewport = { themeColor: '#FBF7F2' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${dmSans.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
