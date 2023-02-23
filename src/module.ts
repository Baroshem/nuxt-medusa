import { defineNuxtModule, addPlugin, createResolver, addImportsDir } from '@nuxt/kit'
import { fileURLToPath } from 'url'
import { defu } from 'defu'
import { Config } from '@medusajs/medusa-js'

export type ModuleOptions = Config & { global?: boolean }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-medusa',
    configKey: 'medusa'
  },
  defaults: {
    baseUrl: 'http://localhost:9000',
    maxRetries: 3,
    global: true
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.medusa = defu(nuxt.options.runtimeConfig.public.medusa, {
      baseUrl: process.env.MEDUSA_URL || options.baseUrl,
      maxRetries: options.maxRetries,
      apiKey: options.apiKey,
      publishableApiKey: options.publishableApiKey,
      global: options.global
    })

    if (options.global) addPlugin(resolver.resolve('./runtime/plugin'))

    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)
    addImportsDir(resolver.resolve(runtimeDir, 'composables'))
  }
})
