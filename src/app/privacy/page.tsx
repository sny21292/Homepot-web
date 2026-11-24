// Privacy policy (the stores' "Privacy policy URL"). Keep it in step with what the app
// really collects: see ../supabase/migrations/ and ../src/lib/ in the app repo.
import type { Metadata } from 'next';
import Link from 'next/link';

import { COMPANY, CONTACT_EMAIL, POLICY_UPDATED } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'What Homepot collects, why, and your choices.',
};

const COLLECTED: [string, string][] = [
  ['Email address', 'To create your account and sign you in (we email you a one-time code).'],
  [
    'Name (the one you choose, or the one Google or Apple shares when you sign in with them)',
    'So your family can see who added an expense.',
  ],
  [
    'Expenses you add: amount, currency, category, date, payment method, an optional note, and whether it is Household or Personal',
    "This is the app's main purpose: tracking spending.",
  ],
  [
    "Family details: your family's name and currency, its members, and invite codes",
    'To share household expenses with the people you invite.',
  ],
  ['Settings, such as your default visibility', 'To remember your choices.'],
  ['Invite code attempts (who tried a code and when)', 'To stop people guessing invite codes.'],
  [
    'Basic technical logs kept by our hosting providers, such as IP address and request times',
    'To keep the service secure and working. These are kept for a short time.',
  ],
];

export default function PrivacyPage() {
  return (
    <main className="doc">
      <h1>Privacy Policy</h1>
      <p className="updated">Last updated: {POLICY_UPDATED}</p>
      <p>
        Homepot (&ldquo;the app&rdquo;) is made by {COMPANY}, India (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;). This policy explains what information the app collects, why, who it is
        shared with, and the choices you have. Short version: we only collect what the app needs to
        work, we never sell your data, and there are no ads or ad trackers.
      </p>

      <h2>1. What we collect</h2>
      <table>
        <thead>
          <tr>
            <th>Information</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          {COLLECTED.map(([what, why]) => (
            <tr key={what}>
              <td>{what}</td>
              <td>{why}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        We do <b>not</b> collect your location, contacts, photos, bank or card details, or
        advertising identifiers. The app has no analytics or advertising SDKs.
      </p>

      <h2>2. Who can see your expenses</h2>
      <ul>
        <li>
          <b>Household</b> expenses are visible to the members of your family in Homepot.
        </li>
        <li>
          <b>Personal</b> (🔒) expenses are visible only to you.
        </li>
      </ul>
      <p>These rules are enforced on our servers, not just in the app.</p>

      <h2>3. Service providers we use</h2>
      <p>We share information only with providers that run the service for us, and only what they need:</p>
      <ul>
        <li>
          <b>Supabase</b>: stores your account and data. Our database is hosted in Mumbai, India
          (Amazon Web Services).
        </li>
        <li>
          <b>Resend</b>: sends the sign-in code emails (receives your email address).
        </li>
        <li>
          <b>Google</b> and <b>Apple</b>: only if you choose &ldquo;Continue with Google&rdquo; or
          &ldquo;Continue with Apple&rdquo;. They tell us your email address and name. Apple lets you
          hide your real email address.
        </li>
        <li>
          <b>Expo</b>: delivers app builds and updates. It does not receive your expenses.
        </li>
      </ul>
      <p>We do not sell, rent or trade your personal information, and we do not share it for advertising.</p>

      <h2>4. Security</h2>
      <p>
        Data is sent over encrypted connections (HTTPS) and stored with our database provider.
        Access rules in the database make sure each person can only read their own data and their
        family&apos;s household data.
      </p>

      <h2>5. How long we keep it</h2>
      <p>
        We keep your information while you have an account. When you delete your account, we delete
        it as described below. Backups kept by our hosting provider are overwritten within their
        normal cycle, usually within a few weeks.
      </p>

      <h2>6. Deleting your account</h2>
      <p>
        In the app, open <b>Settings → Delete account</b>. This permanently deletes your account,
        your name, your email address and all your <b>Personal</b> expenses. <b>Household</b>{' '}
        expenses you added stay with your family (shown as added by a &ldquo;Former member&rdquo;)
        because they are part of the family&apos;s shared record. If you were the last member of
        your family, the family and all its expenses are deleted. You can also{' '}
        <Link href="/delete-account/">ask us to delete your account by email</Link>.
      </p>

      <h2>7. Your rights</h2>
      <p>
        You can see and correct your information in the app, ask us for a copy of it, or delete it.
        Depending on where you live (for example under India&apos;s Digital Personal Data Protection
        Act or the EU GDPR) you may have further rights, such as to access or correct your data or
        withdraw consent. To use any of these, email us at the address below.
      </p>

      <h2>8. Children</h2>
      <p>
        Homepot is meant for adults managing household money. It is not directed at children under
        13, and we do not knowingly collect their information.
      </p>

      <h2>9. Changes</h2>
      <p>
        If we change this policy, we will update the date above, and tell you in the app if the
        change is important.
      </p>

      <h2>10. Contact</h2>
      <p>
        {COMPANY}, India
        <br />
        Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </main>
  );
}
