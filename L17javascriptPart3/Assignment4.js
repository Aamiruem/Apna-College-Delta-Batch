// Qs5.Write a JavaScript program to strip leading and trailing spaces from a string.
// const prompt = require("prompt-sync")();

// let str = prompt("please enter a string with spaces: ");
// console.log(` original string = ${str} `);

// console.log(` string without space = ${str.trim()} `);


// or

// const prompt = require("prompt-sync")();

// let str = prompt("Please enter a string with spaces: ");
// console.log(`Original string = "${str}"`);

// // Using trim() - removes both leading and trailing whitespace
// console.log(`String without spaces (using trim()) = "${str.trim()}"`);

// // Alternative implementations:

// // 1. Using regular expression
// console.log(`String without spaces (using regex) = "${str.replace(/^\s+|\s+$/g, '')}"`);

// // 2. Manual implementation (just for demonstration)
// function trimManual(s) {
//     let start = 0, end = s.length - 1;
    
//     // Find first non-whitespace character
//     while (start <= end && s[start] === ' ') start++;
    
//     // Find last non-whitespace character
//     while (end >= start && s[end] === ' ') end--;
    
//     return s.substring(start, end + 1);
// }

// console.log(`String without spaces (manual trim) = "${trimManual(str)}"`);







const prompt = require("prompt-sync")();

let str = prompt("Please enter a string with spaces: ");
console.log(`Original string = "${str}" (length: ${str.length})`);

// Using trim() - removes both leading and trailing whitespace
let trimmedStr = str.trim();
console.log(`String without spaces (using trim()) = "${trimmedStr}" (length: ${trimmedStr.length})`);

// Alternative implementations:

// 1. Using regular expression
let regexTrimmed = str.replace(/^\s+|\s+$/g, '');
console.log(`String without spaces (using regex) = "${regexTrimmed}" (length: ${regexTrimmed.length})`);

// 2. Manual implementation (just for demonstration)
function trimManual(s) {
    let start = 0, end = s.length - 1;
    
    // Find first non-whitespace character
    while (start <= end && s[start] === ' ') start++;
    
    // Find last non-whitespace character
    while (end >= start && s[end] === ' ') end--;
    
    return s.substring(start, end + 1);
}

let manualTrimmed = trimManual(str);
console.log(`String without spaces (manual trim) = "${manualTrimmed}" (length: ${manualTrimmed.length})`);
