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
console.log(percentage);

//conditional statements
const maximum = 15
if(maximum > 0){
    console.log('Happy Days!');
}

const A = 100
const B = 20
if(A<B){
    console.log("You're wrong, try again")
} else{
    console.log("You're going to do alright kid.")
}

if(A===B){
    console.log("Try again you bum")
} else if(A<B){
    console.log("Still a bum don't know how you got this?!")
} else{
    console.log("Thank GOD you have common sense..")
}

//Arrays
const favoriteFoods = ['tacos','pizza','gorilla meat'];
console.log(`These are my favorite foods: ${favoriteFoods}`);

//loops
for(let i=0; i>favoriteFoods.length; i++){

}

function rando(name){
    return alert(`${name} is not allowed on this site!! Abort mission`);
}

rando('Alecia');

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
