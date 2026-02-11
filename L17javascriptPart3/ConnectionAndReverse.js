// 🔗 1. Connection (Merging Arrays) – concat() or Spread ...
// ➤ Using concat():

let arr1 = [1, 2];
let arr2 = [3, 4];

let result = arr1.concat(arr2);
console.log(result); // [1, 2, 3, 4]
// ➤ Using Spread Operator (...):

let result1 = [...arr1, ...arr2];
console.log(result1); // [1, 2, 3, 4]
// 🔁 2. Reversing – reverse()

let arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr); // [4, 3, 2, 1]
// reverse() modifies the original array (in-place).

// If you want to keep the original array, copy it first:


let reversed = [...arr].reverse();


let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "violet"];

let allColors = primary.concat(secondary);
console.log(allColors); 
// ['red', 'yellow', 'blue', 'orange', 'green', 'violet']

let reverseColors = secondary.concat(primary);
console.log(reverseColors); 
// ['orange', 'green', 'violet', 'red', 'yellow', 'blue']

// array.methodName();

