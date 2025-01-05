console.log('Hello world');
console.log('The world has blessed me with another day and I am not prepared.');

//basic variable math
let a = 10
console.log(a);
let b = 7 * a;
console.log(b);

//math
let max = 57;
let actual = max - 13;
let percentage = actual / max;

//this is an open/empty array
const favoriteAnimals = [];

//this is a function
function animals(){


}

//
let favoriteCat = {
    name: 'Jynxies',
    characteristics: 'Needy',
    celebrityLookAlike: 'Stewie Griffin'
}

console.log(`This is my boy: ${favoriteCat}`);

let favoritePeople = [];

function topEightAdd(collection, name, characteristics, yearsKnown){
    const people = {
        name,
        characteristics,
        yearsKnown
    };
    collection.push(people);
    return people;
}

console.log('Added to friends list:', topEightAdd(favoritePeople, 'Quincee', 'Ride or die', 'eight'));
