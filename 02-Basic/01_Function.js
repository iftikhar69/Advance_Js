/**
 * Latest MDN Summaries:
 * - Function: "A reusable block of code designed to perform a specific task, optionally taking parameters and returning a value."
 * - return: "Exits a function and optionally sends a value back to the caller. Code after return is not executed."
 * - Parameters: "Variables defined in a function's declaration, used to receive input values when the function is called."
 * - Default Parameters: "Allow parameters to have a default value if no argument is provided or if undefined is passed."
 * - Template Literals: "String literals allowing embedded expressions, using backticks (`) and ${} for interpolation."
 * - undefined: "A primitive value automatically assigned to variables or parameters that have no value."
 * - Type Coercion: "Automatic conversion of values to another type (e.g., number to string) during operations like addition."
 */

// Basic function to calculate discount (MDN: "A reusable block of code")
function calculateDiscount(price, discount) {
    console.log(price - discount); // Type coercion may occur if inputs are strings
}
calculateDiscount(100, 20); // Outputs: 80

// Function with mixed types
function logUserInput(id, input) {
    console.log(id, input); // Logs parameters as provided
}
logUserInput(1, "submit"); // Outputs: 1 "submit"
logUserInput(2, 42); // Outputs: 2 42
logUserInput(3, null); // Outputs: 3 null

// Function without return
function combineValues(val1, val2) {
    console.log(val1 + val2); // Type coercion: number + string may concatenate
}
combineValues(10, 5); // Outputs: 15
combineValues(10, "5"); // Outputs: "105"
const combined = combineValues(3, 4); // No return, so combined is undefined
console.log("combined:", combined); // Outputs: combined: undefined

// Function with return
function multiplyValues(a, b) {
    return a * b; // Returns product, code below is unreachable
    console.log("done"); // Unreachable
}
const product = multiplyValues(4, 5);
console.log("product:", product); // Outputs: product: 20

// Function with template literal
function welcomeMessage(user) {
    return `${user} has joined the session`; // Interpolates user
}
console.log(welcomeMessage("Emma")); // Outputs: "Emma has joined the session"
console.log(welcomeMessage()); // Outputs: "undefined has joined the session"

// Function with validation
function welcomeMessage(user) {
    if (!user) { // Checks for falsy values (undefined, empty string)
        console.log("Please provide a user name");
        return; // Exits early
    }
    return `${user} has joined the session`;
}
console.log(welcomeMessage("Liam")); // Outputs: "Liam has joined the session"
console.log(welcomeMessage()); // Outputs: "Please provide a user name"

// Function with default parameter
function welcomeMessage(user = "Guest") {
    if (!user) {
        console.log("Please provide a user name");
        return;
    }
    return `${user} has joined the session`;
}
console.log(welcomeMessage("Olivia")); // Outputs: "Olivia has joined the session"
console.log(welcomeMessage()); // Outputs: "Guest has joined the session"
