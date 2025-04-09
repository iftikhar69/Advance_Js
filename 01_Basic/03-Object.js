/**
 * Latest MDN Summaries:
 * - Object.create(): "Creates a new object, using an existing object as the prototype of the newly created object."
 * - Object literals: "A convenient way to create objects using a comma-separated list of key-value pairs inside curly braces."
 * - Symbol(): "A built-in object whose constructor returns a unique symbol value, often used as unique object property keys."
 * - Object.freeze(): "Freezes an object. A frozen object can no longer be changed — no new properties can be added, existing properties can't be removed or altered."
 * - this: "Refers to the object from which the current function is being called. In object methods, `this` refers to the object itself."
 */

 //decalring object

// 01:singleton object 
// Object.create

// 02:object literals 

const mySym = Symbol("key1")

const JsUser = {
    //value + name
    name:"iftikar",
    "fullname": "iftikhar hussain",
    age: 18,
    [mySym]: "mykey1",
    location: "gilgt",
    email: "iftu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}
// myarr[val1,val2]

// Accessing the object

// console.log(JsUser.email) //OR
// // console.log(JsUser["email"])
// console.log(JsUser.fullname)//OR
// console.log(JsUser["fullname"])
// console.log( JsUser[mySym])

//changing object element

JsUser.email = "iftikhar@chatgpt.com"
// console.log(JsUser.email)
// Object.freeze(JsUser)
JsUser.email = "iftu@2024"
// console.log(JsUser)

JsUser.greeting = function(){
console.log("hello user")
}
JsUser.greetingtwo = function(){
console.log(`hello user :${this.name}`)
}
//this can excess everthing in object
// console.log(JsUser.greeting)//function (anomyous)> is't excuet only refrence
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
