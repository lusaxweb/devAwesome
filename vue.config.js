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
      filename: `[name].[hash]${require('./package.json').version}.js`,
      chunkFilename: `[name].[hash]${require('./package.json').version}.js`
    }
  }
}
