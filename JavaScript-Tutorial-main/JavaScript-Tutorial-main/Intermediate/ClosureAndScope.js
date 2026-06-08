//Lexical Scope
function outer() {
  let name = "Mohit Decodes";
  function inner() {
    console.log(name);
  }
  inner();
// console.log(name);
}
outer();

//Closure
function greet(name) {
  return function () {
    console.log(`Hello, ${name}`);
  };
}
const greetMohit = greet("Mohit");
greetMohit(); 
