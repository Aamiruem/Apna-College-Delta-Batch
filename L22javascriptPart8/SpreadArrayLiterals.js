// ✅ Spread in Array Literals
// The spread operator (...) lets you expand iterables (like arrays) into individual elements in a new array.

// 🔹 1. Merging Arrays
// javascript
// Copy code
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];

console.log(merged); // [1, 2, 3, 4]
// 🔹 2. Cloning an Array
// javascript
// Copy code
const original = [5, 6, 7];
const clone = [...original];

console.log(clone); // [5, 6, 7]
// 🔹 3. Adding Elements While Copying
// javascript
// Copy code
const base = [2, 3];
const extended = [1, ...base, 4];

console.log(extended); // [1, 2, 3, 4]
// 🔹 4. Spreading Strings into Arrays
// javascript
// Copy code
const str = "hello";
const chars = [...str];

console.log(chars); // ['h', 'e', 'l', 'l', 'o']
// 🔹 5. Using with Math Functions
// javascript
// Copy code
const numbers = [8, 4, 6];
const max = Math.max(...numbers);

console.log(max); // 8





