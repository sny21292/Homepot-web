// The hero's phone: a live-looking Homepot Home screen built in HTML/CSS (not a
// screenshot), with the month total counting up, expenses sliding in, floating
// gold coins and a "Priya added..." notification.
import { Lock, Plus } from '@/components/Icons';
import { category, type CategoryId } from '@/lib/categories';

import { CountUp } from './CountUp';

const PEOPLE = {
  you: { initial: 'A', color: '#E8590C' },
  priya: { initial: 'P', color: '#0CA678' },
  rahul: { initial: 'R', color: '#4263EB' },
};

const ROWS: { cat: CategoryId; title: string; who: keyof typeof PEOPLE; amt: string; personal?: boolean }[] = [
  { cat: 'groceries', title: 'Weekly groceries', who: 'priya', amt: '₹2,340' },
  { cat: 'fuel', title: 'Petrol', who: 'rahul', amt: '₹1,500' },
  { cat: 'food', title: 'Dinner out', who: 'you', amt: '₹1,280' },
  { cat: 'shopping', title: 'Birthday gift', who: 'you', amt: '₹3,500', personal: true },
];

function Avatar({ who, size }: { who: keyof typeof PEOPLE; size?: number }) {
  const p = PEOPLE[who];
  return (
    <span className="av" style={{ background: p.color, width: size, height: size }}>
      {p.initial}
    </span>
  );
}

export function HeroPhone() {
  return (
    <div className="stage" aria-label="The Homepot app showing a family's expenses for the month">
      <div className="blob" aria-hidden />
      <div className="stage-inner">
        <span className="coin c1" aria-hidden>₹</span>
        <span className="coin c2" aria-hidden>$</span>
        <span className="coin c3" aria-hidden>€</span>
        <span className="coin c4" aria-hidden>£</span>
        <span className="coin c5" aria-hidden>¥</span>
        <span className="coin c6" aria-hidden>₹</span>

        <div className="toast" aria-hidden>
          <Avatar who="priya" />
          <div>
            <b>Priya added ₹2,340</b>
            <small>Groceries · just now</small>
          </div>
        </div>

        <div className="phone">
          <div className="phone-screen">
            <div className="notch" />
            <div className="app-top">
              <div className="app-month">
                <span>November · Sharma family</span>
                <span className="avs">
                  <Avatar who="you" size={20} />
                  <Avatar who="priya" size={20} />
                  <Avatar who="rahul" size={20} />
                </span>
              </div>
              <div className="app-total">
                <CountUp to={46790} />
              </div>
              <div className="app-chips">
                <span className="on">All</span>
                <span>Household</span>
                <span>Personal</span>
              </div>
            </div>
            <div className="app-day">Today</div>
            {ROWS.map((r, i) => {
              const c = category(r.cat);
              return (
                <div key={r.title} className="app-row" style={{ animationDelay: `${0.9 + i * 0.18}s` }}>
                  <span className="cat-ico" style={{ background: c.color }}>
                    <c.Icon />
                  </span>
                  <div className="meta">
                    <b>{r.title}</b>
                    <small>
                      <Avatar who={r.who} size={14} />
                      {c.label}
                    </small>
                  </div>
                  <span className="amt">
                    {r.personal ? <Lock /> : null}
                    {r.amt}
                  </span>
                </div>
              );
            })}
            <div className="fab" aria-hidden>
              <Plus />
            </div>
          </div>
        </div>

        <div className="lock-card" aria-hidden>
          <Lock />
          <div>
            Personal stays private
            <small>Only you see 🔒 expenses</small>
          </div>
        </div>
      </div>
    </div>
  );
}
