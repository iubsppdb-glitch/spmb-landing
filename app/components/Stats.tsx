"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "../data/content";

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);

  return count;
}

function StatItem({ item, active }: { item: (typeof STATS.items)[0]; active: boolean }) {
  const count = useCounter(item.number, 2000, active);

  return (
    <div className="flex flex-col items-center text-center group">
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
        {item.icon}
      </div>
      <div className="font-display font-bold text-4xl lg:text-5xl text-primary mb-1">
        {count.toLocaleString("id-ID")}
        <span className="text-accent">{item.suffix}</span>
      </div>
      <div className="text-dark-muted text-sm font-medium">{item.label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stats" className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-light rounded-4xl p-10 shadow-card">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              ✦ {STATS.badge}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark mt-3">
              {STATS.headline}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 divide-y-0 divide-x-0 md:divide-x md:divide-light">
            {STATS.items.map((item, i) => (
              <StatItem key={i} item={item} active={active} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
