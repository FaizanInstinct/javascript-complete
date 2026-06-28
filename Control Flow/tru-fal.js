//discussion about truthy and falsy values
//truthy values are values that are true
//falsy values are values that are false

let userEmail = undefined

if (userEmail) {
    console.log("Email exists");
} else {
    console.log("Email does not exist");
}

// Truthy values  = "0", "false", "   " , [], {}, function () {} (empty function)
// falsy values = 0, "", undefined, null, NaN, false, BigInt 0n , -0


// let array =[]// if (array.length === 0) {
//     console.log("Array is empty");
// }

// let emptyobject = {}
// if (Object.keys(emptyobject).length === 0) {
//     console.log("Object is empty");
// }
 

//nullish coalescing operator (??)

let value;
// value = 5 ?? 10;
// value = null ?? 10;  // value = false ?? 10; // false is falsy, but not null or undefined, so it returns false
// value = undefined ?? 10; // undefined is falsy, so it returns 10
value = null ?? 10 ?? 20
console.log(value); 


//ternary operator
// condition ? expressionIfTrue : expressionIfFalse

const teaprice = 100;
teaprice > 50 ? console.log("Tea is expensive") : console.log("Tea is cheap");