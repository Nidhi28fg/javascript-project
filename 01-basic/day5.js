console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);
console.log(Math.floor(3.9)) 

// how to get two digit number
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
console.log(Math.floor(Math.random()))
console.log(Math.floor(Math.random() * (max - min + 1)))
console.log(Math.random() * (max - min + 1))

// date
const datea = new Date();
console.log(datea.toLocaleDateString());


console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);