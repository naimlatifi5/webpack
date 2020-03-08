// this is our magic file
const path = require('path')

// webpack's main configuration object
module.exports = {
    // entry point where webpack will begin his work
    entry: {
        app1: "./src/index.js",
        app2: "./src/main.js",
    },

    // result bundle output
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "[name].bundle.js"
    }
}
