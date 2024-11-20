import Medusa from '@medusajs/js-sdk'
import type { Config } from '@medusajs/js-sdk'
import type { H3Event } from 'h3'
import { useRuntimeConfig } from '#imports'

export const serverMedusaClient = (event: H3Event): Medusa => {
  const { medusa: config } = useRuntimeConfig().public

  const privateConfig = useRuntimeConfig().medusa
  const medusaConfig = { ...config, ...privateConfig } as Config

  if (!event.context._medusaClient) {
    const medusaClient = new Medusa(medusaConfig)

    event.context._medusaClient = medusaClient
  }

  return event.context._medusaClient as Medusa
}
