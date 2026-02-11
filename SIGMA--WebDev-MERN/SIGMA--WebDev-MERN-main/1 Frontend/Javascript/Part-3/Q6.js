// Write a JavaScript program to check if an element exists in an array or not.

function elementExists(arr, element) {
  return arr.includes(element);
}

let array = [1, 2, 3, 4, 5];
let element = 3;
console.log(elementExists(array, element)); // Output: true
