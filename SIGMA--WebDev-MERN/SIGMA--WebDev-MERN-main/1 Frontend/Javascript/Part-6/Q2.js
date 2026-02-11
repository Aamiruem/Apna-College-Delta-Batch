// Extract unique characters from a string

function uniqueCharacters(str) {
  return [...new Set(str)].join("");
}

let inputStr = "abcdabcdefgggh";
console.log(uniqueCharacters(inputStr));
