let jsonRes = '{"fact ": "approximately 1/3 of cat owners think their pets are able to read their minds." , "length": 78}';




let validRes = JSON.parse(jsonRes);

console.log(validRes.fact);

let student = {
    name: "kamran",
    age: 22,
    marks: 99.7,
    city: "Delhi"
};

console.log(student["name"]);
console.log(student.name);







// Perfect 👏
// Let’s learn how to access JSON data in JavaScript — step by step 👇

// 🧱 1. What JSON Looks Like

// Example JSON from an API:

// {
//   "name": "Aamir",
//   "age": 20,
//   "skills": ["HTML", "CSS", "JavaScript"],
//   "address": {
//     "city": "Delhi",
//     "country": "India"
//   }
// }

// 🧩 2. Converting JSON → JavaScript Object

// When you get JSON from an API, it comes as text.
// So first, you must convert it into a JS object using JSON.parse() (or .json() with fetch).

// Example:

// const jsonData = '{"name":"Aamir","age":20}';
// const obj = JSON.parse(jsonData);

// console.log(obj.name); // Aamir
// console.log(obj.age);  // 20

// 🌍 3. Accessing JSON from an API

// Example:

// fetch("https://catfact.ninja/fact")
//   .then(response => response.json())   // converts JSON text → JS object
//   .then(data => {
//     console.log(data.fact);            // access a property
//   });


// If API returns:

// {
//   "fact": "Cats sleep 70% of their lives",
//   "length": 30
// }


// Then:

// data.fact   // "Cats sleep 70% of their lives"
// data.length // 30

// 🧠 4. Accessing Nested Data

// Example JSON:

// const user = {
//   name: "Aamir",
//   address: { city: "Delhi", country: "India" },
//   skills: ["HTML", "CSS", "JS"]
// };


// Access values:

// console.log(user.name);          // Aamir
// console.log(user.address.city);  // Delhi
// console.log(user.skills[2]);     // JS

// 🧠 In short:
// Action	Method
// Convert JSON text → JS object	JSON.parse()
// Convert JS object → JSON text	JSON.stringify()
// Access property	object.key or object["key"]
// Access array item	object.arrayName[index]
