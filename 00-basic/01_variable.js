/*
File: 01_variable.js

Description:
This file demonstrates how to declare and work with variables in JavaScript using modern best practices. It uses `const` for values that should never change and `let` for mutable values. It also shows how to output values using console.log and console.table, and illustrates block scoping. For more details, check out these MDN references:
- const: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
- let: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
- console.table: https://developer.mozilla.org/en-US/docs/Web/API/Console/table
- Block Scope: https://developer.mozilla.org/en-US/docs/Glossary/Block_scope
*/

// Declaring constants
const accountId = 13123;  // once writen the value become constant, cannot be changed
//example: accountId = 2   not allowed

// Declaring variables using `let`
let accountEmail = "iftilarali@gmail.com";  
let accountPassword = "12234";  
let accountCity = "Gilgit";  // 

// Declaring an undefined variable
let accountState;  // Fixed typo: "accontstate" → "accountState"

// Updating mutable variables
// accountId = 2;   // ❌ Not allowed (will throw an error)
accountEmail = "hec.gov";
accountPassword = "1233";
accountCity = "Hunza";

// Output values
console.log(accountCity);
console.log(accountPassword);
console.log(accountEmail);
console.log(accountId);

// Display variables in a table format
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// Scope explanation: `var` should be avoided due to its functional scope issue
{
    // Block scope example (let & const stay inside the block)
    let blockScopedVar = "I'm inside a block";
    console.log(blockScopedVar);  // ✅ Accessible here
}

// console.log(blockScopedVar); // ❌ Error: blockScopedVar is not defined
