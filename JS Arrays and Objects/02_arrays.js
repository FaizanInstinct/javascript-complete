"use strict";

const Dbz_heroes = [                           
    {
        name: "Goku",
        power: 10000           // OBJECT 1
    },
    {
        name: "Gohan",         // OBJECT 2                   
        power: 9000
    },
    {
        name: "Vegeta",
        power: 8000            // OBJECT 3
    },
]

const naruto_heroes = [
    {
        name: "Naruto",
        power: 10000
    },
    {
        name: "Sasuke",
        power: 9000
    },
    {
        name: "Hinata",
        power: 8000
    },
]

const BC_heroes = [
    {
        name: "Asta",
        power: 10000
    },
    {
        name: "Yuno",
        power: 9000
    },
    {
        name: "yami",
        power: 8000
    },
]

//  Dbz_heroes.push(naruto_heroes , BC_heroes);                   //Push method add elements to an existing array of any data types
//  console.log(Dbz_heroes);

  //let anime_Heroes = Dbz_heroes.concat(naruto_heroes, BC_heroes);           //concat method add elements to an existing array of any data types
  //console.log(anime_Heroes);


   let anime_Heroes2 = [...Dbz_heroes, ...naruto_heroes, ...BC_heroes];      //spread operator add elements to an existing array of any data types
   console.log(anime_Heroes2); 


 let newArray = [1,2,3, [4,5,6] ,  7,8, [5,6, [7]]];

 console.log(newArray);

 console.log(newArray.flat(Infinity));          // The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

 console.log(Array.isArray("faizan"));       //isArray method checks whether the element exists in the array or not and gives the answer back in Boolean (true or false)

 console.log(Array.from("faizan"));          //from method include and converts an array into a string type
 console.log(Array.from("faizan").reverse());      //reverse method reverses an array

 console.log(Array.from({
     name: "faizan",}));                 //Inetresting feature of array will be discussed later


let Goku_power = 10000
let Gohan_power = 90000
let Vegeta_power = 80000

console.log(`Goku power is ${Goku_power} and Gohan power is ${Gohan_power} and Vegeta power is ${Vegeta_power}`);


console.log(Array.of(Goku_power, Gohan_power, Vegeta_power));     



