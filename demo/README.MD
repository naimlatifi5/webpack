4. 
 - Now instead of going through dist map and open index.html we want with help of plugins to have an index.html inside src and generate it into dist
 - copied index.html inside src
 - installed html-webpack-plugin
-  installed mini-css-extract-plugin to extract css in a seperate file
- We added minicssExtracPlugin that will take the styling css or scss imported inside a js file and extract to a css file and add import inside html file into the head element as stylesheet
-  We installed plugin for clean dist foler, for testing we added another entry point called project.js and then instatitate a new instance of CleanWebpackPlugin()