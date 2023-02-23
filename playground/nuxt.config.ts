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
  // medusa: {
  //   baseUrl: 'http://localhost:9000',
  //   apiKey: 'test',
  //   publishableApiKey: 'test',
  //   maxRetries: 3
  // }
})
