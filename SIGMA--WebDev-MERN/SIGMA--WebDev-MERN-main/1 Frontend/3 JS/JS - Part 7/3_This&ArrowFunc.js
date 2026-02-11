// This keyword with Arrow functions :
const stu = {
    name: "Alt Mash",
    marks: 80,
    prop: this, // global scope
    getName: function() { // normal func
        console.log(this);
        console.log(this.name);
    },
    getMarks: () => { // arrow func
        console.log(this); // parent's scope -> window
        console.log(this.marks);
    },
    getInfo1: function() {
        setTimeout(function() {
            console.log(this); // window
        }, 1500);
    },
    getInfo2: function() {
        setTimeout(() => {
            console.log(this); // student
        }, 1950);
    }
};
stu.getName(); // student
stu.getMarks(); // window

stu.getInfo1(); // window
stu.getInfo2(); // student


// Practice Qs
const square = (n) => (n*n);
console.log("PrQs1: Square of a number :", square(7));

let id = setInterval( () => {
    console.log("PrQs2: Helo World!");
}, 2000);

setTimeout( () => { // it'll stop interval after 10s, this mean they'll print 5 time at every 2s
    clearInterval(id);
    console.log("Clear interval ran.");
}, 10000);