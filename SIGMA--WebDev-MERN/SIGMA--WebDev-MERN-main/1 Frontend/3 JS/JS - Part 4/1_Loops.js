// Loops in JS
// for Loop
console.log("!_____FOR LOOP_____!");
for (let i=1; i<=5; i++) { // forward run
    console.log(i);
}
for (let i=4; i>=1; i--) { // backward run
    console.log(i);
}

// Practice Qs
console.log("Odd numbers :");
for (let i=1; i<=15; i=i+2) {
    console.log(i);
}
console.log("Even numbers :");
for (let i=2; i<=10; i=i+2) {
    console.log(i);
}

// Infinite loops 
// for (let i=1; ; i++) {
//     console.log(i);
// }
// for (let i=1; i>=0; i++) {
//     console.log(i);
// }
// for (let i=1; i<=5; i--) {
//     console.log(i);
// }

// Practice Qs
console.log("Multiplication table for 5 :");
for (let i=5; i<=50; i=i+5) {
    console.log(i);
}
// console.log("Multiplication table using prompt/user input :");
// let n = prompt("Enter a number for multiplication table :");
// n = parseInt(n); // this method change a string into a number/integer
// for (let i=n; i<=n*10; i=i+n) {
//     console.log(i);
// }

// Nested - for loop
console.log("Nested loop :");
for (let i=1; i<=3; i++) {
    console.log("Outer loop :", i);
    for (let j=1; j<=3; j++) {
        console.log(j);
    }
}

// while loop
console.log("!_____WHILE LOOP_____!");
{
    let i=1;
    while (i<=5) { // forward run
        console.log(i);
        i++;
    }
    i=4;
    while (i>=1) { // backward run
        console.log(i);
        i--;
    }
    console.log("Backward even numbers :");
    i=20;
    while (i>=2) {
        console.log(i);
        i=i-2;
    }

    // Practice Qs
    // console.log("Guess favourite movie :");
    // const favMovie = "Pathaan";
    // let guessName = prompt("Guess my favourite movie :");
    // while ( (guessName != favMovie) && (guessName != "Quit") ) {
    // if (guessName == "Quit") {
    //     console.log("You quit.");
    // }
    //     guessName = prompt("Wrong guess, please try again :");
    // }
    // if (guessName == favMovie) {
    //     console.log("Congratulations! You guess right.");
    // }

    // Break keyword
    console.log("Break keyword :");
    i=1;
    while (i<=5) {
        if (i == 4) {
            break;
        }
        console.log(i);
        i++;
    }
}

// Loops with arrays 
let fruits = ["Apple", "Banana", "Litchi", "Mango", "Orange"];
for (let i=0; i<fruits.length; i++) { // forward run
    console.log(i, ":-", fruits[i]);
}
for (let i=fruits.length-2; i>=0; i--) { // backward run
    console.log(i, ":-", fruits[i]);
}

// Nested loops with nested arrays
console.log("Nested loop with nested arrays :");
let heroes = [ ["Ironman", "Spiderman", "Thor"], ["Superman", "Wonder Women", "Flash"] ];
for (let i=0; i<heroes.length; i++) {
    console.log(`i=${i}, size=${heroes[i].length}, [${heroes[i]}]`);
    for (let j=0; j<heroes[i].length; j++) {
        console.log(`j=${j} :- ${heroes[i][j]}`);
    }
}
console.log("Students info :");
let students = [ ["Altamash", 70.0], ["Adeeb", 63.6], ["Nazeef", 67.3] ];
for (let i=0; i<students.length; i++) {
    console.log(`Student : ${i+1}`);
    for (let j=0; j<students[i].length; j++) {
        console.log(students[i][j]);
    }
}

// for of loop
console.log("_____FOR OF LOOP_____");
fruits = ["Mango", "Orange", "Litchi", "Pinapple", "Apple", "Banana"];
console.log("List of fruits :");
for (fruit of fruits) {
    console. log(fruit);
}
console.log("Character of string :");
for (char of "ALTAMASH") {
    console.log(char);
}
// Nested for of loop
console.log("Nested for of loop :");
heroes = [ ["Ironman", "Spiderman", "Thor"], ["Superman", "Wonder Women", "Flash"] ];
for (list of heroes) {
    console.log(list);
    for (hero of list) {
        console.log(hero);
    }
}