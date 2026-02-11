// arr.reduce(reducer function with 2 variables for (accumulator, element));
// reducer function is a function that takes 2 variables and returns a value
// accumulator is the value that is returned from the previous iteration
// element is the value of the current iteration





let nums = [1, 2, 3, 4, 5];

let sum = nums.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum);

// accumulator = result short form as res 

let num = [1, 2, 3, 4];

let sum1 = num.reduce((res, ele) => (res + ele));

console.log(sum1);



//notes

// Array Prototype Methods
// Basic Operations:
// at(index) - Gets element at specific index (supports negative indexes)

// concat(arr) - Merges arrays and returns new array

// copyWithin(target, start, end) - Copies array elements within the array

// fill(value, start, end) - Fills array with static value

// includes(element) - Checks if array contains element

// join(separator) - Joins elements into string

// slice(start, end) - Returns shallow copy of portion

// toString() - Converts array to string

// Stack/Queue Operations:
// push(element) - Adds to end

// pop() - Removes from end

// shift() - Removes from start

// unshift(element) - Adds to start

// Iteration Methods:
// forEach(callback) - Executes function for each element

// map(callback) - Creates new array with results

// filter(callback) - Creates new array with passing elements

// reduce(callback, initial) - Reduces to single value

// find(callback) - Returns first matching element

// some(callback) - Tests if any element passes

// every(callback) - Tests if all elements pass

// Search Methods:
// indexOf(element) - Returns first index of element

// lastIndexOf(element) - Returns last index of element

// findIndex(callback) - Returns index of first matching element

// New ES2023 Methods:
// toReversed() - Returns new reversed array

// toSorted(compareFn) - Returns new sorted array

// toSpliced(start, deleteCount, ...items) - Returns new spliced array

// with(index, value) - Returns new array with modified element

// Iterator Methods:
// entries() - Returns key/value pairs

// keys() - Returns array keys

// values() - Returns array values

// Symbol.iterator - Allows arrays to be iterable




// Example Usage:
// javascript
const fruits = ['apple', 'banana', 'orange'];

// Basic operations
console.log(fruits.at(-1)); // 'orange' (last element)
console.log(fruits.join(' | ')); // "apple | banana | orange"

// Stack operations
fruits.push('mango');
console.log(fruits); // ['apple', 'banana', 'orange', 'mango']

// Iteration
const lengths = fruits.map(fruit => fruit.length);
console.log(lengths); // [5, 6, 6, 5]

// Search
console.log(fruits.find(f => f.includes('nana'))); // 'banana'

// New ES2023 methods
const reversed = fruits.toReversed();
console.log(reversed); // ['mango', 'orange', 'banana', 'apple']
// Key Notes:
// Methods like map, filter, slice return new arrays rather than modifying the original

// Newer methods like toReversed() provide immutable alternatives to mutating methods like reverse()

// The Symbol.iterator allows arrays to work with for...of loops

// All arrays inherit these methods from Array.prototype

// This comprehensive set of methods makes JavaScript arrays extremely powerful for data manipulation.







console.log("this is last value ")


let nums1 = [1, 2, 3, 4, 5];
let finalValue = nums1.reduce(function (res, ele) {
    console.log("this is res " + res)
    return res + ele;
    
});
console.log("this is final value " + finalValue); // Output: 15
