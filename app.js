// This lab provides an opportunity to practice defining, accessing, and manipulating objects.


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
console.log(pokemon[59].name);//index #59 is actually pokemon 60, which is Poliwag
console.log(pokemon[58].name);//is actually pokemon 59 at index 58, which is Arcanine
// QUESTION - Which one is the assignment asking me for? The index or the actual pokemon number?

// ---------------------------------------------------------------------------------------------------------

// Exercise 2
// game.party = all the Pokémon on my team (ones you've caught)
// game.gyms = all the battles faced / checkpoints (faced or will face)
// game.items = all the stuff I'm carrying (like Poké Balls, potions, etc.)

console.log(game)

//after console logging console.log(game), it shows this: {party: Array(0), gyms: Array(8), items: Array(3)}
// see an empty party array [] --It will eventually hold all the Pokemon objects I've caught, and retrieved from pokemon array from exercise1
// see 8 gym objects in one array (an array of objects)
// see 3 items objects in one array (an array of objects)

// ---------------------------------------------------------------------------------------------------------


//Exercise 3
  





  



