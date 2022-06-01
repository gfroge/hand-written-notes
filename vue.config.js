const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Hand-written-notes/'
    : '/'
  ,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/style.scss";`
      },
    }
  }
}
