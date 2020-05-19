'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: 9698,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    disableHostCheck: true
    // proxy: {
    //   [process.env['VUE_APP_BASE_API']]: {
    //     target: [process.env['VUE_APP_BASE_API']],
    //     changeOrigin: true,
    //     ws: false,
    //     pathRewrite: {
    //       ['^' + process.env['VUE_APP_BASE_API']]: ''
    //     }
    //   },
    //   [process.env['VUE_APP_HY_BASE_API']]: {
    //     target: [process.env['VUE_APP_HY_BASE_API']],
    //     changeOrigin: true,
    //     ws: false,
    //     pathRewrite: {
    //       ['^' + process.env['VUE_APP_HY_BASE_API']]: ''
    //     }
    //   }
    // }
  },
  configureWebpack: {
    name: 'vue-mp',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
