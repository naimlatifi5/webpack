import { hello, square,arrowFunction} from "./js/util.js"

// now webpack needs to know what to do
import '../src/scss/index.scss'
import printMe from './print.js'

console.log("this is my first code in webpack nice with webpack")
console.log(hello())
console.log(square(4))
printMe()