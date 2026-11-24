// Top bar shown on every page: logo + links.
import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="wrap nav">
      <Link href="/" className="brand">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, plain img is fine */}
        <img src="/icon.png" alt="" />
        Homepot
      </Link>
      <nav className="nav-links">
        <Link href="/support/">Support</Link>
        <Link href="/privacy/">Privacy</Link>
      </nav>
    </header>
  );
}
