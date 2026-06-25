// A Data Type tells JavaScript what kind of value is stored inside a variable.









// ✅ Primitive Data Types

console.log("Primitive Data Types")
let str = "Hello";               // String
let num = 42;                    // Number
let big = 9007199254740991n;     // BigInt
let flag = true;                 // Boolean
let notSet;                      // Undefined
let empty = null;                // Null
let unique = Symbol("id");       // Symbol

console.log(typeof str);     // "string"
console.log(typeof num);     // "number"
console.log(typeof big);     // "bigint"
console.log(typeof flag);    // "boolean"
console.log(typeof notSet);  // "undefined"
console.log(typeof empty);   // "object" (quirk in JS)
console.log(typeof unique);  // "symbol"

console.log("               ")
console.log("Non Primitive")

// ✅ Non‑Primitive (Reference) Data Types
let obj = {name: "Aamir", age: 22};   // Object
let arr = [1, 2, 3];                  // Array
let greet = function() { return "Hi"; }; // Function
let today = new Date();               // Date
let regex = /abc/;                    // RegExp
let map = new Map();                  // Map
let set = new Set();                  // Set

console.log(typeof obj);    // "object"
console.log(typeof arr);    // "object" (arrays are objects)
console.log(typeof greet);  // "function"
console.log(typeof today);  // "object"
console.log(typeof regex);  // "object"
console.log(typeof map);    // "object"
console.log(typeof set);    // "object"









//     let str = "Aamir";       // String
// let num = 100;           // Number
// let big = 9007199254740991n; // BigInt
// let flag = true;         // Boolean
// let notSet;              // Undefined
// let empty = null;        // Null
// let unique = Symbol("id"); // Symbol

// console.log(typeof str);     // "string"
// console.log(typeof num);     // "number"
// console.log(typeof big);     // "bigint"
// console.log(typeof flag);    // "boolean"
// console.log(typeof notSet);  // "undefined"
// console.log(typeof empty);   // "object" (quirk)
// console.log(typeof unique);  // "symbol"
