import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
// import {loadEnv} from 'vite'

// const {Sec}

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), prefetch()],
  adapter: vercel()
});