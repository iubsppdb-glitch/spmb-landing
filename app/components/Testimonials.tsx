"use client";

import { useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "../data/content";

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const bgColors: Record<string, string> = {
    "bg-primary": "bg-primary",
    "bg-accent": "bg-accent",
    "bg-primary-dark": "bg-primary-dark",
    "bg-accent-dark": "bg-accent-dark",
    "bg-secondary": "bg-secondary",
  };

  return (
    <section id="testimonials" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold">
            ✦ {TESTIMONIALS.badge}
          </span>
          <h2 className="animate-on-scroll font-display font-bold text-3xl sm:text-4xl text-dark mt-4 mb-4">
            {TESTIMONIALS.headline}
          </h2>
          <p className="animate-on-scroll text-dark-soft leading-relaxed">{TESTIMONIALS.subheadline}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 animate-on-scroll">
          {/* Mini cards (left + right) */}
          {TESTIMONIALS.items.slice(0, 2).map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-left rounded-4xl p-6 transition-all duration-300 ${
                active === i
                  ? "shadow-card-hover bg-white scale-100"
                  : "bg-light hover:bg-white hover:shadow-card scale-98"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${
                    bgColors[item.bg] ?? "bg-primary"
                  }`}
                >
                  {item.avatar}
                </div>
                <div>
                  <div className="font-semibold text-dark text-sm">{item.name}</div>
                  <div className="text-dark-muted text-xs">{item.role.split("—")[0]}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <span key={j} className="text-secondary text-sm">★</span>
                ))}
              </div>
              <p className="text-dark-soft text-sm leading-relaxed line-clamp-3">
                &ldquo;{item.quote}&rdquo;
              </p>
            </button>
          ))}

          {/* Featured card (center) */}
          <div className="lg:row-span-2">
            <div className="bg-primary-gradient rounded-4xl p-8 shadow-premium h-full flex flex-col">
              {/* Quote icon */}
              <div className="text-5xl text-white/20 font-display mb-4">"</div>

              <p className="text-white/95 text-lg leading-relaxed mb-8 flex-1 font-medium italic">
                {TESTIMONIALS.items[active].quote}
              </p>

              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-3xl flex items-center justify-center text-white font-bold text-xl shadow-premium ${
                    bgColors[TESTIMONIALS.items[active].bg] ?? "bg-primary-dark"
                  }`}
                >
                  {TESTIMONIALS.items[active].avatar}
                </div>
                <div>
                  <div className="font-display font-bold text-white text-lg">
                    {TESTIMONIALS.items[active].name}
                  </div>
                  <div className="text-soft text-sm">
                    {TESTIMONIALS.items[active].role}
                  </div>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: TESTIMONIALS.items[active].rating }).map((_, j) => (
                      <span key={j} className="text-secondary text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dot indicators */}
              <div className="flex gap-2 mt-6">
                {TESTIMONIALS.items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      active === i ? "w-8 bg-secondary" : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* More mini cards */}
          {TESTIMONIALS.items.slice(2, 4).map((item, i) => (
            <button
              key={i + 2}
              onClick={() => setActive(i + 2)}
              className={`text-left rounded-4xl p-6 transition-all duration-300 ${
                active === i + 2
                  ? "shadow-card-hover bg-white scale-100"
                  : "bg-light hover:bg-white hover:shadow-card"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${
                    bgColors[item.bg] ?? "bg-primary"
                  }`}
                >
                  {item.avatar}
                </div>
                <div>
                  <div className="font-semibold text-dark text-sm">{item.name}</div>
                  <div className="text-dark-muted text-xs">{item.role.split("—")[0]}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <span key={j} className="text-secondary text-sm">★</span>
                ))}
              </div>
              <p className="text-dark-soft text-sm leading-relaxed line-clamp-3">
                &ldquo;{item.quote}&rdquo;
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
