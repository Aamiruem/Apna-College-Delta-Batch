const mongoose = require('mongoose');

let url = "http://localhost:8080/users";

// Sync (Synchronous): One task at a time
// Async (Asynchronous): Start task, continue other work, come back later

// async → function can use await
// await → wait for result before moving ahead


// async = makes a function work in background
// await = waits for result

main().then(() => {
    console.log("connection successful");
}).catch((err) => console.log(err));


async function main() {
    
    await mongoose.connect("mongodb://127.0.0.1:27017/test")
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    roll: Number,
    class: String,
    sub: String
});

const User = mongoose.model("User", userSchema);


User.insertMany([
    {
        name: "Aamir",  
        email: "aamir@123",
        age: 23,
        roll: 1,
        class: "B.tech",
        sub: "Web Development"
    },
    {
        name: "kamran",
        email: "kamran@123",
        age: 23,
        roll: 2,
        class: "B.tech",
        sub: "Web Development"
    }
]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
