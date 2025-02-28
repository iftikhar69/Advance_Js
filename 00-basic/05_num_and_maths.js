/*
File: 05_num_and_maths.js

Description:
This file demonstrates number methods and math operations in JavaScript in a clear and practical way. It shows how to work with numbers—converting them to strings, formatting decimals, and using precision and locale formatting. The file also covers various Math object functions such as absolute value, rounding, ceiling, floor, min/max, and random number generation.

MDN References:
- Number: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
- Number.prototype.toString: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
- Number.prototype.toFixed: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
- Number.prototype.toPrecision: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision
- Number.prototype.toLocaleString: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
- Math: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

//length of the number
console.log(balance.toString().length)
console.log(balance.toFixed(2)) //number of zeros after the point

// const otherNumber = 3.8966 //123.99=>123 //32.3333=>23.3
const otherNumber = 3213.23  //3.21e+3

console.log(otherNumber.toPrecision(3)) //fixed total number

const hundreds  = 1000000
console.log(hundreds.toLocaleString('en-Ru'))  //hundred thousand ,hundred thousand

/*                                 MATHS                                   */

console.log("           the starting of maths portion          ")

console.log(Math)  //maths is an object
console.log(Math.abs(-4)); //absolute value :all negative number change to positive
console.log(Math.round(4.6)) //round off
console.log(Math.ceil(4.1)) //littel bit greater i will rise the value by one
console.log(Math.floor(4.2)) //littel bit of point value  it decrease value
console.log(Math.min(4,2,23,23,2,4,4))  //2 is minum value
console.log(Math.max(4,2,23,23,2,4,4))  //23

console.log((Math.random()*10)+1) //for no zero add one //in between 0 OR 1
console.log(Math.floor(Math.random()*10)+1) //floor round off to lowest value =>for single number requried

//A case where you need max and min
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)+ min )); // for requried 10 plus the min ,and plus one for value greater than zero
