// Comparison Operators in JavaScript
// This file demonstrates various comparison operations and highlights common pitfalls with type coercion.
// For more details, see MDN documentation on comparison operators:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators

// --- Basic Comparisons --- 

console.log(2 > 1);   // true: 2 is greater than 1
console.log(2 >= 1);  // true: 2 is greater than or equal to 1
console.log(2 < 1);   // false: 2 is not less than 1
console.log(2 == 1);  // false: loose equality check
console.log(2 != 1);  // true: 2 is not equal to 1


// --- Comparisons with Type Coercion --- 

console.log("2" > 1);    // true: "2" is coerced to number 2 before comparison
console.log("02" > 1);   // true: "02" converts to 2 as well
console.log("2" > "2");  // false: both strings are identical when compared lexicographically


// --- Comparisons with null --- 

console.log(null > 0);    // false: in relational comparisons, null is coerced to 0
console.log(null == 0);   // false: loose equality does not equate null with 0
console.log(null >= 0);   // true: null converts to 0, so 0 >= 0 is true
console.log(null <= 0);   // true: similarly, 0 <= 0 is true
// MDN on null: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null


// --- Comparisons with undefined --- 

console.log(undefined == 0);  // false: undefined is not equal to 0
console.log(undefined >= 0);  // false: undefined converts to NaN in numeric contexts
console.log(undefined <= 0);  // false: same as above
// MDN on undefined: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined


// --- Strict Equality Checks --- 
console.log(2 == 2);    // true: both values are 2 (loose equality)
console.log("2" == 2);  // true: loose equality converts "2" to number 2 before comparing
console.log("2" === 2); // false: strict equality checks both value and type (string vs. number)
console.log(2 === 2);   // true: both value and type are the same (number)
