// Starting with Mongoose

const mongoose = require("mongoose");

// Creating a connection between MongoDB & Node.js using Mongoose
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test"); // Return a promise
}
main().then((res) => {
    console.log("connection successful.");
}).catch((err) => {
    console.log(err);
});

// Defining the schema for the document with the help of mongoose
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// Creating a model for the same name's collection
const User = mongoose.model("User", userSchema);


// Inserting document in the database using model class which is 'User'

// Inserting One
// const user1 = new User( {name: "Russell", email: "russell@gmail.com", age: 33});
// user1.save(); // to save the document in the database

// const user2 = new User( {name: "Starc", email: "starc@gmail.com", age: 31}); // user2 adding
// user2.save() // save() returns a promise
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// Inserting Multiple
// User.insertMany([
//     {name: "Rashid", email: "rashid@gmail.com", age: 30},
//     {name: "Gayle", email: "gayle@gmail.com", age: 42},
//     {name: "Cummins", email: "cummins@gmail.com", age: 28}
// ]).then((res) => {
//     console.log(res);
// });


// Finding documents 
// find not returns a promise but can use .then()
// User.find() // find all documents
// User.find( {age: {$gte: 33}} ) // find all matched document on the basis of condition
// User.findOne( {age: {$gte: 33}} ) // find only one document 
// User.findById("66a3d4bcab9e9cb50e6b8bb6") // find only one document on the basis of id
// .then((res) => {
//     console.log(res);
//     // console.log(res[0].name); // use indexing in multiple documents
// }).catch((err) => {
//     console.log(err);
// });


// Updating documents
// User.updateOne( {name: "Russell"}, {age: 35}) // update single document
// User.updateMany( {age: {$gt: 33}}, {age: 40} ) // update multiple documents
// User.findOneAndUpdate( {name:"Russell"}, {age:35}, {new:true} ) // find and update then print
// User.findByIdAndUpdate("66a3d4bcab9e9cb50e6b8bb8", {age:29}, {new:true} ) // find, update, print
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });


// Deleting documents
// User.deleteOne( {name: "Starc"}) // delete single document
// User.deleteMany( {age: {$gt: 33}} ) // delete multiple documents
// User.findByIdAndDelete("66a3d4bcab9e9cb50e6b8bb8") // find, print and delete
// User.findOneAndDelete( {name: "Rashid"} ) // find, print and delete
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });