const obj = {
    1: "a",
    2: "b",
    null: "c",
    true: 'd',
    false: 'e',
    undefined: 'f',
    NaN: 'g',
    [Symbol()]: 'h',
}

console.log(Object.values(obj));
