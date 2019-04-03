module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/devAwesome/'
    : '/',
  pwa: {
    name: 'DevAwesome',
    themeColor: '#231F34',
    msTileColor: '#231F34',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black'
  },
  configureWebpack: {
    output: {
      filename: `[name].[hash].js`,
      chunkFilename: `[name].[hash].js`
    }
  }
}
