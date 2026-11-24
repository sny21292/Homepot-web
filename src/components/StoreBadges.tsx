// App Store and Google Play badges. Until the apps are public they're shown as
// "coming soon" (not links); set the URLs in src/lib/site.ts to make them live.
import { Apple, Play } from '@/components/Icons';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/site';

function Badge({ href, children, label }: { href: string | null; children: React.ReactNode; label: string }) {
  return href ? (
    <a className="store-badge" href={href} aria-label={label}>
      {children}
    </a>
  ) : (
    <span className="store-badge" aria-label={`${label} (coming soon)`}>
      {children}
    </span>
  );
}

export function StoreBadges() {
  const live = APP_STORE_URL || PLAY_STORE_URL;
  return (
    <div>
      <div className="store-badges">
        <Badge href={APP_STORE_URL} label="Download on the App Store">
          <Apple />
          <span>
            <small>Download on the</small>
            <b>App Store</b>
          </span>
        </Badge>
        <Badge href={PLAY_STORE_URL} label="Get it on Google Play">
          <Play />
          <span>
            <small>Get it on</small>
            <b>Google Play</b>
          </span>
        </Badge>
      </div>
      {live ? null : (
        <div className="soon-note">
          <span className="pulse-dot" aria-hidden /> Coming soon to iPhone and Android. Free.
        </div>
      )}
    </div>
  );
}
