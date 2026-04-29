// const mongoose = require("mongoose");
// const express = require("express");
// const Chat = require("./models/chat.js");


// main()
//     .then(() => {
//         console.log("Connection Successful");

//     })
//     .catch((err) => {
//         console.log(err)
//     });

// async function main() {
//     await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
// }

// let allChats = [
//     {
//         from: "neha",
//         to: "kamran",
//         msg: "Hello kamran send me your exam sheet!",
//         created_at: new Date()
//     },
//     {
//         from: "kamran",
//         to: "neha",
//         msg: "Hello neha send me your exam sheet!",
//         created_at: new Date()
//     },
//     {
//         from: "Arbaj",
//         to: "Sonu",
//         msg: "Hello kamran send me your exam sheet!",
//         created_at: new Date()
//     },
//     {
//         from: "Afroz",
//         to: "Shahbaj",
//         msg: "Today i am very Happy!",
//         created_at: new Date()
//     },
//     {
//         from: "Sam",
//         to: "Arjun",
//         msg: "Bring some fruits!",
//         created_at: new Date()
//     }
// ]

// Chat.insertMany(allChats);




const mongoose = require("mongoose");
const express = require("express");
const Chat = require("./models/chat.js");
const path = require("path");
const methodOverride = require("method-override");

const app = express();

// Views setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// MongoDB Connection
main()
    .then(() => {
        console.log("Connection Successful");
        insertChats();
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// Sample Data
let allChats = [
    {
        from: "neha",
        to: "kamran",
        msg: "Hello kamran send me your exam sheet!",
        created_at: new Date()
    },
    {
        from: "kamran",
        to: "neha",
        msg: "Hello neha send me your exam sheet!",
        created_at: new Date()
    },
    {
        from: "Arbaj",
        to: "Sonu",
        msg: "Hello Sonu send me your notes!",
        created_at: new Date()
    },
    {
        from: "Afroz",
        to: "Shahbaj",
        msg: "Today I am very happy!",
        created_at: new Date()
    },
    {
        from: "Sam",
        to: "Arjun",
        msg: "Bring some fruits!",
        created_at: new Date()
    }
];

// Insert Data Function
async function insertChats() {
    try {
        await Chat.deleteMany({}); // Optional: clears old data
        await Chat.insertMany(allChats);
        console.log("Chats inserted successfully");
    } catch (err) {
        console.log("Error inserting chats:", err);
    }
}

// Server Start
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
