let str1 = "apnacollege";

function countVowels(str1){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u'){
            count++;
        }
    }
    return count;
}

console.log(countVowels(str)); // Output: 5







let str = "apnacollege";

function countVowels(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(
            str.charAt(i) == "a" ||
            str.charAt(i) == "e" ||
            str.charAt(i) == "i" ||
            str.charAt(i) == "o" ||
            str.charAt(i) == "u"
        ){
            count++;
        }
    }
    return count;
}

console.log(countVowels(str)); // Output: 5
