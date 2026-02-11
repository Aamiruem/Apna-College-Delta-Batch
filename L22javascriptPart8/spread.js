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
