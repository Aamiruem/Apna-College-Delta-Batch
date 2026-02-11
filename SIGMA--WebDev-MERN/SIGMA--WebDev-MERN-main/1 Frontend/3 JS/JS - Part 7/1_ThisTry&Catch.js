// THIS keyword in JS :

let student = {
    name: "Alt Mash",
    age: 20,
    eng: 89,
    math: 77,
    phy: 74,
    getAvg() {
        console.log(this); // "this" kywrd mean is that we're calling "student" object

        let avg = (this.eng + this.math + this.phy) / 3;

        return `${this.name} got average marks = ${avg}`;
    }
};

console.log(student.getAvg());

function getAvg() {
    console.log(this);
}

getAvg(); // see result of "this" in the browser's inspect (console)


// TRY and CATCH statements :

console.log("Hlw sir");
// console.log(a); // it'll give an error which is "a is not defined" and stop the execution
console.log("Yes sir?");

try {
    console.log(a);
} catch(err) {
    console.log(err);
}

console.log("What you're doing?");
console.log("I am understanding the concept of try and catch statements.");