// Returns a part of the original string as new string


let msg = "apnacollege";
console.log(msg.slice(11));
console.log(msg.slice(4, msg.length-1));
console.log(msg.slice(-1)); //11-1 = 10 => e
console.log(msg.slice(-2)); //11-2 = 9 => ge

console.log(msg.slice(0, 5));

console.log(msg.slice(0, 5).toUpperCase());

console.log(msg.slice(0, 5).toUpperCase().slice(0, 3));

console.log(msg.slice(0,5).toUpperCase().slice(0,3).slice(0,1));

console.log(msg.slice(4, 11));

console.log(msg.slice(0,));

console.log(msg.slice(0, 5).toUpperCase().slice(0, 3).slice(0, 1).toLowerCase());

console.log(msg.slice(0, msg.length));


//slice method is used to extract (nikalna) a part of the string and return it as a new string without changing the original string
//slice method takes two arguments first is the starting index and second is the ending index
console.log(msg.slice(-1)); //12-1 = 11 last output = e











// Understanding slice() in JavaScript
// The slice() method in JavaScript is used to extract a portion of an array or string and return it as a new array / string without modifying the original.It is widely used for copying, substring extraction, and array manipulation.

// 🔹 slice() in Strings
// Extracts a substring from a string.

// Syntax:
// // javascript
// string.slice(startIndex, endIndex);
// startIndex(required): Where extraction begins(inclusive).

//     endIndex(optional): Where extraction ends(exclusive).If omitted, extracts till the end.

//  Examples:
// javascript
let str = "Hello, World!";

console.log(str.slice(0, 5));  // "Hello" (index 0 to 4)
console.log(str.slice(7));      // "World!" (from index 7 to end)
console.log(str.slice(-6, -1)); // "World" (negative indexing)
console.log(str.slice(7, 12)); // "World" (index 7 to 11)
// Key Points:
// ✅ Does not modify the original string(strings are immutable).
// ✅ Negative indices count from the end(-1 = last character).
// ✅ If startIndex > endIndex, returns an empty string.

// 🔹 slice() in Arrays
// Extracts a shallow copy of a portion of an array.

//     Syntax:
// javascript
// array.slice(startIndex, endIndex);
// startIndex(optional): Default = 0.

// endIndex(optional): Default = array.length.

// Examples:
// javascript

let fruits = ["🍎", "🍌", "🍊", "🍉", "🍇"];

console.log(fruits.slice(1, 3)); // ["🍌", "🍊"] (index 1 to 2)
console.log(fruits.slice(2));    // ["🍊", "🍉", "🍇"] (index 2 to end)
console.log(fruits.slice(-3));   // ["🍊", "🍉", "🍇"] (last 3 elements)
console.log(fruits.slice());     // Copies entire array (shallow copy)
// Key Points:
// ✅ Creates a new array(original remains unchanged).
// ✅ Negative indices work(-1 = last element).
// ✅ Shallow copy: Objects / arrays inside are still referenced.

// 🔹 slice() vs splice()
// Feature	slice()	splice()
// Modifies original ?	❌ No	✅ Yes
// Returns	New array / string	Removed elements
// Usage	Extract substrings / subarrays	Add / remove elements
// Negative indices	✅ Supported	✅ Supported
// Example:
// javascript
let arr = [1, 2, 3, 4, 5];

let sliced = arr.slice(1, 3); // [2, 3] (original unchanged)
let spliced = arr.splice(1, 3); // [2, 3, 4] (original modified)
// 🔹 Practical Use Cases
// Copying an array:

// javascript
let original = [1, 2, 3];
let copy = original.slice(); // [1, 2, 3]
// Extracting parts of a string:

// javascript
let email = "user@example.com";
let username = email.slice(0, email.indexOf("@")); // "user"
// Pagination(splitting arrays):

// javascript
let items = [1, 2, 3, 4, 5, 6, 7, 8];
let page1 = items.slice(0, 4); // [1, 2, 3, 4]
let page2 = items.slice(4, 8); // [5, 6, 7, 8]



// 🔹 Conclusion
// slice() is non - destructive(does not modify the original).

// Works on both strings and arrays.

// Supports negative indexing.

// Useful for copying, extracting substrings, and pagination.
