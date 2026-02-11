// storing values of array into multiple variables
let names = ["tony", "bruce", "steve", "peter"];
// let [winner, runnerup, secondRunnerup] = names;
// console.log(winner, runnerup, secondRunnerup); // bruce tony



let [winner, runnerup, ...others] = names;
console.log(winner, runnerup, ...others); 



// 🔹 1. Array Destructuring
// javascript
// Copy code
const numbers = [10, 20, 30];

// Basic
const [a, b, c] = numbers;
console.log(a, b, c); // 10 20 30

// Skipping elements
const [, second] = numbers;
console.log(second); // 20

// Default values
const [x, y, z = 100] = [1, 2];
console.log(x, y, z); // 1 2 100
// 🔹 2. Object Destructuring
// javascript
// Copy code
const person = {
  name: "Alice",
  age: 28,
  city: "Delhi"
};

// Basic
const { name, age } = person;
console.log(name, age); // Alice 28

// Renaming variables
const { city: location } = person;
console.log(location); // Delhi

// Default values
const { job = "Engineer" } = person;
console.log(job); // Engineer
// 🔹 3. Nested Destructuring
// javascript
// Copy code
const user = {
  id: 1,
  profile: {
    username: "john_doe",
    contact: {
      email: "john@example.com"
    }
  }
};

const {
  profile: {
    username,
    contact: { email }
  }
} = user;

console.log(username, email); // john_doe john@example.com
// 🔹 4. Function Parameters Destructuring
// javascript
// Copy code
function greet({ name, age }) {
  console.log(`Hello ${name}, age ${age}`);
}

greet({ name: "Bob", age: 30 }); // Hello Bob, age 30
