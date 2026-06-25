// Great snippet, let’s dry run it step by step in easy words:


let arr = [1, 2, 3];

for (let value of arr) {
   value = value * 2;
}

// console.log(arr);
// 🔹 Word‑by‑word meaning
// let arr = [1,2,3]; → array with values 1, 2, 3.

// for (let value of arr) → loop goes through each element of arr.

// value = value * 2; → doubles the current element, but only in the temporary variable value.

// console.log(arr); → prints the original array.

// 🔹 Dry Run (step by step)
// Start → arr = [1,2,3].

// Loop begins:

// First iteration → value = 1. Then value = 1 * 2 = 2. But this does not change arr[0].

// Second iteration → value = 2. Then value = 2 * 2 = 4. But arr[1] stays 2.

// Third iteration → value = 3. Then value = 3 * 2 = 6. But arr[2] stays 3.

// Loop ends.

// console.log(arr) → prints [1, 2, 3].

// 🔹 Final Output
// Code
// [1, 2, 3]
// 👉 Easy takeaway:

// for...of gives you a copy of each element, not the actual array slot.

// Changing value doesn’t change arr.

// ✅ If you want to actually update the array, you need for...in or map:


// let arr = [1,2,3];
// for (let i in arr) {
//    arr[i] = arr[i] * 2;
// }
// console.log(arr); // [2,4,6]
// Do you want me to also show you the map version (cleaner one‑liner) that doubles all elements?
