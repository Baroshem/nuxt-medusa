import Medusa from '@medusajs/medusa-js'
import { useRuntimeConfig, useNuxtApp } from '#imports'

export const useMedusaClient = (): Medusa => {
  const nuxtApp = useNuxtApp()

  const { medusa: config } = useRuntimeConfig().public

  // If medusa was registered in global plugin, just return reference to it.
  if (config.global) return nuxtApp.$medusa as Medusa

  // Create client if it is not there.
  if (!nuxtApp._medusaClient) {
    nuxtApp._medusaClient = new Medusa(config)
  }

  return nuxtApp._medusaClient as Medusa
}
