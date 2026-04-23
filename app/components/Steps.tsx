"use client";

import { useEffect, useRef } from "react";
import { STEPS, SITE_CONFIG } from "../data/content";

export default function Steps() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="steps" className="py-20 bg-primary-gradient clip-diagonal-r relative" ref={ref}>
      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-soft text-sm font-semibold border border-white/20">
            ✦ {STEPS.badge}
          </span>
          <h2 className="animate-on-scroll font-display font-bold text-3xl sm:text-4xl text-white mt-4 mb-4">
            {STEPS.headline}
          </h2>
          <p className="animate-on-scroll text-soft/80 leading-relaxed">{STEPS.subheadline}</p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STEPS.items.map((item, i) => (
            <div
              key={i}
              className="animate-on-scroll group relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Connector line */}
              {i < STEPS.items.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-white/20 z-0 -translate-x-4" />
              )}

              <div className="relative z-10 glass rounded-4xl p-6 hover:shadow-premium transition-all duration-300 hover:-translate-y-2 h-full">
                {/* Step number */}
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5 shadow-gold group-hover:scale-110 transition-transform duration-300">
                  <span className="font-display font-bold text-white text-lg">{item.step}</span>
                </div>

                {/* Icon */}
                <div className="text-2xl mb-3">{item.icon}</div>

                <h3 className="font-display font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-soft/80 text-sm leading-relaxed mb-3">{item.desc}</p>

                {/* Detail badge */}
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 text-soft text-xs border border-white/20">
                  💡 {item.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule table */}
        <div className="animate-on-scroll glass rounded-4xl overflow-hidden shadow-premium">
          <div className="px-6 py-5 border-b border-white/20">
            <h3 className="font-display font-bold text-white text-xl flex items-center gap-2">
              📅 Jadwal SPMB {SITE_CONFIG.year}
            </h3>
          </div>
          <div className="divide-y divide-white/10">
            {STEPS.schedule.map((item, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors duration-200 ${
                  i === 0 ? "bg-white/10" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  {i === 0 && (
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  )}
                  <span className={`font-medium ${i === 0 ? "text-white" : "text-soft/90"}`}>
                    {item.phase}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${i === 0 ? "text-secondary font-semibold" : "text-soft/70"}`}>
                    {item.date}
                  </span>
                  {i === 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-secondary text-white text-xs font-bold">
                      Aktif
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 py-5 bg-white/5">
            <a
              href={SITE_CONFIG.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-secondary text-white font-bold shadow-gold hover:bg-secondary-light transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Mulai Daftar Sekarang →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
