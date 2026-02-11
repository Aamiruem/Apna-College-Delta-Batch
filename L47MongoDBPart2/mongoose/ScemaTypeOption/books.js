const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        MaxLength:20,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 1
    },
    discount: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"]
    },
    genre: {
        type: String,
        enum: ["classic", "contemporary", "fantasy"],
        default: "classic"
    }
});

const Book = mongoose.model("Book", bookSchema);
let book1 = new Book({
    title: "Holiday",
    author: "J.D. Salinger",
    price: 19.99,
    stock: 100,
    category: "fiction",
    genre: "classic"
});

book1.save().then((res) => {
    console.log("Book saved successfully");
})
    .catch((err) => {
    console.log(err);
});
