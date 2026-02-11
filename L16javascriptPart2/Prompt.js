// let firstName = prompt("Enter your name : ");

// console.log("Hello " + firstName);



let firstName = prompt("Enter your name : ");
let lastName = prompt("Enter your last name : ");

console.log("Hello and Welcome: " + firstName, " ", lastName, "!");










let firstName1 = prompt("Enter your name : ");
let lastName1 = prompt("Enter your last name : ");

let msg = "welcome " + firstName + " " + lastName + "!";
alert(msg);





let firstName3 = prompt("Enter your name: ");
let lastName3 = prompt("Enter your last name: ");

console.log(`Hello and Welcome: ${firstName} ${lastName}!`);






const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your first name: ', (firstName) => {
    rl.question('Enter your last name: ', (lastName) => {
        console.log(`Hello and Welcome: ${firstName} ${lastName}!`);
        rl.close();
    });
});
