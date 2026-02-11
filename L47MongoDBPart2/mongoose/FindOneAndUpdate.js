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

User.findOneAndUpdate({ name: "Afroz" }, { age: 26 }, {new: true})
    .then((result) =>{
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    });


User.findByIdAndUpdate("670a3e2e8c8e20f947939780")
    .then((result) =>{
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    });
