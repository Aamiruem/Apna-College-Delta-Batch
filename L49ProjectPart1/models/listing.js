const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const listingSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description: String,
    image:{
        type: String,
        default: "https://i0.wp.com/www.godsavethepoints.com/wp-content/uploads/2017/08/bali-airbnb3.jpg?fit=1440%2C960&ssl=1",
        
        set: (v) => v === "" ? "https://i0.wp.com/www.godsavethepoints.com/wp-content/uploads/2017/08/bali-airbnb3.jpg?fit=1440%2C960&ssl=1" : v,
    },
    price: Number,
    location: String,
    country: String
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
