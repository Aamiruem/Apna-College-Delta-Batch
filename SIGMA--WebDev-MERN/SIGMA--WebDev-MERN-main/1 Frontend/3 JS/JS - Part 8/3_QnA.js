// Ans : 1 answer
let numArr = [1, 2, 3, 4, 5];

let square = numArr.map( (elmnt) => (elmnt * elmnt) ); console.log(square);
let sum = square.reduce( (sum, elmnt) => (sum + elmnt) ); console.log(sum);
let avg = sum / square.length; console.log(avg);


// Ans : 2
let exampleArr = [1, 2, 3, 4, 5];

let ansArr = exampleArr.map( (elmnt) => (elmnt + 5) ); console.log(ansArr);


// Ans : 3
let strArr = ["abcd", "jkl", "mno", "pqrs", "uvw", "xyz"];

let newArr = strArr.map( (index) => (index.toUpperCase()) ); console.log(newArr);


// Ans : 4
let doubleAndReturnArgs = (array, ...elmnt) => {
    console.log(array);
    return elmnt.map( (num) => (num * 2) );
}
let exampleArray = [1, 2, 3, 4, 5];
console.log(doubleAndReturnArgs(exampleArray, 1, 2, 3, 4, 5));


// Ans : 5
let firstObj = { // 1st object
    a: 1,
    b: 2
};
let secondObj = { // 2nd object
    c: 3,
    d: 4
};

let mergeObject = {...firstObj, ...secondObj}; // 1st way
console.log(mergeObject); // 1st way's print

let mergeObjects = (obj1, obj2) => ( {...obj1, ...obj2} ); // 2nd way
console.log(mergeObjects(firstObj, secondObj)); // 2nd way's print