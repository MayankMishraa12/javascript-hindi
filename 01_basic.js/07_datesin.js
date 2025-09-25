// Dates

// let myDate = new Date() // we make new object 
// console.log(myDate.toString()); // method of printing date in various way
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // type of date is object

// let myCreatedDate = new Date(2023,0,23) // month start from zero in javascript in array


// let myCreatedDate = new Date(2023,0,23,5,3)


let myCreatedDate = new Date("2023-01-14")  // dd mm yy month start from 1
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // same as new date()
// console.log(myTimeStamp); // for millisecond from that date
// console.log(myCreatedDate.getTime()); // exact millisecidn from that time

// console.log(Math.floor(Date.now()/1000)); // for conversion in second without decimal 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay())
console.log(newDate.getMonth()+1); // for less confusion like in array month start from 0

// `${newDate.getDate()}`and the time

newDate.toLocaleString('default',{
    weekday: "long",
    
})
