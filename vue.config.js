module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // less vars，customize ant design theme

          'primary-color': '#128bed',
          'link-color': '#128bed',
          'border-radius-base': '4px'
        },
        // DO NOT REMOVE THIS LINE
        javascriptEnabled: true
      }
    }
  }


}