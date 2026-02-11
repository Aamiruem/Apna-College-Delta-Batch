// Ans : 1
const arrAverage = (arr) => {
    let totSum = 0;
    for (arrNum of arr) {
        totSum += arrNum;
    }
    return totSum / arr.length;
}

let arr = [2, 4, 6, 8, 10];
console.log("Average of array :", arrAverage(arr));


// Ans : 2
const isEven = (n) => (n%2 == 0);
console.log( isEven(7) );


// Ans : 3
const object = {
    message: "Helo World!",
    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000); // undefined


// Ans : 4
let length = 4;
function callback() {
    console.log(this.length);
}

const obj = {
    length: 5,
    method(callback) {
        callback();
    }
};

obj.method(callback, 1, 2);