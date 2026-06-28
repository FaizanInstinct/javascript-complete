// for each loops // are used to iterate over arrays and perform operations on each element.

// const ZFighters = ['Goku', 'Vegeta', 'Gohan', 'Piccolo'];
// ZFighters.forEach( (fighter, index , arr) =>  {                                                 // () => {} is a callback function and also called a higher-order function because it takes a function as an argument and no name is given to the function
//     // console.log(`Fighter name at index ${index} is: ${fighter} `, arr);  // This will print the fighter name and its index in the array
//     // console.log(`Fighter name is: ${fighter}`);  // This will print the fighter name
// });

// function printFighter(fighter, index) {
//     console.log(`Fighter name at index ${index} is: ${fighter}`);
// }

// ZFighters.forEach(printFighter); // This will print the fighter name and its index in the array using a named function



const Villains = [
    {name: 'Frieza',
        power: 'Destruction',
        universe: 'Universe 7',
    }
    , {name: 'Cell',
        power: 'Absorption',
        universe: 'Universe 7',
    }
    , {name: 'Majin Buu',
        power: 'Regeneration',
        universe: 'Universe 7',
    }
]

Villains.forEach((villain, index) => {
    console.log(`Villain name at index ${index} is: ${villain.name}`);
    console.log(`Villain power is: ${villain.power}`);
    console.log(`Villain universe is: ${villain.universe}`);
})