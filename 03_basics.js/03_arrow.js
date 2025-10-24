const user = {
    username: "mayank",
    price: 999,

    welcomeMessage: function(){  // current contest ko refer kartah hai
        console.log(`${this.username}, welcome to website `);
        console.log(this);
        
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "mayank"
//     console.log(this.username); // undefined
// }

// chai()

// const chai = function(){
//     let username = "mayank"
//     console.log(this.username);  // undefined
    
// }

const chai = () => {
    let username = "mayank"
    console.log(this);
}

// chai()

// ARROW FUNCTION

// const addTwo = (num1,num2) => {     in paranthesis we need to return 
//     return num1+num2 
// }

const addTwo = (num1,num2) => ( num1 + num2 )  // in curly bracket no need to return
console.log(addTwo(3,4))

