function hello (){
    console.log("inside Hello fnx");
    console.log("Hello World!");
}
function demo(){
    console.log("calling hello fnx");
    hello();
}

console.log("calling demo fnx");
demo();
console.log("done, bye!");
