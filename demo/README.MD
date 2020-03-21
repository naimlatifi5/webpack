7. - Added lodash to main.js with an array concatination
   - Build the app with yarn build and opened both app1 and app2 bundle to see that we got the Lodash library in both files which is a problemt and where code splitting will fix it.
   - Added optimization for webpack chunks all and after running build we see that new vendor bundle is created that contains and share loadsh to the file lodash is used
   - 
  