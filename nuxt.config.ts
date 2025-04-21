// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  fonts: {
    families: [
      {
        name: "Montserrat",
        provider: "google"
      }
    ]
  },
  i18n: {
    vueI18n: '~/localization/i18n.config.ts',
    locales: ['ua', 'ru'],
    defaultLocale: 'ua',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
  app: {
    head: {
      title: "VIVIENNE - Luxury Jewelry Brand",
      meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    }
  },
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/ui', '@nuxtjs/i18n', "@pinia/nuxt", 'nuxt-aos'],
  css: ["~/assets/css/main.css"],
})