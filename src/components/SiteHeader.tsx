// Sticky, frosted top bar shown on every page: logo + links.
import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand" aria-label="Homepot home">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, plain img is fine */}
          <img src="/icon.png" alt="" width={38} height={38} />
          Homepot
        </Link>
        <nav className="nav-links" aria-label="Main">
          <Link href="/#features" className="hide-sm">Features</Link>
          <Link href="/#faq" className="hide-sm">FAQ</Link>
          <Link href="/support/">Support</Link>
          <Link href="/#download" className="nav-cta">Get the app</Link>
        </nav>
      </div>
    </header>
  );
}
