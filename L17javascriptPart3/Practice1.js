let msg = "hello";

console.log(msg.length);

console.log(msg.trim());

console.log(msg.trim().length);
console.log(msg.trim().toUpperCase());
console.log(msg.toLowerCase());
console.log(msg.slice(2,5)); //hello



let str = " Apna college";
console.log(str.slice(4, 10))
console.log(str.toUpperCase());
console.log(str.length);
console.log(str.slice(-1));
console.log(str.slice(-5,-1));
console.log(str.slice(-5,-1).toUpperCase());


console.log(str.indexOf("na"));
console.log(str.indexOf("l"));
console.log(str.indexOf("l", 5));


console.log(str.lastIndexOf("l"));
console.log(str.replace("Apna", "Our"));
console.log(str.replace("l", "L"));

let n = "searchValue";
console.log(n.replace("searchValue", "replaceValue"));
console.log(n.slice(4));


console.log(n.slice(4).replace("l", "t"));
console.log(n.slice(4).replace("l", "t").replace("e", "E"));

let newStr = "Technology";
console.log(newStr.slice(0, 4).replace('l', 't').replace('l', 't'));
console.log(newStr.includes("t"));



console.log(newStr.includes("t", 5));
