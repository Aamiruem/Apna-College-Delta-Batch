// Count the number of vowels in a string
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

let inputString = "Hello Worlds";
console.log(countVowels(inputString)); // Output: 3
