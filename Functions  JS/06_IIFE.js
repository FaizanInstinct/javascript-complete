// function addtwo(num1,num2) {
//     console.log(num1 + num2);
//     return num1 + num2
// }

// addtwo(2,3);


(function addtwo(num1,num2) {          //immedately invoked function expression these are used to avoid polluting the global scope
    console.log(num1 + num2);           //We have to put a semicolon at the end of the function to make it work
    return num1 + num2
}
)(2,3);


(DBconnection = () => {
    console.log("DB connected");
    return
}
)();

(DBconnection2 = (name) => (
    console.log(`DB two connected ${name}`))

)("Faizan");


