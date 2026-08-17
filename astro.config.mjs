import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// Публичный адрес сайта для canonical, Open Graph и sitemap.
// Перед публикацией замените на ваш домен или задайте PUBLIC_SITE_URL.
const site = process.env.PUBLIC_SITE_URL || "https://zhitnevo-house.ru";

export default defineConfig({
  site,
  compressHTML: true,
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date(),
      filter: (page) => !page.includes("/404"),
    }),
  ],
  build: {
    inlineStylesheets: "auto",
    assets: "_assets",
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
