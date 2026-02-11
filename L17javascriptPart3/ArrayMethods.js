// push=> add to end
//pop=> delete from end and returns it

// Unshift => add to start
// shift => delete from start and returns it


let cars = ["audi", "bmw", "xuv", "maruti"];
console.log(cars);
cars.push("honda");
console.log(cars);



cars.push("Toyota");// add to end
console.log(cars);

cars.unshift("Toyota");// add to start
console.log(cars);


cars.unshift("Ferrari");
console.log(cars);

cars.shift();// delete from start
console.log(cars);


cars.pop("xuv");// delete from end
console.log(cars);
// splice(start, deleteCount, item1, item2, item3, ...)
// console.log(cars.pop("xuv"));
console.log(cars.pop());


let followers = ["aamir", "kamran", "rohit", "sahil"];
console.log(followers);

console.log(followers.length);

let blocked = followers.shift();// delete from start
console.log(blocked);




//Delete particulars position 
// 🔹 1. splice() – Best method for removing elements by index

let arr1 = [10, 20, 30, 40, 50];
arr1.splice(2, 1); // Removes 1 element at index 2
console.log("Delete", arr1); // [10, 20, 40, 50]
// splice(index, count)

// Modifies the original array

// Removes count elements starting from index

// 🔹 2. filter() – To remove based on condition (non-mutating)

let arr2 = [10, 20, 30, 40, 50];
let newArr = arr2.filter((_, i) => i !== 2); // Remove index 2
// console.log(newArr); // [10, 20, 40, 50]
// Returns a new array

// Doesn’t change the original array

// 🔹 3. delete keyword – ❌ Not recommended

let arr = [10, 20, 30, 40];
delete arr[2];
console.log(arr); // [10, 20, empty, 40]
