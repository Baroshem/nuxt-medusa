import { defineNuxtPlugin } from '#app'
import { useRuntimeConfig } from '#imports'
import Medusa from '@medusajs/medusa-js'

export default defineNuxtPlugin((nuxtApp) => {
  const { medusa: config } = useRuntimeConfig().public

  const medusaClient = new Medusa(config)

  nuxtApp.provide('medusa', medusaClient)
})
