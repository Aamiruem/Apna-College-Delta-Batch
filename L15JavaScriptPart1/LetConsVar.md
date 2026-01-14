# let, var, and const in JavaScript: Key Differences & Usage

In JavaScript, let, var, and const are used to declare variables, but they behave differently in terms of scope, hoisting, and reassignment. Here’s a detailed breakdown:

1. var (Legacy, Avoid in Modern JS)
Scope: Function-level
javascript
Copy
if (true) {
  var x = 10;
}
console.log(x); // 10 (leaks outside the block)
Hoisting: Yes (initialized as undefined)
javascript
Copy
console.log(y); // undefined (not an error)
var y = 5;
Reassignment: Allowed
javascript
Copy
var z = 1;
z = 2; // Works
Redeclaration: Allowed (can cause bugs)
javascript
Copy
var a = 1;
var a = 2; // No error
When to Use?
❌ Avoid in modern JS (use let/const instead).

2. let (Block-Scoped, Reassignable)
Scope: Block-level ({}-scoped)
javascript
Copy
if (true) {
  let b = 20;
}
console.log(b); // Error: `b` is not defined
Hoisting: Yes (but in "Temporal Dead Zone" until declared)
javascript
Copy
console.log(c); // Error: Cannot access 'c' before initialization
let c = 5;
Reassignment: Allowed
javascript
Copy
let d = 1;
d = 2; // Works
Redeclaration: Not Allowed
javascript
Copy
let e = 1;
let e = 2; // Error: Identifier 'e' already declared
When to Use?
✅ When you need to reassign a variable (e.g., loops, counters).

3. const (Block-Scoped, Immutable Binding)
Scope: Block-level ({}-scoped)
javascript
Copy
if (true) {
  const f = 30;
}
console.log(f); // Error: `f` is not defined
Hoisting: Yes (but in "Temporal Dead Zone")
javascript
Copy
console.log(g); // Error: Cannot access 'g' before initialization
const g = 5;
Reassignment: Not Allowed
javascript
Copy
const h = 1;
h = 2; // Error: Assignment to constant variable
Redeclaration: Not Allowed
javascript
Copy
const i = 1;
const i = 2; // Error: Identifier 'i' already declared
But Objects/Arrays Can Be Modified!
javascript
Copy
const person = { name: "Alice" };
person.name = "Bob"; // Allowed (object is mutable)

const nums = [1, 2, 3];
nums.push(4); // Allowed (array is mutable)
When to Use?
✅ For constants or when you don’t plan to reassign (default choice).

4. Key Differences Summary
Feature var let const
Scope Function Block Block
Hoisting Yes (undefined) Yes (TDZ) Yes (TDZ)
Reassignment ✅ Yes ✅ Yes ❌ No
Redeclaration ✅ Yes ❌ No ❌ No
Use Case Legacy code Mutable variables Constants
5. Best Practices
Prefer const by default (safer, prevents accidental reassignment).

Use let only when you need reassignment.

Avoid var (legacy, causes scope leaks and bugs).

Use Object.freeze() to make objects truly immutable:

javascript
Copy
const settings = Object.freeze({ theme: "dark" });
settings.theme = "light"; // Fails silently in non-strict mode
Example: Proper Usage
javascript
Copy
// Good:
const PI = 3.14;
let counter = 0;

for (let i = 0; i < 5; i++) {
  console.log(i); // `i` is block-scoped
}

// Bad:
var oldVar = "Avoid me"; // Pollutes global/function scope
Final Advice
const > let > var in modern JavaScript.

Always declare variables to avoid global leaks.

Use "use strict" to catch undeclared variables.

Would you like a deeper dive into any specific part? 😊
