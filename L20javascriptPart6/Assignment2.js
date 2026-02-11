let str = "abcdabcdefgggh";

// function to get string with all unique elements

function getUniqueString(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if (ans.indexOf(currChar) == -1) {
            // if current character is not added then add it in ans.
            // otherwise it is duplicates

            ans += currChar;
        }
    }
    return ans;
}

console.log(getUniqueString(str));









// function to replace duplicate characters with their count

function replaceDuplicates(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        let count = 1;
        while (i + 1 < str.length && str[i + 1] == currChar) {
            // if current character is duplicate then increment count
            count++;
            i++;
        }
        // if current character is not duplicate then add it in ans with count
        if (count > 1) {
            ans += currChar + count;
        } else {
            ans += currChar;
        }
    }
    return ans;
}

console.log(replaceDuplicates(getUniqueString(str)));
