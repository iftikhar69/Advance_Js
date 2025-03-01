//Dates

let myDate = new Date()
// //methodes to print date
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)  //object

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,25,5,3)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleDateString())


let myCreatedDate2 = new Date("01-14-2023");  //2023-01-14 or yy-mm-dd
console.log(myCreatedDate2.toLocaleString());


// let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate2.getTime())
// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())
console.log(newDate.getSeconds())

// `${newDate.getDay()},and the time is`

newDate.toLocaleDateString('default',{
    weekday:"long"
    // timeZone:""
})

// Latest MDN Reference for Date Object:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


 
