let arr = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];
arr.sayHello = () => {
    console.log("hello i am arr");
}

arr.sayHello();

arr = arr2;
console.log(arr);
arr.push(6);
console.log(arr);
