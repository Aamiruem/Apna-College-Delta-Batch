// MongoDB with Express

const express = require("express"); const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js"); // requiring model defined file
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded( {extended: true}));
app.use(methodOverride("_method"));

// Created an express app
app.listen(3000, () => {
    console.log(`App is listening on 3000 port...`);
});
// Root route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to root path.</h1>");
});

// Index route 
app.get("/chats", async (req, res) => {
    const chats = await Chat.find();
    res.render("show.ejs", { chats });
});

// Create route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});
app.post("/chats", (req, res) => {
    let {from, msg, to} = req.body;

    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });
    newChat.save().then((res) => {
        console.log("Chat was saved.");
    }).catch((err) => console.log(err));

    res.redirect("/chats");
});

// Edit/Update route 
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
});
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, {msg: newMsg},
        {runValidators: true, new: true} );
        // console.log(updatedChat);

        res.redirect("/chats");
});

// Delete route 
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    // console.log(deletedChat);

    res.redirect("/chats");
});

// Created a connection between MongoDB and Node.js 
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
main().then((res) => {
    console.log("Connection successful.");
}).catch((err) => {
    console.log(err);
});