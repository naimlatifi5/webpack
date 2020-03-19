
// webpack.dev.js

const merge = require('webpack-merge');
const common = require('./webpack.common.js')


module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
     // hot reloading
    
     devServer: {
        // look for the file changes in dist
        contentBase: './dist'
      }
})