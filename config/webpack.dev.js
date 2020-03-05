const path = require("path") // path used to work with directories
// plugin to extract all css files in a seperate file

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// main object to tell webpack what to do with configuration options
module.exports = {
    entry: {
        // we write main entry point where webpack to start
        app: "./src/index.js",
       // print: "./src/print.js",
        //anotherModule: "./src/another-module.js"
    },
    // default mode for webpack is production 
    // we are in development mode so let's set mode to development
    mode: "development",
    // path and filename for the bundle
    output: {
      filename: '[name].bundle.js',
      //filename: "bundle.js",
      chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname, "../dist")
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all'
    //   }
    // },
    devtool: 'inline-source-map',
    // webpack loaders
    module: {
        rules: [
            {
              // test is a javascript regular expression for file extension we are going to transform
              test: /\.js$/,
              // which path should be ignored when transformin modules, we won't transform imported vendor libraries
              exclude: /(node_modules)/, 
              // here we set loaders for our test regular expression
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
            },
            {
              // Now we apply rule for images
              test: /\.(png|jpe?g|gif|svg)$/,
              use: [
                     {
                       // Using file-loader for these files
                       loader: "file-loader",
        
                       // In options we can set different things like format
                       // and directory to save
                       options: {
                         outputPath: 'images'
                       }
                     }
                   ]
            },
        ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Output management',
        template: './index.html',
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true
        },
      })

    ],
    // hot reloading
    devServer: {
      // look for the file changes in dist
      contentBase: './dist'
    }
}