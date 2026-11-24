// How to delete a Homepot account (Google Play requires a web page for this).
import type { Metadata } from 'next';
import Link from 'next/link';

import { COMPANY, CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Delete your account',
  description: 'How to delete your Homepot account and data.',
};

export default function DeleteAccountPage() {
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Delete my Homepot account')}`;
  return (
    <main className="doc">
      <h1>Delete your Homepot account</h1>
      <p className="updated">Homepot by {COMPANY}</p>

      <h2>In the app (fastest)</h2>
      <ol>
        <li>
          Open Homepot and tap the <b>Settings</b> icon at the top of the Home screen.
        </li>
        <li>
          Tap <b>Delete account</b> and confirm.
        </li>
      </ol>
      <p>Your account is deleted straight away.</p>

      <h2>By email</h2>
      <p>
        If you can&apos;t open the app, email <a href={mailto}>{CONTACT_EMAIL}</a> from the email
        address you sign in with, with the subject &ldquo;Delete my Homepot account&rdquo;. We will
        delete it within 30 days and reply to confirm.
      </p>

      <h2>What gets deleted</h2>
      <ul>
        <li>Your account, email address and name</li>
        <li>
          All your <b>Personal</b> (🔒) expenses
        </li>
        <li>
          Your family membership. If you were the last member, the family and all its expenses are
          deleted too.
        </li>
      </ul>

      <h2>What is kept</h2>
      <ul>
        <li>
          <b>Household</b> expenses you added to a family that still has other members stay with
          that family, shown as added by a &ldquo;Former member&rdquo;. They no longer contain your
          name or email.
        </li>
        <li>Short-lived server logs and backups, which are overwritten within a few weeks.</li>
      </ul>
      <p>
        More detail is in our <Link href="/privacy/">privacy policy</Link>.
      </p>
    </main>
  );
}
