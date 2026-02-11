// MongoDB with Express

const express = require("express"); const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js"); // requiring model defined file
const methodOverride = require("method-override");
const MyExpressError = require("./MyExpressError");

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
app.get("/chats", asyncWrap(async (req, res, next) => {
    const chats = await Chat.find();
res.render("show.ejs", { chats });
}));

// Create route
app.get("/chats/new", (req, res) => {
    // throw new MyExpressError(404, "Page Not Found!");
    res.render("new.ejs");
});
app.post("/chats", asyncWrap(async (req, res, next) => {
    let {from, msg, to} = req.body;

let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date()
});
await newChat.save();

res.redirect("/chats");
}));


// Another method to handle asynchronous errors using wrapAsync function
function asyncWrap(fn) {
    return function(req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    }
}


// NEW SHOW ROUTE - TO HANDLE ASYNCHRONOUS ERROR
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
let chat = await Chat.findById(id);
if (!chat) {
    next( new MyExpressError(404, "Chat Not Found!") );
}
res.render("edit.ejs", { chat });
}));


// Edit/Update route 
app.get("/chats/:id/edit", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
let chat = await Chat.findById(id);
res.render("edit.ejs", { chat });
}));
app.put("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
let { msg: newMsg } = req.body;
let updatedChat = await Chat.findByIdAndUpdate(id, {msg: newMsg},
    {runValidators: true, new: true} );
    // console.log(updatedChat);

    res.redirect("/chats");
}));

// Delete route 
app.delete("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
let deletedChat = await Chat.findByIdAndDelete(id);
// console.log(deletedChat);

res.redirect("/chats");
}));

/* Mongoose Validation Error */
// Function to handle validation error with custom error
const handleValidationErr = (err) => {
    console.log("This was a validation error, Please follow rules.");
    // console.dir(err.message);
    console.dir(err._message);
    return err;
}
// Another Error Handling Middleware
app.use((err, req, res, next) => {
    // console.log(err.name);
    if (err.name === "ValidationError") {
        err = handleValidationErr(err);
    }
    next(err);
});

// Error Handling Middleware
app.use( (err, req, res, next) => {
    let { status = 500, message = "Some error occurred!"} = err;
    res.status(status).send(message);
});

// Created a connection between MongoDB and Node.js 
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}
main().then((res) => {
    console.log("Connection successful.");
}).catch((err) => {
    console.log(err);
});