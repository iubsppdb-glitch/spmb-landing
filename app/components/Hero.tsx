"use client";

import { useEffect, useState } from "react";
import { HERO, SITE_CONFIG } from "../data/content";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setVisible(true);

    // Countdown timer
    const deadline = new Date(HERO.deadline_date).getTime();
    const tick = () => {
      const now = new Date().getTime();
      const diff = deadline - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-noise opacity-30" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #01a2d0 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #8ed9f4 0%, transparent 40%),
                            radial-gradient(circle at 60% 80%, #265cb0 0%, transparent 40%)`,
        }}
      />

      {/* Floating decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-56 h-56 rounded-full bg-soft/10 blur-3xl animate-float animation-delay-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/3" />

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-soft text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-soft" />
              {HERO.eyebrow}
            </div>

            {/* Main headline */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 text-balance">
              {HERO.headline.split(" ").map((word, i) =>
                word === "Terbaik" ? (
                  <span key={i} className="text-secondary">
                    {" "}
                    {word}{" "}
                  </span>
                ) : (
                  <span key={i}> {word}</span>
                )
              )}
            </h1>

            <p
              className={`text-white/80 text-lg leading-relaxed mb-8 max-w-lg transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {HERO.subheadline}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 mb-10 transition-all duration-700 delay-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href={SITE_CONFIG.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-secondary text-white font-bold text-base shadow-gold hover:shadow-premium hover:bg-secondary-light transition-all duration-300 hover:-translate-y-1"
              >
                <span>{HERO.cta_primary}</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5-5 5M6 12h12"
                  />
                </svg>
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                {HERO.cta_secondary}
              </a>
            </div>

            {/* Quick stats row */}
            <div
              className={`grid grid-cols-4 gap-4 transition-all duration-700 delay-400 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {HERO.highlight_stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-display font-bold text-2xl sm:text-3xl text-secondary">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content — Countdown Card */}
          <div
            className={`transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="glass rounded-4xl p-8 shadow-premium border border-white/20">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse" />
                <span className="text-dark-soft text-sm font-medium">
                  Pendaftaran Sedang Berlangsung
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-dark mb-2">
                ⏳ {HERO.deadline_label}
              </h3>
              <p className="text-dark-muted text-sm mb-6">{HERO.deadline_date}</p>

              {/* Countdown */}
              <div className="grid grid-cols-4 gap-3 mb-8">
                {[
                  { value: timeLeft.days, label: "Hari" },
                  { value: timeLeft.hours, label: "Jam" },
                  { value: timeLeft.minutes, label: "Menit" },
                  { value: timeLeft.seconds, label: "Detik" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-primary rounded-2xl p-3 text-center shadow-soft"
                  >
                    <div className="font-display font-bold text-3xl text-white">
                      {String(item.value).padStart(2, "0")}
                    </div>
                    <div className="text-soft text-xs mt-1">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-dark-muted">Kuota terisi</span>
                  <span className="font-semibold text-primary">380 / 500</span>
                </div>
                <div className="h-3 bg-light rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary-gradient rounded-full transition-all duration-1000 shimmer-effect"
                    style={{ width: "76%" }}
                  />
                </div>
                <p className="text-xs text-dark-muted mt-1.5">
                  ⚡ Sisa ~120 kursi. Segera daftar!
                </p>
              </div>

              <a
                href={SITE_CONFIG.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 px-6 rounded-2xl bg-primary-gradient text-white font-bold text-center shadow-cta hover:shadow-premium transition-all duration-300 hover:-translate-y-0.5"
              >
                Daftar Online Sekarang →
              </a>

              <p className="text-center text-dark-muted text-xs mt-3">
                Gratis konsultasi · Proses transparan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 L0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
