// prmitive => call by value
// 7 types: string, Number, boolean, null, undefined (declare), symbol, BigInt

// non-prmitive / Reference types:
// Array, Object, Function

// No language defined => dynamic 
// Example of a wrong expression (for demonstration):
// const score = 100/false
// const score = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined

const id = Symbol('123');
const anotherId = Symbol('123');
// console.log(id === anotherId);
const bigNumber = 3412431423499999n;

// console.log(typeof bigNumber);

const heros = ["shaktiman", "naagraj", "doga"]; // Array
// console.log(heros[2]); // "doga"

// Object examples using block scope (not recommended for real objects):
{
    // This is an object literal inside a block.
    // Note: properties should be separated by commas.
    name: "ali",
    age: 22,
}

// OR

let myObj = {
    name: "ali",
    age: 22,
};

const myfunction = function () {
    console.log("hello me");
};
// myfunction()

// ++++++++++++++++++++++++ Memory Model +++++++++++++++++++++++
// Primitive values (stored on the stack) are copied by value,
// whereas non-primitive (reference) types (stored on the heap) are copied by reference.

let myYouTubeName = "whispring winds";
let anotherName = myYouTubeName;
anotherName = "codewithme";
// Changing anotherName does not affect myYouTubeName (because primitives are copied)
console.log(anotherName); // "codewithme"
console.log(myYouTubeName); // "whispring winds"

// Reference type example:
let userOne = {
    email: "ifitkar@chatgpt.com",
    easypasia: "user@accout.com",
};

let userTwo = userOne; // userTwo references the same object as userOne
userTwo.email = "iftu@gmail.com";

console.log(userOne.email); // "iftu@gmail.com"
console.log(userTwo.email); // "iftu@gmail.com"

/* 
   Latest MDN Documentation Information:
   ---------------------------------------
   Primitive Data Types:
   JavaScript defines seven primitive data types:
     1. String
     2. Number
     3. BigInt
     4. Boolean
     5. Undefined
     6. Symbol
     7. Null
   These values are immutable, meaning that operations on them produce new values rather than modifying the existing ones.
   They are passed by value, so when you assign or pass them, a copy is made.

   Non-Primitive (Reference) Data Types:
   Non-primitive types include objects, arrays, and functions.
   Objects are collections of key-value pairs stored on the heap.
   Arrays and functions are specialized forms of objects.
   When you assign or pass a reference type, the reference (or pointer) to the data is copied,
   meaning that multiple variables can refer to the same underlying object.

   Memory Model:
   - Primitive types use the stack memory and are copied by value.
   - Reference types use the heap memory and are copied by reference.
   Modifications to an object through one reference will reflect in all references to that object.

   For the most up-to-date and comprehensive information, please refer to MDN:
     - JavaScript Data Structures and Types:
       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
     - Glossary: Primitive:
       https://developer.mozilla.org/en-US/docs/Glossary/Primitive


