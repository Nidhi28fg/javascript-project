let value = 10;

// typeof operator
console.log(typeof value); // "number"

// delete operator
let obj = { x: 5, y: 10 };
delete obj.x; // Deletes property 'x' from obj
console.log(obj);

// new operator
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let John = new Person('John', 28);
let Nidhi = new Person('nidhi', 32)
console.log(John)
console.log(Nidhi)

// void operator
let result = void 0; // result is undefined

// Ternary Operator

let a = 27;
let b =76;
let results = (a > b) ? "a is greater" : "a is not greater";
console.log(results); // "a is greater"