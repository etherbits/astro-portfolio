import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    "/projects": "/en/projects",
    "/journey": "/en/journey",
    "/contact-me": "/en/contact-me",
  },
});
