import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/icon",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    '@primevue/nuxt-module',
    "nuxt-typed-router",
    "nuxt-aos"
  ],
  primevue: {
      options: {
          theme: {
              preset: 'Aura'
          }
      }
  },
  googleFonts: {
    families: {
      Roboto: [400, 700],
      Lato: [400, 700],
    },
    display: 'swap', 
  },
    compatibilityDate: "2024-12-26"
})