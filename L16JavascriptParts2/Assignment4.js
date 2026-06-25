let str = "apples";
if((str[0] == 'a' || start[0]  == 'A') && (str.length > 5)){
    console.log("Golden String");
} else{
    console.log("Not a Golden String");
}







function isGoldenString(str) {
    if (str.length <= 5) {
        return false; // Not a golden string
    }

    const uniqueChars = new Set(str);
    if (uniqueChars.size !== 2) {
        return false; // Not a golden string
    }

    const [p, q] = Array.from(uniqueChars);
    const countP = str.split(p).length - 1;
    const countQ = str.split(q).length - 1;

    return countP > 0 && countQ > 0;
}

// Example usage:
const inputString = "ApqApq"; // Replace with your input string
const result = isGoldenString(inputString);

if (result) {
    console.log(`${inputString} is a golden string!`);
} else {
    console.log(`${inputString} is not a golden string.`);
}
