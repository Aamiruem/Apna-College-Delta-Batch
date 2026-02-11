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

app.use("/", (req, res) => {
    res.send("Hello i am root path");
    console.log("Request received")
});
