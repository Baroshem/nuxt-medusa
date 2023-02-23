import Medusa from '@medusajs/medusa-js'
import type { H3Event } from 'h3'
import { useRuntimeConfig } from '#imports'

export const serverMedusaClient = (event: H3Event): Medusa => {
  const { medusa: config } = useRuntimeConfig().public

  if (!event.context._medusaClient) {
    const medusaClient = new Medusa(config)

    event.context._medusaClient = medusaClient
  }

  return event.context._medusaClient as Medusa
}
