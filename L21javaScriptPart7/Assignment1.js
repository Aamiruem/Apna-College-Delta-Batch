// let id = setInterval(() => {
//     console.log("Hello world");
// }, 2000);

// console.log(id);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("Bye world clear interval ran");
// }, 10000);

// console.log(clearInterval(id));




const arrayAverage = (arr) => {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        sum = sum + arr[i];

    }

    return sum / arr.length;
}

let arr = [1, 2, 4, 6, 7, 3];

console.log(arrayAverage(arr));

console.log(arrayAverage([1, 2, 3]));











const arrayAverage1 = (arr1) => {
    let total = 0;
    for (let number of arr1) {
        total += number;
    }
    return total / arr1.length;
};

let arr1 = [1, 2, 3, 4, 5, 6];
console.log(arrayAverage1(arr1)); // Output: 3.5
console.log(arrayAverage1([1, 2, 3])); // Output: 2
