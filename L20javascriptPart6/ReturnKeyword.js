function sum(a, b){
    return a+b;
}

console.log(sum(2,3));
// or
let result = sum(2, 3);
console.log(result);

console.log(sum(sum(1, 2), 3));

//sum(1, 2) = 3
//sum(3, 3) = 6
// function is a block of code that performs a specific task.

// return keyword is used to exit the function and return the value to the function caller.
// if we don't use return keyword then function will return undefined.
// we can also return multiple values from a function using array or object.
// we can also return a function from a function.
function sum(a, b){
    console.log("Hello");
    console.log("Hello");
    return a+b;
    console.log("Bye"); // this will not be executed because return keyword is used. above return print any task not executed 
    console.log("Hello2");
    console.log("Hello2");
}

console.log(sum(1, 2));




function isAdult(age){
    if(age>=18){
        return "adult";
    }
    else{
        return "not adult";
    }
    // return "not adult"; // this will not be executed because return keyword is used.
    //after return print any task not executed
}

console.log(isAdult(17));
