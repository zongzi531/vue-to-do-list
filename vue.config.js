const path = require('path')

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/vue-to-do-list/'
    : '/',
  chainWebpack: config => {
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
