// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nuxt Modules
  // https://nuxt.com/modules
  modules: [
    "@nuxthub/core",
    "@nuxt/ui-pro",
    // "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/scripts",
    "@nuxt/image",
    "@nuxtjs/i18n",
    // "@nuxtjs/seo",
    "@vueuse/nuxt",
  ],
  // Development
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  site: {
    url: "https://bennyhacks.nuxt.dev",
    name: "BennyHacks",
    description: "Welcome to BennyHacks!",
  },
  colorMode: {
    preference: "light",
  },
  runtimeConfig: {
    public: {
      scripts: {
        googleMaps: { apiKey: "" },
      },
    },
  },
  // Nuxt 4 directory structure and features
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  compatibilityDate: "2024-07-30",
  nitro: {
    experimental: {
      // Enable Server API documentation within NuxtHub
      openAPI: true,
    },
  },
  hub: {
    // database: true,
    // kv: true,
    // blob: true,
    // cache: true,
  },
  eslint: {
    config: {
      stylistic: {
        quotes: "double",
        semi: true,
      },
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: [
      {
        code: "en",
        name: "English",
      },
    ],
  },
  scripts: {
    registry: { googleMaps: true },
  },
});
