"use client";

import { useState, useEffect } from "react";
import { NAVBAR, SITE_CONFIG } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = NAVBAR.links.map((l) => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "glass shadow-nav py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollTo("#hero")}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-2xl bg-primary-gradient flex items-center justify-center shadow-soft group-hover:shadow-premium transition-all duration-300">
                <span className="text-white font-display font-bold text-sm">
                  {SITE_CONFIG.schoolShortName.slice(0, 2)}
                </span>
              </div>
              <div className="hidden sm:block">
                <div
                  className={`font-display font-bold text-base leading-tight transition-colors duration-300 ${
                    scrolled ? "text-primary" : "text-white"
                  }`}
                >
                  {SITE_CONFIG.schoolName}
                </div>
                <div
                  className={`text-xs font-sans leading-tight transition-colors duration-300 ${
                    scrolled ? "text-dark-muted" : "text-soft"
                  }`}
                >
                  SPMB {SITE_CONFIG.year}
                </div>
              </div>
            </button>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAVBAR.links.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-white shadow-soft"
                        : scrolled
                        ? "text-dark hover:text-primary hover:bg-light"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-secondary text-white font-semibold text-sm shadow-gold hover:shadow-premium hover:bg-secondary-light transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>✨</span>
                <span>{NAVBAR.cta}</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                  scrolled
                    ? "text-dark hover:bg-light"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label="Toggle menu"
              >
                <div className="w-6 flex flex-col gap-1.5">
                  <span
                    className={`block h-0.5 bg-current transition-all duration-300 ${
                      menuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 bg-current transition-all duration-300 ${
                      menuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 bg-current transition-all duration-300 ${
                      menuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-400 overflow-hidden ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass border-t border-white/20 px-4 py-4 space-y-1">
            {NAVBAR.links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="w-full text-left px-4 py-3 rounded-xl text-dark hover:text-primary hover:bg-light font-medium transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <a
                href={SITE_CONFIG.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-2xl bg-secondary text-white font-semibold shadow-gold hover:bg-secondary-light transition-all duration-300"
              >
                <span>✨</span>
                <span>{NAVBAR.cta}</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll to Top */}
      {scrolled && (
        <button
          onClick={() => scrollTo("#hero")}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-premium hover:shadow-cta hover:bg-primary-light transition-all duration-300 hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </>
  );
}
