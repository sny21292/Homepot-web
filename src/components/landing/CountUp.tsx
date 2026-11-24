'use client';
// A money amount that counts up from 0, formatted the way the visitor's country
// writes it (Intl, like the app). Used for the month total in the hero phone.
import { useEffect, useState } from 'react';

export function CountUp({
  to,
  currency = 'INR',
  locale = 'en-IN',
  durationMs = 1600,
  delayMs = 400,
}: {
  to: number;
  currency?: string;
  locale?: string;
  durationMs?: number;
  delayMs?: number;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to); // eslint-disable-line react-hooks/set-state-in-effect -- one-off, no animation
      return;
    }
    let raf = 0;
    let start = 0;
    const timer = setTimeout(() => {
      const tick = (t: number) => {
        if (!start) start = t;
        const p = Math.min(1, (t - start) / durationMs);
        const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
        setValue(Math.round(to * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delayMs);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [to, durationMs, delayMs]);

  const text = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value);
  return <span aria-label={`Total ${text}`}>{text}</span>;
}
