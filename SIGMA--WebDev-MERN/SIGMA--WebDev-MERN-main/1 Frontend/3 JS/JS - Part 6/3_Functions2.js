// Function Expressions - Another way to define a function in a variable
let sumFunc = function(a, b) {
    return a + b;
}
console.log("Sum using funcExpressions :", sumFunc(5, 2));

let hlo = function() {
    console.log("Print hlo using funcExpressions : Hello!");
}
hlo();

hlo = function() {
    console.log("Changed hlo using funcExpressions : AssalamuAleikum");
}
hlo();


// Higher Order Functions :-
// A function that takes another function as an argument or returns a function as a result.
console.log("High order function example :");
function multipleGreet(func, count) { // higher order function
    for (let i=1; i<=count; i++) {
        func();
    }
}
function greet() {
    console.log("AssalamuAleikum");
}
multipleGreet(greet, 3); // function in function call
multipleGreet(function() {console.log("Helo")}, 2); // also it will be fine

// Higher order functions : Returns a function 
console.log("High order function (which returns a function) example :");
function oddEvenFactory(request) {
    if (request == "odd") {
        return function(num) {
            console.log(!(num%2 == 0));
        }
    }
    else if (request == "even") {
        return function(num) {
            console.log(num%2 == 0);
        }
    }
    else {
        console.log("Wrong request");
    }
}
let oddCheck = oddEvenFactory("odd");
oddCheck(5);/*true*/ oddCheck(8);/*false*/

let evenCheck = oddEvenFactory("even");
evenCheck(10);/*true*/ evenCheck(15);/*false*/


/* Methods :-
          Actions that can be performed on an object or
          A function that is a property of an object.    */
const calculator = {
    add: function(a, b) {
        return a+b;
    },
    sub: function(a, b) {
        return a-b;
    },
    mul: function(a, b) {
        return a*b;
    }
};
console.log("Addition using method of calculator object :", calculator.add(5, 4));
console.log("Substraction using method of calculator object :", calculator.sub(7, 3));
console.log("Multiplication using method of calculator object :", calculator.mul(3, 5));

// Methods : ShortHand
const shortHandCalculator = {
    add(a, b) {
        return a+b;
    },
    sub(a, b) {
        return a-b;
    },
    mul(a, b) {
        return a*b;
    },
};
console.log("ShortHand for writing a method :");
console.log("Addition :", shortHandCalculator.add(5, 4));
console.log("Substraction :", shortHandCalculator.sub(7, 3));
console.log("Multiplication :", shortHandCalculator.mul(3, 5));