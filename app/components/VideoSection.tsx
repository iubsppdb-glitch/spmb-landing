"use client";

import { useEffect, useRef, useState } from "react";
import { VIDEO } from "../data/content";

export default function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [playing, setPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Desktop: autoplay on hover via iframe src manipulation
  const handleMouseEnter = () => {
    if (!isMobile) setPlaying(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setPlaying(false);
  };

  const handleClick = () => {
    setPlaying(true);
  };

  const embedUrl = playing
    ? `https://www.youtube.com/embed/${VIDEO.youtubeId}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`
    : `https://www.youtube.com/embed/${VIDEO.youtubeId}?rel=0&modestbranding=1`;

  return (
    <section id="video" className="py-20 bg-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            ✦ {VIDEO.badge}
          </span>
          <h2 className="animate-on-scroll font-display font-bold text-3xl sm:text-4xl text-dark mt-4 mb-4">
            {VIDEO.headline}
          </h2>
          <p className="animate-on-scroll text-dark-soft leading-relaxed">{VIDEO.subheadline}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Video embed */}
          <div className="animate-on-scroll lg:col-span-3">
            <div
              className="relative rounded-4xl overflow-hidden shadow-premium bg-dark aspect-video cursor-pointer group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            >
              {playing ? (
                <iframe
                  ref={iframeRef}
                  src={embedUrl}
                  title={VIDEO.thumbnail_caption}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  {/* Thumbnail placeholder */}
                  <div className="absolute inset-0 bg-primary-gradient flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-8xl mb-4">🎬</div>
                      <p className="font-display font-bold text-xl">{VIDEO.thumbnail_caption}</p>
                      <p className="text-soft text-sm mt-1">Hover untuk preview · Klik untuk play</p>
                    </div>
                  </div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-premium group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-primary ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Hover hint */}
                  {!isMobile && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/40 text-white text-xs backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      🖥️ Hover = autoplay muted preview
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Mobile stop button */}
            {playing && (
              <button
                onClick={() => setPlaying(false)}
                className="mt-3 text-sm text-dark-muted hover:text-dark transition-colors duration-200"
              >
                ← Tutup video
              </button>
            )}
          </div>

          {/* Side highlights */}
          <div className="animate-on-scroll lg:col-span-2 space-y-4">
            <h3 className="font-display font-bold text-xl text-dark mb-4">
              Apa yang akan kamu lihat?
            </h3>

            {VIDEO.highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white rounded-3xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-x-1 group"
              >
                <div className="w-10 h-10 rounded-2xl bg-primary-gradient flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className="font-medium text-dark">{h}</span>
                <svg className="w-4 h-4 text-accent ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}

            <button
              onClick={handleClick}
              className="flex items-center gap-3 w-full py-4 px-6 rounded-2xl bg-primary-gradient text-white font-bold shadow-cta hover:shadow-premium transition-all duration-300 hover:-translate-y-0.5 mt-4"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Tonton Video Profil
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
