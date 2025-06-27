 //-------------------------------NUMBERS PORTION--------------------------------------

let score = 200
 console.log(score);             //Here score is a number but is not explicitly defined as a number in JS

 let balance = new Number(300)
 console.log(balance);
 console.log(typeof balance.toString());             //converting number to string and after that you can also access methods of strings
 console.log(balance.toFixed(3));          //Showing decimal value

 const newNumber = 1123.97
 console.log(newNumber.toPrecision(4));

 let bigNumber = 100000
 console.log(bigNumber);

 console.log(bigNumber.toLocaleString());
 console.log(bigNumber.toLocaleString(`en-IN`));

//--------------------------------- MATHS PORTION --------------------------------------


console.log(Math.max(1,2,3,4,5));
console.log(Math.min(5,2,8,7));
console.log(Math.sqrt(25));
console.log(Math.log(10));
console.log(Math.ceil(23.1));
console.log(Math.floor(23.9));
console.log(Math.round(10.5));
console.log(Math.cos(1));
console.log(Math.pow(10,5));
console.log(Math.tan(5));
console.log(Math.abs(-6));         //Changing only negative values to positive


//Learning about random() method in math

console.log(Math.random());    //The random method will by default generate values between 0 and 1 

//Now what if we want numebr ranging from 1 to 6 (aka a dice roll)

const min = 1
const max = 6

console.log((Math.floor(Math.random() * max-min+1)+min))