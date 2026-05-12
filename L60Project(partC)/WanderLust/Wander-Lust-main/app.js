// if(process.env.NODE_ENV != "production"){
//     require("dotenv").config();
//     // console.log("env variables loaded");
// }


// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();



// const dbUrl =process.env.ATLASDB_URL;

// const path = require("path");
// const methodOverride = require("method-override");
// const ejsMate = require("ejs-mate");
// const ExpressError = require("./utils/ExpressError.js");
// const listingRouter = require('./routes/listing.js');
// const reviewRouter = require("./routes/review.js");
// const session = require("express-session");
// const MongoStore = require('connect-mongo');
// const flash = require("connect-flash");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const User = require("./models/user.js");
// const userRouter = require("./routes/user.js");


// const mbxClient = require('@mapbox/mapbox-sdk'); // Import Mapbox SDK
// // Replace 'YOUR_MAPBOX_ACCESS_TOKEN' with your actual token
// require('dotenv').config();
// const mbxClient = require('@mapbox/mapbox-sdk');

// const mapboxClient = mbxClient({ accessToken: process.env.MAPBOX_ACCESS_TOKEN });



// //Calling main function 
// main().then(() => {
//     console.log("connected to DB ");
// }).catch(err => {
//     console.log(err);
// });

// //Creating a database 
// async function main () {
//     await mongoose.connect(dbUrl);
// }
// //ejs templating

// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"views"));
// app.use(express.urlencoded({extended:true}));
// app.use(methodOverride("_method"));
// app.engine('ejs', ejsMate);
// app.use(express.static(path.join(__dirname,"/public")));

// const store = MongoStore.create({
//     mongoUrl:dbUrl,
//     crypto: {
//         secret : process.env.SECRET,
//     },
//     touchAfter : 24 *3600,

// });
// store.on("error",() => {
//     console.log("ERROR in mongo session store",err);
// });

// const sessionOptions = {
//     store,
//     secret : process.env.SECRET,
//     resave : false,
//     saveUninitialized : true,
//     cookie : {
//         expires : Date.now() + 7*24*60 *60*1000,
//         maxAge :  7*24*60 *60*1000,
//         httpOnly : true,
//     }, 

// };


// app.use(session(sessionOptions));
// app.use(flash());

// app.use(passport.initialize());
// app.use(passport.session()); 
// passport.use(new LocalStrategy(User.authenticate()));
// // use static serialize and deserialize of model for passport session support
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use((req,res,next) => {
//     res.locals.success = req.flash("success");
//     res.locals.error = req.flash("error");
//     res.locals.currUser = req.user;

//     next();
// });

// //demo user
// // app.get("/demouser", async (req , res ) => {
// //     let fakeUser = new User({
// //         email :"student@gmail.com",
// //         username :"Harsh"
// //     });
// //     let registeredUser=  await User.register(fakeUser, "helloworld");
// //     res.send(registeredUser);
// // });


// //Restructuring listings 
// app.use("/listings",listingRouter);
// //Restructuring reviews
// app.use("/listings/:id/reviews" ,reviewRouter);
// app.use("/",userRouter);

// app.all("*", (req ,res , next) => {
//     next(new ExpressError(404, "Page not found!"));
// });

// app.use((err, req,res,next) => {
//     let {statusCode = 500 , message ="Something went wrong"}= err;
//     res.status(statusCode).render("error.ejs",{message});
//     // res.status(statusCode).send(message);
// });

// app.listen(  8080 , () => {
//     console.log("server is listening to port 8080");
// });























const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const ExpressError = require("./utils/ExpressError.js");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const port = 8080;

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";


// DATABASE CONNECTION
main()
.then(() => {
    console.log("DB CONNECTED!");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}


// VIEW ENGINE
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);


// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "/public")));

app.use(cookieParser("mysupersecretcode"));


// SESSION CONFIG
const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: false,

    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,

        maxAge: 7 * 24 * 60 * 60 * 1000,

        httpOnly: true,
    },
};


// SESSION MIDDLEWARE
app.use(session(sessionOptions));


// FLASH
app.use(flash());


// PASSPORT INITIALIZE
app.use(passport.initialize());


// PASSPORT SESSION
app.use(passport.session());


// LOCAL STRATEGY
passport.use(
    new LocalStrategy(async (username, password, done) => {

        try {

            const user = await User.findOne({ username });

            if (!user) {
                return done(null, false, {
                    message: "Invalid Username",
                });
            }

            const isMatch =
                await user.comparePassword(password);

            if (!isMatch) {

                return done(null, false, {
                    message: "Invalid Password",
                });
            }

            return done(null, user);

        } catch (err) {

            return done(err);

        }
    })
);


// SERIALIZE USER
passport.serializeUser((user, done) => {
    done(null, user.id);
});


// DESERIALIZE USER
passport.deserializeUser(async (id, done) => {

    try {

        const user = await User.findById(id);

        done(null, user);

    } catch (err) {

        done(err);

    }
});


// GLOBAL VARIABLES
app.use((req, res, next) => {

    res.locals.success =
        req.flash("success");

    res.locals.error =
        req.flash("error");

    res.locals.currUser =
        req.user;

    next();
});


// ROUTES
app.get("/", (req, res) => {
    res.send("Hii I'm Root!");
});


app.use("/listings", listingRouter);

app.use("/listings/:id/reviews", reviewRouter);

app.use("/", userRouter);


// 404 HANDLER
app.all("*", (req, res, next) => {

    next(
        new ExpressError(
            404,
            "Page Not Found!"
        )
    );
});


// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {

    let {
        statusCode = 500,
        message = "Something Went Wrong!",
    } = err;

    res.status(statusCode).render("error.ejs", {
        err,
    });
});


// SERVER
app.listen(port, () => {

    console.log(
        `Server Running On Port ${port}`
    );
});
