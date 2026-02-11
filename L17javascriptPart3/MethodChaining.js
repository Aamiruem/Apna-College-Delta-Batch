let msg = "  Hello  ";
let newMsg = msg.trim();

console.log("After trim: ", newMsg);
// we can also do this in one line
newMsg = newMsg.toUpperCase();
console.log("After Uppercase: ", newMsg);

// Method Chaining

let msg1 = "  Hello  ";

console.log(msg1.trim().toUpperCase());





function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}















// Method Chaining in JavaScript
// Method chaining is a programming technique where multiple methods are called on the same object in a single statement, one after another.This improves readability and reduces the need for intermediate variables.

// 🔹 How Method Chaining Works
// For method chaining to work:

// Each method must return an object(often the same object, this).

// The next method is called on the result of the previous one.

// 🔹 Example 1: String Method Chaining
// Since strings are immutable, each method returns a new string, allowing chaining.

// javascript
let text = "   Hello, World!   ";
let result = text.trim().toUpperCase().replace("WORLD", "JavaScript");
console.log(result); // "HELLO, JAVASCRIPT!"


// Breakdown:
// trim() → Removes whitespace → "Hello, World!"

// toUpperCase() → Converts to uppercase → "HELLO, WORLD!"

// replace("WORLD", "JavaScript") → Replaces text → "HELLO, JAVASCRIPT!"

// 🔹 Example 2: Array Method Chaining
// Arrays are mutable, but methods like map(), filter(), and slice() return new arrays.

// javascript
let numbers = [1, 2, 3, 4, 5];
let squaredEvenNumbers = numbers
    .filter(num => num % 2 === 0) // [2, 4]
    .map(num => num * num);        // [4, 16]
console.log(squaredEvenNumbers); // [4, 16]
// Breakdown:
// filter() → Keeps even numbers →[2, 4]

// map() → Squares each number →[4, 16]

// 🔹 Example 3: Custom Object with Method Chaining
// To enable chaining in your own objects, return this after each method.

// javascript
class Calculator {
    constructor(value = 0) {
        this.value = value;
    }

    add(num) {
        this.value += num;
        return this; // Enables chaining
    }

    subtract(num) {
        this.value -= num;
        return this;
    }

    multiply(num) {
        this.value *= num;
        return this;
    }

    getResult() {
        return this.value;
    }
}

let calc = new Calculator(10);
let results = calc.add(5).subtract(3).multiply(2).getResult();
console.log(results); // (10 + 5 - 3) * 2 = 24
// Breakdown:
// add(5) → 15

// subtract(3) → 12

// multiply(2) → 24

// 🔹 Pros & Cons of Method Chaining
// Pros ✅	Cons ❌
// Cleaner, more readable code	Harder to debug(all in one line)
// Reduces temporary variables	Can lead to long, complex chains
// Encourages functional programming style	Requires methods to return objects
// 🔹 Conclusion
// Method chaining improves readability by avoiding intermediate variables.

// Works with built -in methods(string, array, promises, etc.).

// For custom objects, return this to enable chaining.

// Try It Yourself!
// javascript

let sentence = "   JavaScript is fun!   ";
let modified = sentence.trim().toUpperCase().split(" ").join("-");
console.log(modified); // "JAVASCRIPT-IS-FUN!"

// Would you like a deeper dive into any specific aspect of method chaining ? 🚀
