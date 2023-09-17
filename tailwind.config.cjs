/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        'tall': { 'raw': '(min-height: 860px)' },
        'taller': { 'raw': '(min-height: 980px)' },
      },
      lineHeight: {
        "clamp-xl": "clamp(2rem, 2.25vw, 3rem)",
      },
      fontSize: {
        "clamp-xs": ["clamp(.75rem, 0.714rem + 0.18vw, 0.93rem)", "1.6"],
        "clamp-sm": ["clamp(.875rem, 0.832rem + 0.215vw, 1.09rem)", "1.6"],
        "clamp-base": ["clamp(1rem, 0.952rem + 0.24vw, 1.24rem)", "1.6"],
        "clamp-lg": ["clamp(1.125rem, 1.06rem + 0.335vw, 1.46rem)", "1.6"],
        "clamp-xl": ["clamp(1.25rem, 1.19rem + 0.3vw, 1.55rem)", "1.2"],
        "clamp-2xl": ["clamp(1.5rem, 1.428rem + 0.36vw, 1.86rem)", "1.2"],
        "clamp-3xl": ["clamp(1.875rem, 1.762rem + 0.565vw, 2.44rem)", "1.2"],
        "clamp-4xl": ["clamp(2.25rem, 2.14rem + 0.55vw, 2.8rem)", "1.2"],
        "clamp-5xl": ["clamp(3rem, 2.82rem + 0.9vw, 3.9rem)", "1.2"],
      },
      maxWidth: {
        "clamp-xs": "clamp(28rem, 50vw, 38rem)",
        "clamp-form": "clamp(10rem, 100vw, 100rem)",
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
