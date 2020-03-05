function hello() {
    let variable = "hello"
    alert("Hello world webpack nice ")
    return variable
}
const arrowFunction = () => {
  console.log("hello there from arrow function")    
}

function square(x) {
    return x * x;
}

module.exports = {
    hello,
    square,
    arrowFunction
    

}