const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
main().then((res) => {
    console.log("Connection successful.");
}).catch((err) => {
    console.log(err);
});


let allChats = [
    {
        from: "rohit",
        to: "mohit",
        msg: "hey where are you from?",
        created_at: new Date()
    },
    {
        from: "neha",
        to: "priya",
        msg: "neha please send me your notes",
        created_at: new Date()
    },
    {
        from: "shreya",
        to: "kajal",
        msg: "what are you doing at this time?",
        created_at: new Date()
    },
    {
        from: "suresh",
        to: "mukesh",
        msg: "hey mukesh what is your plan for future?",
        created_at: new Date()
    },
    {
        from: "raju",
        to: "kaju",
        msg: "hey bro what is your qualification?",
        created_at: new Date()
    },
    {
        from: "sachin",
        to: "rinku",
        msg: "hey rinku you are playing very well",
        created_at: new Date()
    },
    {
        from: "sushant",
        to: "anushka",
        msg: "can you share your pictures of dubai toor?",
        created_at: new Date()
    },
    {
        from: "kamal",
        to: "vimal",
        msg: "i will never promote you in my life",
        created_at: new Date()
    },
    {
        from: "shubham",
        to: "sunakshi",
        msg: "hey sunakshi can you create something for me",
        created_at: new Date()
    },
    {
        from: "nisha",
        to: "sameer",
        msg: "what is your opinion on relationships?",
        created_at: new Date()
    },
    {
        from: "vikas",
        to: "ajay",
        msg: "which is the best thing in your prime minister?",
        created_at: new Date()
    },
    {
        from: "sakshi",
        to: "abhishek",
        msg: "hey abhishek what's the best team in ipl",
        created_at: new Date()
    },
    {
        from: "vishal",
        to: "nitu",
        msg: "hey nitu what is your best hobby?",
        created_at: new Date()
    },
    {
        from: "sneha",
        to: "sam",
        msg: "i am very dangerous so please don't chat with me",
        created_at: new Date()
    },
];


Chat.insertMany(allChats);