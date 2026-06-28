
// Objects are used to store data in key value pairs
//there are two types of objects singleton and literal


let mySymbol = Symbol("my symbol")           //Symbol is used to create a unique identifier

let webUser = 
{
    firstName: "faizan",
    "lastname" : "Ahmed",
    age: 26,
    [mySymbol] : "my symbol2",  //Symbol is used to create a unique identifier
    city: "Rawalpindi",
    email : "faizan@g.com",
    phone: "1234567890",
    isLoggein: true,
    lastLoginDays: ["Monday","Saturday", "Sunday"],
}
console.table(webUser)
 console.log(webUser["email"]);
 console.log(webUser["age"]);
 console.log(webUser.firstName);
 console.log(webUser.lastname);
 console.log( webUser[mySymbol]);
 console.log(typeof webUser[mySymbol]);

 webUser.email = "faizan@cisco.com"

 console.log(webUser);
 //Object.freeze(webUser)   //This will make the object immutable

 webUser.email = "faizan@hp.com"
 console.log(webUser);
//This is due to the fact that in strict mode if we try to modify a frozen object, it will throw an error but in non strict mode it will just ignore the assignment and the object will remain unchanged.


webUser.greeting = function(){
    
    console.log(`Hello ${this.firstName} ${this.lastname}`);
};
webUser.greeting();

////////////////////////////////////////////////////////////////////