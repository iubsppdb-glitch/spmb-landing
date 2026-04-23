"use client";

import { useEffect, useRef, useState } from "react";
import { PROGRAMS, SITE_CONFIG } from "../data/content";

const colorMap: Record<string, string> = {
  accent: "bg-accent text-white",
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
};

const lightColorMap: Record<string, string> = {
  accent: "bg-accent/10 text-accent",
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
};

const borderColorMap: Record<string, string> = {
  accent: "border-accent",
  primary: "border-primary",
  secondary: "border-secondary",
};

export default function Programs() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("ips");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const activeProgram = PROGRAMS.items.find((p) => p.id === active) || PROGRAMS.items[0];

  return (
    <section id="programs" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold">
            ✦ {PROGRAMS.badge}
          </span>
          <h2 className="animate-on-scroll font-display font-bold text-3xl sm:text-4xl text-dark mt-4 mb-4">
            {PROGRAMS.headline}
          </h2>
          <p className="animate-on-scroll text-dark-soft leading-relaxed">{PROGRAMS.subheadline}</p>
        </div>

        {/* Tab selector */}
        <div className="animate-on-scroll flex justify-center gap-3 mb-10 flex-wrap">
          {PROGRAMS.items.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setActive(prog.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                active === prog.id
                  ? `${colorMap[prog.color]} shadow-premium`
                  : "bg-light text-dark-soft hover:bg-primary/5 hover:text-primary"
              }`}
            >
              <span>{prog.icon}</span>
              <span>{prog.name}</span>
              {prog.featured && (
                <span className="px-2 py-0.5 rounded-full bg-secondary text-white text-xs font-bold">
                  Favorit
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active Program Detail */}
        <div className="animate-on-scroll">
          <div
            className={`grid lg:grid-cols-3 gap-8 p-8 rounded-4xl border-2 ${borderColorMap[activeProgram.color]} bg-light transition-all duration-300`}
          >
            {/* Main info */}
            <div className="lg:col-span-2">
              <div className="flex items-start gap-5 mb-6">
                <div
                  className={`w-16 h-16 rounded-3xl flex items-center justify-center text-3xl ${lightColorMap[activeProgram.color]} shadow-soft flex-shrink-0`}
                >
                  {activeProgram.icon}
                </div>
                <div>
                  <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${lightColorMap[activeProgram.color].split(" ")[1]}`}>
                    Program Unggulan
                  </div>
                  <h3 className="font-display font-bold text-2xl text-dark">{activeProgram.name}</h3>
                </div>
              </div>

              <p className="text-dark-soft leading-relaxed mb-6">{activeProgram.desc}</p>

              <div className="grid sm:grid-cols-2 gap-3">
                {activeProgram.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-soft"
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs text-white flex-shrink-0 ${colorMap[activeProgram.color]}`}>
                      ✓
                    </div>
                    <span className="text-dark-soft text-sm font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Side info */}
            <div className="space-y-4">
              <div className="bg-white rounded-3xl p-6 shadow-card">
                <div className="text-dark-muted text-xs font-semibold uppercase tracking-wider mb-2">
                  Kuota Tersedia
                </div>
                <div className={`font-display font-bold text-3xl ${lightColorMap[activeProgram.color].split(" ")[1]}`}>
                  {activeProgram.quota}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-card">
                <div className="text-dark-muted text-xs font-semibold uppercase tracking-wider mb-2">
                  Nilai Rata-rata
                </div>
                <div className="font-display font-bold text-2xl text-dark">
                  {activeProgram.passing_grade}
                </div>
              </div>

              <a
                href={SITE_CONFIG.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-white font-bold shadow-premium transition-all duration-300 hover:-translate-y-0.5 ${colorMap[activeProgram.color]}`}
              >
                Pilih {activeProgram.name}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5-5 5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* All programs mini cards */}
        <div className="animate-on-scroll grid sm:grid-cols-3 gap-4 mt-8">
          {PROGRAMS.items.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setActive(prog.id)}
              className={`p-5 rounded-3xl text-left transition-all duration-300 hover:-translate-y-1 ${
                active === prog.id
                  ? "bg-white shadow-card-hover"
                  : "bg-light hover:bg-white hover:shadow-card"
              }`}
            >
              <div className="text-2xl mb-2">{prog.icon}</div>
              <div className="font-bold text-dark text-sm">{prog.name}</div>
              <div className="text-dark-muted text-xs mt-1">{prog.quota}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
