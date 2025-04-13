// This lab provides an opportunity to practice defining, accessing, and manipulating objects.
// console.log("Checking if console in browser is working... Working!");//Quick check before assignment
//to make sure console log is working
//This lab has been highly challenging to me because I've only played two video games in my entire life for maybe a total of 15 minutes.
//It's taking me longer than normal to understand the concepts behind the game to understand what I am trying to create.

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
//   but the correct answer (I think) is console.log(pokemon[59].name); however, if you're looking for the name of Pokemon #59, 
//   then the answer is console.log(pokemon[58].name);

//Incorrect attempts... /was figuring it out at this point
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
Look through the gyms array inside game.
Find gyms where the difficulty is less than 3.
For those gyms, change the completed property to true.
Figure out which loop I'd like to use to check each gym and change completed property to true for difficulty < 3.
Solve Exercise 6 here:
*/

//First attempt... incorrect... not sure why... looking into it
//I think I'm really confused as to how to interact with Objects. Gonna re-watch class again.
// for (let i=0; game.gyms.difficulty <3; i++){
  // return game.gyms.completed = true;//Uncaught SyntaxError: Illegal return statement (at app.js:185:3)
// };
// console.log(game.gyms);
//Uncaught SyntaxError: Illegal return statement (at app.js:185:3)
// Notes from chatgpt about above code and trying to explain why it doesn't work and giving me hints, 
// but I still don't understand the chatgpt explanation. lol
// 1. game.gyms is a list of gyms, not just one gym. You need to look at each gym one at a time.
// 2. You wrote game.gyms.difficulty, but that doesn’t work because gyms is a list. You need to write something like game.gyms[i].difficulty to get the difficulty of one gym.
// 3. return only works inside a function. You’re not inside a function, so you can’t use return here.
// 4. Your for loop condition is wrong. A loop needs to know when to stop (like i < 10 or i < game.gyms.length), not a condition like game.gyms.difficulty < 3.
// 5. To change something in each gym, you have to go through the list and change one gym at a time using game.gyms[i].completed = true.

//Second attempt
//Thinking of trying a for...loop and/or a forEach loop:
//Pseudo code:
// I want the loop to loop through the OBJECTS WITHIN THE GYMS
//The gyms is an object that has an array and then lines of objects within it. I want to loop through the lines of objects.
//Each object in the gyms array has an index #... Maybe loop through the index number while specifying a difficulty less than 3
//How do I do this???? ...the struggle is real... lol

//Second Attempt
// for (let gym of gyms){
//   if (difficulty < 3){
//     game.gyms.completed(1,1,'true',)//use slice method???? I'm so confused
//   }
// }
// console.log(game.gym.difficulty);//app.js:230 Uncaught ReferenceError: gyms is not defined
// at app.js:230:17
// I'm so confused.... //Took the rest of the night off, rewatched entire lecture and then did the following below...

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

// What it's asking you to do:
// 1. Look at each gym in the game.gyms array.
// 2. If the gym's difficulty is less than 3 (so difficulty 1 or 2), then: → Change that gym’s completed value to true.

// What you’ll need to do:
// 1. Go through each gym one by one (use a loop).
// 2. Check if that gym’s difficulty is below 3.
// 3. If it is, change its completed from false to true.

// Next attempt - had error message... but closer... I realized I needed to get to gym and not be referencing from the outside.
// game.gyms.forEach(function(gym)){
//   if (game.gyms.difficulty <3) {
//     game.gyms.completed = true;
//   }
// }
// console.log(game.gyms.completed);

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


Solve Exercise 7 here:
*/








  





  



