// console.log("nidhi")

// const a = 10;
// /**
// These are constant values and cannot be changed.
//  */
// let b = 20;
// b = 30;

// // These are let values and can be changed. 
// // In JavaScript, the equal sign (=) is an "assignment" operator, not an "equal to" operator

// console.log( a + b);

// // Strings are written inside double or single quotes. Numbers are written without quotes.

// let carName;
// console.log(carName);
// // After the declare variable, There is no value (technically it is undefined).


// var carName1 = "Volvo";
// var carName1;
// console.log(carName1);


// let x = "5" + 2 + 3;
// console.log(x);

// // if you add string first then all value will be declare string

// let y = 2 + 3 + "5";
// console.log(y);
// // if you add number first then all value will be declare numbers

// // block code
// let  x = 10;
// // Here x is 10

// {  
//   let x = 2;
//   // Here x is 2
// }

// // Here x is 10

// // There is no value of x in block code.. console take the value of globle let.
// let  x = 10;
// // Here x is 10

// {  
//   console.log(x);
//   // Here x is 2
// }

// // Here x is 10


// if There is no value in globle let. then 2nd console.log never access block code x's value.
{  
  let y = 2;
  console.log(y);
  // Here x is 2
}
console.log(y);
// Here x is 10

// {} is called scope. var never solved the scope problem.

