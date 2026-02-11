// function sum(a, b = 2){
//     return a+b;
// }

// console.log(sum(2));


function sum(a, b = 2){
    return a+b;
}

console.log(sum(2));
console.log(sum(2, 3));

function sum(a = 2, b){
    return a+b;
}

console.log(sum(2));// a = 2, b = undefined
