import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm editorial theme: paper cream, forest green, violet. Edit here to retheme the site.
        ink: "#1A1A19", // primary text
        charcoal: "#1F1F1D",
        graphite: "#3A3935", // body text on light
        slate: "#6E6B65", // secondary text (warm stone)
        stone: "#8F8B83", // small text on dark
        mute: "#D8D4CA", // body text on dark
        mist: "#EFECE5", // soft surface and alternate section background
        paper: "#F7F4EE", // page background
        bone: "#FFFFFF", // cards
        line: "#E4DFD5", // borders
        forest: "#113324", // deep breakout sections
        leaf: "#9AD9B5", // light green text on forest
        accent: "#7C3AED", // violet: buttons, badges, highlights
        accentdeep: "#6D28D9",
        accentlight: "#C4B5FD",
        steel: "#E89264",
        lilac: "#DDD0FB", // soft violet surface
        sage: "#A3C2A3",
        terracotta: "#E89264",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ['"Inter Tight Variable"', "Inter Tight", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono Variable"', "JetBrains Mono", "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
