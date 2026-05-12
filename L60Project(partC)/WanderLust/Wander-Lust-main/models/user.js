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
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },
});


// HASH PASSWORD BEFORE SAVE
userSchema.pre("save", async function(next){

    if(!this.isModified("password")){
        return next();
    }

    this.password =
        await bcrypt.hash(this.password, 10);

    next();
});


// COMPARE PASSWORD METHOD
userSchema.methods.comparePassword =
async function(password){

    return await bcrypt.compare(
        password,
        this.password
    );
};


module.exports =
mongoose.model("User", userSchema);
