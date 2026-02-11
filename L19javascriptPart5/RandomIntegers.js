// Random Integers

console.log(Math.floor(Math.random() * 100) + 1); // Returns a random integer from 1 to 100.



console.log(Math.floor(Math.random() * 10) + 1); // Returns a random integer from 1 to 10.



let num = Math.random();
console.log(num);

num = num * 10;
console.log(num);


num = Math.floor(num);
console.log(num);


num = num + 1;
console.log(num);















// Example 1: Random integer from 1 to 100
// javascript
// console.log(Math.floor(Math.random() * 100) + 1); // Returns a random integer from 1 to 100.
// Math.random(): Generates a random decimal number between 0 (inclusive) and 1 (exclusive)

// * 100: Multiplies the random number by 100 to get a range of 0-99.999...

// Math.floor(): Rounds the number down to the nearest integer (0-99)

// + 1: Adds 1 to shift the range to 1-100

// console.log(): Prints the result to the console

// Example 2: Random integer from 1 to 10
// javascript
// console.log(Math.floor(Math.random() * 10) + 1); // Returns a random integer from 1 to 10.
// Same logic as above but with 10 instead of 100

// Final range becomes 1-10 instead of 1-100

// Detailed Breakdown:
// javascript
let num1 = Math.random();  // Stores a random decimal between 0 (inclusive) and 1 (exclusive) in 'num'
console.log(num1);         // Prints the initial random decimal (e.g., 0.723456)

num1 = num1 * 10;           // Multiplies the decimal by 10 (range now 0-9.999...)
console.log(num1);         // Prints the multiplied value (e.g., 7.23456)

num1 = Math.floor(num1);    // Rounds down to nearest integer (0-9)
console.log(num);         // Prints the floored value (e.g., 7)

num1 = num1 + 1;            // Adds 1 to shift range to 1-10
console.log(num1);         // Prints final integer (e.g., 8)
// Key Concepts:
// Math.random() always gives a decimal between 0 (inclusive) and 1 (exclusive)

// Multiplying changes the range (×10 → 0-9.999..., ×100 → 0-99.999...)

// Math.floor() removes the decimal portion (always rounds down)

// Adding 1 shifts the range up (since floor of 0-9.999 is 0-9, +1 makes it 1-10)

// This is the standard way to get random integers in JavaScript. The general formula is:


Math.floor(Math.random() * (max - min + 1)) + min













