//  Immediately Invoked Function Expression (IIFE)

// global scope ka pollution hatneh ka liyee iffe ka use hotah hai

(function chai(){
    console.log(`DB CONNECTED`); 
}) ();    // semicolon to stop iife

((name) => {
   console.log(`DB CONNECTED TWO ${name}`);
    
})('mayank')