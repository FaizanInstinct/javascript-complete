// If condition

// if (true) {
//     console.log("Condition is true");
// }

// if (false) {
//     console.log("Condition is true");
// }
// console.log("The condition above is false so the code inside wont be executed");


// if (2==2){
//     console.log("Condition is true");
// }
    
// if (2!=1) {
//     console.log("Condition is true");
// }


// if (2>1) {
//     console.log("Condition is true");
// }

// if (2=="2") {
//     console.log("Condition is true");
// }

// if (2==="2") {                              //condition checking as well as type checking
//     console.log("Condition is true");
// }

// let balance = 100000

// if (balance < 90000){
//     console.log("Transaction for car successful");
    
// }
// else {
//     console.log("Transaction for car failed");
// }


// let temperature = 35

// if (temperature <30){
//     console.log("it is hot outside");
    
// }
// else if (temperature >25){
//     console.log("it is warm outside");
// }
// else if (temperature >20){
//     console.log("it is normal outside");
// }
// else {
//     console.log("it is cold outside");
// }

// const userLoggedIn = true
// const debitCard = false

// if (userLoggedIn && debitCard) {             //&& checks both the conditions and both must be true
//     console.log("Allow user to buy course");
// }
// else {
//     console.log("Dont allow user to buy course");
// }

let userLoggedIn = true 
let debitCard = false

if (userLoggedIn || debitCard) {             //|| checks both the conditions and one must be true
    console.log("Allow user to buy course");
}
else {
    console.log("Dont allow user to buy course");
}