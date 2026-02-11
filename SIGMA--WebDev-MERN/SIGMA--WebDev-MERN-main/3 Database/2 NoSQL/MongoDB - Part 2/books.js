// This file is specially for Schema Validations in Mongoose.

const mongoose = require("mongoose"); // Requiring 'Mongoose'

// Connecting MongoDB with Node.js using Mongoose
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}
main().then((res) => {
    console.log("Connection successful.");
}).catch((err) => {
    console.log(err);
});

// Defining schema for the document
const bookSchema = new mongoose.Schema({
    title: { // Best way to define schema validations
        type: String,
        required: true,
        maxLength: 20
    },
    author: String, // shortcut for define when it's only one
    price: { // best way
        type: Number,
        min: [1, "Price is too low for amazon selling."]
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["friction", "non-friction"]
    },
    genre: [String],
    version: [Number]
});

// Creating a model
const Book = mongoose.model("Book", bookSchema);

// Inserting document
// const book1 = new Book({
//     title: "Marvel Comics v2",
//     // author: "",
//     price: 899,
//     // category: "friction",
//     genre: ["comics", "superheroes", "fiction"],
//     version: [1, 2, 3, 4, 5, 6]
// });
// book1.save() // to save in database
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// Updating document
Book.findOneAndUpdate( {price: {$gt: 499}}, {price:-100},
    {runValidators: true}) // for applying the rule when updating
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err.errors.price.properties.message); // for print only custom error
});