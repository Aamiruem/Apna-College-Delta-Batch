// In this tutorial, you'll learn Difference between var, let, and const
// Scope in JavaScript (Function Scope vs Block Scope)
// Hoisting in JavaScript
// When to use var, let, or const

function testVar() {
  if (true) {
    var num = 10;
  }
  console.log(num); // ✅ Works (var is function-scoped)
}
testVar();
// Let and const (Block Scope)
// Variables declared with let and const are block-scoped (only available inside {} where they are declared).


function testLetConst() {
  if (true) {
    let count = 5;
    const name = "Mohit";
  }
  console.log(count); // Error (let is block-scoped)
  console.log(name);  // Error (const is block-scoped)
}
testLetConst();
// Redeclaring & Reassigning Variables
// var allows redeclaration & reassignment

var x = 10;
var x = 20;
x = 30;     
console.log(x); // 30
// let allows reassignment but not redeclaration

let y = 10;
let y = 20;
y = 30;    
console.log(y);
// Const allows neither redeclaration nor reassignment

const z = 100;
const z = 200; 
z = 300;    
console.log(z);

// Hoisting in JavaScript
console.log(a); 
var a = 5;

// let and const are hoisted but not initialized:
console.log(b); 
let b = 10;

// Example:
const pi = 3.14; // Value never changes
let score = 100; // Value can change
