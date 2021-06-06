module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'http://siwei.me',
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          '^/api': '/',
        }
      }
    },
  }
}
