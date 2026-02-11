const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// Testing the function
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));
// Output: { a: 1, b: 2, c: 3, d: 4 }
