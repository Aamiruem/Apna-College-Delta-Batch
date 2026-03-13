function one() {
    console.log("Inside one");
    return 1;
}

function two() {
    console.log("Inside two");
    return one() + one();
}

function three() {
    console.log("Inside three");
    let ans = two() + one();
    return two() + one();
    console.log(ans);
}

console.log("Before calling one");
one();
console.log("After calling one");
