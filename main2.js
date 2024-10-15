console.log("Hello!!!")


//function is a built-in function that takes a callback and executes it after a given time delay
/*setTimeout(()=>{

    console.log("After 3 Seconds I will appear")

},  3000) // 3s */

let arr = [ 5, 10, 15, 20]

console.log("Iterate with forEach")
arr.forEach( (x)=>{
    console.log(x)
})

console.log("Iterate with map") 

// Double the value of every element in the array

let arr2 =  arr.map((x)=>x*2)
console.log(arr2)

// Tripple the value of every element
let arr3 = arr.forEach( (x)=>x*3 )

console.log(arr3)