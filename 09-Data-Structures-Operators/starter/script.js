   'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
 
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// 
// console.log(0||"Pawel");
// console.log(undefined||null);
// console.log(true||0);

// restaurant.numGuests = 0

const guest1 = restaurant.numGuests ? restaurant.numGuests:10

const guest2 = restaurant.numGuests || 10
// Nullish (null or undefined only)  "??"
const guest3 = restaurant.numGuests ?? 10

console.log( guest1, guest2,guest3);

// AND &&

// console.log(1 && "Pawel");

const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "Milanese",
  owner: "Giovanna Bianco",
};

// OR assignement operator (assign when left side is falsy)
// rest1.numGuests = rest1.numGuests ||10;
// rest2.numGuests = rest2.numGuests ||10;
// rest1.numGuests||=10
// rest2.numGuests||=10

// OR coelescent operator(when null or undefined)
rest1.numGuests??=10
rest2.numGuests??=10

// AND operator (assign value if it's truthy)
// rest1.owner= rest1.owner && "Anonymous"
// rest2.owner= rest2.owner && "Anonymous"
// shorter
rest1.owner &&="Anonymous"
rest2.owner &&="Anonymous"



console.log(rest1);
console.log(rest2);

// Coding Challenge #1
// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on 
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and 
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field 
// players. For Bayern Munich (team 1) create one variable ('gk') with the 
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
// new array ('players1Final') containing all the original team1 players plus 
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player 
// names (not an array) and prints each of them to the console, along with the 
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which 
// team is more likely to win, without using an if/else statement or the ternary 
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
// Then, call the function again with players from game.scored
// GOOD LUCK 

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };
  // 1.
  const players1 = game.players[0]
  const players2 = game.players[1]
//  2.
const [gk,...fieldPlayers] = players1
// 3.
const allPlayers = [...players1,...players2]
// 4.
const playersFinal=[...players1,'Thiago', 'Coutinho', 'Perisic']
// 5
const team1 =game.odds.team1
const draw = game.odds.x
const team2 = game.odds.team2
// 6
const playersScored = game.scored
function printGoals(players) {
  
  let goalList=[];
  for (let goal of players) {
    goalList[goal] = goalList[goal]? goalList[goal]+1:1
  }
  console.log(goalList);
}
const players = ['Davies', 'Muller', 'Lewandowski','Kimmich'];
printGoals(playersScored)
printGoals(players)
