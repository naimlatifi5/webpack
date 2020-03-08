// this is our magic file
const path = require('path')

// webpack's main configuration object
module.exports = {
    // entry point where webpack will begin his work
    entry: "./src/index.js",

    // result bundle output
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "bundle.js"
    },
    mode: "development"
}
