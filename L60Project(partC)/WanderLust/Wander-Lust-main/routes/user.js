// const express = require("express");
// const router = express.Router();
// const User = require("../models/user.js");
// const wrapAsync = require("../utils/wrapAsync.js");
// const passport = require("passport");
// const {saveRedirectUrl} = require("../middleware.js");
// const { signUp } = require("../controllers/users.js");
// const userController = require("../controllers/users.js");

// router
// .route("/signup")
// .get(userController.renderSignUpForm)
// .post(wrapAsync(userController.signup));

// router
// .route("/login")
// .get(userController.renderLoginForm)
// .post(
//      saveRedirectUrl,
//      passport.authenticate("local", {
//     failureRedirect:'/login',
//     failureFlash:true}),
//     userController.login,
// );

// //Logout

// router.get("/logout",userController.logout);
// module.exports =router;






// routes/user.js
const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");

// Signup form
router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

// Signup logic
router.post("/signup", async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ username, email });
        const registeredUser = await User.register(newUser, password);
        
        req.login(registeredUser, (err) => {
            if (err) return next(err);
            req.flash("success", "Welcome to Wanderlust!");
            res.redirect("/listings");
        });
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
});

// Login form
router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

// Login logic
router.post("/login", 
    passport.authenticate("local", { 
        failureRedirect: "/login", 
        failureFlash: true 
    }),
    (req, res) => {
        req.flash("success", "Welcome back!");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
    }
);

// Logout
router.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) return next(err);
        req.flash("success", "You are logged out!");
        res.redirect("/listings");
    });
});

module.exports = router;
