// Write a JavaScript program to strip leading and trailing spaces from a string.

function stripSpaces(str) {
  return str.trim();
}

let str = "   Hello World!   ";
console.log(stripSpaces(str)); // Output: "Hello World!"
