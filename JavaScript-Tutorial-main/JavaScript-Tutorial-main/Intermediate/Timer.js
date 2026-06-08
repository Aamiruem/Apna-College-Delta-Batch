//SetTimeOut
// console.log("Start");
// setTimeout(() => {
//   console.log("Execute code after 2 Sec.");
// }, 5000);
// console.log("End");

//SetInterval
// console.log("Start");
// setInterval(() => {
//     console.log("Repeate Code every 1 Sec.");
//   }, 1000);
// console.log("End");

// clearInterval();
// let count = 0;
// const intervalId = setInterval(() => {
//   count++;
//   console.log("Repeate Code every 1 Sec.");
//   if (count === 5) {
//     clearInterval(intervalId);
//     console.log("Interval Cleared");
//   }
// }, 1000);

//clearTimeout
const timeoutId = setTimeout(() => {
    console.log("This will not execute");
    }, 5000);
clearTimeout(timeoutId);
console.log("Timeout Cleared");