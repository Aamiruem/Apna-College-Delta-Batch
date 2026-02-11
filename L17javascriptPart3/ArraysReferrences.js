// Arrays References

let primary = ["red", "green", "blue", "yellow"];

let secondary = primary;

console.log(secondary);

console.log(primary);

console.log(secondary === primary);

console.log(secondary === primary);

console.log(secondary == primary);
// output: true true true true

secondary.push("pink");

console.log(primary);

console.log(secondary);

console.log(secondary === primary);

console.log(secondary == primary);
// output: [ 'red', 'green', 'blue', 'yellow', 'pink' ] [ 'red', 'green', 'blue', 'yellow', 'pink' ] true true true



let arr = ['a', 'b'];

let arrCopy = arr;

console.log(arrCopy);

console.log(arr);

console.log(arrCopy === arr);

console.log(arrCopy == arr);

arrCopy.push('c');

console.log(arr);

console.log(arrCopy);

console.log(arrCopy === arr);

console.log(arrCopy == arr);
// output: [ 'a', 'b' ] [ 'a', 'b' ] true true [ 'a', 'b', 'c' ] [ 'a', 'b', 'c' ] true true


arr.push('d');

console.log(arr);

console.log(arrCopy);

console.log(arrCopy === arr);

console.log(arrCopy == arr);















// Array References in JavaScript
// In JavaScript, arrays are reference types, which means when you assign an array to a variable or pass it to a function, you're working with a reference to the original array, not a copy.

// Key Concepts About Array References
// Assignment by Reference:

// javascript
let arr1 = [1, 2, 3];
let arr2 = arr1;  // arr2 references the same array as arr1

arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] - original array is modified
// Comparison by Reference:

javascript
let a = [1, 2, 3];
let b = [1, 2, 3];

console.log(a === b); // false - different references
console.log(a === a); // true - same reference
// Function Parameters:

// javascript
function modifyArray(arr) {
    arr.push('modified');
}

let myArray = ['original'];
modifyArray(myArray);
console.log(myArray); // ['original', 'modified']
// Creating Independent Copies
// To avoid modifying the original array, you need to create a new copy:

// Spread Operator(shallow copy):

// javascript
// let original = [1, 2, 3];
// let copy = [...original];
// Array.slice()(shallow copy):

// javascript
// let copy = original.slice();
// Array.from()(shallow copy):

// javascript
// let copy = Array.from(original);
// JSON methods(deep copy - but has limitations with special objects):

// javascript
// let deepCopy = JSON.parse(JSON.stringify(original));
// Nested Arrays(Shallow vs Deep Copy)
// Shallow copies only work one level deep:

javascript
let nested = [1, [2, 3]];
let shallowCopy = [...nested];

shallowCopy[0] = 10; // Doesn't affect original
shallowCopy[1][0] = 20; // Affects original's nested array

console.log(nested); // [1, [20, 3]]
// For truly independent copies of nested arrays, you need a deep copy solution.
