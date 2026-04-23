"use client";

import { useEffect, useRef, useState } from "react";
import { INSTAGRAM } from "../data/content";

const bgMap: Record<string, string> = {
  "bg-primary": "#265cb0",
  "bg-accent": "#01a2d0",
  "bg-primary-dark": "#164687",
  "bg-accent-dark": "#007fa3",
  "bg-secondary": "#cfa137",
};

export default function InstagramSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="instagram" className="py-20 bg-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
          <div>
            <span className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              📸 {INSTAGRAM.badge}
            </span>
            <h2 className="animate-on-scroll font-display font-bold text-3xl sm:text-4xl text-dark">
              {INSTAGRAM.headline}
            </h2>
          </div>

          {/* Profile mock */}
          <div className="animate-on-scroll glass rounded-3xl p-5 flex items-center gap-4 shadow-card flex-shrink-0">
            <div className="w-14 h-14 rounded-full bg-primary-gradient flex items-center justify-center shadow-premium">
              <span className="text-white font-bold text-xl">📸</span>
            </div>
            <div>
              <div className="font-bold text-dark">{INSTAGRAM.handle}</div>
              <div className="text-dark-muted text-sm">{INSTAGRAM.followerCount} Pengikut</div>
              <a
                href={INSTAGRAM.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-1 text-accent text-xs font-semibold hover:text-primary transition-colors duration-200"
              >
                Ikuti Kami →
              </a>
            </div>
          </div>
        </div>

        {/* Instagram Grid Mock */}
        <div className="animate-on-scroll grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {INSTAGRAM.posts.map((post) => (
            <a
              key={post.id}
              href={INSTAGRAM.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              onMouseEnter={() => setHovered(post.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Mock photo background */}
              <div
                className="absolute inset-0 flex items-center justify-center text-5xl transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: bgMap[post.bg] || "#265cb0" }}
              >
                {post.emoji}
              </div>

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-dark/80 flex flex-col items-center justify-center gap-1 transition-opacity duration-300 ${
                  hovered === post.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex items-center gap-2 text-white text-sm font-semibold">
                  <span>❤️</span>
                  <span>{post.likes.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex items-center gap-2 text-white text-sm">
                  <span>💬</span>
                  <span>{post.comments}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Latest post preview */}
        <div className="animate-on-scroll bg-white rounded-4xl p-6 shadow-card">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary-gradient flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm">📸</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-dark text-sm">{INSTAGRAM.handle}</span>
                <span className="text-dark-muted text-xs">• 2 jam yang lalu</span>
              </div>
              <p className="text-dark-soft text-sm leading-relaxed mb-3">
                {INSTAGRAM.posts[INSTAGRAM.posts.length - 1].caption}
              </p>
              <div className="flex items-center gap-4 text-sm text-dark-muted">
                <span className="flex items-center gap-1">
                  <span>❤️</span>
                  <span>{INSTAGRAM.posts[INSTAGRAM.posts.length - 1].likes.toLocaleString("id-ID")}</span>
                </span>
                <span className="flex items-center gap-1">
                  <span>💬</span>
                  <span>{INSTAGRAM.posts[INSTAGRAM.posts.length - 1].comments} komentar</span>
                </span>
              </div>
            </div>
            <a
              href={INSTAGRAM.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-light transition-colors duration-200"
            >
              Ikuti
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="animate-on-scroll text-center mt-8">
          <a
            href={INSTAGRAM.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white border-2 border-primary text-primary font-bold shadow-soft hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>📸</span>
            <span>Lihat Semua di Instagram</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
