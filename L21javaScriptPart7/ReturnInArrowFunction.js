6
// return function

const add = (a, b) => {
    return a + b
}

console.log(add(10, 20));


const cube = (n) => {
    return n * n * n
}

console.log(cube(5));


const pow = (a, b) => {
    let result = 1
    for (let i = 0; i < b; i++) {
        result = result * a
    }
    return result
}

console.log(pow(2, 3));

// return function without return keyword

const mul = (a, b) => {
    return a * b
}

console.log(mul(10, 20));
