// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // Optional styling
  app: {
    head: {
      script: [
        { src: "https://cdn.tailwindcss.com" }
      ]
    }
  },
  modules: ['nuxt-medusa'],
});
