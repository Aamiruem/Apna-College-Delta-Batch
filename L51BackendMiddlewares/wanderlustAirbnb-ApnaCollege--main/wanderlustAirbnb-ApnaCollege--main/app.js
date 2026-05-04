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

// app.listen(port, () => {
//   console.log(`App is running on port ${port}`);
// });






// Import Express framework (used to create server)
const express = require("express");

// Create Express app
const app = express();

// Import Mongoose (used to connect MongoDB)
const mongoose = require("mongoose");

// Define port number
const port = 8080;

// Import path module (used for file/folder paths)
const path = require("path");

// Middleware to use PUT, DELETE methods from forms
const methodOverride = require("method-override");

// EJS layout engine (helps reuse templates)
const ejsMate = require("ejs-mate");

// Custom error class (for handling errors nicely)
const ExpressError = require("./utils/ExpressError.js");

// Middleware to read cookies
const cookieParser = require("cookie-parser");

// Session middleware (store user login info)
const session = require("express-session");

// Flash messages (temporary messages like success/error)
const flash = require("connect-flash");

// Passport (authentication library)
const passport = require("passport");

// Local strategy (username + password login)
const LocalStrategy = require("passport-local");

// User model (MongoDB schema)
const User = require("./models/user.js");

// Import routes
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");


// MongoDB connection URL
const MONGO_URL = `mongodb://127.0.0.1:27017/wanderlust`;


// Connect to database
main()
  .then(() => {
    console.log(`DB CONNECTED!`); // success message
  })
  .catch((err) => {
    console.log(err); // error if connection fails
  });

// Async function to connect MongoDB
async function main() {
  await mongoose.connect(MONGO_URL);
}


// Set EJS as template engine
app.set("view engine", "ejs");

// Set views folder path
app.set("views", path.join(__dirname, "views"));

// Parse form data (req.body)
app.use(express.urlencoded({ extended: true }));

// Enable PUT & DELETE requests from forms
app.use(methodOverride("_method"));

// Use EJS Mate for layouts
app.engine("ejs", ejsMate);

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "/public")));

// Parse cookies (signed cookies for security)
app.use(cookieParser("signedCookie"));


// Session configuration
const sessionOptions = {
  secret: "mysupersecretcode", // encrypt session
  resave: false, // don't save if no change
  saveUninitialized: true, // save empty session
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // expires in 7 days
    maxAge: 7 * 24 * 60 * 60 * 1000, // max time
    httpOnly: true, // prevent JS access (security)
  },
};


// Root route
app.get("/", (req, res) => {
  res.send(`Hii I'm Root!`);
});


// Use session middleware
app.use(session(sessionOptions));

// Use flash messages
app.use(flash());


// Initialize passport
app.use(passport.initialize());

// Enable login sessions
app.use(passport.session());

// Use local strategy for login (username/password)
passport.use(new LocalStrategy(User.authenticate()));


// Store user info in session
passport.serializeUser(User.serializeUser());

// Get user info from session
passport.deserializeUser(User.deserializeUser());


// Middleware to make data available in all EJS files
app.use((req, res, next) => {
  res.locals.success = req.flash("success"); // success messages
  res.locals.error = req.flash("error");     // error messages
  res.locals.currUser = req.user;            // current logged-in user
  next();
});


// Routes
app.use("/listings", listingRouter); // listings routes
app.use("/listings/:id/reviews", reviewRouter); // review routes
app.use("/", userRouter); // user routes (login, signup)


// Handle unknown routes (404 error)
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not Found!"));
});


// Global error handler
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "something went wrong!" } = err;

  // Send error page
  res.status(statusCode).render("error.ejs", { err });
});


// Start server
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
