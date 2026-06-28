// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");


// function greet() {          //function declaration
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// }

// greet()  //greet is the function reference and () is the function calling

    function sum (number1, number2) {    /*function declaration and giving parameters*/ 
     let sum = number1 + number2
     console.log(sum);
    
     return sum;
    
 }
    sum(10, 20)       /*function calling and giving arguments*/


function loginMessage(username="Guest") {

    if (!username) {                    //Ternary operator is a conditional statement
       console.log("Please enter a username");
        return
    }

    return `Welcome ${username}`;
}

console.log(loginMessage(`faizan`));



