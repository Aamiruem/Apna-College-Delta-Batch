// Slice in JavaScript: Comprehensive Guide
// The slice method in JavaScript is used to extract a section of an array or string without modifying the original. Here's a complete breakdown:

// Array.slice()

// array.slice(startIndex, endIndex)
// Parameters
// startIndex (optional): Zero-based index to start extraction (inclusive)

// Negative values count from the end (-1 = last element)

// Omitted = starts from 0

// endIndex (optional): Zero-based index to end extraction (exclusive)

// Negative values count from the end

// Omitted = extracts to end of array

// Return Value
// A new array containing the extracted elements.


const fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

// Basic usage
fruits.slice(1, 3); // ['banana', 'orange']

// Negative indices
fruits.slice(-3, -1); // ['orange', 'mango']

// Omit endIndex
fruits.slice(2); // ['orange', 'mango', 'kiwi']

// Clone array
const fruitCopy = fruits.slice();

// Array-like objects
let string = "Hello, World!";
function example() {
  return Array.prototype.slice.call(arguments);
}
example(1, 2, 3); // [1, 2, 3]
String.slice()
// Works similarly but for strings:


string.slice(startIndex, endIndex)

const str = "Hello, World!";

str.slice(7, 12); // "World"
str.slice(-6, -1); // "World"
str.slice(7); // "World!"
// Key Concepts
// Non-destructive: Original array/string isn't modified

// Shallow copy: For arrays, objects are referenced (not deep copied)

// Array-like objects: Can be used on NodeLists, arguments object, etc.

// Negative indices: Count from the end of the array/string

// Performance: Generally faster than creating new arrays with loops

// Common Use Cases
// Copying arrays/strings:


const copy = original.slice();
// Getting last N elements:


const lastThree = arr.slice(-3);
// Converting array-like objects to arrays:


const nodesArray = Array.prototype.slice.call(document.querySelectorAll('div'));
// Paginating data:

javascript
function getPage(items, page, itemsPerPage) {
  return items.slice((page - 1) * itemsPerPage, page * itemsPerPage);
}

// Differences from Similar Methods
// splice(): Modifies original array, can add/remove elements

// substring(): String method that doesn't accept negative indices

// substr(): Deprecated string method (use slice instead)

// Remember that slice is available on TypedArrays and some other JavaScript objects as well, with similar behavior.
