let name = "kamran";

console.log(`Hello ${name}!`); // Output: Hello kamran!




let x = 5;
let sum = function(a, b){
    return x =  a + b;
}

let hello = function(){
    console.log("hello");
}


hello = function(){
    console.log("world");
}






// A function expression is when a function is assigned to a variable.It can be named or anonymous(unnamed), and unlike function declarations, function expressions are not hoisted.

// 🔸 Syntax Example:
// javascript
// Copy
// Edit
// ✅ Anonymous function expression
const greet = function () {
    console.log("Hello, world!");
};

greet(); // 🔄 Outputs: Hello, world!
// 🔸 Named Function Expression:
// javascript
// Copy
// Edit
const sayHi = function greetByName() {
    console.log("Hi there!");
};

sayHi(); // 🔄 Works: Outputs "Hi there!"
// greetByName(); ❌ Error: greetByName is not defined in the outer scope
// 🔍 Line - by - Line Explanation with Comments:
// javascript
// Copy
// Edit
const greet1 = function () {
    // 👆 Function expression: a function (anonymous) is assigned to variable 'greet'
    // This function is not hoisted, so must be declared before use
    console.log("Hello, world!");
};

greet1();
// ✅ Function is called using the variable 'greet'
// 🔄 Output: Hello, world!
// ⚠️ Key Differences from Function Declaration:
// javascript
// Copy
// Edit
sayHello(); // ✅ Works (hoisted)

function sayHello() {
    console.log("Hello!");
}
// javascript
// Copy
// Edit
sayHi(); // ❌ Error: Cannot access 'sayHi' before initialization

const sayHi1 = function () {
    console.log("Hi!");
};

// ✅ Summary
// Feature	Function Declaration	Function Expression
// Name required	Yes	Optional(can be anonymous)
// Hoisting	Yes	No
// Can be called before definition	Yes	No
// Syntax	function myFunc() { } const myFunc = function () { }
