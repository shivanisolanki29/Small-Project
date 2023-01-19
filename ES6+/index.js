// Challenge - For Of Loop

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [
  { name: "John", city: "New York" },
  { name: "Peter", city: "Paris" },
  { name: "Kate", city: "Sidney" },
];
for (const student of students) {
  const { name, city } = student;
  //   console.log(`${name} lives in ${city}`);
}
//spread Operator

let contacts = ["Mary", "Joel", "Danny"];

// let personalFriends = contacts;
let personalFriends = ["David", ...contacts, "Lily"];
contacts.push("John");

// console.log(contacts);
// console.log(personalFriends);

let person = {
  name: "Adam",
  age: 25,
  city: "Manchester",
};
let employee = {
  ...person,
  salary: 50000,
  position: "Software Developer",
};
// console.log(employee);

//spread Operator(Challenge)
/*
    **** Challenge ****
    
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

*/

const shoppingList = ["eggs", "milk", "butter"];

const shoppingBasket = [...shoppingList, "bread", "banana", "apple"];

// console.log(shoppingBasket);
//====================================================
function friend(friends) {
  let res = [];
  friends.map((e) => {
    if (e.length === 4) res.push(e);
  });
  //   for (let i = 0; i < friends.length; i++) {
  //     if (friends[i].length === 4) {
  //       //   console.log(friends[i]);
  //       res.push(friends[i]);
  //     }
  //   }
  return res;

  //your code here
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
