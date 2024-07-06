// "use strict" /* treat all code as newer version */

// // You can create a constant array:
// const cars = ["Saab", "Volvo", "BMW"];

// // You can change an element:
// cars[0] = "Toyota";

// // You can add an element:
// cars.push("Audi");

// console.log(cars);


// // You can create a const object:
// const car = {type:"Fiat", model:"500", color:"white"};

// // You can change a property:
// car.color = "red";

// // You can add a property:
// car.owner = "Johnson";


// console.log(car);


// // how to convert string into number

// let nidhi = "32";
// let numNidhi = Number(nidhi);
// console.log(numNidhi);
// console.log(typeof numNidhi);


// // how to covert into nigative-value

// let age = 7;
// let nigativeValue = -age;
// console.log(nigativeValue);

let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;
// Substitutions Template Strings allow variables in strings:

console.log(text);

console.log("cat".charAt(1)); // gives value "a"


const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}
