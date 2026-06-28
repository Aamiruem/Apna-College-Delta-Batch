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











// Word-by-Word Meaning
// let obj1 = {...}

// Create an object obj1.

// It has:

// name = "Aamir"

// address = { city: "Delhi" } (nested object).

// JSON.stringify(obj1)

// Convert obj1 into a JSON string.

// Example: {"name":"Aamir","address":{"city":"Delhi"}}

// JSON.parse(...)

// Convert that string back into a new object.

// So obj2 becomes a new copy of obj1.

// This is called a deep copy (nested objects are also copied, not shared).

// obj2.address.city = "Mumbai";

// Change the city inside obj2.

// Now obj2.address.city = "Mumbai".

// Since it’s a deep copy, this does not affect obj1.

// console.log(obj1.address.city);

// Print the city of obj1.

// obj1.address.city is still "Delhi".

// Dry Run (Step by Step)
// obj1 = { name:"Aamir", address:{ city:"Delhi" } }

// obj2 = JSON.parse(JSON.stringify(obj1)) → deep copy →
// obj2 = { name:"Aamir", address:{ city:"Delhi" } }

// Change obj2.address.city = "Mumbai" →
// obj2 = { name:"Aamir", address:{ city:"Mumbai" } }  
// obj1 stays unchanged.

// console.log(obj1.address.city) → prints:

// Code
// Delhi
// ✅ Key takeaway:

// JSON.parse(JSON.stringify(...)) makes a deep copy.

// Changing obj2 does not affect obj1.

// Output = Delhi.
