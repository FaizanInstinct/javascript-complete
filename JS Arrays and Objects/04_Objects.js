//Singleton object
// let galaUser = new Object({
    
// })

// let galaUser2 = {

// }

// console.log(galaUser);
// console.log(galaUser2);

let galaUser3=                        
{
    name:
    {
       fullname: 
       {
            firstname: "Son",               //Nested object example
            lastname: "Goku",
       }
    },
    name2: 
    {
        fullname: 
        {
            firstname: "Son",
            lastname: "Gohan",
        }
    },

    age : 26,
    email : "faizan@g.com",
    phone: "1234567890",

}

 console.log(galaUser3.name.fullname.firstname + " " + galaUser3.name.fullname.lastname);
 console.log(galaUser3.name2.fullname);
 console.log(`My name is ${galaUser3.name.fullname} and my age is ${galaUser3.age} and my email is ${galaUser3.email}`);     //Unique case
 console.log(`My name is ${galaUser3.name.fullname.firstname} ${galaUser3.name.fullname.lastname} and my age is ${galaUser3.age} and my email is ${galaUser3.email}`);

let Titanattr1 = {name : "Godzilla"}                   //name is the key and Godzilla is the value
let Titanattr2 = {Power: "Atomic Pulse"}
let titanattr3 = {Nature: "Protector"}

 let titanStats = Object.assign({},Titanattr1,Titanattr2,titanattr3)       //assign method is used to merge two or more objects
 console.log(titanStats);                  


let titanStats2 = {...Titanattr1,...Titanattr2,...titanattr3}           //spread operator is used to merge two or more objects
console.log(titanStats2);

//important methods to be discussed
console.log(Object.keys(titanStats2))
console.log(Object.values(titanStats2))
console.log(Object.entries(titanStats2));
console.log(titanStats2.hasOwnProperty("Weight"));
