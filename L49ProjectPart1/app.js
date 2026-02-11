const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
    .then(() => {
        console.log("Connected to DB");

    })
    .catch((err) => {
        console.log(err)
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
    res.send("Welcome to the API! Hello! I am root path");
});

app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing({
        title: "My New Villa",
        description: "By the beach This is a new villa",
        image: "https://i0.wp.com/www.godsavethepoints.com/wp-content/uploads/2017/08/bali-airbnb3.jpg?fit=1440%2C960&ssl=1",
        price: 1200,
        location: "Calangute Goa",
        country: "India"
    });

    await sampleListing.save();
    console.log("sample was saved");
    res.send("successful testing");
});
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
