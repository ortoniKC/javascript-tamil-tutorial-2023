
/*
    1. push() and pop(): These functions add and remove elements from the end of an array, respectively.
    2. unshift() and shift(): These functions add and remove elements from the beginning of an array, respectively
    3. sort(): Sorts the elements of an array in place
    4. reverse(): Reverses the order of elements in an array in place.
    5. includes(): Checks if an array contains a specific element.
    6. concat(): Combines two or more arrays and returns a new array.
    7. join(): Joins all elements of an array into a string with a specified separator.

*/const fruits = [
    "apple", "orange", "mango", "pine", "grape", "strawberry"
];
const cost = [10, 20, 51, 40, 5]

const dollarCost = cost.join(" -- ")
console.log(dollarCost);

const fruitswithcost = fruits.concat(cost);
console.log(fruits);
console.log(fruitswithcost);
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);
const isThere = fruits.includes("orange")
console.log(isThere);

fruits.push("goiaka", "velrika");
console.log(fruits);
fruits.unshift("APPLE", "berry")
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
