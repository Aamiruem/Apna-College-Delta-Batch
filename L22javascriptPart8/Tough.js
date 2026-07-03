let name = "Global";

function outer(){

   let name = "Outer";

   function inner(){

      console.log(name);
   }

   return inner;
}

const fn = outer();

fn();




// 🔎 Code Breakdown
// js
// let name = "Global";
// Declares a variable name in the global scope with value "Global".

// js
// function outer() {
//    let name = "Outer";

//    function inner() {
//       console.log(name);
//    }

//    return inner;
// }
// outer → a function that creates its own local variable name = "Outer".

// Inside outer, another function inner is defined.

// inner logs name. But here’s the key:

// JavaScript looks for name in the closest scope.

// It finds "Outer" inside outer, so it uses that.

// outer returns the function inner (not executed yet, just returned).

// js
// const fn = outer();
// Calls outer().

// outer returns inner.

// So now fn holds a reference to the inner function.

// Even though outer has finished running, the variable name = "Outer" is remembered because of closure.

// js
// fn();
// Executes inner.

// inner logs name.

// Closure ensures inner still has access to outer’s variable name.

// Output: "Outer"

// 🏃 Dry Run Table
// Step	Scope	Variable name	Action
// Global	Global scope	"Global"	Declared
// Call outer()	Outer scope	"Outer"	Created local variable
// Inside outer	Inner function defined	—	inner closes over "Outer"
// Return inner	fn = inner	"Outer" remembered	Closure formed
// Call fn()	Executes inner	Logs "Outer"	Output


// ✅ Final Output
// Code
// Outer
// ⚡ Key Concept
// This is a closure:

// A function (inner) “remembers” variables from its outer scope (outer) even after the outer function has finished running.

// That’s why "Outer" is printed, not "Global".
