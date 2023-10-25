export default defineNuxtConfig({
  // Optional styling
  app: {
    head: {
      script: [
        { src: "https://cdn.tailwindcss.com" }
      ]
    }
  },
  // Default Medusa CORS configuration for storefront is set for http://locahost:8000
  devServer: {
    port: 8000
  },
  modules: ['../src/module'],
  medusa: {
      baseUrl: 'https://production-like-starter.herokuapp.com',
    //   apiKey: 'test',
    //   publishableApiKey: 'test',
    //   maxRetries: 3
    //   global: false
    server: true
  },
  devtools: { enabled: true }
})
