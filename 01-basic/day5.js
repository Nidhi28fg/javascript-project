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









// interview question
const myArr = [0, 1, 2, 3, 4, 5] 
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) /* count start from index 1 and end on 2 index*/
console.log("a.", myArr);
console.log(myn1);
console.log("B ", myArr);/* origanal data m change nhi hua hai*/


const myn2 = myArr.splice(1, 3) /* COUNT START FROM INDEX 1 AND END ON 3 INDEX */
console.log("C ", myArr); /* here changed in orginal data,  */
console.log(myn2);
console.log("d ", myArr); /* here changed in orginal data , orignal array manupulate ho jata hai */
