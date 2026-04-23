"use client";

import { useEffect, useRef, useState } from "react";
import { GALLERY } from "../data/content";

// ============================================================
// Helper: Convert Google Drive share URL to direct image URL
// Usage: paste URL from "Bagikan link" Google Drive
// ============================================================
export function convertDriveLink(url: string): string {
  // Pattern 1: /file/d/FILE_ID/view
  const match1 = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (match1) {
    return `https://lh3.googleusercontent.com/d/${match1[1]}`;
  }

  // Pattern 2: id=FILE_ID
  const match2 = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (match2) {
    return `https://lh3.googleusercontent.com/d/${match2[1]}`;
  }

  // Pattern 3: uc?export=view&id=
  const match3 = url.match(/export=view&id=([a-zA-Z0-9_-]+)/);
  if (match3) {
    return `https://lh3.googleusercontent.com/d/${match3[1]}`;
  }

  // Return original if no pattern matches (may be a real URL)
  return url;
}

type GalleryItem = (typeof GALLERY.items)[0];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const categories = ["Semua", ...Array.from(new Set(GALLERY.items.map((i) => i.category)))];

  const filtered =
    activeFilter === "Semua"
      ? GALLERY.items
      : GALLERY.items.filter((i) => i.category === activeFilter);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Close lightbox on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <section id="gallery" className="py-20 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold">
              ✦ {GALLERY.badge}
            </span>
            <h2 className="animate-on-scroll font-display font-bold text-3xl sm:text-4xl text-dark mt-4 mb-4">
              {GALLERY.headline}
            </h2>
            <p className="animate-on-scroll text-dark-soft leading-relaxed">{GALLERY.subheadline}</p>
          </div>

          {/* Filter tabs */}
          <div className="animate-on-scroll flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-primary text-white shadow-soft"
                    : "bg-light text-dark-soft hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-ish Grid */}
          <div className="animate-on-scroll grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className={`group relative rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer aspect-square ${
                  i === 0 || i === 4 ? "sm:col-span-2 sm:row-span-2 aspect-auto" : ""
                }`}
                onClick={() => setLightbox(item)}
              >
                {/* Color placeholder (replace with next/image when real photos are added) */}
                <div
                  className="absolute inset-0 flex items-center justify-center text-5xl"
                  style={{ backgroundColor: GALLERY.fallbackColors[i % GALLERY.fallbackColors.length] }}
                >
                  🖼️
                </div>

                {/* If you have actual Google Drive links, uncomment this: */}
                {/* <Image
                  src={convertDriveLink(item.driveUrl)}
                  alt={item.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                /> */}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent/80 text-white text-xs font-semibold mb-1.5">
                    {item.category}
                  </div>
                  <p className="text-white font-semibold text-sm">{item.caption}</p>
                </div>

                {/* Expand icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3h6m0 0v6m0-6l-7 7M9 21H3m0 0v-6m0 6l7-7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="max-w-2xl w-full rounded-4xl overflow-hidden shadow-premium"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="aspect-video flex items-center justify-center text-8xl"
              style={{
                backgroundColor:
                  GALLERY.fallbackColors[
                    GALLERY.items.findIndex((i) => i.id === lightbox.id) %
                      GALLERY.fallbackColors.length
                  ],
              }}
            >
              🖼️
            </div>
            <div className="bg-white p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-2">
                    {lightbox.category}
                  </div>
                  <h4 className="font-display font-bold text-lg text-dark">{lightbox.caption}</h4>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="w-8 h-8 rounded-xl bg-light text-dark-soft hover:bg-primary hover:text-white flex items-center justify-center text-sm transition-all duration-200"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
