let quarter = 1;

switch (quarter) {
    case 1:
        console.log("Months in Quarter 1: January, February, March");
        break;
    case 2:
        console.log("Months in Quarter 2: April, May, June");
        break;
    case 3:
        console.log("Months in Quarter 3: July, August, September");
        break;
    case 4:
        console.log("Months in Quarter 4: October, November, December");
        break;
    default:
        console.log("Invalid quarter number. Please enter a number between 1 and 4.");
}




























// let quarter = prompt("Enter the quarter number (1, 2, 3, or 4):");
// quarter = parseInt(quarter); // Convert input to a number

// switch (quarter) {
//     case 1:
//         console.log("Months in Quarter 1: January, February, March");
//         break;
//     case 2:
//         console.log("Months in Quarter 2: April, May, June");
//         break;
//     case 3:
//         console.log("Months in Quarter 3: July, August, September");
//         break;
//     case 4:
//         console.log("Months in Quarter 4: October, November, December");
//         break;
//     default:
//         console.log("Invalid quarter number. Please enter a number between 1 and 4.");
// }






// let quarter = prompt("Enter the quarter number (1, 2, 3, or 4):");
// quarter = parseInt(quarter);
// switch (quarter) {
//     case 1:
//         console.log("Months in Quarter 1: January, February, March");
//         break;
//     case 2:
//         console.log("Months in Quarter 2: April, May, June");
//         break;
//     case 3:
//         console.log("Months in Quarter 3: July, August, September");
//         break;
//     case 4:
//         console.log("Months in Quarter 4: October, November, December");
//         break;
//     default:
//         console.log("Invalid quarter number. Please enter a number between 1 and 4.");
// }




const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the quarter number (1, 2, 3, or 4): ', (input) => {
    const quarter = parseInt(input);

    switch (quarter) {
        case 1:
            console.log("Months in Quarter 1: January, February, March");
            break;
        case 2:
            console.log("Months in Quarter 2: April, May, June");
            break;
        case 3:
            console.log("Months in Quarter 3: July, August, September");
            break;
        case 4:
            console.log("Months in Quarter 4: October, November, December");
            break;
        default:
            console.log("Invalid quarter number. Please enter a number between 1 and 4.");
    }

    rl.close();
});






const rl1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl1.question('Enter the quarter number (1, 2, 3, or 4): ', (input) => {
    const quarter = parseInt(input);


    switch (quarter) {
        case 1:
            console.log("Months in Quarter 1: January, February, March");
            break;
        case 2:
            console.log("Months in Quarter 2: April, May, June");
            break;
        case 3:
            console.log("Months in Quarter 3: July, August, September");
            break;
        case 4:
            console.log("Months in Quarter 4: October, November, December");
            break;
        default:
            console.log("Invalid quarter number. Please enter a number between 1 and 4.");
    }
    
});
