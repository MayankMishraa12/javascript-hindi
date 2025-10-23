function sayMyname(){

}

// sayMyname() reference

function addTwoNumbers(number1,number2){ // parameter
    
    console.log(number1+number2);    // for print to return 
}
console.log("result: ",result); // undefined in first 
function addTwoNumbers(number1,number2){

    let result = number1+number2
    return result
    return number1 + number2
}


const result = addTwoNu


addTwoNumbers(3,4) // 7 argument
addTwoNumbers(3,"4")  // catenation

mbers(3,5) 
// console.log("result: ",result);


function LoginUserMessage(username = "sam"){  // sam is default value
    if(username === undefined){        // username === undefined equivalent to !username
       console.log("please enter a username");
        return   
    }
    return `${username} just logged in`
}
console.log(LoginUserMessage("mayank"))


function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(2000, 200, 400, 500));

const user = {
    username: "mayank",
    price: 200
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray=[200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));
