// splice => removes / replace / add elements in place

// splice(start, deleteCount, item0........itemN)
// splice(start, deleteCount) => removes elements from start index to deleteCount
// splice(start) => removes elements from start index to end
// splice(start, deleteCount, item0........itemN) => removes elements from start index to deleteCount and add item0........itemN at start index
// splice(start, deleteCount, item0........itemN) => removes elements from start index to deleteCount and add item0........itemN at start index


let cars = ["toyota", "xuv", "maruti", "bmw", "ferrari", "mercedes", "Audi", "honda", "bugatti", "lamborghini", "rolls royce", "mcallen"];

console.log(cars);

// console.log(cars.splice());
// console.log(cars.splice(4));

// console.log(cars.splice(0));

// console.log(cars.splice(0, 1));

// console.log(cars.splice(2, 4));

// console.log(cars.splice(0, 6));

console.log(cars.splice(-1));

// console.log(cars.splice(-2));

// console.log(cars.splice(-3, -2));
// console.log(cars);
// console.log(cars.splice(-1, -3));
// console.log(cars.splice(-5, -3, "black", "green")); 

// console.log(cars);

// console.log(cars.splice(1, 1, "Audi", "BMW"));
// console.log(cars);

// console.log(cars.splice(1, 0, "Audi", "BMW", "Mercedes"));
// console.log(cars);

// console.log(cars.splice(3, 0, "Audi", "BMW", "Mercedes", "Ferrari"));


// console.log(cars);

// console.log(cars.splice(0, 4, "Audi", "BMW", "Mercedes", "Ferrari", "Bugatti"));
// console.log(cars);

// console.log(cars.splice(1, 2, "Audi", "BMW", "Mercedes", "Ferrari", "Bugatti", "Lamborghini"));
// console.log(cars);

// console.log(cars.splice(4, 6, "Audi", "BMW", "Mercedes", "Ferrari", "Bugatti", "Lamborghini", "Rolls Royce"));
// console.log(cars);

// console.log(cars.splice(1, 5, "Audi", "BMW", "Mercedes", "Ferrari", "Bugatti", "Lamborghini", "Rolls Royce", "McLaren"));

// console.log(cars);

console.log(cars.splice(5, 7, "Audi", "BMW", "Mercedes", "Ferrari", "Bugatti", "Lamborghini", "Rolls Royce", "McLaren", "Honda"));
console.log(cars);
