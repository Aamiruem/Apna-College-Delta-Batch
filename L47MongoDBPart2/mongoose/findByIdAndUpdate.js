// const mongoose = require("mongoose");

// main()
//     .then(() => {
//         console.log("connection successful");
//     })
//     .catch((err) => console.log(err));

// async function main() {
//     await mongoose.connect("mongodb://127.0.0.1:27017/test");
// }

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     age: Number,
// });

// const User = mongoose.model("User", userSchema);

// const userId = 'some_valid_id_here'; // Replace this with the actual _id

// User.findByIdAndUpdate(userId, { age: 24 }, { new: true })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });







const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust the path to your User model

const id = 'some_valid_id_here'; // Replace this with the actual ID you're trying to use

// Check if the ID is valid
if (!mongoose.Types.ObjectId.isValid(id)) {
    console.error('Invalid ObjectId');
    return;
}

// Use findByIdAndUpdate safely
User.findByIdAndUpdate(id, { name: 'Adam' }, { new: true })
    .then((user) => {
        if (!user) {
            console.log('No user found with this ID');
        } else {
            console.log('User updated:', user);
        }
    })
    .catch((err) => {
        console.error('Error updating user:', err);
    });
