// let i = 1;

// while(i<=5){
//     if(i == 3){
//         break;
//     }
//     console.log(i);
//     i++;
// }
// console.log("we used break at 3!!")






// const favMovie = 'avatar';
// const prompt = require("prompt-sync")();
// let guess = prompt("Guess my favorite movie ");

// while(guess != favMovie){
//     if(guess == "quit"){
//         console.log("you quit")
//         break;
//     }
//     guess = prompt("wrong guess. please try again ");
// }

// if (guess == favMovie) {
//     alert("congrats!");
// }
//     else {
//         alert("goodbye");
//     }







const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const favMovie = 'avatar';

function askQuestion() {
    rl.question("Guess my favorite movie (or type 'quit' to exit): ", function (guess) {
        if (guess === favMovie) {
            console.log("Congrats!!");
            rl.close();
        } else if (guess === "quit") {
            console.log("Goodbye");
            rl.close();
        } else {
            console.log("Wrong guess. Try again.");
            askQuestion();
        }
    });
}

askQuestion();
