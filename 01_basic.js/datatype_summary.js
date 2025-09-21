// primitive data type-

// 7 types(call by value(copy)):
// string, Number, Boolean, null, Undefined, Symbol,
// BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useremail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

const bigNumber = 34556789987n


/*
JavaScript is a dynamically typed language ✅

🔹 What that means:

You don’t declare data types explicitly (like int, string, float).

The type of a variable is determined at runtime, not at compile time.

A variable can change its type during execution.
*/

// Reference(non - primitive)

// array, objects,Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "mayank",
    age: 18,
}
const myFunction = function(){
    console.log("Hello world");   
}

console.log(typeof outsideTemp);


// ++++++++++++++++++++
// stack memory(primitive), Heap(non-primitive)
let myYoutube = "mayankmishra"
let anotherName = myYoutube
anotherName = "chaiaurcode"

console.log(myYoutube)
console.log(anotherName)

let userone = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userone
userTwo.email = "mayank@gmail.com"

console.log(userone.email);
console.log(userTwo.email);



