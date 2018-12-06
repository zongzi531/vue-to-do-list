const path = require('path')

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/vue-to-do-list/'
    : '/',
  chainWebpack: config => {
    // https://github.com/vuetifyjs/vuetify/issues/4068
    // config.resolve.alias
    //   .set('vue$', path.resolve(__dirname, './node_modules/vue/dist/vue.runtime.esm.js'))
    if (process.env.NODE_ENV !== 'test') {
      config.devtool('eval')
      config.module
        .rule('istanbul')
        .test(/\.(ts|vue)$/)
        .enforce('post')
        .include
        .add(path.resolve(__dirname, '/src'))
        .end()
        .use('istanbul-instrumenter-loader')
        .loader('istanbul-instrumenter-loader')
        .options({ esModules: true })
    }
  }
}
