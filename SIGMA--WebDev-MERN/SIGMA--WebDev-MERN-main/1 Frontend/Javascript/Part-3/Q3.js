//Write a JavaScript program to check whether a string is blank or not.

function isStringBlank(str) {
  return str.trim() === "";
}

let str = "";
console.log(isStringBlank(str)); // Output: true
