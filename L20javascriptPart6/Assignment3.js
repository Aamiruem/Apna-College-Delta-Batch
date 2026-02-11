let country = ["Australia", "Germany", "United States of America"];

function longestName(country){
    let ansIdx = 0;
    for(let i = 1; i < country.length; i++){
        let ansLen = country[ansIdx].length;
        let curLen = country[i].length;
        if(curLen > ansLen){
            ansIdx = i;
        }
    }
    return country[ansIdx];
}

console.log(longestName(country)); // United States of America
