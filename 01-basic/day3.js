let fruits = ["Apple", "Banana"];
fruits.push("Cherry");
console.log(fruits); // ["Apple", "Banana", "Cherry"]

let fruit = ["Apple", "Banana", "Cherry"];
// Remove 1 element at index 1, and insert "Date" and "Elderberry"
fruit.splice(0, 2, "Date", "Elderberry", "jhdjhfjs");
console.log(fruit); // ["Apple", "Date", "Elderberry", "Cherry"]

let greeting = "Hello, World!";
let world = greeting.slice(7, 13);
console.log(world); // "World"