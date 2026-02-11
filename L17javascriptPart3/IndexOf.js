// let primary = ["red", "yellow", "blue"];

// console.log(primary.indexOf("red"));

// console.log(primary.indexOf("green"));

// console.log(primary.indexOf("yellow"));

// console.log(primary.indexOf("green", 1));

// console.log(primary.indexOf("red", 1));

// console.log(primary.indexOf("red", 2));

// console.log(primary.indexOf("red", 3));

// console.log(primary.indexOf("red", 4));

// console.log(primary.indexOf("red", 5));

// console.log(primary.includes("red"));






// indexOf() => It means searching the strings for a specific character.
//  It returns the index of the first occurrence of the specified value, or -1 if it is not found.


let primary = ["red", "yellow", "blue"];
primary.indexOf("yellow"); // → 1
primary.indexOf("green");  // → -1 (not found)
primary.indexOf("Yellow"); // → -1 (case mismatch)
console.log(primary.indexOf("yellow")); // → 1
console.log(primary.indexOf("green"));  // → -1 (not found)
console.log(primary.indexOf("Yellow")); // → -1 (case mismatch)
console.log(primary.indexOf("red", 1)); // → -1 (not found)



// includes() => It returns true if the specified value is found in the array, otherwise it returns false.
console.log(primary.includes("green"));   // false
console.log(primary.includes("yellow"))  // true











// Option A: Normalize array
const lower = primary.map(s => s.toLowerCase());
lower.includes("yellow".toLowerCase()); // → true

// Option B: Use `some()` or `findIndex()`
primary.some(s => s.toLowerCase() === "YELLOW".toLowerCase());
// → true :contentReference[oaicite:21]{index=21}
