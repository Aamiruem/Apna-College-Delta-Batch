// GUESSING GAME :
// User enters a max number & then tries to guess a random generated number between 1 to max.

const maxNum = prompt("Enter the max number :");
const randomNum = Math.floor(Math.random() * maxNum) + 1;

let guessNum = prompt("Guess the number :");

while (true) {
    if (guessNum == "quit") {
        console.log("User quit the game.");
        break;
    }

    if (guessNum == randomNum) {
        alert("Congratulations! You guess the right number.");
        console.log("You was right and random number was", randomNum);
        break;
    }
    else if (guessNum < randomNum) {
        guessNum = prompt("Hint : Your guess number was too small, Please try again :");
    }
    else {
        guessNum = prompt("Hint : Your guess number was too large, Please try again :");
    }
}