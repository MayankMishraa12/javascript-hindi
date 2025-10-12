// array is resizable in javascript

const myArr = [0,1,2,3,4,5]
const myHeores = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);

// Array mrthods

myArr.push(6)
myArr.push(7) // adding element in array
myArr.pop() // remove last element
console.log(myArr);

myArr.unshift(9) // to add element in start
myArr.shift() // remove first element

console.log(myArr.includes(9)); // check existemce and give datatype
console.log(myArr.indexOf(3));

const newArr = myArr.join() // convert into string

console.log(typeof newArr); // string

// slice, splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3) // print 1 2 exclude 3 do not remove 12 from array

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3) // print 1 2 3 but also remove 1 2 3 from array
console.log("C",myArr);
console.log(myn2);

