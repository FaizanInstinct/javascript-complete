"use strict";
//methods to decalare dates
let currDate = new Date ()
// console.log(currDate);                                   //Prints the current date and time
// console.log(currDate.toString());                        //same as (currDate)
// console.log(currDate.toLocaleString());                  // Organized as 9/23/2014
// console.log(currDate.toLocaleTimeString());        //Just outputs the current time and not date, month and year
// console.log(currDate.toJSON());                    //Gives data in JSON form (unreadable)
// console.log(currDate.toTimeString());                 //Time including the zone
// console.log(currDate.toUTCString());             //Time in UTC format
// console.log(currDate.valueOf());                   //Time in milliseconds
// console.log(currDate.getFullYear());            //Gives the year
// console.log(currDate.getMonth());              //Gives the month
// console.log(currDate.getDate());               //Gives the date
// console.log(currDate.getDay());                //Gives the day
// console.log(currDate.getHours());              //Gives the hours
// console.log(currDate.getMinutes());            //Gives the minutes
// console.log(currDate.getSeconds());            //Gives the seconds
// console.log(currDate.getTime());              //Gives the time in milliseconds

console.log(typeof currDate);
console.log(typeof currDate.toLocaleString());        //Important to note that when we are these methods the date object is being converted into string

let newDate = new Date (2024, 6, 23)
console.log(newDate.toLocaleString());

let anotherDate = new Date (`09-23-2024`)
console.log(anotherDate.toLocaleString());

let timeStamp = Date.now()

console.log(timeStamp);      //value in milliseconds
console.log(anotherDate.getTime());
console.log(Math.round(Date.now()/1000));

let newDate1 = new Date ()
console.log(newDate1.getMonth()+1);

//localestring can be more customized since it manipulates the object and we can put values of our choice according to our need 

newDate1.toLocaleString(`default`, {
    weekday : `long`,
})







      
