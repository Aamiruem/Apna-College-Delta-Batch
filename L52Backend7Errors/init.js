const mongoose = require("mongoose");
const express = require("express");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("Connection Successful");

    })
    .catch((err) => {
        console.log(err)
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

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
        msg: "Hello kamran send me your exam sheet!",
        created_at: new Date()
    },
    {
        from: "Afroz",
        to: "Shahbaj",
        msg: "Today i am very Happy!",
        created_at: new Date()
    },
    {
        from: "Sam",
        to: "Arjun",
        msg: "Bring some fruits!",
        created_at: new Date()
    }
]

Chat.insertMany(allChats);

