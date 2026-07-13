// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { PORTFOLIO } from "./src/lib/portfolio-data";

// For GitHub Pages, the site is served under a subfolder named after the repository.
// Set BASE_PATH when building for GitHub Pages, e.g. BASE_PATH=/my-repo/
// For local development or a custom domain, leave it as "/".
const base = process.env.BASE_PATH || "/";
const basepath = base.replace(/\/$/, "") || "/";

export default defineConfig({
  vite: {
    base,
  },
  // Disable Nitro (Cloudflare worker bundle) — we are generating a static site for GitHub Pages.
  nitro: false,
  tanstackStart: {
    router: {
      basepath,
    },
    client: {
      base,
    },
    // Generate static HTML for every route so the site can be hosted on GitHub Pages.
    pages: [
      { path: "/" },
      ...PORTFOLIO.map((item) => ({ path: `/portfolio/${item.id}` })),
    ],
    prerender: {
      enabled: true,
      // Routes are listed explicitly above; no need to crawl.
      crawlLinks: false,
    },
  },
});
