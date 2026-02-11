// Objects Literals in JS
const student = {
    name: "Alt Mash",
    age: 20,
    marks: 70.4       
};
console.log("Object Literal for student:-", student);

const item = {
    price: 199.99,
    discount: 50,
    colors: ["red", "pink"]
};
console.log("Object Literal for item:-", item);

// Practice Qs : Create an object literal for the properties of Twitter/Thread post
const post = {
    username: "@altamash",
    content: "This is my #first post on #twitter.",
    likes: 15,
    reposts: 2,
    tags: ["@nazeef", "@adeeb"]
};
console.log("ObjectLiteral for Twitter post:-", post);

// Get values : How to access the values of an object literal
const myInfo = {
    name: "Alt Mash",
    age: 20,
    hobbies: ["Coding", "Hacking", "Learning"]
};
console.log("ObjectLiteral myInfo :-", myInfo); // Print object literal
// 1. First way to access/print values of an object literal
console.log("1. 'name' value in myInfo :-", myInfo["name"]);
console.log("1. 'age' value in myInfo :-", myInfo["age"]);
console.log("1. 'hobbies' value in myInfo :-", myInfo["hobbies"]); // don't work without ""
// Access index value of an array in object literal
console.log("1. 'hobbies[0]' value in myInfo :-", myInfo["hobbies"]["0"]);
console.log("1. 'hobbies[1]' value in myInfo :-", myInfo["hobbies"][1]); // work without ""
console.log("1. 'hobbies[2]' value in myInfo :-", myInfo["hobbies"]["2"]); // recommended with ""
// 2. Second way to access/print values of an object literal
console.log("2. 'name' value in myInfo :-", myInfo.name);
console.log("2. 'age' value in myInfo :-", myInfo.age);
console.log("2. 'hobbies' value in myInfo :-", myInfo.hobbies);
// Access index value of an array in object literal
console.log("2. 'hobbies[0]' value in myInfo :-", myInfo.hobbies[0]);
console.log("2. 'hobbies[1]' value in myInfo :-", myInfo.hobbies[1]);
console.log("2. 'hobbies[2]' value in myInfo :-", myInfo.hobbies[2]);

/* NOTE :
 JS automatically converts objects keys to strings. 
 Even if we made the number as a key, the number will be converted to string. 
 Example :-                                                                 */
const randomObjLit = {
    1: 'a',
    2: 'b',
    true: 'c',
    null: 'd',
    undefined: 'e'
};
console.log(`1. Random object literal : 
${randomObjLit[1]}, ${randomObjLit[2]}, ${randomObjLit[true]}, ${randomObjLit[null]}, ${randomObjLit[undefined]}`);
// console.log(`2. Random object literal : ${randomObjLit.1}, ${randomObjLit.2}); number not works with dot
console.log(`2. Random object literal : 
${randomObjLit.true}, ${randomObjLit.null}, ${randomObjLit.undefined}`);

// Add or Update value in objects literals
const objLit = {
    name: "Object Literal",
    age: 29,
    creator: "Brendon Eich",
    rating: 4.7
};

// Change/Update in value of a key
objLit.creator = "BRENDON EICH"; // Change value from this type
objLit.age = "Twenty nine";
console.log("Changed value in objLit :-", objLit.creator);
console.log("Changed value in objLit :-", objLit.age);
objLit["creator"] = "Brendon Eich"; // Again changed using square brackets
console.log("Again changed value in objLit :-", objLit.creator);

// Add new property
objLit.gender = "Not to say"; // using dot
objLit["type"] = "Object"; // using square brackets

objLit.arr = ["JavaScript Object Literal", "JS ObjectLiteral", 4.8, 5];
console.log("See full objLit with add or update :-", objLit);

// Remove property from object literal using delete operator
delete objLit.gender;
delete objLit.type;
delete objLit.arr;
console.log("objLit after delete :", objLit);


// Object of Objects : Nesting
const classInfo = {
    altamash : {
        grade: "A+",
        city: "Delhi"
    },
    nazeef : {
        grade: 'A',
        city: "Hyderabad"
    },
    adeeb : {
        grade: "B+",
        city: "Dehradun"
    }
};
console.log("classInfo :-", classInfo);
console.log("First object in classInfo :-", classInfo.altamash);
console.log("City value of first object in classInfo :-", classInfo.altamash.city);
classInfo.altamash.city = "Bangalore";
console.log("Changed city value of first object in classInfo", classInfo.altamash.city);


// Array of objects
const clsInfo = [
    {
        name: "Altamash",
        grade: "A+",
        city: "Delhi"
    },
    {
        name: "Nazeef",
        grade: 'A',
        city: "Hyderabad"
    },
    {
        name: "Adeeb",
        grade: "B+",
        city: "Dehradun"
    }
];
console.log("Array of objects :-", clsInfo);
console.log("[1] index's object in array :-", clsInfo[1]);
console.log("[1] index's object values in array :-", clsInfo[1].name, clsInfo[1].city);
clsInfo[1].city = "Noida"; // changed value
clsInfo[1].grade = "A+"; // changed value
clsInfo[1].gender = "Male"; // new added property
console.log("Changed value of [1] index's object :-", clsInfo[1]);