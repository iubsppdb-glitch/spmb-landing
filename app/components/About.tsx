"use client";

import { useEffect, useRef } from "react";
import { ABOUT, SITE_CONFIG } from "../data/content";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll(".animate-on-scroll");
    els?.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual */}
          <div className="animate-on-scroll relative">
            {/* Main visual card */}
            <div className="relative rounded-4xl overflow-hidden shadow-premium bg-primary-gradient aspect-[4/3]">
              {/* Abstract school illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-9xl mb-4">🏫</div>
                  <div className="font-display font-bold text-2xl">{SITE_CONFIG.schoolName}</div>
                  <div className="text-soft text-sm mt-1">Est. {ABOUT.founded}</div>
                </div>
              </div>
              {/* Decorative overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 70% 30%, rgba(142,217,244,0.2) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Floating stats cards */}
            <div className="absolute -bottom-6 -right-6 glass rounded-3xl p-5 shadow-premium">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-2xl">
                  🏆
                </div>
                <div>
                  <div className="font-bold text-xl text-dark">{ABOUT.students}</div>
                  <div className="text-dark-muted text-xs">Siswa Aktif</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 glass rounded-3xl p-5 shadow-premium">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-2xl">
                  🎓
                </div>
                <div>
                  <div className="font-bold text-xl text-dark">
                    Akreditasi {ABOUT.accreditation}
                  </div>
                  <div className="text-dark-muted text-xs">BAN-S/M 2023</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <div className="animate-on-scroll">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold">
                ✦ {ABOUT.badge}
              </span>
            </div>

            <h2 className="animate-on-scroll font-display font-bold text-3xl sm:text-4xl text-dark mt-4 mb-4 text-balance">
              {ABOUT.headline}
            </h2>

            <p className="animate-on-scroll text-dark-soft text-base leading-relaxed mb-4">
              {ABOUT.subheadline}
            </p>

            {ABOUT.paragraphs.map((p, i) => (
              <p
                key={i}
                className="animate-on-scroll text-dark-muted text-sm leading-relaxed mb-4"
              >
                {p}
              </p>
            ))}

            {/* Feature grid */}
            <div className="animate-on-scroll grid grid-cols-2 gap-4 mt-8">
              {ABOUT.features.map((feat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-3xl bg-light hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {feat.icon}
                  </div>
                  <div className="font-semibold text-dark text-sm mb-1">{feat.title}</div>
                  <div className="text-dark-muted text-xs leading-relaxed">{feat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
