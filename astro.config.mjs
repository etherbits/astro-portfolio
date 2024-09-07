import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: "https://nikadev.com",
  integrations: [tailwind(), prefetch(), sitemap()],
  redirects: {
    "/": "/en",
    "/projects": "/en/projects",
    "/journey": "/en/journey",
    "/contact-me": "/en/contact-me",
  },
  adapter: vercel(),
});
