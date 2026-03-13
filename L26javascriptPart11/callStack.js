function hello() {
    console.log("inside hello function");   
}
function demo() {
    console.log("calling hello function");
    hello();
}

console.log("before calling demo function");
demo();
console.log("after calling demo function");
