// +++++++++++++++++++++++++++++++++++++++++ THIS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let user={
//     username: "Faizan",
//     age: 26,
//     loginMessage: function () {
//         // console.log(`Welcome ${this.username}`);                //this keyword is used to access the properties of the object and it means the current context
//         console.log(this);
        
//     }

// }
// user.loginMessage();
// user.username = "Faizan Ahmed"
// user.loginMessage();


// let user={
//     username: "Faizan",
//     age: 26,
//     loginMessage: function () {
//         console.log(`Welcome ${this.username}`);                //this keyword is used to access the properties of the object and it means the current context
//         console.log(this);
        
//     }

// }
// // user.loginMessage();
// // user.username = "Faizan Ahmed"
// // user.loginMessage();
// console.log(this);




//++++++++++++++++++++++++++++++++++++++++++ ARROW FUNCTION ++++++++++++++++++++++++++++++++++++++++++++++++++++

// function character(){
//     console.log(this);
// }
// character();

// const character2 = function() {
//     console.log(this);
// }
// character2();


// let user1 ={
//     rc :"12334",
//     age : 26,
//  character:  () => {                        //Syntax of arrow function
//     console.log(user1)                
// }

// }
// user1.character()

// WAYS TO WRITE AN ARROW FUNCTION

// () => {
//     return
// }

// const addtwonums = (num1, num2) => {           //explicit return syntax 
//     return num1 + num2
// }
// console.log(addtwonums(2,3));

// addthreenums = (num1,num2,num3) => (num1 + num2 + num3)      //implicit return syntax

// console.log(addthreenums(2,3,4));


username = () => ({user: "Faizan"})
console.log(username());




