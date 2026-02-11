// Database Relationships

// Importing the mongoose library for MongoDB interactions
const mongoose = require("mongoose");
const { Schema } = mongoose;

// Async function to establish a connection to the MongoDB database
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}
main()
    .then(() => console.log("Connection successful."))
    .catch((err) => console.log(err));

// Mongo Relationships

// One to many - Approach 1 (One to few)
// Defining the schema for a collection
const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String
        }
    ]
});

// Creating a model based on the userSchema for interacting with the User collection
const User = mongoose.model("User", userSchema);

// Async function to add users to the User collection
const addUsers = async () => {
    // Creating a new user object with username and addresses
    let user1 = new User({
        username: "john",
        addresses: [{
            location: "123 Main Street",
            city: "London"
        }]
    });
    // Adding another address to the user1
    user1.addresses.push({
        location: "456 Park Street",
        city: "Paris"
    });
    // Saving the user to the database and storing the result
    let addedUser = await user1.save();
    console.log(addedUser);
}
// addUsers(); // Calling the addUsers function to add users