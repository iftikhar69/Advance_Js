/**
 * Latest MDN Summaries:
 * - Function: "A reusable block of code designed to perform a specific task, optionally taking parameters and returning a value."
 * - return: "Exits a function and optionally sends a value back to the caller. Code after return is not executed."
 * - Parameters: "Variables defined in a function's declaration, used to receive input values when the function is called."
 * - Default Parameters: "Allow parameters to have a default value if no argument is provided or if undefined is passed."
 * - Template Literals: "String literals allowing embedded expressions, using backticks (`) and ${} for interpolation."
 * - undefined: "A primitive value automatically assigned to variables or parameters that have no value."
 * - Type Coercion: "Automatic conversion of values to another type (e.g., number to string) during operations like addition."
 * - Rest Parameters: "Allows a function to accept an indefinite number of arguments as an array."
 */

// Function to sum cart items using rest parameters
function sumCartItems(...prices) {
    if (!prices.length) {
        return 0; // Return 0 for empty input
    }
    return prices.reduce((total, price) => total + Number(price), 0); // Handle type coercion
}
console.log(sumCartItems(100, 200, 300)); // Outputs: 600
console.log(sumCartItems()); // Outputs: 0

// Function to format cart summary with template literal
function getCartSummary(itemCount, totalPrice = 0) {
    if (typeof itemCount !== 'number') {
        return "Invalid item count"; // Early return for invalid input
    }
    return `Cart has ${itemCount} item${itemCount === 1 ? '' : 's'} with total $${totalPrice}`;
}
console.log(getCartSummary(3, 600)); // Outputs: "Cart has 3 items with total $600"
console.log(getCartSummary(1)); // Outputs: "Cart has 1 item with total $0"

// Function to process product object
const product = {
    name: "Laptop",
    price: 999,
    inStock: true
};
function displayProduct({ name, price }) {
    if (!name || !price) {
        console.log("Missing product details");
        return; // Exit if properties are undefined
    }
    console.log(`Product: ${name}, Price: $${price}`);
}
displayProduct(product); // Outputs: "Product: Laptop, Price: $999"
displayProduct({ name: "Phone", price: 499 }); // Outputs: "Product: Phone, Price: $499"

// Function to get highest cart item price
function getHighestPrice(cartItems) {
    if (!Array.isArray(cartItems) || !cartItems.length) {
        return undefined; // Return undefined for invalid or empty array
    }
    return Math.max(...cartItems);
}
const cart = [150, 400, 250, 100];
console.log(getHighestPrice(cart)); // Outputs: 400
console.log(getHighestPrice([])); // Outputs: undefined
