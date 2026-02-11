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

User.find({ age: { $gt: 22 } })
    .then((res) => {
        // console.log(res);
        console.log(res[0].name);
    })
    .catch((err) => {
        console.log(err);
    });
