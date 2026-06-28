// console.log(5>10);
// console.log(10>5);
// console.log(1<=1);
// console.log(10!=1);            //This is the comparison between same data types (Best approach)

// console.log("2">10);
// console.log(typeof "2");
// console.log(2==3);
// console.log("10"===10);



//Best practice is to always compare the same data types and avoid comparing diffferent data types to avoid confusion.

// some more comparisons

console.log(null > 0);
console.log(null >=0); // In this prompt nul is converted to 0 by JS 

// The result is different becasue >< operators or comparison check are treated differently than == or ===(strictly equal)

//===(strictly equal or strict check) it not only check the values but also their data types

console.log("2"==2);
console.log("2"===2);
console.log(2===2);
console.log("Ali">"Zain");
console.log("Ali" < "f");
