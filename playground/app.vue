<template>
  <div>
    Nuxt module playground!
  </div>
</template>

<script lang="ts" setup>
const client = useMedusaClient()
console.log(client)
const products = await client.products.list()
console.log(products)
</script>
