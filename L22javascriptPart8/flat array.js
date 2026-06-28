let arr = [1,[2,[3]]];

console.log(arr.flat(2));



// Word-by-Word Meaning
// let arr = [1,[2,[3]]];

// let → create a variable.

// arr → name of the variable.

// [1,[2,[3]]] → an array with nested arrays inside.

// First element = 1

// Second element = [2,[3]] (another array inside).

// arr.flat(2)

// .flat → array method. It flattens nested arrays into a single-level array.

// (2) → depth level. Flatten up to 2 levels deep.

// Depth 1 → [1,2,[3]]

// Depth 2 → [1,2,3]

// console.log(...)

// Print the result on the screen.

// Dry Run (Step by Step)
// Start: arr = [1,[2,[3]]]

// Apply .flat(2) → flatten 2 levels deep.

// First flatten: [1,2,[3]]

// Second flatten: [1,2,3]

// Result = [1,2,3]

// Console prints:

// Code
// [1, 2, 3]
// ✅ Easy takeaway:

// .flat(n) → removes nesting up to n levels.

// Here, n = 2, so the array becomes fully flat.

// 👉 If you used .flat(1), the result would be [1,2,[3]].
// 👉 If you used .flat(Infinity), it would flatten completely no matter how deep.
