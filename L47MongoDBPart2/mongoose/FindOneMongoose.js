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

User.findOne({ age: { $gt: 22 } })
// User.findOne({ _id:"670a4023adc21415e551b05a"})
// User.findById("670a4023adc21415e551b05a")
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
