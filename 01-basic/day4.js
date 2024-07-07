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
let person = new Person('John', 28);
let son = new Person('nidhi', 32)
console.log(son)
console.log(person)

// void operator
let result = void 0; // result is undefined