'use client';
// "Any currency" demo: the same family total shown in a new currency every few
// seconds, each formatted the local way (₹1,25,000 · $1,250.00 · €1.250,00 ...).
import { useEffect, useState } from 'react';

const SAMPLES = [
  { amount: 125000, currency: 'INR', locale: 'en-IN', label: 'Indian rupee, lakh grouping' },
  { amount: 1250, currency: 'USD', locale: 'en-US', label: 'US dollar' },
  { amount: 1250, currency: 'EUR', locale: 'de-DE', label: 'Euro, the German way' },
  { amount: 980, currency: 'GBP', locale: 'en-GB', label: 'British pound' },
  { amount: 4600, currency: 'AED', locale: 'en-AE', label: 'UAE dirham' },
  { amount: 185000, currency: 'JPY', locale: 'ja-JP', label: 'Japanese yen, no decimals' },
];

export function CurrencyCycler() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % SAMPLES.length), 2200);
    return () => clearInterval(id);
  }, []);

  const s = SAMPLES[i];
  const text = new Intl.NumberFormat(s.locale, { style: 'currency', currency: s.currency }).format(
    s.amount,
  );
  return (
    <div aria-live="polite">
      <div className="currency-big">
        <span key={i}>{text}</span>
      </div>
      <div className="currency-label">{s.label}</div>
      <div className="currency-dots" aria-hidden>
        {SAMPLES.map((x, n) => (
          <i key={x.currency} className={n === i ? 'on' : ''} />
        ))}
      </div>
    </div>
  );
}
