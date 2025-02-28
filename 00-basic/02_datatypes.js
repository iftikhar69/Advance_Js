"use strict"; // Treat all JS code as the newer version

// alert(3+3) -> We are using Node.js, not a browser

/*
console.log(3 + 3);
console.log("iftikhar");
console.log(3 +
    3);
*/

// Code readability is important

console.log("iftikher");

let name = "ifitkar";  // string data type
let age = 19;          // number data type
let isLoggedIn = false;  // boolean data type
let state = null;        // null data type

// Uncomment to see the state value:
// console.log(state);

// Primitive Data Types in JavaScript researched from javascipt mdn (latest):
// -------------------------------------
// Number: Represents numeric values. In JavaScript, numbers are stored in 64-bit floating point format.
//         The safe integer range is -(2^53 - 1) to 2^53 - 1.
//         [MDN: Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
//
// BigInt: For integers larger than 2^53 - 1.
//         [MDN: BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
//
// String: Used to represent text, enclosed in '' or "".
//         [MDN: String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
//
// Boolean: Represents true/false values.
//         [MDN: Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
//
// Null: Represents an intentional absence of any object value.
//         [MDN: Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null)
//
// Undefined: A variable that has been declared but not assigned a value.
//         [MDN: Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined)
//
// Symbol: Represents a unique and immutable identifier.
//         [MDN: Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

// Object: Can hold multiple properties and values.
//         [MDN: Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

// Displaying data types using 'typeof'
console.log(typeof age);         // Expected output: "number"
console.log(typeof null);        // Expected output: "object" (a known quirk in JavaScript)
console.log(typeof undefined);   // Expected output: "undefined"
