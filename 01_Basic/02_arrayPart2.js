
// Defining two separate arrays of heroes.
const marvel_heros = ["thor ", "Ironman", "spiderman"];
const dc_heros = [`super man`, "flash", "batman"];

// Method 1 (commented):
// Using push() to add dc_heros as a single element results in a nested array.
// Example: marvel_heros.push(dc_heros) would result in a structure where dc_heros is embedded within marvel_heros.
// console.log(marvel_heros[3][1]);

console.log(marvel_heros);
console.log(dc_heros);
console.log(typeof dc_heros);  // "object" (arrays are objects)
console.log(typeof marvel_heros); // "object"

// Method 2 (commented):
// Using concat() to merge two arrays into one.
// const allheros = marvel_heros.concat(dc_heros);
// console.log(allheros);

// Method 3: Merging arrays using the spread operator.
// Latest MDN summary: "The spread operator allows an iterable such as an array to be expanded in places where zero or more arguments or elements are expected."
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

// Demonstrating array flattening:
// Creating an array with nested arrays.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// flat(): "Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth."
const real_array = another_array.flat(Infinity);
console.log(real_array);

// Using Array utility methods:

// Array.isArray(): "Determines whether the passed value is an array."
console.log(Array.isArray("iftilhar")); // false: "iftilhar" is a string.

// Array.from(): "Creates a new, shallow-copied Array instance from an array-like or iterable object."
console.log(Array.from("iftilhar")); // Converts string to an array of characters.

// Attempting Array.from() on a non-iterable object results in an empty set.
console.log(Array.from({ name: "iftikher" })); // No result, returns an empty array.

// Using Array.of(): "Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments."
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
