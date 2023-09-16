/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      lineHeight: {
        "clamp-xl": "clamp(2rem, 2.25vw, 3rem)",
      },
      fontSize: {
        "clamp-xm": "clamp(.6rem, 0.8vw, 0.9rem)",
        "clamp-sm": "clamp(.7rem, 0.97vw, 1.05rem)",
        "clamp-base": "clamp(1rem, 1.11vw, 1.20rem)",
        "clamp-lg": ["clamp(1.125rem, 2.5vw, 1.35rem)", "1.8"],
        "clamp-xl": [ "clamp(1.25rem, 2.7vw, 1.5rem)" ],
        "clamp-2xl": "clamp(1.5rem, 3.33vw, 3.6rem)",
        "clamp-3xl": "clamp(1.875rem, 4.3vw, 3.6rem)",
        "clamp-4xl": "clamp(2.25rem, 5vw, 3.6rem)",
        "clamp-5xl": "clamp(3rem, 6.67vw, 4.2rem)",
      },
      maxWidth: {
        "clamp-xs": "clamp(28rem, 64vw, 45rem)",
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
