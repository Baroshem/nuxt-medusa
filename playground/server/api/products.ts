import { serverMedusaClient } from '#medusa/server'

export default eventHandler(async (event) => {
  const client = serverMedusaClient(event)
  const { regions } = await $fetch("/api/regions")
  const { products } = await client.store.product.list({
    region_id: regions[0].id,
    fields: `*variants.calculated_price`
  })

  return { products }
})
