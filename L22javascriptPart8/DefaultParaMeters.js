// function sum(a, b = 2){
//     return a+b;
// }

// console.log(sum(2));


function sum(a, b = 2){
    return a+b;
}

console.log(sum(2));
console.log(sum(2, 3));

function sum(a = 2, b){
    return a+b;
}

console.log(sum(2));// a = 2, b = undefined




let obj1 = {

   name:"Aamir",

   address:{
      city:"Delhi"
   }
};

let obj2 =
JSON.parse(JSON.stringify(obj1));

obj2.address.city = "Mumbai";

console.log(obj1.address.city);




// 🔎 Step‑by‑Step Meaning
// obj1 → an object with:

// name: "Aamir"

// address: { city: "Delhi" }

// JSON.stringify(obj1)

// Converts obj1 into a string:
// '{"name":"Aamir","address":{"city":"Delhi"}}'

// JSON.parse(...)

// Converts that string back into a new object.

// So obj2 becomes a deep copy of obj1.

// obj2.address.city = "Mumbai";

// Changes the city inside obj2.

// Since obj2 is a deep copy, this does not affect obj1.

// console.log(obj1.address.city);

// Prints "Delhi" because the original obj1 is untouched.

// 🏃 Dry Run Table
// Step	obj1	obj2	Action
// Start	{ name:"Aamir", address:{ city:"Delhi" } }	—	Created obj1
// After stringify+parse	{ name:"Aamir", address:{ city:"Delhi" } }	{ name:"Aamir", address:{ city:"Delhi" } }	Deep copy made
// After change	{ name:"Aamir", address:{ city:"Delhi" } }	{ name:"Aamir", address:{ city:"Mumbai" } }	obj2 modified
// Console.log	"Delhi"	"Mumbai"	Prints obj1’s city


// ✅ Final Output:

// Code
// Delhi
// This demonstrates the power of JSON.parse(JSON.stringify(...)) — it breaks the reference link and creates a new independent object.
