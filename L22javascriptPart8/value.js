// Alright Aamir, this one is about primitive values vs references 👌. Let’s break it down word by word and then dry run it.

Code
js
let a = 10;

let b = a;

b = 20;

console.log(a);


// Word-by-Word Meaning
// let a = 10;

// Make a variable a.

// Store the number 10 in it.

// let b = a;

// Make another variable b.

// Copy the value of a (which is 10) into b.

// Important: numbers are primitive values, so this is a copy, not a reference.

// b = 20;

// Change b to 20.

// This does not affect a, because b has its own copy.

// console.log(a);

// Print the value of a.

// Dry Run (Step by Step)
// a = 10

// b = a → b = 10

// b = 20 → now b is 20, but a is still 10.

// console.log(a) → prints:

// Code
// 10
// ✅ Key takeaway:

// For primitive types (like numbers, strings, booleans), assignment makes a copy.

// Changing the copy (b) does not change the original (a).

// Output = 10.

// 👉 Compare this with objects/arrays: if you assign one object to another, they share the same reference, so changing one affects the other.
