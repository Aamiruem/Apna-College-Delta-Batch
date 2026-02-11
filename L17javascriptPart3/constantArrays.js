const arr  = [1, 2, 3, 4, 5];
console.log(arr);
arr.push(6); // we can push elements in constant arrays
console.log(arr);
arr.pop(); // we cannot pop elements in constant arrays
console.log(arr);
arr[0] = 100; // we can change elements in constant arrays
console.log(arr);
arr = [1, 2, 3, 4, 5]; // we cannot reassign constant arrays
console.log(arr);
// we can do all the operations except reassigning the constant arrays
// we can also do all the operations on constant objects

// we cannot reassign constant arrays but we can change the elements of constant arrays

