// Support page (the stores' "Support URL").
import type { Metadata } from 'next';
import Link from 'next/link';

import { CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = { title: 'Support' };

export default function SupportPage() {
  return (
    <main className="doc">
      <h1>Support</h1>
      <p>
        Questions, problems or ideas? Email{' '}
        <a href={`mailto:${CONTACT_EMAIL}?subject=Homepot`}>{CONTACT_EMAIL}</a> and we&apos;ll get
        back to you.
      </p>
      <h2>Common questions</h2>
      <p>
        <b>I didn&apos;t get my sign-in code.</b> Check your spam folder, wait a minute and tap
        &ldquo;Send a new code&rdquo;. Codes work once and expire after an hour.
      </p>
      <p>
        <b>How do I add my family?</b> Tap the people icon on the Home screen, then &ldquo;Invite
        family member&rdquo;, and share the 6-letter code. They enter it under &ldquo;Join a
        family&rdquo;.
      </p>
      <p>
        <b>Who can see my expenses?</b> Household expenses are visible to your family. Personal (🔒)
        expenses are visible only to you.
      </p>
      <p>
        <b>How do I delete my account?</b> See <Link href="/delete-account/">Delete your account</Link>.
      </p>
    </main>
  );
}
