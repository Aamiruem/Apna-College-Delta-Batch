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

// User.deleteOne({ name: "Aamir" })
//     .then((result) =>{
//         console.log(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     });



// User.deleteMany({ age: 23 })
//     .then((result) =>{
//         console.log(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     });



User.findByIdAndDelete("670a3e2e8c8e20f947939780")
    .then((result) =>{
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    });




// User.findOneAndDelete({ age: 23 })
//     .then((result) =>{
//         console.log(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     });
