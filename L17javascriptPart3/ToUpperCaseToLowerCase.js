// Convert a string to UPPERCASE and lowercase

// Original input
let name = "Apna College";

// Convert to uppercase
let upperName = name.toUpperCase(); // Result: "APNA COLLEGE"
console.log("Uppercase:", upperName);

// Convert to lowercase
let lowerName = name.toLowerCase(); // Result: "apna college"
console.log("Lowercase:", lowerName);

// Practical use case: Case-insensitive comparison
let input = "HeLLo";
let keyword = "hello";

// Convert both to same case before comparing
if (input.toLowerCase() === keyword.toLowerCase()) {
    console.log("Input matches keyword (case-insensitive)");
} else {
    console.log("No match");
}
