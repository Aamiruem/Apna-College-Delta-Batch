let nums = [[2, 4], [3, 6], [4, 8]];

console.log(nums);

console.log(nums[0]);

console.log(nums[1]);

console.log(nums[2]); // [4, 8]


console.log(nums[0].length);

console.log(nums[2][1]); // 8
console.log(nums[2][2]); // undefined

console.log(nums[2][1] + nums[2][2]); // NaN
console.log(nums[2][1] + nums[2][2] + 5); // NaN + 5 = NaN

console.log(nums[2][1] + (nums[2][1] + 5)); // 16 + 5 = 21

















// Nested Arrays in JavaScript
// Nested arrays(arrays containing other arrays) are a common data structure in JavaScript, often used to represent matrices, grids, or hierarchical data.

// Creating Nested Arrays
// javascript
// 2D array (matrix)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Jagged array (arrays of different lengths)
const jagged = [
    [1],
    [2, 3],
    [4, 5, 6]
];

// 3D array
const threeD = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
];
// Accessing Elements
// javascript
const matrix1 = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
];

console.log(matrix1[0][1]);    // 'b' (first row, second column)
console.log(matrix1[2][0]);    // 'g' (third row, first column)
console.log(matrix1[1][2]);    // 'f' (second row, third column)
// Common Operations
// 1. Iterating through nested arrays
// javascript
// Using nested for loops
for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[i].length; j++) {
        console.log(matrix1[i][j]);
    }
}

// Using forEach
matrix1.forEach(row => {
    row.forEach(cell => {
        console.log(cell);
    });
});
// 2. Flattening nested arrays
// javascript
const nested = [[1, 2], [3, 4], [5, 6]];

// Using flat() (ES2019)
const flat1 = nested.flat(); // [1, 2, 3, 4, 5, 6]

// Using reduce
const flat2 = nested.reduce((acc, val) => acc.concat(val), []);

// Using spread operator
const flat3 = [].concat(...nested);
// 3. Creating a deep copy
// javascript
// const original = [[1, 2], [3, 4]];

// Shallow copy (nested arrays still reference original)
const shallowCopy = [...original];

// Deep copy methods:
const deepCopy1 = JSON.parse(JSON.stringify(original));
const deepCopy2 = original.map(arr => [...arr]); // For 2D arrays
// Practical Examples
// 1. Tic - Tac - Toe board
// javascript
const board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['O', 'X', 'O']
];

function checkWinner(board) {
    // Check rows, columns, and diagonals for a winner
    // ... implementation would go here
}
// 2. Matrix operations
// javascript
function transpose(matrix) {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
}

const m = [
    [1, 2],
    [3, 4]
];
console.log(transpose(m)); // [[1, 3], [2, 4]]
// Important Considerations
// Reference Behavior: Nested arrays still follow reference rules:

// javascript
const arr = [[1], [2], [3]];
const copy = [...arr];
copy[0][0] = 99;
console.log(arr[0][0]); // 99 (original is modified)
// Performance: Deeply nested arrays can impact performance.Consider alternative structures for very deep nesting.

// Alternative Structures: For complex hierarchical data, objects might be more appropriate:

// javascript
const tree = {
    value: 1,
    children: [
        { value: 2, children: [] },
        {
            value: 3, children: [
                { value: 4, children: [] }
            ]
        }
    ]
};
// Nested arrays are powerful but require careful handling due to JavaScript's reference behavior, especially when copying or modifying them.
