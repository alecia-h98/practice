console.log('Hello world');
console.log('The world has blessed me with another day and I am not prepared.');

const favoriteAnimals = [];

function animals(){

}


let favoriteCat = {
    name: 'Jynxies',
    Characteristics: 'Needy',
    CelebrityLookAlike: 'Stewie Griffin'
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
