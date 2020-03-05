import { hello, square,arrowFunction} from "./js/util.js.js"
//import _ from 'lodash';
// now webpack needs to know what to do
//import '../src/scss/index.scss'
import printMe from './print.js.js'

console.log("this is my first code in webpack nice with webpack")
console.log(hello())
console.log(square(4))

// console.log(
//   _.join(['Another', 'module', 'loaded!'], ' ')
// );

function getLoadash() {

    // we can also use async await but we need babel
    // here the loadash will bundle in seperate file and use in app.bundle
    // if we do not chunk files, example if we have two files imported with lodash then it will get imported in both files, that's why here we chunk and code spittting.
 import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => { 
    console.log(_.join(['Another', 'module', 'loaded!'], ' '))
 })
}
getLoadash()