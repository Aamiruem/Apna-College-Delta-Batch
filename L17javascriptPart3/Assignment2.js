const prompt = require("prompt-sync")();

let str = prompt("Please enter a string ");

if(str.length == 0){
    console.log("Empty String");
} else{
    console.log("Not Empty String");
}
