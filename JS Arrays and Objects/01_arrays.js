//We use arrays to store multiple values in a single variable
//Ways to declare and use an array

const myArray = [0,1,2,3 , false , `faizan`]            //Array can be consists of different datatypes and not just one 
console.log(myArray);

const myArray2 = new Array (1,2,3,4)        //Using new keyword to declare an array
const heroes = new Array (`Goku, midoriya, Asta`)

//array methods
let newArray = new Array (0,1,2,3,4,5)
 newArray.push(6,7,8,9,10,);               //push method add elements to an existing array of any data types
 console.log(newArray);
 newArray.pop()                            //pop method removes the last elemnt of an array
 console.log(newArray);
 newArray.unshift("faizan")             //adds an element to the very start of the array
 console.log(newArray);
 
 newArray.shift()                       //removes the first element of an array 
 console.log(newArray);
 console.log(newArray.includes(10));        //include method checks whether the element exists in the array or not and gives the answer back in Boolean (true or false)
 console.log(newArray.indexOf(11));      //To check the index of an element

 const newArray2 = newArray.join()             //Join method include and converts an array into a string type
 console.log(newArray2);



//Important: slice and splice method in arrays

console.log(newArray.slice(1 ,3));        //slice method include and converts an array into a string type
console.log(newArray);                          //original array didnt changed after using the slice method 
console.log(newArray.splice(1, 3));
console.log(newArray);                         //original array is maniplutaed (halved) after usin gthe splice method

console.log(newArray.reverse());               //reverse method reverses an array







