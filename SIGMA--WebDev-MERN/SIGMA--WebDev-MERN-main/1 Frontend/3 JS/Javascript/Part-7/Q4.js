function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

let inputString = "Hello World";
console.log(countVowels(inputString)); 
