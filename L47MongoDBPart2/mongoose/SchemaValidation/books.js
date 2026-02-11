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
        required: true,
        // unique: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Book = mongoose.model("Book", bookSchema);

let Book1 = new Book({
    title: "Mathematics xii",
    author: "RD SHARMA",
    price: 1200
});

Book1.save().then(() => {
    console.log("Book 1 saved successfully");
})
    .catch((err) => {
        console.log(err);
    });

    let Book2 = new Book({
    title: "Physics1",
    author: "Aamir Hussain",
    price: 1500
    });

    Book2.save().then(() => {
        console.log("Book 2 saved successfully");
    })
    .catch((err) => {
        console.log(err);
    });

    let Book3 = new Book({
    title: "Practical Math1",
    author: "Ramanujan",
    price: 1800
    });
    
    Book3.save().then(() => {
        console.log("Book 3 saved successfully");
    })
    .catch((err) => {
        console.log(err);
    });
    
let Book4 = new Book({
        title: "Chemistry1",
        author: "s chand",
        price: 1500
});
    
    Book4.save().then(() => {
        console.log("Book 4 saved successfully");
    })
    .catch((err) => {
        console.log(err);
    });
