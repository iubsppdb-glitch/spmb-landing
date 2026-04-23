"use client";

import { useEffect, useRef } from "react";
import { BENEFITS, SITE_CONFIG } from "../data/content";

export default function Benefits() {
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
    <section id="benefits" className="py-20 bg-light relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-soft/30 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            ✦ {BENEFITS.badge}
          </span>
          <h2 className="animate-on-scroll font-display font-bold text-3xl sm:text-4xl text-dark mt-4 mb-4">
            {BENEFITS.headline}
          </h2>
          <p className="animate-on-scroll text-dark-soft leading-relaxed">{BENEFITS.subheadline}</p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.items.map((item, i) => (
            <div
              key={i}
              className="animate-on-scroll group relative bg-white rounded-4xl p-7 shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-2 cursor-default overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary-gradient rounded-t-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Tag */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-4">
                {item.tag}
              </div>

              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-dark mb-3">{item.title}</h3>
              <p className="text-dark-muted text-sm leading-relaxed">{item.desc}</p>

              {/* Arrow on hover */}
              <div className="mt-4 flex items-center gap-1 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                <span>Pelajari lebih lanjut</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5-5 5" />
                </svg>
              </div>

              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-3 rounded-4xl transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="animate-on-scroll mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-4xl px-8 py-6 shadow-card">
            <div className="text-left">
              <p className="font-semibold text-dark">Siap bergabung dengan keluarga SMBN?</p>
              <p className="text-dark-muted text-sm">Lebih dari {SITE_CONFIG.students} siswa sudah merasakan manfaatnya</p>
            </div>
            <a
              href={SITE_CONFIG.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-6 py-3 rounded-2xl bg-primary text-white font-semibold text-sm shadow-soft hover:shadow-premium hover:bg-primary-light transition-all duration-300 hover:-translate-y-0.5"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
