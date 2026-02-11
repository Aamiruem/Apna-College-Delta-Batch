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

User.insertMany([
    {
        name: "Aamir",
        email: "aamir@123",
        age: 23,
    },
    {
        name: "kamran",
        email: "kamran@123",
        age: 23,
    },
    {
        name: "Afroz",
        email: "Afroz@123",
        age: 20,
    },
    {
        name: "Shahbaz",
        email: "Shahbaz@123",
        age: 19,
    },
    {
        name: "Jawed",
        email: "Jawed@123",
        age: 18,
    },
    {
        name: "Gulrej",
        email: "Gulrej@123",
        age: 18,
    },
    {
        name: "shahil",
        email: "shahil@123",
        age: 7,
    }
]).then((res) =>{
    console.log(res);
})
