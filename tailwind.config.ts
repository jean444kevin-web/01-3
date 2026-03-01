import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1200px",
      },
      colors: {
        background: "#0D0D11",
        foreground: "#F5F7FF",
        muted: "#A0A7C0",
        border: "rgba(255,255,255,0.12)",
        accent: {
          violet: "#6C5CE7",
          cyan: "#00F5FF",
        },
      },
      borderRadius: {
        xl: "12px",
      },
      boxShadow: {
        glow: "0 0 24px rgba(108, 92, 231, 0.28)",
        cyan: "0 0 28px rgba(0, 245, 255, 0.22)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 24s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
