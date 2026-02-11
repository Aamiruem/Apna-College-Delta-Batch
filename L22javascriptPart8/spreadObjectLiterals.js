const data = {
    name: "aamir",
    email: "ironman@gmail.com",
    password: "abcd@123",
};
console.log(data);

const dataCopy = {...data, id: 123, age: 25, name: "aamir khan", country: "India"};

console.log(dataCopy);


let arr = [1, 2, 3, 4, 5, 6];
let obj1 = {...arr};

console.log(obj1);
let arr1 = {...arr, ...arr, ...arr};

console.log(arr1);

let obj2 = {..."Hello"};

console.log(obj2);
