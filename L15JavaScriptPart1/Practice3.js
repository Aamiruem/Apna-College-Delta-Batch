// check good string or not in the category

// let str = "apple";
// let str = "astrology";
let str = "ast";
if(str[0] === "a" && str.length > 3){
    console.log("Good String");
} else {
    console.log("Bad String");
}



let num = 12;
if((num % 3 === 0) && ((num + 1 == 15) || (num - 1 == 11))){
    console.log("safe");
} else{
    console.log("unsafe");
}
