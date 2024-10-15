function myFunction(){
    console.log("Hello World!!!")
}
myFunction()

// Example 1
const myArrowFunction = () => {
    console.log("Hello World, form an arrow function!!!")
}

myArrowFunction()

// Example 2 
// If your arrow function just perform 1 line of code it is no necesary to use curly brackets, and operation is going to be returned by defult 
const addition = (num1, num2)=> num1 + num2
let var1 = addition(10, 5)
console.log(var1)

const subs = (num1, num2) => num1 - num2
let var2 = subs(10,5)
console.log(var2)

// Create a Function that squares a number
// 2 square  = 4 , 3 square = 9 , 4 square = 16 
// (2*2) (3*3) (4*4)

const square = (num1) => num1 * num1

console.log(square(2))
console.log(square(3))
console.log(square(4))
console.log(square(5))
 

// What is a Callback 

function printer(val){
    console.log(`The result of the opeation is: ${val}`)
}

function add(num1, num2, callback){
    let result = num1+num2 
    callback(result)
}

//add(10, 20, printer)

function subs2 (num1, num2, callback){

    let result = num1-num2 
    callback(result)

}

//subs2(15, 20, printer)

// Another Example of Call Backs

function dobleOperation( num1, num2, callback1, callback2 ){

    callback1(num1, num2, printer)
    callback2(num1, num2, printer)

}

dobleOperation(15, 5, add, subs2)

//Example 4 

function greet(name, callback){
    console.log(`Hello, ${name}`)
    callback()
}

const goodBye = ()=>{
    console.log("Goodbye!")
}

greet("Julie",goodBye )
