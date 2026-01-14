let y = null;
console.log(y); // null

let person = {
  name: "Alice",
  age: null, // Age not set
};
console.log(person.age); // null

function findObject() {
  // some condition to determine object presence
  return null; // if object not found
}
console.log(findObject()); // null

console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is actually a quirk in JavaScript)

console.log(null == undefined); // true

console.log(null === undefined); // false

let a;
let b = null;

if (a == null) {
  // true for both null and undefined
  console.log("a is null or undefined");
}

if (b === null) {
  // true only for null
  console.log("b is null");
}

if (typeof a === "undefined") {
  // true only for undefined
  console.log("a is undefined");
}

function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

greet(); // "Hello, Guest"
greet(undefined); // "Hello, Guest"
greet(null); // "Hello, null" (null is not replaced by default value)

let user = {
  profile: {
    name: "Alice",
  },
};

// Optional chaining to avoid errors on undefined
let userName = user.profile?.name;
console.log(userName); // "Alice"

// Nullish coalescing operator (??) to provide default value
let greeting = null ?? "Hello, Guest!";
console.log(greeting); // "Hello, Guest!"




// null & undefined in JS
// undefined
// A variable that has not been assigned a value is of
// type undefined.
// › let a;
// ‹ undefined
// › a
// ‹ undefined
// null —
// The null value represents the intentional absence of
// any object value.
// To be explicitly assigned.
// › let a = null;
// ‹ undefined
// ＞
// a
