'use client';
// Fades/slides its children in the first time they scroll into view.
// (A Client Component: it needs the browser's IntersectionObserver.)
import { type ReactNode, useEffect, useRef, useState } from 'react';

export function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3;
  className?: string;
  as?: 'div' | 'li' | 'section';
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = `reveal${delay ? ` d${delay}` : ''}${shown ? ' in' : ''} ${className}`.trim();
  return (
    // @ts-expect-error -- ref type differs per tag, all are HTMLElements
    <Tag ref={ref} className={cls}>
      {children}
    </Tag>
  );
}
