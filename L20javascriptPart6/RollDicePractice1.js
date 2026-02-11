function rollDice(){
    let random = Math.floor(Math.random()*6) + 1;// Generates a random number between 1 and 6
    // Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive)
    // Multiplying it by 6 gives a number between 0 and just under 6 (e.g., 0 to 5.999...)
    // Math.floor(...) rounds the number down to the nearest whole number (0 to 5)
    // Adding 1 shifts the range from (0-5) to (1-6), simulating a real dice roll
    console.log(random);
}

rollDice();


function rollDice() {
    // This function simulates rolling a six-sided dice

    let random = Math.floor(Math.random() * 6) + 1;
    // Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive)
    // Multiplying it by 6 gives a number between 0 and just under 6 (e.g., 0 to 5.999...)
    // Math.floor(...) rounds the number down to the nearest whole number (0 to 5)
    // Adding 1 shifts the range from (0-5) to (1-6), simulating a real dice roll

    console.log(random);
    // Prints the randomly generated dice number (1 to 6) to the console
}

rollDice();
// Calls the rollDice function to execute the code inside it
