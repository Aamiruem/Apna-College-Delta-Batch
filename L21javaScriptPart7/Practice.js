const square = (n) => n * n;

const cube = (n) => n * n * n;

const average = (x, y) => (x + y) / 2;

const average3 = (x, y, z) => (x + y + z) / 3;

const average4 = (x, y, z, w) => (x + y + z + w) / 4;

console.log("This is the square = " , square(5));

console.log("This is the cube = " ,  cube(5));

console.log("This is the two sum average = " , average(1, 2));
console.log("This is the three sum average = " ,  average3(1, 2, 3));

console.log("This is the four sum average = " ,  average4(1, 2, 3, 4));
