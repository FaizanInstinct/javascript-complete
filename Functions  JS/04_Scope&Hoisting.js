function one () {                           //Parent function

    let username = "Faizan"

    function two () {              //Child function
        let website= "cisco.com"
        console.log(website);
    }
    //  console.log(website);
     
    two(); 
         
    console.log(username);
}

one();

    if (true) {
        let age = 26
        if (age > 18) {
            let city = "Rawalpindi"
            console.log(city);
        }

        console.log(age);
        
    }




//+++++++++++++++++++++++++++++++++Two different ways of declaring functions++++++++++++++++++++++++++++++++++++++++++++++




    addOne();
    function addOne() {
        let num =10+1
        console.log(num);
    }

    
    
    const addTwo = function () {    //Holding the function within a variable
        let num = 10+2                             
        console.log(num);
    }

    addTwo();

  