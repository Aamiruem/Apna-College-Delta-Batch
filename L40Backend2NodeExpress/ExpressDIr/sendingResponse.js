// const express = require("express");
// const app = express();
// console.dir(app);


const express = require("express");
const app = express();
console.dir();
let port = 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

// app.use("/", (req, res) => {
//     // res.send("Hello i am root path");
//     // console.log(req);
//     // console.log("Request received");
//     res.send({
//         message: "Hello i am root path",
//         status: 200,
//         data: "Hello i am root path",
//         name: "apple",
//         color: "red"
//     });
// });







app.use("/", (req, res) => {
    console.log("Request Received");
    // res.send("Hello i am root path");
    let code = "<h1>Fruits</h1> <ul><li>apple</li> <li>orange</li> <li>banana</li></ul>";
    res.send(code);
});
