// what is scope within a program ?


{
    //THE CURLY BRACKETS ARE THE SCOPE
}

// Our conditionals, functions, and loops are all within the scope of the curly brackets.

const a = 10;
let b = 20;
var c = 30;

    if (true) {        //This is local scope
        
        // const a = 100;
        // let b = 200;
        // var c = 300;

        console.log(a);
        console.log(b);
        console.log(c);
        
   
    }



// console.log(a);
// console.log(b);
// console.log(c);



