let a = 25;
console.log(a);

let b = 10;
console.log(b);

console.log(a + b);


setTimeout(() => {
    console.log("Inside setTimeout");
}, 1000);
setTimeout(() => {
    console.log("Inside setTimeout 2");
}, 2000);

console.log("After setTimeout");    







console.log("Start");

setTimeout(() => {
  console.log("Timer");
},0);

for(let i=0;i<1000000000;i++){}

console.log("End");
