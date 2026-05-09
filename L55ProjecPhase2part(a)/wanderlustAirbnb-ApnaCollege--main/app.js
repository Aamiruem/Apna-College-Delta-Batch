// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const port = 8080;
// const path = require("path");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const ExpressError = require("./utils/ExpressError.js");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");
// const flash = require("connect-flash");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const User = require("./models/user.js");

// const listingRouter = require("./routes/listing.js");
// const reviewRouter = require("./routes/review.js");
// const userRouter = require("./routes/user.js");

// const MONGO_URL = `mongodb://127.0.0.1:27017/wanderlust`;

// main()
//   .then(() => {
//     console.log(`DB CONNECTED!`);
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
// app.engine("ejs", ejsMate);
// app.use(express.static(path.join(__dirname, "/public")));
// app.use(cookieParser("signedCookie"));

// const sessionOptions = {
//   secret: "mysupersecretcode",
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
//     maxAge: 7 * 24 * 60 * 60 * 1000,
//     httpOnly: true,
//   },
// };

// app.get("/", (req, res) => {
//   res.send(`Hii I'm Root!`);
// });

// app.use(session(sessionOptions));
// app.use(flash());

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use((req, res, next) => {
//   res.locals.success = req.flash("success");
//   res.locals.error = req.flash("error");
//   res.locals.currUser = req.user;
//   next();
// });

// app.use("/listings", listingRouter);
// app.use("/listings/:id/reviews", reviewRouter);
// app.use("/", userRouter);

// app.all("*", (req, res, next) => {
//   next(new ExpressError(404, "Page not Found!"));
// });

// app.use((err, req, res, next) => {
//   let { statusCode = 500, message = "something went wrong!" } = err;
//   res.status(statusCode).render("error.ejs", { err });
// });




// // app.get("/testListing", async (req, res) => {
// // let sampleListing = new Listing({
// // title: "My New Villa",
// // description: "By the beach",
// // price: 1200,
// // location: "Calangute, Goa",
// // country: "India",
// // });
// // await sampleListing.save();
// // console.log("sample was saved");
// // res.send("successful testing");
// // });

// app.listen(port, () => {
//   console.log(`App is running on port ${port}`);
// });






// const = used to create variable
// express = Express framework
// require() = imports package/module
const express = require("express");


// app = express application object
const app = express();


// mongoose = MongoDB connection library
const mongoose = require("mongoose");


// port = server running number
const port = 8080;


// path = helps manage file/folder paths
const path = require("path");


// method-override = allows PUT & DELETE in forms
const methodOverride = require("method-override");


// ejsMate = layout support for EJS
const ejsMate = require("ejs-mate");


// Import custom error class
const ExpressError = require("./utils/ExpressError.js");


// cookie-parser = reads browser cookies
const cookieParser = require("cookie-parser");


// express-session = creates login sessions
const session = require("express-session");


// connect-flash = temporary messages
const flash = require("connect-flash");


// passport = authentication library
const passport = require("passport");


// passport-local = username/password login strategy
const LocalStrategy = require("passport-local");


// User model import
const User = require("./models/user.js");


// listing routes import
const listingRouter = require("./routes/listing.js");


// review routes import
const reviewRouter = require("./routes/review.js");


// user routes import
const userRouter = require("./routes/user.js");


// MongoDB local database URL
const MONGO_URL = `mongodb://127.0.0.1:27017/wanderlust`;



// main() = database connection function
main()

  // .then() runs if DB connects successfully
  .then(() => {

    // console.log() prints message in terminal
    console.log(`DB CONNECTED!`);
  })

  // .catch() runs if error happens
  .catch((err) => {

    // print error
    console.log(err);
  });



// async = asynchronous function
async function main() {

  // await = wait until DB connects
  await mongoose.connect(MONGO_URL);
}



// Set EJS template engine
app.set("view engine", "ejs");


// Set views folder location
app.set("views", path.join(__dirname, "views"));


// express.urlencoded() reads form data
// extended:true allows nested objects
app.use(express.urlencoded({ extended: true }));


// Enable PUT & DELETE methods
app.use(methodOverride("_method"));


// Set ejsMate as engine
app.engine("ejs", ejsMate);


// Serve static files (CSS/images/js)
app.use(express.static(path.join(__dirname, "/public")));


// Parse cookies
app.use(cookieParser("signedCookie"));



// Session settings object
const sessionOptions = {

  // Secret key for encryption
  secret: "mysupersecretcode",

  // Don't save unchanged session again
  resave: false,

  // Save empty sessions
  saveUninitialized: true,

  // Cookie settings
  cookie: {

    // Expiry date/time
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,

    // Cookie life = 7 days
    maxAge: 7 * 24 * 60 * 60 * 1000,

    // Cookie only accessible by server
    httpOnly: true,
  },
};



// GET route for homepage
app.get("/", (req, res) => {

  // res.send() sends response
  res.send(`Hii I'm Root!`);
});



// Enable session middleware
app.use(session(sessionOptions));


// Enable flash messages
app.use(flash());



// Initialize passport
app.use(passport.initialize());


// Enable session login support
app.use(passport.session());


// Use local authentication strategy
passport.use(new LocalStrategy(User.authenticate()));



// Save user ID in session
passport.serializeUser(User.serializeUser());


// Remove user from session
passport.deserializeUser(User.deserializeUser());



// Middleware runs on every request
app.use((req, res, next) => {

  // success flash message
  res.locals.success = req.flash("success");

  // error flash message
  res.locals.error = req.flash("error");

  // current logged-in user
  res.locals.currUser = req.user;

  // go to next middleware
  next();
});



// All listing routes start with /listings
app.use("/listings", listingRouter);



// Review routes
app.use("/listings/:id/reviews", reviewRouter);



// User routes
app.use("/", userRouter);



// If no route matches
app.all("*", (req, res, next) => {

  // Create custom 404 error
  next(new ExpressError(404, "Page not Found!"));
});



// Error-handling middleware
app.use((err, req, res, next) => {

  // Default values
  let { statusCode = 500, message = "something went wrong!" } = err;

  // Render error page
  res.status(statusCode).render("error.ejs", { err });
});





// Test route (commented)
/*

app.get("/testListing", async (req, res) => {

  // Create sample listing object
  let sampleListing = new Listing({

    // title field
    title: "My New Villa",

    // description field
    description: "By the beach",

    // price field
    price: 1200,

    // location field
    location: "Calangute, Goa",

    // country field
    country: "India",
  });

  // Save listing in DB
  await sampleListing.save();

  // Print terminal message
  console.log("sample was saved");

  // Send browser response
  res.send("successful testing");
});

*/




// Start server on given port
app.listen(port, () => {

  // Print server message
  console.log(`App is running on port ${port}`);
});
