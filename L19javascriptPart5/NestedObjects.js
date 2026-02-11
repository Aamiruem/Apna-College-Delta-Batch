let classInfo = {
    kamran: {
        grade: "A",
        subjects: ["Math", "Science", "English"],
        city: "Delhi",
        Math: 100,
        Science: 90,
        English: 80,
    },
    name: "kamran",
    age: 22,
    city: "Delhi",  
    printInfo: function () {
        console.log(this.name, this.age, this.city); 
        
    },
    Afroz: {
        name: "Afroz",
        age: 22,
        city: "Delhi",
        printInfo: function () {
            console.log(this.name, this.age, this.city);
        }
    },
    Aamir: {
        name: "Aamir",
        age: 22,
        city: "Delhi",
        printInfo: function () {
            console.log(this.name, this.age, this.city);
        }
    }

};

console.log(classInfo);

classInfo.printInfo();

classInfo.Afroz.printInfo();

classInfo.Aamir.printInfo();


// classInfo.kamran.printInfo();
console.log(classInfo.kamran.Math);
console.log(classInfo.kamran["Math"]); //dot notation and bracket notation both are same
