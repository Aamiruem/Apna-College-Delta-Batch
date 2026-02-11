// let n = 5;

// for (let i = 0; i < n; i++) {
//     console.log(i);
// }

// console.log("Kamran");

// for (let i = n; i > 0; i--) {
//     console.log(i);
// }
// console.log(process.argv);


let args = process.argv;
for (let i = 2; i < args.length; i++){
    // console.log(`hello and welcome to  ${args[i]}`);
    console.log("hello and welcome to " , args[i]);
}
console.log(args);
