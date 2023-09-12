/** @type {import('tailwindcss').Config} */
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        appear: "appear 1s ease-out",
        bgLine: "bgLine 2s ease-in forwards",
        fgLine: "fgLine 4s linear infinite",
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        bgLine: {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
        fgLine: {
          "0%": { stroke: "#334155", strokeDashoffset: "0", strokeDasharray: "0 100" },
          "25%": { stroke: "4a73a8", strokeDashoffset: "-50", strokeDasharray: "50 50" },
          "50%": { stroke: "#60a5fa", strokeDashoffset: "-100", strokeDasharray: "0 100" },
          "100%": { stroke: "#60a5fa", strokeDashoffset: "-100", strokeDasharray: "0 100" },
        },
      },
    },
  },
  plugins: [],
};
