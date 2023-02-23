<script lang="ts" setup>
const client = useMedusaClient();
const products = await client.products.list();
</script>

<template>
  <div class="flex">
    <div v-for="product in products.products" class="mx-2">
      <div class="relative rounded-lg shadow-lg">
        <img
          :src="product.thumbnail"
          class="shadow-lg rounded-lg opacity-1 hover:opacity-75 transition duration-300 ease-in-out w-full"
        />
        <div class="p-6">
          <h5 class="font-bold text-lg mb-3">{{ product.title }}</h5>
          <pre class="text-gray-500 mb-4">{{
            product.variants[0].prices[0].amount
          }}</pre>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
