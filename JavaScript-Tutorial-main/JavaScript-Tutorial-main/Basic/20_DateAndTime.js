// const today = new Date();
// console.log(today);
// const birthday = new Date("1992-01-01");
// console.log(birthday);

// const dateNow = new Date();
// console.log(dateNow);
// console.log(dateNow.getFullYear());
// console.log(dateNow.getMonth()+1);
// console.log(dateNow.getDate());
// console.log(dateNow.getHours());
// console.log(dateNow.getMinutes());
// console.log(dateNow.getSeconds());
// console.log(dateNow.getMilliseconds());

// let date = new Date();
// date.setFullYear(2023);
// date.setMonth(11);
// date.setDate(25);
// date.setHours(10);
// date.setMinutes(30);
// date.setSeconds(0);
// date.setMilliseconds(0);
// console.log(date);

// let today = new Date();
// console.log(today.toDateString());
// console.log(today.toTimeString());
// console.log(today.toLocaleDateString());


//Number of Days
const startDate = new Date("2025-04-01");
const endDate = new Date("2025-04-16");
const timeDiff = endDate.getTime() - startDate.getTime();
const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
console.log(`Number of days between ${startDate.toDateString()} and ${endDate.toDateString()} is ${daysDiff} days.`);

