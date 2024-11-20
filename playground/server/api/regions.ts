import { serverMedusaClient } from '#medusa/server'

export default eventHandler(async (event) => {
  const client = serverMedusaClient(event)
  const { regions } = await client.store.region.list()

  return { regions }
})
