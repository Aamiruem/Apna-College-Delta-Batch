let str = "Random Numbers";

console.log(str.length);// find the length of the string

console.log(str.trim().length); // remove the spaces from the string

console.log(str.toUpperCase()); // convert the string to uppercase 

console.log(str.toLowerCase());  // convert the string to lowercase

console.log(str.slice(0, 5));    // extract the first 5 characters of the string

console.log(str.slice(0,5).toUpperCase()); // extract the first 5 characters of the string and convert them to uppercase
console.log(str.replace("Random", "Randomly"));  // replace the word "Random" with "Randomly"

console.log(str.replace("Random", "Randomly").toUpperCase()); // replace the word "Random" with "Randomly" and convert the string to uppercase

console.log(str.replace("Random", "Randomly").toUpperCase().slice(0, 5)); // replace the word "Random" with "Randomly", convert the string to uppercase and extract the first 5 characters of the string 

console.log(str.replace("Random","Randomly").toUpperCase().slice(0,5).length);// replace the word "Random" with "Randomly", convert the string to uppercase and extract the first 5 characters of the string and find the length of the string 

console.log(str.replace("Random","Randomly").toUpperCase().slice(0,5).length+str.replace("Random","Randomly").toUpperCase().slice(0,5).length);// replace the word "Random" with "Randomly", convert the string to uppercase and extract the first 5 characters of the string and find the length of the string

console.log(str.replace("Random","Randomly").toUpperCase().slice(0,5).length+str.replace("Random","Randomly").toUpperCase().slice(0,5).length+str.replace("Random","Randomly").toUpperCase().slice(0,5).length); // replace the word "Random" with "Randomly", convert the string to uppercase and extract the first 5 characters of the string and find the length of the string

console.log(str.includes("Random")); // check if the string contains the word "Random"
console.log(str.includes("Randomly")); // check if the string contains the word "Randomly"
