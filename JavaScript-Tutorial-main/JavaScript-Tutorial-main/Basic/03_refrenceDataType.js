//Refrence Data Type

// 1. Object
let person = {
    name: "Mohit",
    age: 30,
    city: "New York"
}
console.log(person.name); // Output: Mohit
console.log(person.age); // Output: 30
console.log(person.city); // Output: New York
console.log(person); // Output: { name: 'Mohit', age: 30, city: 'New York' }
console.log(typeof person); // Output: object

// 2. Array
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Mango
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Mango' ]
console.log(typeof fruits); // Output: object

// 3. Function
function greet() {
    console.log("Hello, Mohit Decodes!");
}
console.log(greet()); // Output: [Function: greet]
console.log(typeof greet); // Output: function

// Alert is not working in Node
alert("Hello, Mohit Decodes!"); // Output: Hello, Mohit Decodes!

