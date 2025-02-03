import generateName from 'sillyname';
import superheroes from 'superheroes';

const name = generateName();
const superheroNames = superheroes; // Assuming it's an array

// Generate a random superhero name
const superheroName = superheroNames[Math.floor(Math.random() * superheroNames.length)];

console.log(`I am ${name} and I am ${superheroName}`);
