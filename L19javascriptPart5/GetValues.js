let student = {
    name: "kamran",     // The 'student' object has four properties: name, age, marks, and city
    age: 22,
    marks: 99.7,
    city: "Delhi"
};

console.log(student);   
// This will print the entire 'student' object to the console.

console.log(student.name);   
// This accesses the 'name' property of the 'student' object using dot notation.
// Output: kamran

console.log(student["name"]);   
// This accesses the 'name' property using bracket notation (alternative way).
// Useful when the property name is stored in a variable or contains special characters.
// Output: kamran



let post = {
    content: "This is my #firstPost",  // String content of the post
    likes: 150,                        // Number of likes
    reposts: 5,                        // Number of reposts
    username: "@shradhakhapra",       // Username of the person who posted
    tags: ["coding", "developer", "javascript"]  // Array of tags related to the post
};

// Accessing properties:
console.log(post["content"]);  // 'This is my #firstPost'
console.log(post.content);     // 'This is my #firstPost'

console.log(post["likes"]);    // 150
console.log(post.likes);       // 150

console.log(post.reposts);     // 5
console.log(post.username);    // '@shradhakhapra'
console.log(post.tags);        // ['coding', 'developer', 'javascript']
