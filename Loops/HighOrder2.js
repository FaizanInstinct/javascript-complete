// for in loop iterates over the enumerable properties of an object

// const languages = {
//     js: 'JavaScript',
//     py: 'Python',
//     rb: 'Ruby'
//   }
  
// for (const lang in languages) {
//     console.log(`${lang} is for ${languages[lang]}`);
// }

// const arr_languages = ['JavaScript', 'Python', 'Ruby'];

// for (const lang in arr_languages) {
//     console.log(`  ${arr_languages[lang]}`);
// }

const map = new Map()
map.set('name', 'Goku');
map.set('power', 'Super Saiyan');
map.set('universe', 'Universe 7');
map.set('rival', 'Vegeta');


for (const key in map) {
    console.log(`${key}:- ${map[key]}`);  // This will not work as expected because map is not an array it is an object and does not have numeric indices
    console.log(map.get('power'));
}