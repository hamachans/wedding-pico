// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },
  app: {
    head: {
      title: 'Hamada Wedding Party',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '2026年8月9日 横浜赤レンガ倉庫にて' },
        // OGP設定
        { property: 'og:title', content: 'Hamada Wedding Party' },
        { property: 'og:description', content: '2026年8月9日 横浜赤レンガ倉庫にて' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/top.jpg' },
        { property: 'og:site_name', content: 'Hamada Wedding Party' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Hamada Wedding Party' },
        { name: 'twitter:description', content: '2026年8月9日 横浜赤レンガ倉庫にて' },
        { name: 'twitter:image', content: '/top.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Noto+Sans+JP:wght@300;400;500&family=Noto+Serif+JP:wght@300;400;500&display=swap' },
      ],
    },
  },
})
