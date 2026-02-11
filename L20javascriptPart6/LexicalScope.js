// Lexical Scope
// a variable defined outside a function can be accessible inside another function defined after the variable declaration


// The opposite is NOT true

function outerFunc(){
    let x = 5;
    let y = 6;

    function innerFunc(){
        console.log(x);
    }

    innerFunc();

    console.log(y);
}




function outerFunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){ // function scope
        let a = 10;
        console.log(x);
        console.log(y);
    }

    console.log(a);
    innerFunc();
}
// Lexical Scope => inner function can access outer function variables due to closure scope  but (outer function can not access inner function )not vice versa






//explain above code these two explanation 
// ✅ First Block Explained:
// javascript
// Copy
// Edit
function outerFunc() {
    let x = 5; // x is defined in outerFunc's scope
    let y = 6; // y is also in outerFunc's scope

    function innerFunc() {
        console.log(x); // ✅ innerFunc can access x due to lexical (closure) scope
    }

    innerFunc(); // Calls innerFunc, so x = 5 is printed

    console.log(y); // ✅ y = 6 is printed next
}

// Calling outerFunc will print:
// 5
// 6
// Summary:

// innerFunc has access to variables x and y from its outer function due to lexical scoping(closures).

// Both console.log(x) and console.log(y) will work as expected.

// ❌ Second Block Explained(with an error):
// javascript
// Copy
// Edit
function outerFunc() {
    let x = 5; // defined in outerFunc scope
    let y = 6;

    function innerFunc() { // innerFunc's own scope
        let a = 10; // 'a' is declared inside innerFunc only
        console.log(x); // ✅ can access x from outerFunc
        console.log(y); // ✅ can access y from outerFunc
    }

    console.log(a); // ❌ ReferenceError: a is not defined
    innerFunc(); // This line is never reached due to the error above
}
// Summary:

// Variable a is declared inside innerFunc, so it’s not accessible in the outerFunc.

// Attempting console.log(a) in the outer scope causes a ReferenceError.

// As a result, innerFunc() is never called.

// ✅ Fix the Error Version:
// If you want it to work properly:

// javascript
// Copy
// Edit
function outerFunc() {
    let x = 5;
    let y = 6;

    function innerFunc() {
        let a = 10;
        console.log(x); // prints 5
        console.log(y); // prints 6
        console.log(a); // prints 10
    }

    innerFunc(); // now works fine, prints all values
}









// 🔍 Lexical Scope in JavaScript — Simple & Clear Explanation
// ✅ Definition:
// Lexical Scope(also called static scope) means that a function’s ability to access variables is determined by where it is defined in the code, not where it is called.

// Inner functions can access variables from their outer(parent) functions.

// 🧠 Think of it like this:
// Scope is decided at the time of writing code, not during execution.

// A function remembers where it was defined, and what variables were around it.

// 📌 Example:
// js
// Copy
// Edit
function outer() {
    let message = "Hello from outer!";

    function inner() {
        console.log(message); // ✅ has access to outer's variable
    }

    inner();
}
outer();
// Even though message is not inside inner(), it still works because inner() is defined inside outer().

//     That’s lexical scope — inner functions have access to the lexical environment they were defined in.

// ⚠️ Contrast With Dynamic Scope(Not in JavaScript):
// JavaScript does not use dynamic scope, where variable access is determined by where a function is called.

//     js
// Copy
// Edit
// Not how JS works:
function printName() {
    console.log(name);
}

function caller() {
    let name = "Aamir";
    printName(); // ❌ this won't access 'name' from here
}

let name = "Global";
caller(); // ✅ prints "Global" — because printName was defined in global scope
// 📦 Lexical Scope + Closure:
// Lexical scope is what makes closures possible — when a function "remembers" its outer variables even after the outer function has finished running.

//     js
// Copy
// Edit
function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    };
}

const counter = outer(); // returns the inner function
counter(); // 1
counter(); // 2
// ✔️ inner() still remembers count, because of lexical scope.

// ✅ Summary Table:
// Term	Meaning
// Lexical Scope	Scope is based on where code is written
// Inner Function	Can access parent’s variables
// Closures	Use lexical scope to “remember” values
// When Decided	At definition time, not call time
