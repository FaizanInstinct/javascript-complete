// for of loops // are used to iterate over iterable objects like arrays, strings, maps, sets, etc.

//["", "", ""] ,   [{},{}]

// for (const element of object) {
                                          // 
// }

// const myarray = ['Goku', 'Vegeta', 'Gohan', 'Piccolo', 'Frieza'];       //example of for of loop
// for (const fighter of myarray) {
//     console.log(`Fighter name is: ${fighter}`);
// }

// const greeting = 'Hello World';
// for (const greet of greeting) {
//     console.log(`Character: ${greet}`);
// }  

const map = new Map()
map.set('name', 'Goku');
map.set('power', 'Super Saiyan');
map.set('universe', 'Universe 7');
map.set('rival', 'Vegeta');

for (const [key, value] of map) {
    console.log(`${key}:- ${value}`);
    // console.log(map.get('power'));
    // console.log(map.get('name'));
    // console.log(map.get('universe'));
    // console.log(map.get('rival'));
    
    
}

const gameObject = {
    game1: 'Call of Duty',
    game2: 'FIFA',
    game3: 'Fortnite',
    game4: 'Minecraft',
    game5: 'GTA',
};

for (const [key, value] of Object.entries(gameObject)) {           //Object.entries() converts the object into an array of key-value pairs
    console.log(`${key}: ${value}`);

 }  

