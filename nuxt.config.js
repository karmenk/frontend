export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
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
    '~/api/init.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-helmet'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    baseUrl: process.env.BASE_URL,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET
  },

  router: {
    middleware: ['auth']
  },

  // render: {
  //   csp: {
  //     hashAlgorithm: 'sha256',
  //     policies: {
  //       'default-src': ["'self'"],
  //       'style-src': [
  //         "'self'",
  //         "'unsafe-inline'"
  //       ],
  //       'script-src': [
  //         "'self'",
  //         'http://localhost:3000/_nuxt/runtime.js',
  //         'http://localhost:3000/_nuxt/pages/login.js',
  //         'http://localhost:3000/_nuxt/commons/app.js',
  //         'http://localhost:3000/_nuxt/vendors/app.js',
  //         'http://localhost:3000/_nuxt/app.js'
  //       ],
  //       'script-src-elem': [
  //         "'self'",
  //         'http://localhost:3000/_nuxt/runtime.js',
  //         'http://localhost:3000/_nuxt/pages/login.js',
  //         'http://localhost:3000/_nuxt/commons/app.js',
  //         'http://localhost:3000/_nuxt/vendors/app.js',
  //         'http://localhost:3000/_nuxt/app.js'
  //       ]
  //     },
  //     addMeta: true
  //   }
  // },

  helmet: {
  }
}
