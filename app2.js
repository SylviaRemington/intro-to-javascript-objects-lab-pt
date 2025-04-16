//This is a page with all the answers done thus far. Just more readable for review and instruction.

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }

  console.dir(pokemon, { maxArrayLength: null })


//Exercise 1 Completed Below:
//Assignment: When you’ve completed your inspection of the data, you can use console.log() to log JUST 
// the name of the Pokemon with the number 59 using the index of the Pokemon in the array. 
console.log(pokemon[59].name);//index #59 of the array is actually pokemon 60, which is Poliwag. I believe this is the correct one they are looking for
console.log(pokemon[58].name);//is actually pokemon 59 at index 58 of the array, which is Arcanine
// QUESTION - Which one is the assignment asking me for? The index or the actual pokemon number?

// ---------------------------------------------------------------------------------------------------------

// Exercise 2
// game.party = all the Pokémon on my team (ones I've caught)
// game.gyms = all the battles faced or checkpoints (faced or will face). Note boolean property for each.
// game.items = all the stuff I'm carrying (like Poké Balls, potions, etc.)

//Exercise 2 Completed Below, asking to run the following:
console.log(game)

//after console logging console.log(game), it shows this: {party: Array(0), gyms: Array(8), items: Array(3)}
// see an empty party array [] --It will eventually hold all the Pokemon objects I've caught, and retrieved from pokemon array from exercise1
// see 8 gym objects in one array (an array of objects)
// see 3 items objects in one array (an array of objects)

// ---------------------------------------------------------------------------------------------------------

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?

This question is asking me to:
Add a new key-value pair to the game object.
The key (property name) should be "difficulty".
The value should be a difficulty level I choose, like "Easy", "Med", or "Hard".
Solve Exercise 3 here:
*/

//Exercise 3 Completed Below:
game.difficulty = "Easy"; //This is one way to do it. However, I wanted to re-create what I had above. Below is another way to do it.
console.log(game); //to show that it was added to the game
console.log(game.difficulty); //just to see the value of difficulty by itself

//Below is another way to create it with three levels, that can be used when you jump from level1 to level2, and then to level3.
// game.difficulty = [{level1: "Easy"}, {level2: "Med"}, {level3: "Hard"} ];//re-creating what I typed above to add to game.
//or I could do the following:
game.difficulty = ["Easy", "Med", "Hard"];
console.log(game); //to show that it was added to the game
console.log(game.difficulty); //just to see the game difficulty array

// ---------------------------------------------------------------------------------------------------------

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?
Solve Exercise 4 here:
*/
//Exercise 4 Completed Below:
game.party.push(pokemon[24]);
console.log(game.party);//just showing what was added to the party object section of game
console.log(game);//showing the full game and making sure it was added where it was supposed to be added
//Alara, what would be best to console log for this one? 

// ---------------------------------------------------------------------------------------------------------

//Exercise 5 Completed Below:
game.party.unshift(pokemon[0]);
console.log(game.party);
//I added 'Bulbasaur' to the beginning of the array before Pikachu. Also, this pokemon has a different attribute type called 'grass'.
// The above created this in the console log:
// 0: {number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true}
// 1: {number: 25, name: 'Pikachu', type: 'electric', hp: 35, starter: true}
// length: 2

game.party.splice(1, 0, pokemon[6]);
console.log(game.party);
//I spliced 'Squirtle' in between Bulb.. and Pikachu. Also, this pokemon has a different type called 'water'.
//The above created this in the console log:
// 0: {number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true}
// 1: {number: 7, name: 'Squirtle', type: 'water', hp: 44, starter: true}
// 2: {number: 25, name: 'Pikachu', type: 'electric', hp: 35, starter: true}
// length: 3

game.party = [pokemon[3], ...game.party];
console.log(game.party);
//I wanted to use the spread array method to add this pokemon 'Charmander'. This pokemon has a different type called 'fire'.
//The above created this in the console log:
// 0: {number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true}
// 1: {number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true}
// 2: {number: 7, name: 'Squirtle', type: 'water', hp: 44, starter: true}
// 3: {number: 25, name: 'Pikachu', type: 'electric', hp: 35, starter: true}
// length: 4

// ---------------------------------------------------------------------------------------------------------

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.

This exercise wants me to:
1. Look through the gyms array inside game (game.gyms array).
2. Find gyms where the difficulty is less than 3.
3. If the gym's difficulty is less than 3 (so difficulty 1 or 2), then: → Change that gym’s completed value to true.
Figure out which loop I'd like to use to check each gym and change completed property to true for difficulty.
Solve Exercise 6 here:
*/

game.gyms.forEach(function(gym){ //gets inside of the array, so now I can just name info inside the array
    if (gym.difficulty <3) {  //going through one array at a time with gym 
      gym.completed = true;   //changing gym.completed to true if this condition is met
    }
  });
  console.log(game.gyms);
  
// ---------------------------------------------------------------------------------------------------------

  /*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 

More notes from chaptgpt to understand what's going on:

What does "evolve the starter Pokémon" mean?
In Pokémon, evolving means: Replacing a Pokémon with its stronger, next version.
For example: Bulbasaur → Ivysaur, or Pikachu → Raichu
So you're not adding a new Pokémon — you're swapping the old one with its evolved form.

What you're supposed to do:
Look in your game.party array.
Find the starter Pokémon you added earlier (like Pikachu, Bulbasaur, etc.)
Replace that exact Pokémon with the one it evolves into (like Raichu or Ivysaur).

So my current game.party is the following: 
0: {number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true}
1: {number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true}
2: {number: 7, name: 'Squirtle', type: 'water', hp: 44, starter: true}
3: {number: 25, name: 'Pikachu', type: 'electric', hp: 35, starter: true}
length: 4
[[Prototype]]: Array(0)

Solve Exercise 7 here:
*/

console.log(game.party);

//going to use splice method to switch these players out to the next evolved player
//going to remove one pokemon from game.party and insert a different one

game.party.splice(0, 1, pokemon[4]);
//Pokemon 4 which I currently have at index 0 in party. Charmander evolves into Pokemon 5: Charmeleon (and Charmeleon is at index 4 in pokemon).
console.log(game.party); //making sure I've taken out Charmander and replaced with Charmeleon.

game.party.splice(1, 1, pokemon[1]);
//  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur / B is in index1 in party and replacing with pokemon index 1
console.log(game.party);

game.party.splice(2, 1, pokemon[7]);
//- Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle / S is in index2 in party and replacing with pokemon index 7
console.log(game.party);

game.party.splice(3, 1, pokemon[25]);
// - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu / P is in index3 in party and replacing with pokemon index 25
console.log(game.party);


//Another option:
// To make the code more dynamic and more reuseable, you can do:
// const evolutions = [
//   { starterNumber: 1, evolvedNumber: 2 },   // Bulbasaur → Ivysaur
//   { starterNumber: 4, evolvedNumber: 5 },   // Charmander → Charmeleon
//   { starterNumber: 7, evolvedNumber: 8 },   // Squirtle → Wartortle
//   { starterNumber: 25, evolvedNumber: 26 }  // Pikachu → Raichu
// ];

// game.party.forEach(function(pokemon, index) {
//   if (pokemon.number === 1) {
//     game.party.splice(index, 1, pokemon[1]); // Ivysaur
//   } else if (pokemon.number === 4) {
//     game.party.splice(index, 1, pokemon[5]); // Charmeleon
//   } else if (pokemon.number === 7) {
//     game.party.splice(index, 1, pokemon[8]); // Wartortle
//   } else if (pokemon.number === 25) {
//     game.party.splice(index, 1, pokemon[26]); // Raichu
//   }
// });

// console.log("Evolved party:", game.party);

//wait, maybe this isn't reusable... How would I make this reuseable for the future? I'm still figuring this out.

//Yet another option                            //I'm explaining it for myself in case I need to reference later
// const evolutions = [                         //Here I created a variable named evolutions that will hold an array of objects
//   { starterNumber: 1, evolvedNumber: 2 },   // Bulbasaur → Ivysaur //If pokemon has a starter number (original number) of 1, will evolve to an evolved number (aka new pokemon number)
//   { starterNumber: 4, evolvedNumber: 5 },   // Charmander → Charmeleon //4 becomes 5 (similar to last line)
//   { starterNumber: 7, evolvedNumber: 8 },   // Squirtle → Wartortle //7 becomes 8
//   { starterNumber: 25, evolvedNumber: 26 }  // Pikachu → Raichu// 25 becomes 26
// ];

// game.party.forEach(function(pokemon, index) { 
//Starting a forEach loop through the game.party array
//Starting at my current Pokemon team (game.party), forEach to loop through each Pokemon
// then with (function(pokemon, index), for every pokemon, pokemon is the current pokemon looking at, and index is the index

//   evolutions.forEach(function(evolution) { //for the list of all the possible starterNumber:evolvedNumber pairs, loop through
//     if (pokemon.number === evolution.starterNumber) { //if pokemon equals the starter number, splice on the next line
//       game.party.splice(index, 1, pokemon[evolution.evolvedNumber]);
//     }
//   });
// });

// console.log("Evolved party is now ", game.party);

// ---------------------------------------------------------------------------------------------------------

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

const myPokemonParty = [
    {number: 5, name: 'Charmeleon', type: 'fire', hp: 58, starter: false},
    {number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false},
    {number: 8, name: 'Wartortle', type: 'water', hp: 59, starter: false},
    {number: 26, name: 'Raichu', type: 'electric', hp: 60, starter: false},
    ]
    
    for (const pokemonIndividualArrayList of myPokemonParty) {
      console.log(`I'm in myPokemonParty with Sylvia's party, and my name is ${pokemonIndividualArrayList.name}!`) //I printed this to understand the flow of the loop and exercise for myself.
      console.log(`My name is ${pokemonIndividualArrayList.name}!`); //This is the answer to the Exercise.
    }
    console.log(myPokemonParty);
    
    // ---------------------------------------------------------------------------------------------------------

    
/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

//Gonna use a for..of loop / that's easier

const starterPokemonNames = [];

  for (const starterPokemon of pokemon) {
    if (starterPokemon.starter === true) {
      starterPokemonNames.push(starterPokemon.name);
    }
  }
console.log(starterPokemonNames);


  // Also simpler version:
  game.party.forEach((pokemon) => {
    if (pokemon.starter) {
      console.log(pokemon.name);
    }
  });

  // Another version... this seems the simplest? Still a little confused, but maybe starting to understand better here
  pokemon.forEach((character) => {
    if (character.starter === true) {
        console.log(character.name);
    }
})
  // ---------------------------------------------------------------------------------------------------------

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

// const game = {
//   party: [],
//   gyms: [
//     { location: "Pewter City", completed: false, difficulty: 1 },
//     { location: "Cerulean City", completed: false, difficulty: 2 },
//     { location: "Vermilion City", completed: false, difficulty: 3 },
//     { location: "Celadon City", completed: false, difficulty: 4 },
//     { location: "Fuchsia City", completed: false, difficulty: 5 },
//     { location: "Saffron City", completed: false, difficulty: 6 },
//     { location: "Cinnabar Island", completed: false, difficulty: 7 },
//     { location: "Viridian City", completed: false, difficulty: 8 },
//   ],
//   items: [
//     { name: "potion", quantity: 4 },
//     { name: "pokeball", quantity: 8 },
//     { name: "rare candy", quantity: 99 },
//   ],
// }

// console.dir(pokemon, { maxArrayLength: null })



game.catchPokemon = function(pokemonObj) { //creating a function, adding it to the game object, & accepting an object as a parameter (it has one parameter called pokemonObj)
  game.party.push(pokemonObj);//adding `pokemonObj` to the `game.party` array
};
game.catchPokemon(pokemon[81]); //calling the function and updating with pokemon 81
console.log(game.party); //


 // ---------------------------------------------------------------------------------------------------------

 //Lost from this point forward....
 /*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/


// Notes from chatgpt explaining this exercise below:

//I don't get why we copy and paste this catchMethod here, when we are focusing on games.items and pokeball quantity.

// Notes from chatgpt about why we're doing this:
// Why are you copying the method? Because the exercise wants you to modify the original method to do something extra:
// Before: catchPokemon only added a Pokémon to the party.
// Now: You need to also subtract 1 from the pokeball quantity every time the function runs.
// So you're copying the original version so you can add to it without rewriting everything from scratch.

// 🔹 Why are we changing catchPokemon instead of writing a new function?
// Because this task is about catching a Pokémon — the exact same job as the original function.
// You're just adding new behavior to the existing function:“When catching, also reduce pokeballs by 1.”

// 🔹 So why is game.items involved now?
// Because game.items is where your inventory is stored.
// Pokeballs live there.

// You’ll need to look inside game.items, find the pokeball, and subtract 1 from its quantity.

