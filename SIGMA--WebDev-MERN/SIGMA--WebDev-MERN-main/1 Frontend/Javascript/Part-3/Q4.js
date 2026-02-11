// Write a JavaScript program to test whether the character at a given index is lowercase.

function isLowercaseAt(str, index) {
  return (
    str[index] === str[index].toLowerCase() &&
    str[index] !== str[index].toUpperCase()
  );
}

let str = "JavaScript";
let index = 4;
console.log(isLowercaseAt(str, index)); // Output: true
