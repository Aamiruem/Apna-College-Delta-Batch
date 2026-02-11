// MATH OBJECT

// 1. Properties
console.log("Pi value :", Math.PI);
console.log("E value :", Math.E);

// 2. Methods
console.log("Absolute value (remove negative) :", Math.abs(-5.4) );
console.log("Power value :", Math.pow(2, 4) );
console.log("Floor (nearest smallest integer) value :", Math.floor(5.8),"(inPositive) :", Math.floor(-5.8),"(inNegative)" );
console.log("Ceil (nearest largest integer) value :", Math.ceil(5.8),"(inPositive) :", Math.ceil(-5.8),"(inNegative)" );
console.log("Generate random value :", Math.random(), ":", Math.random(), ":", Math.random() );

// Random integers from 1 to 10
/*
let num = Math.random(); console.log("Number :", num); // Step 1
num = num * 10; console.log("Number :", num); // Step 2
num = Math.floor(num); console.log("Number :", num); // Step 3
num = num + 1; console.log("Number :", num); // Step 4
*/
// Combine all in one line
let num = Math.floor(Math.random() * 10) + 1;
console.log("Random from 1 to 10 :", num);

// Practice Qs : 
let prQs1 = Math.floor(Math.random() * 100) + 1;
console.log("Random number between 1 to 100 :", prQs1);

let prQs2 = Math.floor(Math.random() * 5) + 1;
console.log("Random number between 1 to 5 :", prQs2);

let prQs3 = Math.floor(Math.random() * 5) + 21;
console.log("Random number between 21 to 25 :", prQs3);