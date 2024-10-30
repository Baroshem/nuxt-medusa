<script lang="ts" setup>
const client = useMedusaClient();

// Client fetching
const { regions } = await client.store.region.list()
const { products } = await client.store.product.list({
  region_id: regions[0].id,
  fields: `*variants.calculated_price`
});

// Server Fetching
const { data } = await useFetch('/api/products')
</script>

<template>
  <section>
    <h2 class="text-2xl">
      Products fetched from Client
    </h2>
    <div class="flex">
      <div
        v-for="product in products"
        :key="product.key"
        class="mx-2"
      >
        <div class="relative rounded-lg shadow-lg">
          <img
            :src="product.thumbnail"
            class="shadow-lg rounded-lg opacity-1 hover:opacity-75 transition duration-300 ease-in-out w-full"
          >
          <div class="p-6">
            <h5 class="font-bold text-lg mb-3">
              {{ product.title }}
            </h5>
            <pre class="text-gray-500 mb-4">{{
              product.variants[0].calculated_price.calculated_amount
            }}</pre>
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <h2 class="text-2xl">
      Products fetched from Server
    </h2>
    <div class="flex">
      <div
        v-for="product in data?.products"
        :key="product.key"
        class="mx-2"
      >
        <div class="relative rounded-lg shadow-lg">
          <img
            :src="product.thumbnail"
            class="shadow-lg rounded-lg opacity-1 hover:opacity-75 transition duration-300 ease-in-out w-full"
          >
          <div class="p-6">
            <h5 class="font-bold text-lg mb-3">
              {{ product.title }}
            </h5>
            <pre class="text-gray-500 mb-4">{{
              product.variants[0].calculated_price.calculated_amount
            }}</pre>
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
