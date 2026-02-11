let greeting = "Hello"; //global scope

function changeGreet(){
    greet = "Goodbye"; // function scope
    console.log(greeting);
    function innerGreet(){
        console.log(greeting);//lexical scope
    }
    innerGreet(); // call innerGreet (lexical scope)
}
console.log(greeting);
changeGreet();




let greet = "Hello"; // 🌍 GLOBAL SCOPE
// A variable 'greet' is declared and initialized globally with the value "Hello"

function changeGreet() {
    // This function is defined but not yet called

    greet = "Goodbye"; // ✅ Updates the global 'greet' variable
    // No 'let', 'const', or 'var' before greet, so it refers to the already declared global 'greet'
    // It updates greet's value from "Hello" to "Goodbye"

    console.log(greet); // 🔄 Outputs: "Goodbye"
    // Logs the updated value of 'greet'

    function innerGreet() {
        // inner function defined inside changeGreet (function scope)
        console.log(greet); // 🔄 Outputs: "Goodbye"
        // Lexical scope: innerGreet can access greet from its outer function scope
    }

    innerGreet(); // ✅ Calls innerGreet which prints "Goodbye"(Lexical scope)
}

console.log(greet); // 🔄 Outputs: "Hello"
// Even though greet is changed inside the function, it hasn’t been called yet, so value is still "Hello"

changeGreet(); // ✅ Function is called
// greet is updated to "Goodbye", and both "Goodbye" and "Goodbye" are printed by changeGreet



Hello     // from console.log(greet); before calling the function
Goodbye   // from console.log(greet); inside changeGreet
Goodbye   // from innerGreet()



// 🔍 Key Concepts:
// Global Scope: greet is accessible anywhere in the file.

// Function Scope: changeGreet creates a local context.

// Lexical Scope: innerGreet can access greet from its outer function.

// No redeclaration of greet inside the function, so it modifies the global variable.
