// Replace
// Searches a value in the string and returns a new string with the value replaced. It returns the position of where it was found




let msg = "I love coding";

console.log(msg.replace("love", "know"));
//replace method is used to replace a particular string with another string
//it will replace only the first occurrence of the string
//if we want to replace all the occurrence then we have to use replaceAll method

console.log(msg.replace("love", "do"));









// To replace the prompt - sync module in your JavaScript code, you can use one of these alternatives:

// 1. Using readline(Built -in Node.js Module - No Installation Needed)
// If you just need basic user input, Node.js has a built -in readline module:

// javascript
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter something: ', (input) => {
    console.log('You entered:', input);
    readline.close();
});
// 2. Using prompt - sync(If You Still Prefer It)
// If you want to stick with prompt - sync, install it first:

// bash
// npm install prompt - sync
// Then use it in your code:

// javascript
const prompt = require('prompt-sync')();
const input = prompt('Enter something: ');
console.log('You entered:', input);
// 3. Using inquirer(More Interactive Prompts)
// For more advanced prompts(multiple choices, confirmations, etc.), use inquirer:

// bash
// npm install inquirer
// Example:

// javascript
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        name: 'userInput',
        message: 'Enter something:'
    }
]).then((answers) => {
    console.log('You entered:', answers.userInput);
});
// 4. Using process.stdin(Manual Input Handling)
// For simple cases without external dependencies:

// javascript
process.stdin.setEncoding('utf8');
process.stdout.write('Enter something: ');

process.stdin.on('data', (data) => {
    const input = data.trim();
    console.log('You entered:', input);
    process.exit();
});
// Which One Should You Use ?
//     readline → Best for simple input(no extra install needed).

//         prompt - sync → Simple synchronous prompts.

//             inquirer → Best for interactive CLI apps(multiple questions, validations).

//                 process.stdin → Manual control(rarely needed).

// Let me know if you need help adapting your code! 🚀














// In JavaScript, the replace() method is used to replace part of a string with another string.Here's a quick overview:

// 📌 Basic Syntax
// javascript
// Copy
// Edit
// string.replace(searchValue, newValue)
// 🔹 Example 1: Replace a single word
// javascript
// Copy
// Edit
let str = "I love coding";
let newStr = str.replace("love", "enjoy");

console.log(newStr);  // "I enjoy coding"
// 🔹 Example 2: Case - sensitive replacement
// javascript
// Copy
// Edit
let str1 = "I Love coding";
let newStr1 = str.replace("love", "enjoy");

console.log(newStr1);  // Still "I Love coding" — because "love" ≠ "Love"
// Use a case -insensitive regular expression to fix that:

// javascript
// Copy
// Edit
let str2 = "I Love coding";
let newStr2 = str.replace(/love/i, "enjoy");

console.log(newStr2);  // "I enjoy coding"
// 🔹 Example 3: Replace all occurrences
// replace() by default only replaces the first occurrence.Use a global regex to replace all:

// javascript
// Copy
// Edit
let str3 = "I love coding and I love learning";
let newStr3 = str.replace(/love/g, "enjoy");

console.log(newStr3);  // "I enjoy coding and I enjoy learning"
// 🔹 Example 4: Replace using a function
//     javascript
// Copy
// Edit
let str4 = "I love coding";
let newStr4 = str.replace("coding", (match) => match.toUpperCase());

// console.log(newStr);  // "I love CODING"
// Let me know if you want to perform more complex replacements(e.g., with patterns or conditionally) !
