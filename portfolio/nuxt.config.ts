import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  gtag: {
    id: "G-B1XVY7SW9D",
    enabled: process.env.NODE_ENV === "production",
    config: {
      page_title: "Mehmet YAZ | Full Stack Developer",
    },
  },

  modules: ["nuxt-gtag"],
});
