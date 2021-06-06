module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: '80',
    proxy: {
        '/api': {
          target: 'https://www.baidu.com',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            '^/api': '',
          }
        }
    },
  }
}
