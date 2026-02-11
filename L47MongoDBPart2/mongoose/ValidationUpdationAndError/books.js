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
        min: [1, "Price is too low for amazon selling"]
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
Book.findByIdAndUpdate("670b6f93032fc37a0d706179", { price: -500 }, {runValidators: true}).then((res) => {
    console.log("Price updated successfully");
}).catch(
    (err) => {
        console.log(err.errors.price.properties.message);
    });




// let book1 = new Book({
//     title: "Resnick walker",
//     author: "J.D. Salinger",
//     price: 19.99,
//     stock: 100,
//     category: "fiction",
//     genre: "classic"
// });

// book1.save().then((res) => {
//     console.log("Book saved successfully");
// })
//     .catch((err) => {
//     console.log(err);
// });
