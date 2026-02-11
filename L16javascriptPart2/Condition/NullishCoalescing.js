// 6. Nullish Coalescing Operator (??)
// Nullish coalescing operator
let username = null;
let defaultName = "Guest";
let displayName = username ?? defaultName;
console.log(displayName); // "Guest"

// Difference from OR (||) operator
let count = 0;
console.log(count || 10); // 10 (0 is falsy)
console.log(count ?? 10); // 0 (only null/undefined are replaced)
