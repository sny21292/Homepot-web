'use client';
// Reads the invite code from ?c= in the browser (the site is static, so the server
// never sees it) and offers to open it in the app.
import { useEffect, useState } from 'react';

import { StoreBadges } from '@/components/StoreBadges';

// Invite codes are 6 letters/digits; anything else is ignored.
function readCode(search: string): string | null {
  const raw = new URLSearchParams(search).get('c') ?? '';
  const code = raw.trim().toUpperCase();
  return /^[A-Z0-9]{6}$/.test(code) ? code : null;
}

export function JoinInvite() {
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    setCode(readCode(window.location.search));
  }, []);

  return (
    <>
      <span className="eyebrow">Family invite</span>
      <h1>You&apos;re invited to a family pot</h1>
      <p>
        Someone in your family uses Homepot to track household spending together. Join them with
        this code:
      </p>
      {code ? <p className="join-code" aria-label={`Invite code ${code.split('').join(' ')}`}>{code}</p> : null}
      {code ? (
        <p>
          <a className="join-open" href={`homepot://join/${code}`}>
            Open in Homepot
          </a>
        </p>
      ) : null}
      <h2>Don&apos;t have the app yet?</h2>
      <p>
        Install Homepot, sign in, then tap the people icon → &ldquo;Join a family&rdquo; and enter
        the code{code ? '' : ' from your invite message'}. Codes work once and expire after 7 days.
      </p>
      <StoreBadges />
    </>
  );
}
