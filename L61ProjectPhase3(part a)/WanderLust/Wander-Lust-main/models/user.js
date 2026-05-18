// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const passportLocalMongoose = require("passport-local-mongoose");

// const userSchema = new Schema ({
//     email : {
//         type : String,
//         required : true
//     }
// });

// userSchema.plugin(passportLocalMongoose);
// module.exports = mongoose.model('User', userSchema);






const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Fix for passport-local-mongoose import
let passportLocalMongoose;
try {
    passportLocalMongoose = require("passport-local-mongoose");
    console.log("passport-local-mongoose loaded:", typeof passportLocalMongoose);
} catch (err) {
    console.error("Failed to load passport-local-mongoose:", err.message);
}

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
});

// Fix for the plugin - handle both CommonJS and ES6 exports
if (passportLocalMongoose) {
    const plugin = passportLocalMongoose.default || passportLocalMongoose;
    if (typeof plugin === 'function') {
        userSchema.plugin(plugin);
        console.log("Plugin applied successfully");
    } else {
        console.error("passportLocalMongoose is not a function, it's:", typeof plugin);
        console.log("Plugin structure:", Object.keys(passportLocalMongoose));
    }
} else {
    console.warn("passport-local-mongoose not available, skipping plugin");
}

const User = mongoose.model("User", userSchema);

module.exports = User;
