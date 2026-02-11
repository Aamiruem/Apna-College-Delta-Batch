// const sum = (a, b) => a + b;

// const nul = (a, b) => a * b;
// const sub = (a, b) => a - b;
// const div = (a, b) => a / b;
// const mod = (a, b) => a % b;

// const pow = (a, b) => a ** b;

// const sqrt = (a) => Math.sqrt(a);

// const cube = (a) => Math.pow(a, 3);

// const square = (a) => Math.pow(a, 2);

// const cubeRoot = (a) => Math.cbrt(a);

// const squareRoot = (a) => Math.sqrt(a);

// // Constants

// const g = 9.8;
// const PI = 3.14;

// module.exports = { sum, nul, g, PI, sub};

// module.exports = "Hello";


// let obj = {
//     sum: sum,
//     nul: nul,
//     g: g,
//     PI: PI,
//     //... other properties
//     sub: sub,
//     div: div,

// };

// module.exports = obj;


module.exports.sum = (a, b) => a + b;


// Functions
const sum = (a, b) => a + b;
const nul = (a, b) => a * b;
const sub = (a, b) => a - b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;
const pow = (a, b) => a ** b;
const sqrt = (a) => Math.sqrt(a);
const cube = (a) => Math.pow(a, 3);
const square = (a) => Math.pow(a, 2);
const cubeRoot = (a) => Math.cbrt(a);
const squareRoot = (a) => Math.sqrt(a);

// Constants
const g = 9.8;
const PI = 3.14;

// Exporting everything in an object
module.exports = {
    sum,
    nul,
    sub,
    div,
    mod,
    pow,
    sqrt,
    cube,
    square,
    cubeRoot,
    squareRoot,
    g,
    PI,
};
