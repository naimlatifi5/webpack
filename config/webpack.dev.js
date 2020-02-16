const path = require("path") // path used to work with directories
 
// main object to tell webpack what to do with configuration options
module.exports = {
    entry: {
        // we write main entry point where webpack to tart
        index: "./src/index.js"
    },
    mode: "development",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "../dist")
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/, // which path should be ignored when transformin modules, we won't transform imported vendor libraries
              use: {
                  loader: "babel-loader",
                  options: {
                      presets: ['@babel/preset-env'] // babel loader for traspiler javascript code
                  }
              }
            },
            {
              // Apply rule for .sass, .scss or .css files
              test: /\.(sa|sc|c)ss$/,
        
              // Set loaders to transform files.
              // Loaders are applying from right to left(!)
              // The first loader will be applied after others
              use: [
                      {
                        // This loader resolves url() and @imports inside CSS
                        loader: "style-loader",
                      },
                      {
                        // This loader resolves url() and @imports inside CSS
                        loader: "css-loader",
                      },

                      {
                        // Then we apply postCSS fixes like autoprefixer and minifying
                        loader: "postcss-loader",
                        options: {
                          plugins: () => [require('autoprefixer')]
                        }
                      },
                      {
                        // First we transform SASS to standard CSS
                        loader: "sass-loader",
                        options: {
                          implementation: require("sass")
                        }
                      }
                    ]
            }
        ]
    },
    // hot reloading
    devServer: {
      // look for the file changes in dist
      contentBase: './dist'
    }
}