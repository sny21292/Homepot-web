'use client';
// Sign-in demo: a 6-digit code typing itself in when the card scrolls into view.
import { useEffect, useRef, useState } from 'react';

export function OtpDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setPlay(true);
        io.disconnect();
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`otp${play ? ' play' : ''}`} aria-label="Example sign-in code 482 917">
      {'482917'.split('').map((d, i) => (
        <span key={i}>{d}</span>
      ))}
    </div>
  );
}
