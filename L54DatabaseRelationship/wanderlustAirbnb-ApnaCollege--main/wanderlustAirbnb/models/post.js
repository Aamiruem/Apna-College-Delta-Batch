const mongoose = require('mongoose');
const { Schema } = mongoose;

main()
    .then(() => console.log("Connection successful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

// Define the User schema
const userSchema = new Schema({
    username: String,
    email: String,
});

// Define the Comment schema (assuming this is necessary based on the Post schema)
const commentSchema = new Schema({
    content: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
});

// Define the Post schema
const postSchema = new Schema({
    content: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
});

// Create models
const User = mongoose.model('User', userSchema);
const Comment = mongoose.model('Comment', commentSchema);
const Post = mongoose.model('Post', postSchema);



// Populate the database with sample data
const getData = async () => {
    let result = await Post.findOne({}).populate("user", "username");
    console.log(result)
};
getData();

// Create a new user
const addData = async () => {
    let user = await User.findOne({ username: "aamir hussain" });

    let user1 = new User({
        username: "kamran Hussain",
        email: "kamranhussain@example.com",
    });

    let user2 = new User({
        username: "Jane Doe",
        email: "janeDoe@example.com",
    });
    
    let post1 = new Post({
        content: "Hello",
        likes: 10,
        user: user1._id,
    });

    let post2 = new Post({
        content: "Bye Bye!",
        likes: 20,
        user: user1._id,
    });

    let comment1 = new Comment({
        content: "Nice post!",
        user: user1._id,
    });

    let comment2 = new Comment({
        content: "I agree",
        user: user1._id,
    });


    post1.user = user1;
    await user1.save();
    await post1.save();
    await comment1.save();

    post2.user = user1;
    await user1.save();
    await post2.save();
    await comment2.save();


    // };
// addData();

module.exports = { User, Comment, Post };


// const del = async() => {
//     await Post.findByIdAndDelete(post1._id);
//     await Post.findByIdAndDelete(post2._id);
//     await Comment.findByIdAndDelete(comment1._id);
//     await Comment.findByIdAndDelete(comment2._id);
//     await User.findByIdAndDelete(user1._id);
//     await User.findByIdAndDelete(user2._id);
}
