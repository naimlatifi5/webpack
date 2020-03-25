import _ from 'lodash'
import './style/index.scss'
import { helloWorld } from './test.js'
let arr1 = [1]
let arr2 = [2]
console.log("concat", _.concat(arr2, [44]) )

 setTimeout(() => {
     // uncomment below to see how inline-source-map helps to see where the error occurred and in which file exatly is the error. 

     //let hello = hh3hh3
     console.log("Print me after some time ..... :) ")
 }, 200)

 helloWorld()


