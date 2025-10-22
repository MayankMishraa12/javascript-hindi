// singleton

//const { jsx } = require("react/jsx-runtime");

// object literals
// Object.create

const mysym = Symbol("key1") // symbol defined

const JsUser = {
    name: "Mayank",
    "full name": "Mayank Mishra",
    [mysym]: "mykey1", // symbol
    age: 20,
    location: "Bihar",
    email: "mayank@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday","Sunday"]
}

// to access
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);

// to change to value
JsUser.email = "mayank@google.com"
// Object.freeze(JsUser); // to restrict to change


JsUser.greeting =function(){
    console.log("hello Js user");  
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




