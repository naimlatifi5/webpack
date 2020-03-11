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
    },
    module: {
        rules: [
            {
              // Regex: Apply rule for .sass, .scss or .css files
              test: /\.(sa|sc|c)ss$/,
               
                use: [
                    {
                        // Inject CSS into DOM
                        loader: "style-loader",
                    },
                    {
                       // This loader resolves url() and @imports inside CSS
                        loader: "css-loader",
                    },
                     //Loads a Sass/SCSS file and compiles it to CSS.
                    {
                        // sass -loader
                        loader: "sass-loader"
                    }
                 
                ]
            },
            {
                // test is a javascript regular expression for file extension we are going to transform
                test: /\.js$/,
                // which path should be ignored when transformin modules, we won't transform imported vendor libraries
                exclude: /(node_modules)/, 
                // here we set loaders for our test regular expression
                use: {
                    loader: "babel-loader",
                    // In this case we set default presets for Babel to consider which ES6 features it should transform and which not
                    options: {
                        presets: ['@babel/preset-env'] // babel loader for traspiler javascript code
                    }
                }
              },
           
        ]
    }
}
