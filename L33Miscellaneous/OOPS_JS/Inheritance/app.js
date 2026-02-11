// class Student{
//     constructor(name, age, marks) {
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
//     }

//     talk() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }

//     study() {
//         console.log("I am Studying");
//     }
// }

// let stu1 = new Student("adam", 22, 99);

// class Teacher extends Student {
//     constructor(name, age, marks, subject) {
//         super(name, age, marks);
//         this.subject = subject;
//     }

//     teach() {
//         console.log("I am teaching");
//     }
// }






















class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}






class Student extends Person {
    constructor(name, age, marks) {
        console.log("person class constructors ");
        super(name, age, marks); //parent class constructor is being called 
        this.marks = marks;
    }
}



class Student extends Person {
    constructor(name, age, marks) {
        console.log("student class constructors ");
        super(name, age, marks); //parent class constructor is being called
        this.marks = marks;
    }
}



class Teacher extends Person {
    constructor(name, age, marks, subject) {
        super(name, age); //parent class constructor is being called
        this.subject = subject;
    }

    teach() {
        console.log("I am teaching");
    }
}
