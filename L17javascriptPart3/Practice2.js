let Months = ["january", "july", "march", "august"];
let final = ["december", "june", "april", "september"];

console.log(Months.concat(final));

console.log(Months.splice(0, 2, "july", "june"));

console.log(Months);




let months = ['jan', 'june', 'july', 'march', 'august'];
months.splice(0, 1); // removes 'jan'
[months[0], months[1]] = [months[1], months[0]]; // swaps june <-> july
console.log(months); // ['july', 'june', 'march', 'august']


let arr = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];

let reversed = [...arr].reverse();
let index = reversed.indexOf("javascript");
console.log(index); // 4
