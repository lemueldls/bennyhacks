// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-30",
  // Nuxt 4 directory structure and features
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  // Development
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  // Nuxt Modules
  // https://nuxt.com/modules
  modules: [
    "@nuxthub/core",
    "@nuxt/ui-pro",
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/scripts",
    "@nuxt/image",
  ],
  hub: {
    // database: true,
    // kv: true,
    // blob: true,
    // cache: true,
  },
  nitro: {
    experimental: {
      // Enable Server API documentation within NuxtHub
      openAPI: true,
    },
  },
  colorMode: {
    preference: "light",
  },
  eslint: {
    config: {
      stylistic: {
        quotes: "double",
        semi: true,
      },
    },
  },
});