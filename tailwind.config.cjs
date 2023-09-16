/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        'tall': { 'raw': '(min-height: 860px)' },
        'taller': { 'raw': '(min-height: 920px)' },
      },
      lineHeight: {
        "clamp-xl": "clamp(2rem, 2.25vw, 3rem)",
      },
      fontSize: {
        "clamp-xm": "clamp(.6rem, 100vw, 0.9rem)",
        "clamp-sm": "clamp(.7rem, 100vw, 1.05rem)",
        "clamp-base": "clamp(1rem, 100vw, 1.20rem)",
        "clamp-lg": ["clamp(1.125rem, 1.06rem + 0.335vw, 1.46rem)", "1.8"],
        "clamp-xl": ["clamp(1.25rem, 100vw, 1.5rem)"],
        "clamp-2xl": "clamp(1.5rem, 100vw, 3.6rem)",
        "clamp-3xl": "clamp(1.875rem, 1.762rem + 0.565vw, 2.44rem)",
        "clamp-4xl": "clamp(2.25rem, 2.14rem + 0.5499999999999998vw, 2.8rem)",
        "clamp-5xl": "clamp(3rem, 2.82rem + 0.9vw, 3.9rem)",
      },
      maxWidth: {
        "clamp-xs": "clamp(28rem, 47vw, 36rem)",
        "clamp-2xl": "clamp(30rem, 48vw, 48rem)",
        "clamp-card": "clamp(24rem, 35vw, 44rem)",
      },
      width: {
        "clamp-card-container": "clamp(44rem, 84%, 84rem)",
      },
      fontFamily: {
        sans: [
          "Montserrat",
          "NotoSansGeorgian",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
