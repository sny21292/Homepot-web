// Footer shown on every page: company name + legal links.
import Link from 'next/link';

import { COMPANY, CONTACT_EMAIL } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>© {new Date().getFullYear()} {COMPANY}</span>
        <nav aria-label="Footer">
          <Link href="/privacy/">Privacy policy</Link>
          <Link href="/delete-account/">Delete account</Link>
          <Link href="/support/">Support</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </nav>
      </div>
    </footer>
  );
}
