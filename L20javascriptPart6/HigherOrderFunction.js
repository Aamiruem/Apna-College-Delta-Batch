// Higher Order Function
//Takes one or multiple functions as arguments or returns a function

function multipleGreet(func, count) {
    for (let i = 0; i < count; i++) {
        func();
        func(`Hello, World! ${i + 1}`);
    }
}


// function multipleGreet(func, n) {
//     for(let i = 0; i < n; i++){
//         func();
//         func(`Hello, World! ${i+1}`);
//     }
// }

// let greet = function(){
//     console.log('Hello, World!');
// }
// multipleGreet(greet, 2);






// explain above code
// ✅ Code with Explanation
// javascript
// Copy
// Edit
// Function 'multipleGreet' takes a function 'func' and a number 'n'
function multipleGreet(func, n) {
    // Loop runs 'n' times
    for (let i = 0; i < n; i++) {
        func(); // 🔁 Call the function without any arguments
        func(`Hello, World! ${i + 1}`); // 🔁 Call the function with a string argument
        // This will only work if 'func' can accept a parameter
    }
}
javascript
Copy
Edit
// Function expression assigned to 'greet'
let greet1 = function () {
    console.log('Hello, World!');
    // ⚠️ This function takes no parameters, so any passed argument is ignored
};
javascript
Copy
Edit
// Call 'multipleGreet' with 'greet' function and count = 2
multipleGreet(greet, 2);
// Loop will run 2 times
// Each time, greet() will be called twice:
//    - once with no argument
//    - once with a string (but it will still ignore the string)
// 🧠 What Actually Happens:
// Even though func() is being called with a string(func("Hello, World! 1")), your greet function is defined without parameters, so it ignores any arguments.

// 🔄 Output:
// text
// Copy
// Edit
// Hello, World!   // from func()
// Hello, World!   // from func('Hello, World! 1')
// Hello, World!   // from func()
// Hello, World!   // from func('Hello, World! 2')
// ✅ Total: 4 times "Hello, World!" printed(2 iterations × 2 calls)

// ⚠️ If you want to use the argument, change greet to accept a parameter:
// javascript
// Copy
// Edit
let greet2 = function (message) {
    console.log(message);
};
// Then output would be:
// text
// Copy
// Edit
// undefined
// Hello, World! 1
// undefined
// Hello, World! 2
// Or better yet:

// javascript
// Copy
// Edit
let greet3 = function (message = "Hello, World!") {
    console.log(message);
};
// Now it prints:

// text
// Copy
// Edit
// Hello, World!
// Hello, World! 1
// Hello, World!
// Hello, World! 2



//higher order functions
// Return a function

// function createMultiplier(factor){
//     return function(number){
//         return number * factor;
//     }
// }





function oddEvenTest(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n % 2 == 0));
        }

    } else if(request == "even"){
        return function(n){
            console.log((n % 2 == 0));
        }
    } else{
        console.log("Wrong request ");
    }
}

let evenTest = oddEvenTest("even");

evenTest(5);

let oddTest = oddEvenTest("odd");

oddTest(5);



let odd = function(n){
    console.log(!(n % 2 == 0));

}

let even = function(n){
    console.log(n % 2 == 0);
    
}


function oddOrEvenFactory(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n % 2 == 0));
        }
        return odd;

    } else if(request == "even"){
        let even = function(n){
            console.log(n % 2 == 0);
        }
        return even;

    } else{
        console.log("Wrong request ");
    }
}
let request = "odd"; //even

let oddFunction = oddOrEvenFactory(request);

oddFunction(5);







function multipleGreet(func, count) { // higher-order function
    for (let i = 1; i <= count; i++) {
        func(); // call the function passed in
    }

    // This function is defined but not used
    let greet = function () {
        console.log("hello");
    };
}

// Call multipleGreet with an anonymous function
multipleGreet(function () {
    console.log("Namaste");
}, 3);


multipleGreet(function () { console.log("Namaste") }, 1000);
