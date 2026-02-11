// SCOPE in JS

/* 1. Global scope :-
                    Variables defined inside a program are accessible (visible) from anywhere
                    within the program/file. */
let hlo = "Hwllo"; // Global scoped
console.log("Global scoped :", hlo); // Everywhere can use in this js file


/* 2. Function scope :-
                    Variables defined inside a function are not accessible (visible) from outside
                    the function. Only accessible within the function. */
function calcSum(a, b) {
    let sum = a + b;
    console.log("Function scoped :", sum); // it can access sum in only function
    console.log("Global scoped inside function :", hlo); // Everywhere can use in this js file
}
calcSum(5, 10); // function call
// console.log(sum); // it can't access to sum because sum is defined in the function
console.log("Global scoped :", hlo); // Everywhere can use in this file (Global scope)


/* 3. Block scope :-
                Variables declared inside the curly braces {} (like if, else, switch, loop, etc.)
                cannot be accessed from outside the block. Only accessible within the block of ().
                It will not apply on "var", will be apply on "let" & "const" */
{
    let a = "A is let";
    console.log("Block scoped :", a); // it can accessible inside the block only
    const b = "B is const";
    console.log("Block scoped :", b); // it can accessible inside the block only
    var c = "C is var";
    console.log("Block scoped :", c); // Block scope not apply on it, so it can access from anywhere
}
// console.log("Block scoped outside block :", a); // it can't access because it's block scoped
// console.log("Block scoped outside block :", b); // it can't access because it's block scoped
console.log("Block scoped outside block :", c); // it can access because block scope not apply on it
for (let i=1; i<=3; i++) { // i is block scoped
    console.log("Block scoped inside loop :", i); // it can accessible inside the block of loop only
}
// console.log("Block scoped outside loop :", i); // it can't access because it's in the block
let age = 19;
if (age >= 18) {
    let isAdult = "Adult";
    console.log("Block scoped inside if :", isAdult); // it can accessible inside the block of if condition
}
// console.log("Block scoped outside if :", isAdult); // it can't access because it's in the block of if condition


/* 4. Lexical scope :-
                    Variables defined inside a function are accessible from within 
                    the function and also from within any nested functions.
                    But opposite is NOT true. */
function outerFunc() {
    let a = "Outer variable a";
    let b = "Outer variable b";
    console.log("Lexical scope inside outer function :", b);
    function innerFunc() {
        console.log("Lexical scope inside inner function :", a); // it can access outer function variables
        console.log("Lexical scope inside inner function :", b); // it can access outer function variables
        let c = "Inner variable c";
        console.log("Lexical scope inside inner function :", c); // it can accessible inside the inner
    }
    console.log("Lexical scope outside inner function :", c); // it is opposite, so it will not accessed
    innerFunc(); // function call : outer function will call to this
}
outerFunc(); // function call

// NOTE : Read some about Hoisting after do this


// Practice Qs
let greet = "Helo";

function changeGreet() {
    let greet = "AssalamuAleikum";
    console.log(greet);

    function innerGreet() {
        console.log(greet); // it will not print without function call
    }
}
console.log(greet); // it will print "Helo"
changeGreet(); // it will print "AssalamuAleikum"