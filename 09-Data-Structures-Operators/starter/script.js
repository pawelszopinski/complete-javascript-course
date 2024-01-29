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
