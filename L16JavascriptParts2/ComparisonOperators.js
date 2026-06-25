console.log(5 == 5); // true
console.log(5 == '5'); // true (performs type conversion)


console.log(5 != 4); // true
console.log(5 != '5'); // false (performs type conversion)

console.log(5 === 5); // true
console.log(5 === '5'); // false (no type conversion)

// Strict Not Equal (!==):
console.log(5 !== 4); // true
console.log(5 !== '5'); // true (no type conversion)

console.log(5 > 4); // true
console.log(5 > 6); // false


console.log(5 >= 5); // true
console.log(5 >= 6); // false



console.log(5 < 6); // true
console.log(5 < 4); // false


console.log(5 <= 5); // true
console.log(5 <= 4); // false






// Equal
console.log(5 == 5); // true
console.log(5 == '5'); // true (type conversion occurs)

// Not Equal
console.log(5 != 4); // true
console.log(5 != '5'); // false (type conversion occurs)

// Strict Equal
console.log(5 === 5); // true
console.log(5 === '5'); // false (no type conversion)

// Strict Not Equal
console.log(5 !== 4); // true
console.log(5 !== '5'); // true (no type conversion)

// Greater Than
console.log(5 > 4); // true
console.log(5 > 6); // false

// Greater Than or Equal
console.log(5 >= 5); // true
console.log(5 >= 6); // false

// Less Than
console.log(5 < 6); // true
console.log(5 < 4); // false

// Less Than or Equal
console.log(5 <= 5); // true
console.log(5 <= 4); // false







let a = 5;
let b = '5';
let c = 10;
let d = 15;

console.log("Comparison operators example:");

console.log("a == b:", a == b); // true because '5' is converted to 5
console.log("a === b:", a === b); // false because different types (number vs string)
console.log("a != b:", a != b); // false because '5' is converted to 5
console.log("a !== b:", a !== b); // true because different types

console.log("a < c:", a < c); // true because 5 is less than 10
console.log("a > c:", a > c); // false because 5 is not greater than 10
console.log("a <= c:", a <= c); // true because 5 is less than or equal to 10
console.log("a >= c:", a >= c); // false because 5 is not greater than or equal to 10

console.log("c < d:", c < d); // true because 10 is less than 15
console.log("c > d:", c > d); // false because 10 is not greater than 15
console.log("c <= d:", c <= d); // true because 10 is less than or equal to 15
console.log("c >= d:", c >= d); // false because 10 is not greater than or equal to 15

// Combining comparisons with logical operators
console.log("a < c && c < d:", a < c && c < d); // true because both conditions are true
console.log("a < c || c > d:", a < c || c > d); // true because at least one condition is true

// Using comparison in if-else statements
if (a == b) {
    console.log("a is equal to b (==)");
} else {
    console.log("a is not equal to b (==)");
}

if (a === b) {
    console.log("a is strictly equal to b (===)");
} else {
    console.log("a is not strictly equal to b (===)");
}

if (a < c) {
    console.log("a is less than c");
} else if (a > c) {
    console.log("a is greater than c");
} else {
    console.log("a is equal to c");
}
