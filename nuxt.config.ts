// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss'
  ],
  i18n: {
    strategy: 'prefix_and_default',
    baseUrl: 'http://localhost:3000',
    lazy: false,
    detectBrowserLanguage: {
        fallbackLocale: "en",
        useCookie: true,
        alwaysRedirect: true,
    },
    locales: [
      { code: "tr", iso: "tr-TR", file: "tr.json", name: "Turkish", native: "Türkçe" },
      { code: "en", iso: "en-US", file: "en.json", name: "English", native: "English" }, 
    ],
    defaultLocale: 'en',
    langDir: 'locales',
  },
  app: {
    head: {
      title: 'Paris Travel Agency',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Your trusted travel partner for unforgettable experiences' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
