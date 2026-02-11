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

// One to many - Approach 3 (One to squillions)

// Defining the schema for the InstaUser collection
const instaUserSchema = new Schema({
    username: String,
    email: String
});

// Defining the schema for the Post collection
const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId, // Reference to the InstaUser collection
        ref: "InstaUser"             // Name of the model being referenced
    }
});

// Creating models for InstaUser and Post collections
const InstaUser = mongoose.model("InstaUser", instaUserSchema);
const Post = mongoose.model("Post", postSchema);

// Async function to add an Insta user and their posts to the database
const addData = async () => {
    let user1 = new InstaUser({
        username: "ronaldo",
        email: "ronaldo@gmail.com"
    });
    const addedUser = await user1.save();
    console.log(addedUser);

    // Adding multiple posts associated with the created user
    let posts = await Post.insertMany([
        {
            content: "Hello world!",
            likes: 101,
            user: addedUser
        },
        {
            content: "Hello everyone",
            likes: 150,
            user: addedUser
        }
    ]);
    console.log(posts);
}
// addData(); // Uncomment to add the user and their posts to the database

// Async function to retrieve and display an Insta user and their posts
const getData = async () => {
    let user = await InstaUser.findOne();
    console.log("InstaUser =", user);

    // Finding posts and populating the user field with only the username
    let posts = await Post.find().populate("user", "username");
    console.log("Posts =", posts);
}
getData(); // Calling the function to find and display the user and their posts