import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#265cb0",
        secondary: "#cfa137",
        accent: "#01a2d0",
        dark: "#333333",
        light: "#f4f4f4",
        soft: "#8ed9f4",
        "primary-dark": "#164687",
        "primary-light": "#3a74cc",
        "secondary-light": "#e8b84b",
        "secondary-dark": "#a07e2a",
        "accent-light": "#33b5dc",
        "accent-dark": "#007fa3",
        "dark-soft": "#555555",
        "dark-muted": "#777777",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(135deg, #01a2d0 0%, #164687 100%)",
        "primary-gradient-r": "linear-gradient(135deg, #164687 0%, #01a2d0 100%)",
        "hero-gradient": "linear-gradient(160deg, #0d2f6b 0%, #164687 40%, #01a2d0 100%)",
        "gold-gradient": "linear-gradient(135deg, #cfa137 0%, #e8b84b 50%, #cfa137 100%)",
        "soft-gradient": "linear-gradient(180deg, #f4f4f4 0%, #ffffff 100%)",
        "card-gradient": "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(244,244,244,0.7) 100%)",
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(38, 92, 176, 0.08)",
        premium: "0 8px 40px rgba(38, 92, 176, 0.15)",
        gold: "0 4px 24px rgba(207, 161, 55, 0.25)",
        card: "0 2px 16px rgba(0, 0, 0, 0.06), 0 8px 32px rgba(38, 92, 176, 0.08)",
        "card-hover": "0 8px 32px rgba(38, 92, 176, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08)",
        nav: "0 2px 20px rgba(0, 0, 0, 0.08)",
        cta: "0 6px 32px rgba(1, 162, 208, 0.35)",
        inner: "inset 0 2px 8px rgba(0,0,0,0.06)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "counter": "counter 2s ease-out forwards",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.02)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      transitionDuration: {
        "400": "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
