function addToCart (var1,var2,var3, ...price) {
    console.log(`Added to cart ` );
    return var1, var2, var3
}

console.log(addToCart(5000,1000,2000,3000))


function addToCart (...price) {
    console.log(`Added to cart ` );
    return price
}

console.log(addToCart(5000,1000,2000,3000))  //Destructuring array as arguments within the function

let user= {
     name: "Faizan",
     age: 26
 }

//  function someUser(newUser){   
//      console.log(`My name is ${newUser.name} and my age is ${newUser.age}`);  //Destructuring object as arguments within the function
//  }
//      someUser(user)


     function someUser(newUser){   
        console.log(`My name is ${newUser.name} and my age is ${newUser.age}`);  //Destructuring object as arguments within the function
    }
        someUser({
            name: "Instinct",
            age: 22
        })

// let cartArray = [2000,4000,5000,1000,3000,6000]

//  function newArray (cartArray){
//      for (let i = 0; i < cartArray.length; i++) {
//          console.log(cartArray[i]);
        
//      }
//  }
//  newArray(cartArray);


let newArray = new Array (2000,400,100,5000)

// function secondvalue (someArray){

//     return someArray[1]
// }

// console.log(secondvalue(newArray));

function secondvalue (someArray){

    return someArray[1]
}

console.log(secondvalue([2000,4000,100,5000]));


