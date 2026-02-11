// let msg = "  he  llo  ";

// console.log(msg.length);
// console.log(msg.trim().length);
// console.log(msg.toUpperCase());
// console.log(msg.toLowerCase());

// console.log(msg);
// console.log("This is a trim ", msg.trim()); // trim is remove start and end spaces
// console.log(msg.replace("he","she"));

const prompt = require('prompt-sync')();
let password = prompt("set your password ")
let newPass =  password.trim();

console.log(newPass);

// console.log(password.trim());
// console.log(password.trim().length);
