/*
 * @Description:
 * @FilePath: \vue-cli-vant-starter\vue.config.js
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-11 15:04:33
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-12 14:02:36
 */
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')


module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer({
            browsers: ['Android >= 4.0', 'iOS >= 7']
          }),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
            minPixelValue: 1
          })
        ]
      }
    }
  },

  devServer: {
    proxy: {
      '/': {
        target: 'https://www.haiwaidz.com/',
        ws: false,
        secure: false,
        changeOrigin: true
      }
    }
  },

  lintOnSave: false
}
