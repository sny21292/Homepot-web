// Footer shown on every page: company name + legal links.
import Link from 'next/link';

import { COMPANY } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="wrap footer">
      <p>
        <Link href="/privacy/">Privacy policy</Link>
        <Link href="/delete-account/">Delete account</Link>
        <Link href="/support/">Support</Link>
      </p>
      <p>© {new Date().getFullYear()} {COMPANY}</p>
    </footer>
  );
}
