let firstName = `Faizan`
let lastName = `Ahmed`
let fullName = firstName + " " + lastName
console.log(fullName); 


console.log(`My first name is ${firstName} and last name is ${lastName}`);

// Comparison between the Old syntax of writing strings in javascript 

let name1 = "Phoenix"
let age = 26

console.log("My name is ",name1, "and my age is ",age);
console.log(`My name is ${name1} and my age is ${age}`);

//Anotehr way to declare a string this will be very helpful and uselful when we will deal with the objects and methods later

let gameName= "Doom Eternal"
console.log(gameName);                 //Regular way

let gameName2 = new String (`Doom Eternal`)
console.log(gameName2);

// Accessing methods of strings

console.log(gameName2[2])
console.log(gameName2.length) 

console.log(gameName2.indexOf('m'))
console.log(gameName2.charAt(5))

let newGame = gameName2.substring(0,4)      //for dividing a string
console.log(newGame);

let newGame2 = gameName2.slice(-6,8)             //Can accept negative values
console.log(newGame2);

const anotherGame = `   Dota2    `
console.log(anotherGame);
console.log(anotherGame.trim());           //Removed the white spaces 

const Url = `https://www.google.com#50contuk` 
console.log(Url.replace('#50cont', '.'));
console.log(Url.includes('facebook'));

console.log(Url.split('.'));    //Splitting the string to an array 
console.log(Url.toUpperCase());        //Converting the string to uppercase 

console.log(Url.lastIndexOf(``));

