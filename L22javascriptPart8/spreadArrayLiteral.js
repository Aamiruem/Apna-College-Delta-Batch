let arr = [1, 2, 3, 4, 5];
let newArr = [...arr, 6, 7, 8, 9];

console.log(newArr);
console.log(arr[0], arr[1], arr[2], arr[3], arr[4]);


let chars = [..."hello"];

console.log(chars);




let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let nums = [...odd, ...even];
console.log(nums);






const data = {
    name: "aamir",
    email: "aamir123@gmail.com",
    age: 22,
    city: "New York",
    country: "USA"
};

console.log(data);

const dataCopy = {
    ...data,
    id: 123,
    age: 23,
    name: "John Doe",
    country: "India"
};


console.log(dataCopy);
