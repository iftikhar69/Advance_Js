/**
 * Latest MDN Summaries:
 * - Object: "A collection of key-value pairs. Keys are strings (or Symbols), and values can be any type."
 * - Object.create(): "Creates a new object with the specified prototype object and properties."
 * - Object literal: "A comma-separated list of key-value pairs wrapped in curly braces `{}`, used to create objects directly."
 * - Symbol(): "Creates a unique, immutable identifier. Often used as a key in objects to avoid property name collisions."
 * - Object.freeze(): "Prevents modification to an object. Properties can't be added, removed, or changed."
 * - this: "Refers to the object from which the current function is being called, useful inside methods."
 * - Destructuring: "A syntax that allows unpacking values from objects or arrays into distinct variables."
 */

 // const tinderUser = new Object() OR
const tinderUser = {}
tinderUser.Id = "123cbc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email :"iftikhar",
    fullname: {
        userFullname: {
            firstName: "iftikhar ali",
            lastName : "ali"
        }
    }
}
// console.log(regularUser.fullname  )

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstucture:"iftikhar"
}

// console.log(course.courseInstucture) OR NEW Sentex

// const {courseInstucture} = course
// console.log(courseInstucturen )

/* giving new name to obbject element */
const {courseInstucture:instructure} = course
console.log(instructure)


// const navbar = ({company}) => {
//react 
// }
// navbar(company = "iftikhar")
