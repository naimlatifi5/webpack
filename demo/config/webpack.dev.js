
// webpack.dev.js

const merge = require('webpack-merge');
const common = require('./webpack.common.js')


module.exports = merge(common, {
    mode: 'development',
    // differences is that in dev we use inline source map
    devtool: 'inline-source-map'
})