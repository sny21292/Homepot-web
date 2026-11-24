'use client';
// "Household or Personal" demo: switch between your view and a family member's
// view. Personal (🔒) expenses blur out in the family view, like in the app.
import { useState } from 'react';

import { Home, Lock } from '@/components/Icons';

const ROWS = [
  { title: 'Weekly groceries', who: 'Added by Priya', amt: '₹2,340', personal: false },
  { title: 'Electricity bill', who: 'Added by Rahul', amt: '₹1,860', personal: false },
  { title: 'Birthday gift', who: 'Only you', amt: '₹3,500', personal: true },
];

export function VisibilityDemo() {
  const [view, setView] = useState<'you' | 'family'>('you');
  return (
    <div>
      <div className="vis-switch" role="group" aria-label="Whose view">
        <button type="button" aria-pressed={view === 'you'} onClick={() => setView('you')}>
          Your phone
        </button>
        <button type="button" aria-pressed={view === 'family'} onClick={() => setView('family')}>
          Family&apos;s phone
        </button>
      </div>
      <div className="vis-demo">
        {ROWS.map((r) => (
          <div key={r.title} className={`vis-row${r.personal && view === 'family' ? ' hidden' : ''}`}>
            <div className="meta">
              <b>{r.title}</b>
              <small>{r.who}</small>
            </div>
            <span className="amt">{r.amt}</span>
            {r.personal ? (
              <span className="vis-tag lock">
                <Lock /> Personal
              </span>
            ) : (
              <span className="vis-tag home">
                <Home /> Household
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="vis-caption">
        {view === 'you'
          ? 'You see everything you added, plus the family pot.'
          : 'Your family sees the household pot. Personal stays private.'}
      </p>
    </div>
  );
}
