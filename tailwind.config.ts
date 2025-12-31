import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407",
        },
        cream: {
          50: "#fefdfb",
          100: "#fdf9f3",
          200: "#faf3e8",
        },
      },
      fontFamily: {
        heading: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        "blob": "blob 7s infinite",
        "blob-slow": "blob 10s infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "bounce-slow": "bounceSlow 3s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 2s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      boxShadow: {
        "glass": "0 8px 32px rgba(0, 0, 0, 0.08)",
        "card": "0 4px 20px rgba(0, 0, 0, 0.05)",
        "card-hover": "0 12px 40px rgba(0, 0, 0, 0.1)",
        "brand": "0 4px 20px rgba(234, 88, 12, 0.25)",
        "brand-lg": "0 8px 30px rgba(234, 88, 12, 0.35)",
      },
      backgroundImage: {
        "mesh-gradient": `
          radial-gradient(at 0% 0%, rgba(254, 215, 170, 0.4) 0px, transparent 50%),
          radial-gradient(at 100% 0%, rgba(255, 237, 213, 0.5) 0px, transparent 50%),
          radial-gradient(at 50% 100%, rgba(251, 146, 60, 0.1) 0px, transparent 50%)
        `,
        "mesh-gradient-dark": `
          radial-gradient(at 0% 0%, rgba(234, 88, 12, 0.15) 0px, transparent 50%),
          radial-gradient(at 100% 100%, rgba(251, 146, 60, 0.1) 0px, transparent 50%)
        `,
      },
    },
  },
  plugins: [],
};

export default config;
