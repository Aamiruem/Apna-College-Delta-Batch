// slice => copies a person of array

let cars = ["audi", "bmw", "mercedes", "xuv", "maruti", "Hyundai", "honda"];

console.log(cars);

console.log(cars.slice()); // copies the whole array
console.log(cars.slice(0, 1)); // copies the first element of the array

console.log(cars.slice(0)); //

console.log(cars.slice(0, 2));// copies the first two elements of the array
console.log(cars.slice(2)); // copies the array from index 2 to the end of the array

console.log(cars.slice(2, 4)); // copies the array from index 2 to index 4 (not including index 4)

console.log(cars.slice(0, 6));// copies the array from index 0 to index 6 (not including index 6)

console.log(cars.slice(-1)); // copies the last element of the array

console.log(cars.slice(-2)); // copies the last two elements of the array

console.log(cars.slice(-5, -1)); // copies the array from index -5 to index -1 (not including index -1)

console.log(cars.slice(-5, -3)); // copies the array from index -5 to index -3 (not including index -3)

console.log(cars.length); // length of the array
