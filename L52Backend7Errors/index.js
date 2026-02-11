const express = require("express");

const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));



main()
    .then(() => {
        console.log("Connection Successful");

    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// index Route
app.get("/chats", async (req, res, next) => {
    try {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats });
    } catch (err) {
        // console.log(err);
        next(err);
    }
});


//New Route
app.get("/chats/new", (req, res) => {
    // throw new ExpressError(404, "page not found some random error");
    res.status(404).send('Page Not Found');
    res.render("new.ejs");
});


//Create Route
app.post("/chats", async (req, res) => {
    try {
        let { from, to, msg } = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            msg: msg,
            created_at: new Date()
        });
        newChat
            .save()
            .then((res) => {
                console.log("chat was saved");
            })
            .catch((err) => {
                console.log(err)
            });
        await newChat
            .save();
        res.redirect("/chats");
    
    } catch (err) {
        // console.log(err);
        next(err);
    }
});
 
function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    };
}


//NEW - async Show Route
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
    
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
        throw new ExpressError(500, "CHAT not found some random error");
    }
    res.render("edit.ejs", { chat });
}));

    

//NEW - Show Route
app.get("/chats/:id", async (req, res, next) => {
    try {
        
        let { id } = req.params;
        let chat = await Chat.findById(id);
        if (!chat) {
            throw new ExpressError(500, "CHAT not found some random error");
        }
        res.render("edit.ejs", { chat });
    } catch (err) {
        next(err);
    }
});


// Edit Routes 
app.get("/chats/:id/edit", async (req, res) => {
    try {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", { chat });
    } catch (err) {
        next(err);
        }
});

//asyncWrap Update Route
app.put("/chats/:id",asyncWrap(async (req, res, next) => {
        let { id } = req.params;
    let {msg: newMsg } = req.body;
    console.log(newMsg);
    let updatedChat = await Chat.findByIdAndUpdate(id,
        { msg: newMsg },
        { runValidators: true, new: true }
    );
    console.log(updatedChat);
    res.redirect("/chats");
}));



//Update Route
app.put("/chats/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
    let {msg: newMsg } = req.body;
    console.log(newMsg);
    let updatedChat = await Chat.findByIdAndUpdate(id,
        { msg: newMsg },
        { runValidators: true, new: true }
    );
    console.log(updatedChat);
    res.redirect("/chats");
    } catch (err) {
        next(err);
    }
});

//asyncWrap Destroy Routes
app.delete("/chats/:id", asyncWrap(async (req, res, next) => {
        let { id } = req.params;
        const chat = await Chat.findByIdAndDelete(id);
        let deletedChat = await Chat.findByIdAndDelete(id);
        console.log(`deleted: ${chat}`);
        console.log(deletedChat);
        res.redirect("/chats");
}));


//Destroy Routes
app.delete("/chats/:id", async (req, res, next) => {
    try {
        let { id } = req.params;
        const chat = await Chat.findByIdAndDelete(id);
        let deletedChat = await Chat.findByIdAndDelete(id);
        console.log(`deleted: ${chat}`);
        console.log(deletedChat);
        res.redirect("/chats");
    } catch (err) {
        next(err);
        }
});

app.get("/", (req, res) => {
    res.send("/chats");
});

// Delete Route
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let deletedChat =  await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});

// let chat1 = new Chat({
//     from: "neha",
//     to: "kamran",
//     msg: "Hello kamran send me your exam sheet!",
//     created_at: new Date()
// });

// chat1.save().then((res) => {
//     console.log(res);
// });

app.get("/", (req, res) => {
    res.send("Welcome to the API!");
});

const handleValidationErr = (err) => {
    console.log("This was a validation error occurred! Please follow rules!");
    console.dir(err);
    console.dir(err.message);
    return err;
};

app.use((err, req, res, next) => {
    console.log(err.name);
    if (err.name === "ValidationError") {
        err = handleValidationErr(err);
    }
    next(err);
    // res.status(404).send("Page Not Found");
});


// Error Handling Middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "some Error occurred" } = err;
    res.status(status).send(message, "Something broke!");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
