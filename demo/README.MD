5. Installed webpack merge to merge the common file webpack
- Created two more files webpack.common and webpack.production and seperated the code 
- Merge webpack.common to use dev and prod
- Modified package json to use build for production and start for development
- When running build we will see that the code is minified automatically in production mode
- Added inline-source-map to see where the error occurres on the file. 
- Uncomment the code inside index.js to see how the error shows in which file is the error occurred this with help of inline-source-map

  