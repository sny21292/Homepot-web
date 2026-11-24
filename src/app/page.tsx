// Landing page: hero with an animated phone, categories marquee, how it works,
// feature bento (live demos), family section, FAQ and a final call to action.
// Only promise what the app really does today.
import { Check, CheckCircle, Mail, Shield, Users, Wifi } from '@/components/Icons';
import { CurrencyCycler } from '@/components/landing/CurrencyCycler';
import { HeroPhone } from '@/components/landing/HeroPhone';
import { OtpDemo } from '@/components/landing/OtpDemo';
import { Reveal } from '@/components/landing/Reveal';
import { VisibilityDemo } from '@/components/landing/VisibilityDemo';
import { StoreBadges } from '@/components/StoreBadges';
import { CATEGORIES } from '@/lib/categories';

const STEPS = [
  { title: 'Add in seconds', text: 'Type the amount, pick a category, save. The date is today unless you change it.' },
  { title: 'Invite your family', text: 'Share a 6-letter code. Partner, parents or flatmates join your pot from their own phone.' },
  { title: 'See where it went', text: "The month's total and every expense, day by day, updated live on everyone's phone." },
];

const FAQ = [
  { q: 'Is Homepot free?', a: 'Yes. Tracking expenses and sharing them with your family is free.' },
  { q: 'Can my family see everything I spend?', a: 'No. Each expense is Household (your family sees it) or Personal (only you see it). The rule is enforced on our servers, not just hidden in the app.' },
  { q: 'Which currencies work?', a: 'All of them. Each family picks one currency, and amounts are shown the way your country writes numbers.' },
  { q: 'Do I need a password?', a: 'No. Sign in with Google, Apple, or a 6-digit code we email you. Prefer a password? You can add one in Settings.' },
  { q: 'Does it read my bank account or SMS?', a: 'No. You add expenses yourself. Homepot never asks for bank details, card numbers or your messages.' },
  { q: 'Can I delete my account?', a: 'Any time, from Settings in the app. Your personal expenses are deleted with it.' },
];

export default function Home() {
  const marquee = [...CATEGORIES, ...CATEGORIES];
  return (
    <main>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Family expense tracker</span>
            <h1>
              Your family&apos;s money,{' '}
              <span className="accent">
                in one pot.
                <svg viewBox="0 0 300 16" preserveAspectRatio="none" aria-hidden>
                  <path d="M3 11 C 70 3, 150 3, 297 9" stroke="#F6B93B" strokeWidth="6" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="hero-lead">
              Homepot is the simple way for a family to track spending together. Add expenses in
              seconds, share the household ones, and keep personal ones private.
            </p>
            <div id="download">
              <StoreBadges />
            </div>
            <ul className="hero-points">
              <li><CheckCircle /> Free</li>
              <li><CheckCircle /> Any currency</li>
              <li><CheckCircle /> No ads</li>
              <li><CheckCircle /> No password needed</li>
            </ul>
          </div>
          <HeroPhone />
        </div>
      </section>

      {/* ---------- Categories marquee ---------- */}
      <div className="marquee" aria-label="Spending categories">
        <div className="marquee-track">
          {marquee.map((c, i) => (
            <span className="chip" key={`${c.id}-${i}`} aria-hidden={i >= CATEGORIES.length}>
              <span className="cat-ico" style={{ background: c.color }}>
                <c.Icon />
              </span>
              {c.label}
            </span>
          ))}
        </div>
      </div>

      {/* ---------- How it works ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>No more &ldquo;where did it all go?&rdquo;</h2>
            <p>Three steps and your whole family is on the same page about money.</p>
          </Reveal>
          <div className="steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={(i + 1) as 1 | 2 | 3} className="step">
                <div className="step-num">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Features bento ---------- */}
      <section className="section" id="features" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Features</span>
            <h2>Made for how families really spend</h2>
            <p>Shared where it should be, private where it matters.</p>
          </Reveal>
          <div className="bento">
            <Reveal className="card b-wide">
              <h3>Household or Personal</h3>
              <p>Every expense is either shared with the family pot or kept just for you. Try it:</p>
              <div className="demo">
                <VisibilityDemo />
              </div>
            </Reveal>

            <Reveal delay={1} className="card orange b-narrow">
              <h3>Any currency</h3>
              <p>Each family picks its own, shown the local way.</p>
              <div className="demo">
                <CurrencyCycler />
              </div>
            </Reveal>

            <Reveal className="card dark b-half">
              <h3>Live on every phone</h3>
              <p>When someone adds an expense, it appears on the whole family&apos;s phones. No refresh needed.</p>
              <div className="demo sync" aria-hidden>
                <div className="mini-phone">
                  <div className="mini-screen">
                    <div className="mini-head">Priya</div>
                    <div className="mini-row new"><i style={{ background: '#2E7D32' }} />Groceries<span className="r">₹2,340</span></div>
                    <div className="mini-row"><i style={{ background: '#1565C0' }} />Petrol<span className="r">₹1,500</span></div>
                    <div className="mini-row"><i style={{ background: '#F9A825' }} />Electricity<span className="r">₹1,860</span></div>
                  </div>
                </div>
                <div className="beam" />
                <div className="mini-phone">
                  <div className="mini-screen">
                    <div className="mini-head">You</div>
                    <div className="mini-row new late"><i style={{ background: '#2E7D32' }} />Groceries<span className="r">₹2,340</span></div>
                    <div className="mini-row"><i style={{ background: '#1565C0' }} />Petrol<span className="r">₹1,500</span></div>
                    <div className="mini-row"><i style={{ background: '#F9A825' }} />Electricity<span className="r">₹1,860</span></div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1} className="card b-half">
              <h3>Sign in without a password</h3>
              <p>Continue with Google or Apple, or get a 6-digit code by email.</p>
              <div className="demo">
                <div className="mail" aria-hidden>
                  <span className="mail-ico"><Mail /></span>
                  <div>
                    <b>Your Homepot code</b>
                    <small>Type this code in the app to sign in</small>
                  </div>
                  <time>now</time>
                </div>
                <OtpDemo />
                <div className="signin-opts">
                  <span>Google</span>
                  <span>Apple</span>
                  <span>Email code</span>
                </div>
              </div>
            </Reveal>

            <Reveal className="card dark b-narrow">
              <div className="shield"><Shield /></div>
              <h3>Private by design</h3>
              <ul className="ticks">
                <li><Check /> No ads, ever</li>
                <li><Check /> Your data is never sold</li>
                <li><Check /> No bank or SMS access</li>
                <li><Check /> Delete any time</li>
              </ul>
            </Reveal>

            <Reveal delay={1} className="card b-wide">
              <h3>Works when the signal doesn&apos;t</h3>
              <p>
                Your latest list is saved on the phone, so you can always check what&apos;s been
                spent, even with no internet. Homepot tells you clearly if something couldn&apos;t
                be saved.
              </p>
              <div className="demo" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span className="cat-ico" style={{ background: 'var(--ink)', width: 48, height: 48, borderRadius: 14 }}>
                  <Wifi />
                </span>
                <span style={{ color: 'var(--muted)', fontSize: 15 }}>Last list always there, offline or online.</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Family ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap family">
          <Reveal>
            <div className="orbit" aria-hidden>
              <div className="orbit-ring" />
              <div className="orbit-ring r2" />
              <span className="money-dot" />
              <span className="money-dot d2" />
              <span className="money-dot d3" />
              <div className="orbit-center">
                {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
                <img src="/icon.png" alt="" />
              </div>
              <span className="member m1">P</span>
              <span className="member m2">R</span>
              <span className="member m3">M</span>
              <span className="member m4">A</span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <span className="eyebrow"><Users style={{ width: 16, height: 16 }} /> One pot, whole family</span>
            <h2>Bring everyone in with one code</h2>
            <p>Create an invite in the app and share it on WhatsApp or SMS. It works once and expires after 7 days.</p>
            <div className="invite-code" aria-label="Example invite code HP7K2Q">
              {'HP7K2Q'.split('').map((ch, i) => <span key={i}>{ch}</span>)}
            </div>
            <ul className="family-list">
              <li><CheckCircle /> See who added what, with a colour for each person</li>
              <li><CheckCircle /> The family owner can rename the pot and manage members</li>
              <li><CheckCircle /> Leave any time. Your personal expenses always stay yours</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section" id="faq" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Questions, answered</h2>
          </Reveal>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Final CTA ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="cta-band">
            <div className="rain" aria-hidden>
              {[8, 22, 37, 51, 66, 80, 93].map((left, i) => (
                <span
                  key={left}
                  className="coin"
                  style={{ left: `${left}%`, animationDuration: `${5 + (i % 3)}s`, animationDelay: `${-i * 1.3}s` }}
                >
                  {['₹', '$', '€', '£', '¥', '₹', '$'][i]}
                </span>
              ))}
            </div>
            <h2>Start your family&apos;s pot</h2>
            <p>Free on iPhone and Android. Set up in a minute.</p>
            <StoreBadges />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
