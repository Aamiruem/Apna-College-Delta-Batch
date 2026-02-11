// let num = 2871529;
// let count = 0;
// let copy = num;

// while(copy > 0){
//     count++;
//     copy = Math.floor(copy / 10);
// }
// console.log(count);




//// Input number
// let number = 287152;

// // Convert number to string and count digits
// let count = number.toString().length;

// // Output the result
// console.log(`The number of digits in ${number} is: ${count}`);







let number = 287152;
let count = 0;

while (number !== 0) {
    number = Math.floor(number / 10);
    count++;
}

console.log(`The number of digits is: ${count}`);
