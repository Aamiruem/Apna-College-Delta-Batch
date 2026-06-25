// Popcorn size entered by customer
let size = 'XL'; // You can change this to 'L', 'M', 'S' to test

// Popcorn price calculation system
if (size === 'XL') {
    console.log("Price: Rs. 250");
} else if (size === 'L') {
    console.log("Price: Rs. 200");
} else if (size === 'M') {
    console.log("Price: Rs. 100");
} else if (size === 'S') {
    console.log("Price: Rs. 50");
} else {
    console.log("Invalid size entered.");
}



let sizes = 'XL';
let price = sizes === 'XL' ? 250 :
            sizes === 'L' ? 200 :
            sizes === 'M' ? 100 :
            sizes === 'S' ? 50 :
            "Invalid size";
console.log("Price:", price);
