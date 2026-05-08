const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);




//according to mam

// const mongoose = require("mongoose");
// const { Schema } = mongoose;
// main()
//     .then(() => console.log("connection successful"));
//     // .catch(() => console.log(err));
// async function main() {
//   await mongoose.connect("mongodb: //127.0.0.1:27017/relationDemo");
// }

// const userSchema = new Schema({
//   username: String,
//   address: [
//     {
//       location: String,
//       street: String,
//       city: String,
//       state: String
//     },
//   ],
// });

// const User = mongoose.model("User", userSchema);    
// const addUsers = async () => {
//   let user1 = new User({
    
//     username: "aamir1",
//     address: [
//       {
//         location: "home",
//         street: "street1",
//         city: "city1",
//         state: "state1"
//       },
//     ],
//   });
//   const user1address = await mongoose.Schema;

//   user1address.push({ "street": "street1", "city": "city1", "state": "state1" });
//   let result = await user1.save();
//   console.log(result);
// };

// addUsers();
