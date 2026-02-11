// Qs4: Write a JS program to print the factorial of a number n.
// Example: 7! = 1 * 2 * 3 * 4 * 5 * 6 * 7 = 5040

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

let n = 7;
console.log(factorial(n)); // Output: 5040
