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
        "clamp-rg": "clamp(.8rem, 1.11vw, 1.20rem)",
        "clamp-lg": "clamp(.9rem, 1.25vw, 1.35rem)",
        "clamp-xl": "clamp(1rem, 1.39vw, 1.5rem)",
        "clamp-asd": "clamp(1rem, 1.39vw, 1.5rem)",
        "clamp-3xl": "clamp(2.4rem, 3.33vw, 3.6rem)",
        "clamp-4xl": "clamp(3.2rem, 4.45vw, 4.2rem)",
      },
      maxWidth: {
        "clamp-xs": "clamp(36rem, 45vw, 45rem)",
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
