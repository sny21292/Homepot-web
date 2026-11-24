// Invite landing page: https://homepot.techmarbles.com/join/?c=ABC234
// Chat apps don't make homepot:// links tappable, so the app shares this web address.
// The page shows the code, a button that opens the app's own invite screen, and the
// store badges for people who don't have Homepot yet.
import type { Metadata } from 'next';

import { JoinInvite } from './JoinInvite';

export const metadata: Metadata = {
  title: 'Join your family on Homepot',
  description: "You've been invited to a family on Homepot, the shared family expense tracker.",
  robots: { index: false },
};

export default function JoinPage() {
  return (
    <main className="doc">
      <div className="doc-card join-card">
        <JoinInvite />
      </div>
    </main>
  );
}
