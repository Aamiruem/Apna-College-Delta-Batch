let  color = "red";
switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("invalid color");
}


// let color = prompt("Enter your color: whatever you choose");

// switch (color.toLowerCase()) {
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Ready");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Invalid color");
// }





let days = 1;

switch (days) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}




// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter your color: whatever you choose\n', (color) => {
//     switch (color.toLowerCase()) {
//         case "red":
//             console.log("Stop");
//             break;
//         case "yellow":
//             console.log("Ready");
//             break;
//         case "green":
//             console.log("Go");
//             break;
//         default:
//             console.log("Invalid color");
//     }
//     rl.close();
// });




// let day = prompt("Enter a day of the week:");

// switch (day.toLowerCase()) {
//     case "monday":
//         console.log("Start of the work week.");
//         break;
//     case "tuesday":
//         console.log("Second day of the work week.");
//         break;
//     case "wednesday":
//         console.log("Midweek day.");
//         break;
//     case "thursday":
//         console.log("Almost the end of the work week.");
//         break;
//     case "friday":
//         console.log("Last day of the work week.");
//         break;
//     case "saturday":
//         console.log("Weekend! Time to relax.");
//         break;
//     case "sunday":
//         console.log("Weekend! Time to prepare for the upcoming week.");
//         break;
//     default:
//         console.log("Invalid day of the week.");
// }



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a day of the week:\n', (day) => {
    switch (day.toLowerCase()) {
        case "monday":
            console.log("Start of the work week.");
            break;
        case "tuesday":
            console.log("Second day of the work week.");
            break;
        case "wednesday":
            console.log("Midweek day.");
            break;
        case "thursday":
            console.log("Almost the end of the work week.");
            break;
        case "friday":
            console.log("Last day of the work week.");
            break;
        case "saturday":
            console.log("Weekend! Time to relax.");
            break;
        case "sunday":
            console.log("Weekend! Time to prepare for the upcoming week.");
            break;
        default:
            console.log("Invalid day of the week.");
    }
    rl.close();
});
