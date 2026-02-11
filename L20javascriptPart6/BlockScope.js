// Block Scope => Variables declared inside a {} Block cannot be accessed from outside the block

// function checkScope() {
//     let a = 1;
//     if (true) {
//         let b = 2;
//         var c = 3;
//     }
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// checkScope();





// these are show error
// {
//     const a = 5;
//     let a = 25;
// }

// console.log(a);


/*
these are working and do not show error
{
    var a = 25; // global scope but these not right to use it in the global scope why?   Why var is not recommended in global scope

When you declare a variable with var in the global scope, it becomes a property of the global object(usually window in browsers or global in Node.js).
This can lead to a few issues:

Namespace pollution: The global scope is shared by all scripts, so if multiple scripts declare variables with the same name using var, they will overwrite each other's values.

Implicit globals: If you forget to declare a variable with var (or let /const) and assign a value to it, JavaScript will automatically create a global variable.
    
    This can lead to unexpected behavior and make debugging harder.

Security concerns: In older browsers, global variables can be accessed and modified by malicious scripts, potentially leading to security vulnerabilities.
}

console.log(a);

*/


// these are showing error b/c block scope of let variable is only inside the block where it is declared and not outside the block
// for(let i = 1; i<= 5; i++){
//     console.log(i);// block scope
// }

// console.log(i);



let age = 25;
if(age >= 18){
    let message = "Adult";
    console.log(message);
} else{
    let message = "Not Adult";
}





// they can not be accessed outside the loop in the function
// let age1 = 25;
// if(age1 >= 18){
//     let message = "Adult";
//     console.log(message);
// } else{
// }
// let message = "Not Adult"; // this is show error



function outerFunc(){
    let x = 5;
    let y = 6;

    function innerFunc(){
        let z = 7;
        console.log(x, y, z);
    }
}





function outerFunc(){
    let x = 5;
    let y = 6;

    function innerFunc(){
        let z = 7;
        console.log(x, y, z);
    }
}
outerFunc();
