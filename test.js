function counter() {
  let count = 0;
  return {
    increment: () => ++count,
    getValue: () => count
  };
}

console.log(counter.increment()); // 1
console.log(counter.getValue()); // 1

