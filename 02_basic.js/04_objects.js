// const tinderUser = new Object()  singleton object 
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser= {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Mayank",
            lastname: "Mishra"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3: "a",4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1,...obj2,}
// console.log(obj3);

const user = [
    {
     id:1,
     email: "h@gmail.com"   
    },

]

user[0].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedin'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course  // for access and also destructure object 

console.log(instructor);



// react 
 
// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")


//API(like a object call in string)(json format)

// {
//  "name":  "hitesh",
//  "coursename": "js in hindi", 
//  "price": "free",

// }

[
    {},
    {},
    {},
]