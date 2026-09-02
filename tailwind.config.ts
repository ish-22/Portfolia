import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      colors: {
        lime: {
          400: "#a3e635",
          500: "#84cc16",
          600: "#65a30d"
        }
      },
      letterSpacing: {
        tightest: "-0.04em",
        loosest: "0.25em"
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)"
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "pulse-lime": "pulseLime 2s ease-in-out infinite"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        pulseLime: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" }
        }
      }
    }
  },
  plugins: []
};

export default config;
