"use strict";

//alert(3+3)      //We are using node js and not browser, node handles the alert function differently than the browser...

let name="Faizan"      //Type = string
let age= 26              // Type= number or you can integer type 
let LoginStatus = true     // Type= Boolean
let state=null

/* ranges:
--number = 2^53
--srring= strings could be written in either single quotes or double but writing double is prefered
--Boolean= Yes or No means true or false
--Null value= Its a standalone value its a type
--Undefined = value is not assigned
--symbol: Used for uniqueness
--Objects   */



let Student= 
{
   Stdname: "faizan",
   StdID: 16427,
   StdCcurse: "Software Engineering",
   StdCampus: "VIBD01",
   Enrolled: true,
};

console.log(Student.StdID)
console.log(Student.Stdname)
console.log(Student.Enrolled);


