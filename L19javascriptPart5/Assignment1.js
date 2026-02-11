// const dice = prompt("Enter number!! ")


// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);






let dice = prompt("Enter number!! ");  // Use let instead of const

dice = Math.floor(Math.random() * 6) + 1;  // Generate random number from 1 to 6
console.log(dice);  // Print the dice roll


// 📝 Notes:
// Math.random() generates a number between 0(inclusive) and 1(exclusive).

// Multiplying by 6 gives a number between 0 and just under 6.

// Math.floor() makes it an integer between 0 and 5.

// Adding 1 shifts it to 1–6, like a real dice.
