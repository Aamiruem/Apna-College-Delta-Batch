// require vs import 
console.log("================================");
import {sum, mul, PI} from "./2a_math.js"; // Transferring data from a file

console.log("Addition's solution :", sum(3, 5));
console.log("Multiply's solution :", mul(3, 5));
console.log("PI value :", PI);


// import a npm package 
console.log("================================");
import {generate} from "random-words";

console.log("Random single word :-", generate() ); // for single word
console.log("Random word array :-", generate(3) ); // returns a 3 word array
