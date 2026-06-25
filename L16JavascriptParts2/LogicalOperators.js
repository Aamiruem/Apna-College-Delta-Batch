// Logical AND (&&):

// a && b is false because b is false.
// x < y && y < z is true because both comparisons are true.
// Logical OR (||):

// a || b is true because a is true.
// x > y || y < z is true because y < z is true.
// Logical NOT (!):

// !a is false because a is true.
// !b is true because b is false.
// Combining Logical Operators:

// a && (x < y || y > z) is true because (x < y || y > z) is true.
// b || !(x > z) is true because !(x > z) is true.
// Using Logical Operators in if-else Statements:

// Demonstrates how logical operators can control the flow of a program using conditional statements.







let a = true;
let b = false;
let x = 5;
let y = 10;
let z = 15;

console.log("Logical operators example:");

// Logical AND (&&)
console.log("a && b:", a && b); // false, because b is false
console.log("x < y && y < z:", x < y && y < z); // true, both comparisons are true

// Logical OR (||)
console.log("a || b:", a || b); // true, because a is true
console.log("x > y || y < z:", x > y || y < z); // true, because y < z is true

// Logical NOT (!)
console.log("!a:", !a); // false, because a is true
console.log("!b:", !b); // true, because b is false

// Combining logical operators
console.log("a && (x < y || y > z):", a && (x < y || y > z)); // true, because (x < y || y > z) is true
console.log("b || !(x > z):", b || !(x > z)); // true, because !(x > z) is true

// Using logical operators in if-else statements
if (a && b) {
    console.log("Both a and b are true");
} else {
    console.log("Either a or b is false (or both)");
}

if (x < y || y > z) {
    console.log("At least one of the conditions x < y or y > z is true");
} else {
    console.log("Neither x < y nor y > z is true");
}

if (!b) {
    console.log("b is false");
} else {
    console.log("b is true");
}

// More complex condition
if ((x < y && y < z) || !a) {
    console.log("Complex condition is true");
} else {
    console.log("Complex condition is false");
}
