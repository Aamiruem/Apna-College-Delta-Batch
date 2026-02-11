// ✅ Spread in Object Literals
// The spread operator (...) copies own enumerable properties from one object into another. It's often used to clone, merge, or extend objects.

// 🔹 1. Cloning an Object
// javascript
// Copy code
const original = { a: 1, b: 2 };
const copy = { ...original };

console.log(copy); // { a: 1, b: 2 }
// 🔹 2. Merging Two Objects
// javascript
// Copy code
const obj1 = { a: 1 };
const obj2 = { b: 2 };

const merged = { ...obj1, ...obj2 };

console.log(merged); // { a: 1, b: 2 }
// 🔹 3. Overriding Properties
// javascript
// Copy code
const user = { name: "Alice", age: 25 };
const updated = { ...user, age: 26 };

console.log(updated); // { name: "Alice", age: 26 }
// 🔹 4. Adding New Properties
// javascript
// Copy code
const base = { x: 10 };
const extended = { ...base, y: 20 };

console.log(extended); // { x: 10, y: 20 }
// 🔹 5. Nested Spread (Shallow Copy)
// javascript
// Copy code
const person = {
  name: "Bob",
  address: { city: "Delhi", zip: 110001 }
};

const clone = { ...person };
clone.address.city = "Mumbai";

console.log(person.address.city); // "Mumbai" (because nested objects are not deep copied)
// ✅ Note: The spread operator only does a shallow copy — nested objects are still references.
