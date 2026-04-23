"use client";

import { useEffect, useRef, useState } from "react";
import { FAQ, SITE_CONFIG } from "../data/content";

function FAQItem({ item, isOpen, onToggle }: {
  item: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`rounded-3xl overflow-hidden transition-all duration-300 ${
        isOpen ? "bg-white shadow-card-hover" : "bg-light hover:bg-white hover:shadow-card"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-base pr-4 transition-colors duration-200 ${isOpen ? "text-primary" : "text-dark"}`}>
          {item.q}
        </span>
        <div
          className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isOpen ? "bg-primary text-white rotate-45" : "bg-white text-dark-muted shadow-soft"
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>

      <div
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-all duration-400 ease-in-out"
      >
        <div ref={bodyRef} className="px-6 pb-5">
          <div className="w-full h-px bg-light mb-4" />
          <p className="text-dark-soft text-sm leading-relaxed">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="faq" className="py-20 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold">
            ✦ {FAQ.badge}
          </span>
          <h2 className="animate-on-scroll font-display font-bold text-3xl sm:text-4xl text-dark mt-4 mb-4">
            {FAQ.headline}
          </h2>
          <p className="animate-on-scroll text-dark-soft leading-relaxed">{FAQ.subheadline}</p>
        </div>

        {/* FAQ list */}
        <div className="animate-on-scroll space-y-3 mb-12">
          {FAQ.items.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Bottom contact card */}
        <div className="animate-on-scroll bg-primary-gradient rounded-4xl p-8 text-center shadow-premium">
          <div className="text-4xl mb-4">🤔</div>
          <h3 className="font-display font-bold text-white text-xl mb-2">
            Masih ada pertanyaan?
          </h3>
          <p className="text-soft/90 text-sm mb-6">
            Tim kami siap membantu kamu menemukan jawaban yang tepat.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Halo, saya ingin bertanya tentang SPMB ${SITE_CONFIG.year}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-secondary text-white font-semibold shadow-gold hover:bg-secondary-light transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>💬</span>
              Tanya via WhatsApp
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white/15 text-white font-semibold border border-white/30 hover:bg-white/25 transition-all duration-300"
            >
              <span>✉️</span>
              Kirim Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
