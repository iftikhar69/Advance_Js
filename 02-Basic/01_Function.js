/**
 * Latest MDN Summaries:
 * - Function: "A reusable block of code designed to perform a specific task, optionally taking parameters and returning a value."
 * - return: "Exits a function and optionally sends a value back to the caller. Code after return is not executed."
 * - Parameters: "Variables defined in a function's declaration, used to receive input values when the function is called."
 * - Default Parameters: "Allow parameters to have a default value if no argument is provided or if undefined is passed."
 * - Template Literals: "String literals allowing embedded expressions, using backticks (`) and ${} for interpolation."
 * - undefined: "A primitive value automatically assigned to variables or parameters that have no value."
 * - Type Coercion: "Automatic conversion of values to another type (e.g., number to string) during operations like addition."
 * - const: "Declares a block-scoped constant whose value cannot be reassigned after initialization."
 * - Scope: "Determines the accessibility of variables. Includes global scope, function scope, and block scope."
 */

// 
/*
function addTwoNumber(num1,num2){
    console.log(num1+num2)
}
addTwoNumber(2,3)
*/

// function addStringNumber(num1,str){
//     console.log(num1,str)
// }
// addStringNumber(1,"1")
// addStringNumber(1,2)
// addStringNumber(3,null)

//returning of function value
function add(a,b){
    console.log(a+b)
}
add(2,4)
add(1,"2")
const result1 = add(2,3)
console.log("result:",result1) //undefine cause no value return 

function add2(a,b){
//    let result = a+b
//    return result   /* OR */
return a+b
   console.log("mew") /* unrechable below return */
}
const result = add2(2,2)
console.log("result",result)


function loginUserMessage(userName){
    
    return `${userName} just logged in`
}
// console.log(loginUserMessage("iftikhar"))
console.log(loginUserMessage(""))  /* Just loggin */
console.log(loginUserMessage())


function loginUserMessage(userName){
    // if(userName === undefined){
    //     console.log("please enter a username")
    //     return
    // }
    if(!userName){
        console.log("please enter a username")
        return
    }
    return `${userName} just logged in`
}
console.log(loginUserMessage())



function loginUserMessage(userName ="sam"){
    // if(userName === undefined){
    //     console.log("please enter a username")
    //     return
    // }
    if(!userName){
        console.log("please enter a username")
        return
    }
    return `${userName} just logged in`
}
console.log(loginUserMessage("ali")) /* If empty sam */
