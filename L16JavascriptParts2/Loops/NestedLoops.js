// Alright Aamir, let’s dry run this step by step in easy words.


for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(i, j);
    }
}
// 🔹 Explanation word‑by‑word
// for (let i = 1; i <= 3; i++) → outer loop runs with i = 1, 2, 3.

// for (let j = 1; j <= 2; j++) → inner loop runs with j = 1, 2.

// console.log(i, j) → prints the current values of i and j.

// 🔹 Dry Run (step by step)
// Outer loop starts → i = 1

// Inner loop: j = 1 → prints 1 1

// Inner loop: j = 2 → prints 1 2

// Outer loop next → i = 2

// Inner loop: j = 1 → prints 2 1

// Inner loop: j = 2 → prints 2 2

// Outer loop next → i = 3

// Inner loop: j = 1 → prints 3 1

// Inner loop: j = 2 → prints 3 2

// 🔹 Final Output
// Code
// 1 1
// 1 2
// 2 1
// 2 2
// 3 1
// 3 2
// 👉 Easy way to think:

// Outer loop = rows (i)

// Inner loop = columns (j)

// Together they print all combinations of (i, j).

// Do you want me to also show this with a table diagram so you can see how i and j change like a grid?
