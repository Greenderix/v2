export default {
  server: {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 3000
  },
  head: {
    title: 'grinderix-map',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/map.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/axios'],
    ['nuxt-leaflet'],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    prefix: '/api/',
        proxy: true,
  },

  proxy: {
    '/api': {
        target: 'http://127.0.0.1:8000',
        // pathRewrite: {'^/api/': ''},
        headers: { 'X-API-KEY': 'apiKey' },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
