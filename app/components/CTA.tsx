"use client";

import { useEffect, useRef } from "react";
import { CTA_BANNER, SITE_CONFIG } from "../data/content";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.2 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="cta" className="py-20 bg-light" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll relative rounded-4xl overflow-hidden bg-hero-gradient shadow-premium">
          {/* Background effects */}
          <div className="absolute inset-0 bg-noise opacity-20" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 10% 50%, #8ed9f4 0%, transparent 50%),
                                radial-gradient(circle at 90% 50%, #01a2d0 0%, transparent 50%)`,
            }}
          />

          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/5" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-white/5" />

          <div className="relative px-8 py-14 text-center">
            {/* Urgency note */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-400/30 text-red-200 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              {CTA_BANNER.urgency_note}
            </div>

            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-4 text-balance">
              {CTA_BANNER.headline}
            </h2>
            <p className="text-soft/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              {CTA_BANNER.subheadline}
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              {CTA_BANNER.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-display font-bold text-3xl text-secondary">{stat.value}</div>
                  <div className="text-soft/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SITE_CONFIG.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-10 py-5 rounded-2xl bg-secondary text-white font-bold text-lg shadow-gold hover:bg-secondary-light hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
              >
                <span>✨</span>
                <span>{CTA_BANNER.cta_primary}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Halo! Saya tertarik mendaftar di SMBN untuk tahun ajaran ${SITE_CONFIG.year}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-10 py-5 rounded-2xl border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                <span>💬</span>
                {CTA_BANNER.cta_secondary}
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-soft/60 text-sm">
              <span className="flex items-center gap-1.5">
                <span className="text-green-400">✓</span> Akreditasi A
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-green-400">✓</span> Proses transparan
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-green-400">✓</span> Konsultasi gratis
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-green-400">✓</span> Beasiswa tersedia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
