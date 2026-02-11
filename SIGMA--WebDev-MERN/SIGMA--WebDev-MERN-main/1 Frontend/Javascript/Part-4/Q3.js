// Qs3: Write a JS program to find the sum of digits in a number.
// Example: If number = 287152, sum = 25

function sumOfDigits(number) {
  return number
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
}

let number = 287152;
console.log(sumOfDigits(number)); // Output: 25
