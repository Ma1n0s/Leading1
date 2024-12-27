// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/icon",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "nuxt-typed-router",
    "nuxt-aos"
  ],
  googleFonts: {
    families: {
      Roboto: [400, 700],
      Lato: [400, 700],
    },
    display: 'swap', 
  },
    compatibilityDate: "2024-12-26"
})