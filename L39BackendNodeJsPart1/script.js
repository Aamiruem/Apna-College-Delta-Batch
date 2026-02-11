// let n = 5;

// for (let i = 0; i < n; i++) {
//     console.log("Hello " + i);
// }

// console.log("Bye");

// let args = process.argv;
// for (let i = 2; i < args.length; i++){
    
//     console.log(`hello and welcome to  ${args[i]}`);
// }
// console.log(process.argv);


// process.release

//  process.cwd();
// 'C:\\Users\\aamir\\Desktop\\Desktop\\Apna college FullStackWeb'

//  process.argv
// [ 'C:\\Program Files\\nodejs\\node.exe' ]




// const someValue = require("./math");

// console.log(someValue);
// console.log(someValue.add(5, 6));
// console.log(someValue.subtract(5, 6));


const math = require("./math");
console.log(math);
console.log(math.sum(5, 6));
console.log(math.subtract(5, 6));


console.log(math.PI);
