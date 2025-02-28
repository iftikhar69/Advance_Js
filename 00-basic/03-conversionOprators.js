// Type Casting / Conversion in JavaScript
// This file demonstrates how to convert between different data types using built-in functions.
// Note: We use console.log for output in Node.js instead of alert (which is for browsers).

// --- Converting String to Number ---
// Starting with a string that looks like a number:
let score = "33";
console.log(typeof score); // "string": helps backend understand data types
console.log(typeof (score));

let valueInNumber = Number(score); // Converts "33" to 33
console.log(typeof valueInNumber); // "number"
// MDN reference for Number conversion: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// --- Converting a Non-Numeric String to Number ---
// If the string contains non-numeric characters:
score = "33abc";
console.log(typeof score); // still a string
console.log(typeof (score));

let valueInNumberInvalid = Number(score); // This will result in NaN (Not a Number)
console.log(typeof valueInNumberInvalid);
console.log(valueInNumberInvalid);
// MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// --- Converting Null to Number ---
// When score is null:
score = null;
console.log(typeof score); // "object" (a known JavaScript quirk)
console.log(typeof (score));

let numberFromNull = Number(score); // null converts to 0
console.log(typeof numberFromNull);
console.log(numberFromNull);
// MDN reference on null: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null

// --- Converting Undefined to Number ---
// When score is undefined:
score = undefined;
console.log(typeof score); // "undefined"
console.log(typeof (score));

let numberFromUndefined = Number(score); // undefined converts to NaN
console.log(typeof numberFromUndefined);
console.log(numberFromUndefined);
// MDN reference on undefined: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined

// --- Converting Boolean to Number ---
// When score is a boolean:
score = true;
console.log(typeof score); // "boolean"
var numberFromBoolean = Number(score); // true converts to 1; false would convert to 0
console.log(numberFromBoolean);
// MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// --- Summary of Conversions ---
// "33"       => 33
// "33abc"    => NaN (Not a Number)
// true       => 1
// false      => 0

// --- Converting Number to Boolean ---
// Convert a numeric value to boolean:
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn); // 1 converts to true
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);
// MDN reference for Boolean conversion: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

// Note: In JavaScript, values like 1 and non-empty strings are truthy, while 0, "", null, undefined, and NaN are falsy.

// --- Converting Number to String ---
// Convert a number to a string:
let a = 10;
console.log(typeof a); // "number"
let stringFromNumber = String(a);
console.log(typeof stringFromNumber); // "string"
console.log(stringFromNumber);
// MDN reference for String conversion: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
