// Operators in JS
// • Arithmetic（4， ，*，1，%， **）
// • Unary(++, --)
// • Assignment(s, +=, -=, *=, I =,%= etc.)
// • Comparison (>, <, >=, <=, ==, !=, ===, !==)
// • Logical(&&, ||, !)
// • Bitwise(&, |, ^, ~, <<, >>)
// • Ternary(?, :)
// • Type(,)









/**
 * operators.js
 * A complete demonstration of JavaScript operators with examples
 */

// 1. ARITHMETIC OPERATORS
console.log("\n=== ARITHMETIC OPERATORS ===");
let a = 10, b = 3;

console.log(a + b);   // 13 (Addition)
console.log(a - b);   // 7 (Subtraction)
console.log(a * b);   // 30 (Multiplication)

console.log(a / b);   // 3.333... (Division)

console.log(a % b);   // 1 (Modulus/Remainder)

console.log(a ** b);  // 1000 (Exponentiation)

console.log(++a);     // 11 (Pre-increment)

console.log(b--);     // 3 (Post-decrement, then b becomes 2)




// 2. ASSIGNMENT OPERATORS
console.log("\n=== ASSIGNMENT OPERATORS ===");
let x = 5;
x += 2;  console.log(x);  // 7 (x = x + 2)
x -= 1;  console.log(x);  // 6 (x = x - 1)
x *= 3;  console.log(x);  // 18 (x = x * 3)
x /= 2;  console.log(x);  // 9 (x = x / 2)
x %= 4;  console.log(x);  // 1 (x = x % 4)
x **= 3; console.log(x);  // 1 (x = x ** 3)

// 3. COMPARISON OPERATORS
console.log("\n=== COMPARISON OPERATORS ===");
let num1 = 5, num2 = "5";

console.log(num1 == num2);   // true (loose equality)
console.log(num1 === num2);  // false (strict equality)
console.log(num1 != num2);   // false (loose inequality)
console.log(num1 !== num2);  // true (strict inequality)
console.log(5 > 3);         // true
console.log(5 <= 3);        // false

// 4. LOGICAL OPERATORS
console.log("\n=== LOGICAL OPERATORS ===");
let isTrue = true, isFalse = false;

console.log(isTrue && isFalse);  // false (AND)
console.log(isTrue || isFalse);  // true (OR)
console.log(!isTrue);            // false (NOT)

// 5. BITWISE OPERATORS
console.log("\n=== BITWISE OPERATORS ===");
let n1 = 5, n2 = 3;  // 5 = 0101, 3 = 0011 in binary

console.log(n1 & n2);  // 1 (0101 & 0011 = 0001)
console.log(n1 | n2);  // 7 (0101 | 0011 = 0111)
console.log(n1 ^ n2);  // 6 (0101 ^ 0011 = 0110)
console.log(~n1);      // -6 (inverts all bits)
console.log(n1 << 1);  // 10 (0101 → 1010)
console.log(n2 >> 1);  // 1 (0011 → 0001)

// 6. TERNARY OPERATOR
console.log("\n=== TERNARY OPERATOR ===");
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);  // "Yes"

// 7. TYPE OPERATORS
console.log("\n=== TYPE OPERATORS ===");
console.log(typeof "hello");  // "string"
console.log(42 instanceof Number);  // false (primitives aren't instances)

// 8. STRING OPERATORS
console.log("\n=== STRING OPERATORS ===");
let firstName = "John";
let lastName = "Doe";
console.log(firstName + " " + lastName);  // "John Doe" (concatenation)

// 9. COMMA OPERATOR
console.log("\n=== COMMA OPERATOR ===");
let y = (2, 3, 5);  // evaluates all but returns last value
console.log(y);     // 5

// 10. NULLISH COALESCING OPERATOR (??)
console.log("\n=== NULLISH COALESCING ===");
let userInput = null;
let defaultValue = "Hello";
console.log(userInput ?? defaultValue);  // "Hello" (returns right if left is null/undefined)

// 11. OPTIONAL CHAINING (?.)
console.log("\n=== OPTIONAL CHAINING ===");
const person = { name: "Alice" };
console.log(person?.address?.street);  // undefined (no error if property doesn't exist)
