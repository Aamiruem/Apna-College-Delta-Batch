let matrix = [
 [1,2],
 [3,4]
];

console.log(matrix[1][0]);



// Alright Aamir, let’s break this one down in easy words, explain every part, and then do a dry run so you see exactly what happens.

// Code
// js
// let matrix = [
//  [1,2],
//  [3,4]
// ];

// console.log(matrix[1][0]);
// Word-by-Word Meaning
// let matrix = [...]

// let → create a variable.

// matrix → name of the variable (represents a 2D array).

// [ [1,2], [3,4] ] → this is a 2D array (array inside another array).

// First row = [1,2]

// Second row = [3,4]

// matrix[1][0]

// matrix[1] → go to the element at index 1 (remember: arrays start at index 0).

// matrix[0] = [1,2]

// matrix[1] = [3,4]

// So matrix[1] = [3,4].

// [0] → now inside [3,4], take the element at index 0.

// That is 3.

// console.log(matrix[1][0]);

// Print the value 3 on the screen.

// Dry Run (Step by Step)
// matrix = [[1,2],[3,4]]

// matrix[1] → second row → [3,4]

// matrix[1][0] → first element of [3,4] → 3

// Console prints:

// Code
// 3
// 👉 Easy takeaway:

// matrix[row][column] → row index first, then column index.

// Here, row = 1 (second row), column = 0 (first column).

// Result = 3.








// Word-by-Word Meaning
// let matrix = [...] → make a variable called matrix.

// [ [1,2], [3,4] ] → this is a 2D array (array inside another array).

// Row 0 = [1,2]

// Row 1 = [3,4]

// matrix[1] → go to index 1 (second row). That is [3,4].

// matrix[1][0] → inside [3,4], take index 0 (first element). That is 3.

// console.log(...) → print the value.

// Dry Run (Step by Step)
// matrix = [[1,2],[3,4]]

// matrix[1] → [3,4]

// matrix[1][0] → 3

// Console prints:

// Code
// 3
// ✅ So yes, your code is already correct.
// 👉 If you wanted the number 4, you’d write matrix[1][1].
// 👉 If you wanted the number 2, you’d write matrix[0][1].
