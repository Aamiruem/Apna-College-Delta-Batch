// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const Listing = require("./models/listing.js");
// const path = require("path");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";




// main()
//   .then(() => {
//     console.log("connected to DB");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function main() {
//   await mongoose.connect(MONGO_URL);
// }

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));
// app.use(express.json());

// app.engine("ejs", ejsMate);
// app.use(express.static(path.join(__dirname, "/public")));

// app.get("/", (req, res) => {
//   res.send("Hi, I am root");
// });

// //Index Route
// app.get("/listings", async (req, res) => {
//   const allListings = await Listing.find({});
//   res.render("listings/index.ejs", { allListings });
// });

// //New Route
// app.get("/listings/new", (req, res) => {
//   res.render("listings/new.ejs");
// });

// //Show Route
// app.get("/listings/:id", async (req, res) => {
//   let { id } = req.params;
//   const listing = await Listing.findById(id);
//   res.render("listings/show.ejs", { listing });
// });

// //Create Route
// app.post("/listings", async (req, res) => {
//   const newListing = new Listing(req.body.listing);
//   await newListing.save();
//   res.redirect("/listings");
// });

// //Edit Route
// app.get("/listings/:id/edit", async (req, res) => {
//   let { id } = req.params;
//   const listing = await Listing.findById(id);
//   res.render("listings/edit.ejs", { listing });
// });

// //Update Route
// app.put("/listings/:id", async (req, res) => {
//   let { id } = req.params;
//   await Listing.findByIdAndUpdate(id, { ...req.body.listing });
//   res.redirect(`/listings/${id}`);
// });

// //Delete Route
// app.delete("/listings/:id", async (req, res) => {
//   let { id } = req.params;
//   let deletedListing = await Listing.findByIdAndDelete(id);
//   console.log(deletedListing);
//   res.redirect("/listings");
// });

// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Villa",
//     description: "By the beach",
//     price: 1200,
//     location: "Calangute, Goa",
//     country: "India",
//   });

//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("successful testing");
// });

// app.listen(8080, () => {
//   console.log("server is listening to port 8080");
// });








const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const PORT = 8080;
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// ===============================
// MongoDB Connection
// ===============================
main()
  .then(() => {
    console.log(" Connected to MongoDB");
  })
  .catch((err) => {
    console.log(" Database Connection Error:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

// ===============================
// View Engine Setup
// ===============================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

// ===============================
// Middleware
// ===============================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// ===============================
// Root Route
// ===============================
app.get("/", (req, res) => {
  res.send("Welcome to Wanderlust!");
});

// ===============================
// INDEX Route - Show All Listings
// ===============================
app.get("/listings", async (req, res) => {
  try {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  } catch (err) {
    console.log(err);
    res.send("Error fetching listings");
  }
});

// ===============================
// NEW Route - Form to Create Listing
// ===============================
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

// ===============================
// SHOW Route - Show Single Listing
// ===============================
app.get("/listings/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
      return res.send("Listing not found");
    }

    res.render("listings/show.ejs", { listing });
  } catch (err) {
    console.log(err);
    res.send("Error loading listing details");
  }
});

// ===============================
// CREATE Route - Add New Listing
// ===============================
app.post("/listings", async (req, res) => {
  try {
    const newListing = new Listing(req.body.listing);
    await newListing.save();

    console.log(" New Listing Created");
    res.redirect("/listings");
  } catch (err) {
    console.log(err);
    res.send("Error creating listing");
  }
});

// ===============================
// EDIT Route - Edit Form
// ===============================
app.get("/listings/:id/edit", async (req, res) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
      return res.send("Listing not found");
    }

    res.render("listings/edit.ejs", { listing });
  } catch (err) {
    console.log(err);
    res.send("Error loading edit form");
  }
});

// ===============================
// UPDATE Route - Update Listing
// ===============================
app.put("/listings/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Listing.findByIdAndUpdate(id, {
      ...req.body.listing,
    });

    console.log(" Listing Updated");
    res.redirect(`/listings/${id}`);
  } catch (err) {
    console.log(err);
    res.send("Error updating listing");
  }
});

// ===============================
// DELETE Route - Delete Listing
// ===============================
app.delete("/listings/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedListing = await Listing.findByIdAndDelete(id);

    console.log(" Deleted Listing:", deletedListing);
    res.redirect("/listings");
  } catch (err) {
    console.log(err);
    res.send("Error deleting listing");
  }
});

// ===============================
// Test Route - Sample Data
// ===============================
app.get("/testListing", async (req, res) => {
  try {
    const sampleListing = new Listing({
      title: "My New Villa",
      description: "By the beach",
      price: 1200,
      location: "Calangute, Goa",
      country: "India",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    });

    await sampleListing.save();

    console.log(" Sample Listing Saved");
    res.send("Sample listing created successfully");
  } catch (err) {
    console.log(err);
    res.send("Error creating sample listing");
  }
});

// ===============================
// Server Start
// ===============================
app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});
