const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

// User.updateOne({ name: "kamran" }, { age: 22 })
//     .then((result) =>{
//         console.log(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     });


User.updateMany({ age: {$gt:20} }, { age: 23 })
    .then((result) =>{
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    });
