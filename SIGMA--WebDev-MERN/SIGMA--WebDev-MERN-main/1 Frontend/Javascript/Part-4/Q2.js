// Qs2: Write a JS program to find the number of digits in a number.
// Example: If number = 287152, count = 6

function countDigits(number) {
  return number.toString().length;
}

let number = 287152;
console.log(countDigits(number)); // Output: 6
