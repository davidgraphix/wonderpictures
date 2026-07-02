
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Palette ── */
        obsidian: "#080808",      /* true background */
        carbon:   "#111111",      /* card/surface */
        steel:    "#1E1E1E",      /* subtle lift */
        ivory:    "#F0EBE3",      /* primary text */
        muted:    "#8A857D",      /* secondary text */
        whisper:  "#3A3530",      /* dividers */
        gold:     "#C4A265",      /* accent */
        "gold-light": "#D4B880",  /* hover accent */
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono:    ["var(--font-dm-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.3em",
        widest3: "0.5em",
      },
      animation: {
        "ticker-ltr": "tickerLTR 40s linear infinite",
        "fade-up":    "fadeUp 0.8s ease forwards",
      },
      keyframes: {
        tickerLTR: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
