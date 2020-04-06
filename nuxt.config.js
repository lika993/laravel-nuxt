const laravelNuxt = require("laravel-nuxt");

module.exports = laravelNuxt({
  // Options such as mode, srcDir and generate.dir are already handled for you.
  css: [
    '@../../node_modules/element-ui/lib/theme-chalk/index.css',
    '@../sass/app.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@../../node_modules/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@../../node_modules/@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
});