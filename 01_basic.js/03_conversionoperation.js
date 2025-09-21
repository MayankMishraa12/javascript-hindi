let score = "33";

// console.log(typeof(score));

let valueInNumber = Number(score);

// console.log(typeof(valueInNumber));

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0=> false;
// "" => false;
// "mayank" => true;

let somenumber = 33;

let stringNumber = String(somenumber);
console.log(stringNumber);
console.log(typeof(stringNumber));

// **************** Operations ***********

let value = 3;
let negValue = -value;
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2%3);

let str1 = "hello";
let str2 = "mayank";

let str3 = str1 + str2
console.log(str3);

// console.log("1"+2);  
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");

// console.log((3+4)*5%3);
// console.log(+true);
// console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2+2;

let gameCount = 100;
gameCount++;
console.log(gameCount);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"




// // JavaScript Type Coercion with + Operator
// The Four Examples

// console.log("1" + 2);
// Output: "12"
// Step 1: "1" (string) + 2 (number)
// Step 2: Number 2 is converted to string "2"
// Step 3: String concatenation: "1" + "2" = "12"
// Rule: When one operand is string, the other is converted to string


// console.log(1 + "2");
// Output: "12"
// Step 1: 1 (number) + "2" (string)
// Step 2: Number 1 is converted to string "1"
// Step 3: String concatenation: "1" + "2" = "12"
// Rule: Same as above - string takes precedence


// console.log("1" + 2 + 2);
// Output: "122"
// Step 1: "1" + 2 (left to right evaluation)
// Step 2: "1" + 2 = "12" (string concatenation)
// Step 3: "12" + 2 = "122" (string concatenation again)
// Rule: Left-to-right evaluation, once string always string


// console.log(1 + 2 + "2");
// Output: "32"
// Step 1: 1 + 2 (left to right evaluation)
// Step 2: 1 + 2 = 3 (numeric addition)
// Step 3: 3 + "2" = "32" (string concatenation)
// Rule: Numbers add first, then convert to string


// Key Rules for + Operator in JavaScript:
// 1. String Priority: If any operand is a string, convert others to strings and concatenate
// 2. Left-to-Right: Operations are evaluated from left to right
// 3. Type Conversion: Numbers → Strings when needed, but not vice versa with +
// 4. Once String, Always String: Once the result becomes a string, subsequent operations are concatenations


// More Examples
// 2 + 3 + "4"
// Output: "54"
// "4" + 3 + 2
// Output: "432"
// true + "false"
// Output: "truefalse"
// 5 + true + "2"
// Output: "62"
// "" + 1 + 0
// Output: "10"
// 1 + 0 + ""
// Output: "1"



