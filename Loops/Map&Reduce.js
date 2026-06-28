// const ZFighters = ['Goku', 'Vegeta', 'Gohan', 'Piccolo'];
// let result = ZFighters.forEach( (fighter, index , arr) =>  {                     // () => {} is a callback function and also called a higher-order function because it takes a function as an argument and no name is given to the function
//      console.log(`Fighter name at index ${index} is: ${fighter} `)
//      return fighter;                                                            // This will not return anything because forEach does not return anything
// });                                                                             // This will print the fighter name and its index in the array

// console.log(`Result of forEach: ${result}`);                                   // This will print undefined because forEach does not return anything


//Filter method

// let numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbs = numbs.filter((num) => {                                      //filter method will return the elements that are true
//     return num % 2 === 0 ;                                                   // This will return only even numbers
// });
// let oddNumbs = numbs.filter((num) => {
//     return num % 2 === 1 ;                                                  // This will return only odd numbers
// });
// console.log(`Even numbers are: ${evenNumbs} `);                            // This will print [2, 4, 6, 8, 10]
// console.log(`Odd numbers are: ${oddNumbs} `);                              // This will print [1, 3, 5, 7, 9]




// // doing same with forEach
// let evenNumbs2 = [];
// numbs.forEach((num) => {
//     if (num % 2 === 0) {
//         evenNumbs2.push(num);                                               // This will push only even numbers to the array
//     }
// });
// console.log(`Even numbers are: ${evenNumbs2} `);                            // This will print [2, 4, 6, 8, 10]
// let oddNumbs2 = [];
// numbs.forEach((num) => {
//     if (num % 2 === 1) {
//         oddNumbs2.push(num);                                                // This will push only odd numbers to the array
//     }
// });
// console.log(`Odd numbers are: ${oddNumbs2} `);                              // This will print [1, 3, 5, 7, 9]



