// arrow function

const add = (a,b) => a + b;

console.log(add(10,20));

// const func = (arg1, arg2.....) => {function definition}


const sum = (a, b) => {
    return a + b
}

console.log(sum(7,20));


const cube = (n) => {
    return n * n * n
}

console.log(cube(5));


// const pow = (a, b) => {
//     let result = 1
//     for (let i = 0; i < b; i++) {
//         result = result * a
//     }
//     return result
// }
// console.log(pow(2, 3));



const pow = (a, b) => {
    
    return a ** b;
}
console.log(pow(2, 3));

// multiplication

const mul = (a, b) => {
    return a * b
}

console.log(mul(10, 20));
