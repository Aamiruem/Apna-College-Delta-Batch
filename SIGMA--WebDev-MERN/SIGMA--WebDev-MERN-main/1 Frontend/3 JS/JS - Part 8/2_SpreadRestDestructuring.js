// Spread in JS
let name = "ALTAMASH";
console.log("String :", ...name); // spread on strings

let nums = [1, 2, 3, 0, 4, 5];
console.log("Array :", ...nums); // spread on array

console.log("Minimum in array :", Math.min(...nums));


// Spread with Array Literals
let arr = [1, 2, 3, 4, 5];
let newArr = [...arr]; // copy array using spread
newArr.push(6); console.log(newArr); // added a new value and print full array

let chars = [..."ALTAMASH"];
console.log("Characters array :", chars, "Length :", chars.length);

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let finalArr = [...odd, ...even];
console.log("Final merged array :", finalArr, "Length :", finalArr.length);


// Spread with Object Literals
const data = {
    email: "myname@gmail.com",
    password: "myname123"
};
const copyData = { ...data, id: 111, country: "India" };
console.log("Copied object :", copyData);

let obj1 = { ...arr }, obj2 = { ...chars }; // index is the key and element is value
console.log("Object of nums :", obj1, "Object of chars :", obj2);


//  Rest
function restExample(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log("You gave us :", args[i]);
    }
}
restExample(1, 2, 3);

function print() {
    console.log(arguments); // collection
    console.log("Arguments length is :", arguments.length);
    // arguments.push(1); // it'll give an error because it's not an array, it's a collection
}
print(2, 4, 6, 8, 10);

function sum(...args) {
    return args.reduce((sum, elmnt) => (sum + elmnt));
}
console.log("Sum is :", sum(2, 4, 6, 8, 10));

function min(msg, ...args) {
    console.log("Message :", msg);
    return args.reduce((min, elmnt) => {
        if (min < elmnt) {
            return min;
        } else {
            return elmnt;
        }
    });
}
console.log("Minimum is :", min("Hey, What are you doing?", 8, 2, 5, 7, 3, 9, 4, 6));


// Destructuring
let names = ["Tony", "Bruce", "Peter", "Steve", "Asknf", "Lfsnj", "Tslhf"];

// let winner = names[0];
// let runnerUp = names[1];
// let secondRunnerUp = names[2];
let [winner, runnerUp, secondRunnerUp, ...others] = names;

console.log("Winner is :", winner);
console.log("1st runnerup is :", runnerUp);
console.log("2nd runnerup is :", secondRunnerUp);
console.log("Other is :", others);