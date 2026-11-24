// Landing page: what Homepot is, the main features, and where to get it.
const FEATURES = [
  {
    title: 'One pot for the family',
    text: 'Invite your family with a 6-letter code. Everyone adds their spending and it shows up on every phone, live.',
  },
  {
    title: 'Household or Personal',
    text: 'Share household costs with the family. Personal expenses (🔒) stay visible only to you.',
  },
  {
    title: 'Any currency',
    text: 'Rupees, dollars, euros or yen. Each family picks its currency, shown the way your country writes it.',
  },
  {
    title: 'Fast to add',
    text: 'Amount, category, done. See the month total and every expense day by day.',
  },
  {
    title: 'No passwords',
    text: 'Sign in with Google, Apple or a one-time code sent to your email.',
  },
  {
    title: 'Private by design',
    text: 'No ads and no selling your data. Delete your account any time from Settings.',
  },
];

export default function Home() {
  return (
    <main>
      <section className="wrap hero">
        <div>
          <h1>Your family&apos;s money, in one pot.</h1>
          <p>
            Homepot is a free expense tracker for families. Add what you spend in seconds, see where
            the month&apos;s money went, and share household costs while personal ones stay private.
          </p>
          <div className="badges">
            <span className="badge">App Store</span>
            <span className="badge">Google Play</span>
          </div>
          <p className="soon">Coming soon to iPhone and Android.</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, plain img is fine */}
        <img src="/welcome.png" alt="A family's shared expense pot" width={1200} height={800} />
      </section>
      <section className="wrap features">
        {FEATURES.map((f) => (
          <div key={f.title} className="feature">
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
