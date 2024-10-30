import { serverMedusaClient } from '#medusa/server'

export default eventHandler(async (event) => {
  const client = serverMedusaClient(event)
  const { regions } = await $fetch("/api/regions")
  const { products } = await client.products.list({
    region_id: regions[0].id,
    country_code: regions[0].countries[0].iso_2,
    fields: `*variants.calculated_price`
  })

  return { products }
})
