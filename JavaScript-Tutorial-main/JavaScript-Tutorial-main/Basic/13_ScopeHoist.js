//Scope
//Global Scope
// let name = "Mohit";
// function greet() {
//   console.log("Hello " + name);
// }
// console.log("Hello " + name);
// greet(); 

//Local Scope
// function greet() {
//   let name = "Mohit Kumar";
//   console.log("Hello " + name);
// }
// // console.log("Hello " + name);
// greet(); // Hello Mohit

//Block Scope {} , It's not applicable for var
// {
//   let a=10;
//   const b=20;
//   console.log(a+b);
// }
// console.log(a);

//Hoisting
//Var
// var a = 10;
// console.log(a);

//Jb Code execute hua to V8 engine(Crome ya Node)
// var a;
// console.log(a); //undefined
// a = 10;

//Let and Const //TDZ
// console.log(a);
// let a = 10;

//Function Hoisting
// greet();
// function greet() {
//   console.log("Hello");
// }
// greet(); // Hello

// Arrow Function Hoisting
// greet();
// const greet = () => {
//   console.log("Hello");
// };
// greet(); // TypeError: greet is not a function

//Function Expression
greet();

const greet = function () {
  console.log("Hello");
};