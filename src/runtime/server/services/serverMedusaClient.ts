import Medusa from '@medusajs/medusa-js'
import type { H3Event } from 'h3'
import { useRuntimeConfig } from '#imports'

export const serverMedusaClient = (event: H3Event): Medusa => {
  const { medusa: config } = useRuntimeConfig().public

  const privateConfig = useRuntimeConfig().private

  if (!event.context._medusaClient) {
    const medusaClient = new Medusa({ ...config, ...privateConfig })

    event.context._medusaClient = medusaClient
  }

  return event.context._medusaClient as Medusa
}
