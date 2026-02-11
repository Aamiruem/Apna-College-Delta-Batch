// const student = {
//     name: "kamran",
//     age:  22,
//     english: 89,
//     math: 96,
//     phy: 98,
//     getAvg: () => {
//         return (this.english + this.math + this.phy) / 3;
//     }

// }
// console.log(student.getAvg());




// normal function

// const student = {
//     name: "kamran",
//     age:  22,
//     marks: 96,
//     prop: this,//global scope

//     getName: function () {
//         return this.name;
//     },
// };

// console.log(student);
// console.log(student.getName());
// console.log(student.prop);



// arrow function

const student = {
    name: "kamran",
    age:  22,
    marks: 96,
    prop: this,//global scope

    getName: function () {
        console.log(this)
        return this.name;
    },
    getMarks: () => {
        console.log(this);// parent's scope window
        return this.marks;
    },
    getInfo1: function(){
        setTimeout( () => {
            console.log(this); //student object
        }, 2000);
    },

    getInfo2: function(){
        setTimeout( () => {
            console.log(this); //window object
        }, 2000);
    },
};

console.log(student);
console.log(student.getName());
console.log(student.getMarks());

student.getInfo1();
// console.log(student.prop);

student.getInfo2();
