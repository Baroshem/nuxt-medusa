export default defineNuxtConfig({
  // Default Medusa CORS configuration for storefront is set for http://locahost:8000
  devServer: {
    port: 8000
  },
  modules: ['../src/module'],
  medusa: {
    baseUrl: 'http://localhost:9000',
    maxRetries: 3
  }
})
