// const Listing = require("../models/listing");
// const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
// const mapToken = process.env.MAP_TOKEN;
// const geocodingClient = mbxGeocoding({ accessToken: mapToken });


// // const mapboxClient = require('@mapbox/mapbox-sdk/services/geocoding');
// // const geocodingClients = mapboxClient({ accessToken: 'your_mapbox_access_token_here' });
// // require('dotenv').config();
// // const mapboxClient = require('@mapbox/mapbox-sdk/services/geocoding');
// // const geocodingClient = mapboxClient({ accessToken: process.env.MAPBOX_ACCESS_TOKEN });



// module.exports.index = async (req,res) => {
//     const allListings =  await Listing.find({});
//     res.render("./listings/index.ejs",{allListings});
// };

// module.exports.renderNewForm =  (req ,res) => {
//     res.render("listings/new.ejs");

// };

// module.exports.showListing = async(req,res) => {
//     let {id} = req.params;
//      const listing = await Listing.findById(id).populate({path : "reviews",populate : { path : "author"},}).populate("owner");
//      if(!listing){
//         req.flash("error","Listing you requested for does not exist!");
//         res.redirect("/listings");
//      }
     
//     res.render("listings/show.ejs",{listing});

// };

// module.exports.createListing = async (req,res,next) => {

//     let response = await geocodingClient.forwardGeocode({
//         query: req.body.listing.location,
//         limit: 1
//       })
//         .send()

   
//         //le,description,image,price,country,location} = req.body;
//     let url = req.file.path;
//     let filename = req.file.filename;
// const newListing = new Listing (req.body.listing);
// newListing.owner = req.user._id;
// newListing.image={url,filename};
// newListing.geometry = response.body.features[0].geometry
// let savedListing = await newListing.save();
// console.log(savedListing);
// req.flash("success","New listing created!");
// res.redirect("/listings");
    
// };

// module.exports.editListing = async (req,res) => {
//     let {id} = req.params;
//     const listing = await Listing.findById(id);
//     if(!listing){
//         req.flash("error","Listing you requested for does not exist!");
//         res.redirect("/listings");
//         return;
//      }

//     let originalImageUrl =  listing.image.url;
//    originalImageUrl = originalImageUrl.replace("/upload","/upload/w_250");

//     res.render("listings/edit.ejs",{listing , originalImageUrl});
// };

// module.exports.updateListing = async (req,res) => {
//     let {id} = req.params;
//      let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
//      if(typeof req.file !== "undefined"){

//      let url = req.file.path;
//      let filename = req.file.filename;
//      listing.image = {url,filename};
//      await listing.save();

//      }
//      req.flash("success","Listing updated!");
//      res.redirect(`/listings/${id}`);
     
// };

// module.exports.deleteListing = async (req,res ) => {
//     let {id} = req.params;
//     let deletedListing =  await Listing.findByIdAndDelete(id);
//     console.log(deletedListing);
//     req.flash("success","Listing deleted!");
//     res.redirect("/listings");
// };







// if (process.env.NODE_ENV != "production") {
//     require("dotenv").config();
// }

// const Listing = require("../models/listing");

// const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

// // Debug token
// console.log(process.env.MAP_TOKEN);

// const geocodingClient = mbxGeocoding({
//     accessToken: process.env.MAP_TOKEN,
// });

// // ================= INDEX =================

// module.exports.index = async (req, res) => {
//     const allListings = await Listing.find({});

//     res.render("./listings/index.ejs", { allListings });
// };

// // ================= NEW FORM =================

// module.exports.renderNewForm = (req, res) => {
//     res.render("listings/new.ejs");
// };

// // ================= SHOW LISTING =================

// module.exports.showListing = async (req, res) => {
//     let { id } = req.params;

//     const listing = await Listing.findById(id)
//         .populate({
//             path: "reviews",
//             populate: {
//                 path: "author",
//             },
//         })
//         .populate("owner");

//     if (!listing) {
//         req.flash("error", "Listing you requested does not exist!");

//         return res.redirect("/listings");
//     }

//     res.render("listings/show.ejs", { listing });
// };

// // ================= CREATE LISTING =================

// module.exports.createListing = async (req, res, next) => {
//     let response = await geocodingClient
//         .forwardGeocode({
//             query: req.body.listing.location,
//             limit: 1,
//         })
//         .send();

//     let url = req.file.path;
//     let filename = req.file.filename;

//     const newListing = new Listing(req.body.listing);

//     newListing.owner = req.user._id;

//     newListing.image = { url, filename };

//     newListing.geometry = response.body.features[0].geometry;

//     let savedListing = await newListing.save();

//     console.log(savedListing);

//     req.flash("success", "New Listing Created!");

//     res.redirect("/listings");
// };

// // ================= EDIT FORM =================

// module.exports.editListing = async (req, res) => {
//     let { id } = req.params;

//     const listing = await Listing.findById(id);

//     if (!listing) {
//         req.flash("error", "Listing you requested does not exist!");

//         return res.redirect("/listings");
//     }

//     let originalImageUrl = listing.image.url;

//     originalImageUrl = originalImageUrl.replace(
//         "/upload",
//         "/upload/w_250"
//     );

//     res.render("listings/edit.ejs", {
//         listing,
//         originalImageUrl,
//     });
// };

// // ================= UPDATE LISTING =================

// module.exports.updateListing = async (req, res) => {
//     let { id } = req.params;

//     let listing = await Listing.findByIdAndUpdate(id, {
//         ...req.body.listing,
//     });

//     if (typeof req.file !== "undefined") {
//         let url = req.file.path;

//         let filename = req.file.filename;

//         listing.image = { url, filename };

//         await listing.save();
//     }

//     req.flash("success", "Listing Updated!");

//     res.redirect(`/listings/${id}`);
// };

// // ================= DELETE LISTING =================

// module.exports.deleteListing = async (req, res) => {
//     let { id } = req.params;

//     let deletedListing = await Listing.findByIdAndDelete(id);

//     console.log(deletedListing);

//     req.flash("success", "Listing Deleted!");

//     res.redirect("/listings");
// };











// // Force load dotenv at the very top
// require("dotenv").config();

// const Listing = require("../models/listing");
// const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

// // Debug token - this should now show your token
// console.log('MAP_TOKEN in listings.js:', process.env.MAP_TOKEN ? '✅ Token exists' : '❌ Token missing');
// console.log('Token first 10 chars:', process.env.MAP_TOKEN ? process.env.MAP_TOKEN.substring(0, 10) : 'No token');

// // Check if token exists before creating client
// if (!process.env.MAP_TOKEN) {
//     console.error('❌ FATAL ERROR: MAP_TOKEN is not defined in listings.js');
//     // Don't exit here, but the geocoding won't work
// }

// const geocodingClient = mbxGeocoding({
//     accessToken: process.env.MAP_TOKEN,
// });

// // ================= INDEX =================
// module.exports.index = async (req, res) => {
//     const allListings = await Listing.find({});
//     res.render("./listings/index.ejs", { allListings });
// };

// // ================= NEW FORM =================
// module.exports.renderNewForm = (req, res) => {
//     res.render("listings/new.ejs");
// };

// // ================= SHOW LISTING =================
// module.exports.showListing = async (req, res) => {
//     let { id } = req.params;

//     const listing = await Listing.findById(id)
//         .populate({
//             path: "reviews",
//             populate: {
//                 path: "author",
//             },
//         })
//         .populate("owner");

//     if (!listing) {
//         req.flash("error", "Listing you requested does not exist!");
//         return res.redirect("/listings");
//     }

//     res.render("listings/show.ejs", { listing });
// };

// // ================= CREATE LISTING =================
// module.exports.createListing = async (req, res, next) => {
//     // Add error handling for geocoding
//     if (!process.env.MAP_TOKEN) {
//         req.flash("error", "Map service is not configured. Please contact administrator.");
//         return res.redirect("/listings/new");
//     }

//     try {
//         let response = await geocodingClient
//             .forwardGeocode({
//                 query: req.body.listing.location,
//                 limit: 1,
//             })
//             .send();

//         let url = req.file.path;
//         let filename = req.file.filename;

//         const newListing = new Listing(req.body.listing);
//         newListing.owner = req.user._id;
//         newListing.image = { url, filename };
//         newListing.geometry = response.body.features[0].geometry;

//         let savedListing = await newListing.save();
//         console.log(savedListing);

//         req.flash("success", "New Listing Created!");
//         res.redirect("/listings");
//     } catch (error) {
//         console.error("Geocoding error:", error);
//         req.flash("error", "Error processing location. Please try again.");
//         res.redirect("/listings/new");
//     }
// };

// // ================= EDIT FORM =================
// module.exports.editListing = async (req, res) => {
//     let { id } = req.params;

//     const listing = await Listing.findById(id);

//     if (!listing) {
//         req.flash("error", "Listing you requested does not exist!");
//         return res.redirect("/listings");
//     }

//     let originalImageUrl = listing.image.url;
//     originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");

//     res.render("listings/edit.ejs", {
//         listing,
//         originalImageUrl,
//     });
// };

// // ================= UPDATE LISTING =================
// module.exports.updateListing = async (req, res) => {
//     let { id } = req.params;

//     let listing = await Listing.findByIdAndUpdate(id, {
//         ...req.body.listing,
//     });

//     if (typeof req.file !== "undefined") {
//         let url = req.file.path;
//         let filename = req.file.filename;
//         listing.image = { url, filename };
//         await listing.save();
//     }

//     req.flash("success", "Listing Updated!");
//     res.redirect(`/listings/${id}`);
// };

// // ================= DELETE LISTING =================
// module.exports.deleteListing = async (req, res) => {
//     let { id } = req.params;

//     let deletedListing = await Listing.findByIdAndDelete(id);
//     console.log(deletedListing);

//     req.flash("success", "Listing Deleted!");
//     res.redirect("/listings");
// };












// REMOVE the dotenv line and add this temporary hardcoded token
// require("dotenv").config(); // Comment this out for now

const Listing = require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

// TEMPORARY HARDCODED TOKEN - Remove after fixing dotenv
const MAP_TOKEN = "pk.eyJ1IjoiYWFtaXJodXNzYWluYXphZCIsImEiOiJjbTR3OWZmc2EwOXduMmhxd3R0bG1zcnFkIn0.vaXBhTfm7OB0sjMnh_GbIQ";

console.log('✅ Using hardcoded MAP_TOKEN');

const geocodingClient = mbxGeocoding({
    accessToken: MAP_TOKEN,
});

// Rest of your code remains exactly the same...
module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;

    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("owner");

    if (!listing) {
        req.flash("error", "Listing you requested does not exist!");
        return res.redirect("/listings");
    }

    res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
    try {
        let response = await geocodingClient
            .forwardGeocode({
                query: req.body.listing.location,
                limit: 1,
            })
            .send();

        let url = req.file.path;
        let filename = req.file.filename;

        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        newListing.image = { url, filename };
        newListing.geometry = response.body.features[0].geometry;

        let savedListing = await newListing.save();
        console.log(savedListing);

        req.flash("success", "New Listing Created!");
        res.redirect("/listings");
    } catch (error) {
        console.error("Geocoding error:", error);
        req.flash("error", "Error processing location");
        res.redirect("/listings/new");
    }
};

module.exports.editListing = async (req, res) => {
    let { id } = req.params;

    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing you requested does not exist!");
        return res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");

    res.render("listings/edit.ejs", {
        listing,
        originalImageUrl,
    });
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;

    let listing = await Listing.findByIdAndUpdate(id, {
        ...req.body.listing,
    });

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;

    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);

    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};
