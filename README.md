# nuxt-medusa

[![nuxt-medusa](./docs/public/cover.jpeg)](https://nuxt-medusa.vercel.app)

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

Medusa module for Nuxt.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [📖 &nbsp;Documentation](https://nuxt-medusa.vercel.app)

## Features

- Nuxt 3 ready
- Wrapper around `@medusajs/medusa-js`
- Handy composables like `useMedusaClient`
- Usage in API server routes with `serverMedusaClient`
- TypeScript support

## Quick Setup

1. Add `nuxt-medusa` dependency to your project

```bash
pnpm add -D nuxt-medusa

yarn add --dev nuxt-medusa

npm install --save-dev nuxt-medusa
```

2. Add `nuxt-medusa` to the `modules` section of `nuxt.config.ts`:

```js
export default defineNuxtConfig({
  modules: ['nuxt-medusa'],
})
```

3. Create .env file with following `MEDUSA_URL` variable:

```bash
MEDUSA_URL=<YOUR_MEDUSA_URL> # By default http://localhost:9000
```

And that's it! You can now use `nuxt-medusa` in your Nuxt app ✨

```vue
<script setup lang="ts">
const client = useMedusaClient();
const products = await client.products.list();
</script>
```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-medusa/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-medusa

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-medusa.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-medusa

[license-src]: https://img.shields.io/npm/l/nuxt-medusa.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-medusa
