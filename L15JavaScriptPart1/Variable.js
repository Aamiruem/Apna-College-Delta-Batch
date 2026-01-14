a = 25
typeof a
console.log(a)


// Variable Declaration in JavaScript
// You can declare variables using:

// var (older, function-scoped)

// let (block-scoped, can be reassigned)

// const (block-scoped, cannot be reassigned)

// Using 'var' (older way, function-scoped)
var name = "John";
name = "Doe"; // Can be reassigned

// Using 'let' (modern, block-scoped)
let age = 25;
age = 26; // Can be reassigned

// Using 'const' (constant, cannot be reassigned)
const PI = 3.14159;
// PI = 3.14; // Error: Assignment to constant variable

// Example with different data types
let isActive = true; // Boolean
let score = 100; // Number
let user = { id: 1, name: "Alice" }; // Object
let colors = ["red", "green", "blue"]; // Array

console.log(name, age, PI, isActive, score, user, colors);
// Key Points:
// var is function-scoped and hoisted (avoid in modern JS).

// let allows reassignment and is block-scoped.

// const does not allow reassignment (but objects/arrays can be modified).

// Always prefer const unless you need to reassign a variable.

// Would you like a more specific example or explanation? Let me know how I can help! 🚀















// Variables in JavaScript are containers for storing data values.Here are the key aspects of JavaScript variables:

// Variable Declaration
// JavaScript has three ways to declare variables:

// var - The old way(function- scoped)

// javascript
// var name = "John";
// let - The modern way(block - scoped, can be reassigned)

// javascript
// let age = 30;
// const - For constants(block - scoped, cannot be reassigned)

// javascript
// const PI = 3.14159;
// Variable Naming Rules
// Must begin with a letter, underscore(_), or dollar sign($)

// Can contain letters, numbers, underscores, and dollar signs

// Are case sensitive(myVar ≠ myvar)

// Cannot use reserved keywords(like let, class, return, etc.)

// Variable Assignment
// javascript
// let x;      // Declaration
// x = 5;      // Assignment
// let y = 10; // Declaration and assignment
// Variable Types
// JavaScript is dynamically typed, meaning variables can hold any type of value:

// javascript
// let message = "Hello";    // String
// let count = 123;         // Number
// let isActive = true;     // Boolean
// let person = null;       // Null
// let data;                // Undefined
// let ids = [1, 2, 3];     // Array
// let user = {             // Object
//     name: "Alice",
//     age: 25
// };

// Variable Scope
// Global scope: Accessible everywhere

// Function scope: Accessible only within a function (var)

//     Block scope: Accessible only within a block { } (let, const)

//         Hoisting
// JavaScript hoists variable declarations(but not initializations) to the top of their scope:

// javascript
// console.log(x); // undefined (not an error)
// var x = 5;
// Note: let and const declarations are hoisted but not initialized, so accessing them before declaration causes a ReferenceError.

//     Best Practices
// Use const by default, let when you need to reassign, and avoid var

//     Use meaningful variable names

// Initialize variables when you declare them

// Declare variables at the top of their scope

// Avoid global variables when possible
