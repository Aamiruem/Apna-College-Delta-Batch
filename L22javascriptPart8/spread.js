// spread operator in JavaScript is a powerful syntax that allows you to expand elements of an iterable (like an array or object) into individual elements. It is denoted by three dots (...). The spread operator can be used in various contexts, such as function calls, array literals, and object literals.It is often used to find the minimum or maximum value in an array, combine arrays, or merge objects.

//  🔹 Example: Finding Minimum and Maximum Values in an Array
// javascript

let numbers = [5, 2, 9, 1, 5, 6];

let mins = Math.min(...numbers);
console.log("Minimum value:", mins); // Output: Minimum value: 1

let max = Math.max(...numbers);
console.log("Maximum value:", max); // Output: Maximum value: 9

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let min = Math.min(arr);

// console.log(min);





let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let min = Math.min(...arr); //three dot means spread value to find the min and max
console.log("min value = ", min);


// let arr2 = [...arr, 10, 11, 12, 13, 14, 15]; //spread operator
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let max1 = Math.max(...arr); //three dot means spread value to find the min and max

console.log("max value = ", max1);




// 🔹 Example: Spread with Arrays
// javascript
// Copy code
let arr2 = [1, 2, 3];
let arr3 = [4, 5, 6];

let combined = [...arr2, ...arr3];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]




// 🔹 Example: Spread with Objects
// javascript
// Copy code
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { a: 1, b: 2, c: 3, d: 4 }



// 🔹 Example: Copying Arrays or Objects
// javascript
// Copy code
let original = [100, 200];
let copy = [...original];

original.push(300);
console.log(copy);     // [100, 200]
console.log(original); // [100, 200, 300]
