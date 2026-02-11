// 🔹 1. Create an Array of Objects
// js
// Copy code
let students = [
    { name: "Shradha", age: 23, marks: 94.4 },
    { name: "Kamran", age: 22, marks: 99.7 },
    { name: "Aamir", age: 24, marks: 88.5 }
];
// 🔹 2. Accessing Values
// js
// Copy code
console.log(students[0].name);  // Output: 'Shradha'
console.log(students[1]["marks"]);  // Output: 99.7
// 🔹 3. Update a Value
// js
// Copy code
students[2].marks = 91.0;       // Update Aamir's marks
console.log(students[2].marks); // Output: 91
// 🔹 4. Add a New Property to an Object
// js
// Copy code
students[1].city = "Delhi";     // Add 'city' to Kamran
console.log(students[1]);
// 🔹 5. Add a New Object to the Array
// js
// Copy code
students.push({ name: "Fatima", age: 21, marks: 96 });
console.log(students[3]);       // Output: Fatima's object
// 🔹 6. Delete a Property from an Object
// js
// Copy code
delete students[0].marks;       // Remove 'marks' from Shradha
console.log(students[0]);
// 🔹 7. Loop Through the Array of Objects
// js
// Copy code
for (let i = 0; i < students.length; i++) {
    console.log(`${students[i].name} - ${students[i].age} years`);
}
// Or using for...of:

// js
// Copy code
for (let student of students) {
    console.log(student.name);
}
// 🔹 8. Find an Object (Using .find())
// js
// Copy code
let topStudent = students.find(stu => stu.marks > 95);
console.log(topStudent.name);   // Output: Kamran or Fatima
// 🔹 9. Filter Objects (Using .filter())
// js
// Copy code
let highScorers = students.filter(stu => stu.marks > 90);
console.log(highScorers);
// 🔹 10. Map Values (Using .map())
// js
// Copy code
let names = students.map(stu => stu.name);
console.log(names);             // Output: ['Shradha', 'Kamran', 'Aamir', 'Fatima']
// Let me know if you'd like to practice or get a real-world example like managing products or tasks!




let classInfo = [
  { name: "aman", grade: "A+", city: "Delhi" },
  { name: "shradha", grade: "A", city: "Pune" },
  { name: "karan", grade: "B", city: "Mumbai" }
];


console.log(classInfo[0]);         // { name: 'aman', grade: 'A+', city: 'Delhi' }
console.log(classInfo[1]);         // { name: 'shradha', grade: 'A', city: 'Pune' }
console.log(classInfo[2]);         // { name: 'karan', grade: 'B', city: 'Mumbai' }

console.log(classInfo[1].name);    // Output: 'shradha'
console.log(classInfo[1].grade);   // Output: 'A'
console.log(classInfo[1].city);    // Output: 'Pune'



classInfo[1].city = "Gurgaon";     // Update Shradha's city from 'Pune' to 'Gurgaon'
console.log(classInfo[1].city);    // Output: 'Gurgaon'
