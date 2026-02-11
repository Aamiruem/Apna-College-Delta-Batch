// let prompt = require("prompt-sync")();

// const max =  prompt("Enter the max number ");

// const random = Math.floor(Math.random() * max) + 1;
// console.log(random);

// // console.log("Guess the number between 1 to " + max);
// let guess = prompt("guess the number! ")
// while(true){
//     if(guess == "quit"){
//         console.log("You guessed " + guess + " too many times");
//         break;
//     }
//     if(guess == random){
//         console.log("You are right! congrats!! random number was " , random);
//         break;
//     } else if(guess < random){
//         console.log("Your guess was too small. please try again! ");
//     } else if(guess > random){
//         console.log("Your guess was too high. please try again! ");
//     }else{
//         console.log("You guess was wrong. please try again ");
//     }
// }













// const max = parseInt(prompt("Enter the max number: ")); // Convert input to number

// // Validate max input
// if (isNaN(max) || max < 1) {
//     console.log("Please enter a valid positive number");
// } else {
//     const random = Math.floor(Math.random() * max) + 1;
//     console.log("Guess the number between 1 and " + max);
    
//     while(true) {
//         let guessInput = prompt("Guess the number (or type 'quit' to exit): ");
        
//         // Check if user wants to quit
//         if (guessInput === "quit") {
//             console.log("You chose to quit. The number was " + random);
//             break;
//         }
        
//         const guess = parseInt(guessInput); // Convert guess to number
        
//         // Validate guess input
//         if (isNaN(guess)) {
//             console.log("Please enter a valid number");
//             continue;
//         }
        
//         if (guess === random) {
//             console.log("You are right! Congrats!! The random number was " + random);
//             break;
//         } else if (guess < random) {
//             console.log("Your guess was too small. Please try again!");
//         } else {
//             console.log("Your guess was too high. Please try again!");
//         }
//     }
// }








// let prompt = require("prompt-sync")();

const max = parseInt(prompt("Enter the max number: ")); // Convert input to number

const random = Math.floor(Math.random() * max) + 1;
console.log("Guess the number between 1 and " + max);

while (true) {
    let guess = prompt("Guess the number (or type 'quit' to exit): ");

    if (guess.toLowerCase() === "quit") {
        console.log("You quit the game. The number was " + random);
        break;
    }

    guess = parseInt(guess); // Convert guess to number

    if (isNaN(guess)) {
        console.log("Please enter a valid number.");
        continue;
    }

    if (guess === random) {
        console.log("You are right! 🎉 Congrats!! The random number was " + random);
        break;
    } else if (guess < random) {
        console.log("Your guess was too small. Try again.");
    } else if (guess > random) {
        console.log("Your guess was too high. Try again.");
    }
}
