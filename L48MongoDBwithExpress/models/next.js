const express = require("express");

const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./chat.js");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")


const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    // other fields...
});


const newChat = new Chat({
    from: 'User123', // ensure this is not empty
    message: 'Hello world!',
    // other fields...
});

newChat.save()
    .then(() => console.log('Chat saved'))
    .catch(err => console.error(err));

    app.post('/chat', (req, res) => {
        const { from, message } = req.body;
        
        if (!from) {
            return res.status(400).json({ error: 'From field is required' });
        }
        
        const newChat = new Chat({ from, message });
        newChat.save()
            .then(chat => res.json(chat))
            .catch(err => res.status(500).json({ error: err.message }));
    });
    