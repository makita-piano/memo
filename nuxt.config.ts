// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/uikit@3.15.19/dist/css/uikit.min.css" }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/uikit@3.15.19/dist/js/uikit.min.js' },
        { src: 'https://cdn.jsdelivr.net/npm/uikit@3.15.19/dist/js/uikit-icons.min.js' }
      ],
    },
  },
})
