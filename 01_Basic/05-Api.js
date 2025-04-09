/**
 * Latest MDN Summaries:
 * - JSON (JavaScript Object Notation): "A lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. Used primarily to transmit data between a server and a web application."
 */

// API response is in JSON format, and JSON is based on JavaScript object notation

const jsonData = `{
    "name": "iftikhar",
    "lastName": "ali"
}`;

// Parsing the JSON string into a JavaScript object
const parsedData = JSON.parse(jsonData);

console.log(parsedData.name);      // Output: "iftikhar"
console.log(parsedData.lastName);  // Output: "ali"
