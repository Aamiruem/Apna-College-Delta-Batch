// let nums = [10, 20, 30, 40, 51];

// let min = nums.reduce((min, el) => {
//   if (min < el) {
//     return min;
//   } else {
//     return el;
//   }
// });

// console.log(min);














function getMin(nums) {
    let min = nums.reduce((min, ele) => {
        if(min<ele){
            return min;
        } else{
            return ele;
        }
    });
    return min;
}
let nums = [10, 20, 30, 40, 50, 60];

console.log(getMin(nums));
