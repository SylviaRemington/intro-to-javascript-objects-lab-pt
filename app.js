// This lab provides an opportunity to practice defining, accessing, and manipulating objects.
// console.log("Checking if console in browser is working... Working!");//Quick check before assignment
//to make sure console log is working

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
  /*(Above, Line 23) Using a method: console.dir().
  We’re using it here so that you can see all of the Pokemon in the console. 
  Normally, both console.dir() and console.log() show only the first 100 items in an array. 
  However, by using { maxArrayLength: null } with console.dir(), we can display every item in the array. 
  This specific option isn’t available with console.log(), making console.dir() the necessary choice 
  for the full visibility needed in this lab... 
  See this in console log on web browser as Array(151) with drop down menu of arrays 0-99, 100-150.*/

//   For exercise 1, below are the first two trys of logging the name of the Pokemon with the number 59;
//   but the correct answer (I think) is console.log(pokemon[59].name);

//   console.log(name, [59]);
//   or
//   console.log(game[59]);
//   or 
//   console.log(game[59].name);

//Exercise 1 Completed Below:
console.log(pokemon[59].name);//index #59 of the array is actually pokemon 60, which is Poliwag. I believe this is the correct one they are looking for
console.log(pokemon[58].name);//is actually pokemon 59 at index 58 of the array, which is Arcanine
// QUESTION - Which one is the assignment asking me for? The index or the actual pokemon number?

// ---------------------------------------------------------------------------------------------------------

// Exercise 2
// game.party = all the Pokémon on my team (ones you've caught)
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

//For below, I initially thought I had to copy and paste everything from above to add difficulty to the game.
//So I did that below... but I figured that was doing too much... So below, I did something different and 
//just added difficulty "Easy".
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
//   difficulty: [
//     {level1: "Easy"},
//     {level2: "Med"},
//     {level3: "Hard"},
//   ],
// }
// console.log(game.difficulty.level1);

//Exercise 3 Completed Below:
game.difficulty = "Easy"; //This is one way to do it. However, I wanted to re-create what I had above. Below is another way to do it.
//Below is another way to create it with three levels, that can be used when you jump from level1 to level2.
// game.difficulty = [{level1: "Easy"}, {level2: "Med"}, {level3: "Hard"} ];//re-creating what I typed above to add to game.
console.log(game); //to show that it was added to the game
console.log(game.difficulty); //just to see the level by itself

// ---------------------------------------------------------------------------------------------------------

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?
Solve Exercise 4 here:
*/

//Incorrect first try - What I found out I did with this is just attach a name to the outside of an array named Pikachu. Totally incorrect. lol
// game.party.name = "Pikachu"
// console.log(game.party);

//Exercise 4 Completed Below:
game.party.push(pokemon[24]);
console.log(game.party);//just showing what was added to the party object section of game
console.log(game);//showing the full game and making sure it was added where it was supposed to be added
//Alara, what would be best to console log for this one? 

// ---------------------------------------------------------------------------------------------------------

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?
Solve Exercise 5 here:
*/

//Exercise 5 Completed Below:
game.party.unshift(pokemon[0]);
console.log(game.party);
//I added 'Bulbasaur' to the beginning of the array before Pikachu. Also, this pokemon has a different type called 'grass'.
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
//I wanted to use the spread array method to add this pokemon. This pokemon has a different type called 'fire'.
//The above created this in the console log:
// 0: {number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true}
// 1: {number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true}
// 2: {number: 7, name: 'Squirtle', type: 'water', hp: 44, starter: true}
// 3: {number: 25, name: 'Pikachu', type: 'electric', hp: 35, starter: true}
// length: 4

// ---------------------------------------------------------------------------------------------------------








  





  



