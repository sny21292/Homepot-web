// Small line icons (Lucide-style SVG paths) used across the site. Plain SVG, no
// icon library, so the static export stays tiny. Every icon inherits currentColor.
import type { SVGProps } from 'react';

type P = SVGProps<SVGSVGElement>;
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export const Cart = (p: P) => (
  <svg {...base} {...p}><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2 2h3l2.7 12.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" /></svg>
);
export const Utensils = (p: P) => (
  <svg {...base} {...p}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" /></svg>
);
export const Bag = (p: P) => (
  <svg {...base} {...p}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
);
export const Bolt = (p: P) => (
  <svg {...base} {...p}><path d="M13 2 3 14h9l-1 8 10-12h-9z" /></svg>
);
export const Car = (p: P) => (
  <svg {...base} {...p}><path d="M5 17H3v-5l2-5h14l2 5v5h-2" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="16.5" cy="17.5" r="2.5" /><path d="M10 17.5h4M3 12h18" /></svg>
);
export const Home = (p: P) => (
  <svg {...base} {...p}><path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></svg>
);
export const Trend = (p: P) => (
  <svg {...base} {...p}><path d="m22 7-8.5 8.5-5-5L2 17" /><path d="M16 7h6v6" /></svg>
);
export const Send = (p: P) => (
  <svg {...base} {...p}><path d="m22 2-7 20-4-9-9-4z" /><path d="M22 2 11 13" /></svg>
);
export const Heart = (p: P) => (
  <svg {...base} {...p}><path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z" /></svg>
);
export const Cap = (p: P) => (
  <svg {...base} {...p}><path d="M22 10 12 5 2 10l10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
);
export const Plus = (p: P) => (
  <svg {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>
);
export const Lock = (p: P) => (
  <svg {...base} {...p}><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
);
export const Check = (p: P) => (
  <svg {...base} {...p}><path d="M20 6 9 17l-5-5" /></svg>
);
export const CheckCircle = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="10" /><path d="m8 12 3 3 5-6" /></svg>
);
export const Shield = (p: P) => (
  <svg {...base} {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const Users = (p: P) => (
  <svg {...base} {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></svg>
);
export const Wifi = (p: P) => (
  <svg {...base} {...p}><path d="M5 12.6a10 10 0 0 1 14 0M8.5 16.1a5 5 0 0 1 7 0M2 8.8a15 15 0 0 1 20 0" /><path d="M12 20h.01" /></svg>
);

export const Mail = (p: P) => (
  <svg {...base} {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
);

/** Apple logo (filled), for the App Store badge. */
export const Apple = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.87-.76-1.47.02-2.83.86-3.59 2.18-1.53 2.66-.39 6.6 1.1 8.75.73 1.05 1.6 2.24 2.73 2.2 1.1-.05 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.4 1.2-2.47-.03-.01-2.3-.88-2.32-3.5zM14.2 6.13c.6-.74 1.01-1.75.9-2.77-.87.04-1.93.58-2.55 1.31-.56.64-1.05 1.68-.92 2.67.97.08 1.96-.49 2.57-1.21z" />
  </svg>
);

/** Google Play triangle (four colours), for the Play badge. */
export const Play = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}>
    <path d="M3.6 2.3c-.3.3-.5.8-.5 1.4v16.6c0 .6.2 1.1.5 1.4l9.3-9.7z" fill="#00d7fe" />
    <path d="m16 15.1-3.1-3.1L3.6 21.7c.4.4 1 .4 1.7 0z" fill="#f63448" />
    <path d="M16 8.9 5.3 2.3c-.7-.4-1.3-.4-1.7 0l9.3 9.7z" fill="#00f076" />
    <path d="m16 8.9-3.1 3.1 3.1 3.1 3.6-2.1c1-.6 1-1.5 0-2.1z" fill="#ffd400" />
  </svg>
);
