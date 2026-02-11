let fruits = ["mango", "apple", "banana", "litchi", "orange"];
fruits.push("pineapple");

for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}


console.log("\n");


for(let i = 0; i<fruits.length; i = i+2){
    console.log(fruits[i]);
}





console.log("\n reverse array");


for(let i = fruits.length-1; i>=0; i--){
    console.log(fruits[i]);
}
