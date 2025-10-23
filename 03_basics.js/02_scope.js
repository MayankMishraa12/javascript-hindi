//var c = 300
let a = 300   // global scope

if (true){              // block scope
    let a = 10
    const b = 20
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "mayank"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);

    two()
    
}
// one()

if(true){
    const username = "mayank"
    if(username === "mayank"){
        const website = "youtube"
        //console.log(username+website);
        
    }
   // console.log(website);
    
}
//console.log(username);

// ++++++++++++++++++ interesting +++++++++

console.log(addone(5));

function addone(value){
    return num + 1         // give 6
}




const addTwo = function(num){  // expression of function
    return num + 2
}

addTwo(5)
