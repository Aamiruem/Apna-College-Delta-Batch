const arrayAverage = (arr) => {
  let sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}

let numbers = [10, 20, 30, 40];
console.log(arrayAverage(numbers)); 
