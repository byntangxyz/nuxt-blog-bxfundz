// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: 'Riyad\'s Blog',
      titleTemplate: '%s - Riyad\'s Blog',
      meta: [{ name: 'description', content: 'Riyad\'s awesome blog' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  typescript: {
    strict: true,
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/image-edge',
    '@nuxtjs/robots',
    '@nuxtjs/fontaine',
  ],

  content: {
    highlight: {
      theme: 'dracula',
    },
  },
})
