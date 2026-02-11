// const express = require("express");
// const app = express();
// // console.dir();
// let port = 8000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

// app.use((req, res) => {
//     // console.log(req.url);
//     // console.log(req);
//     console.log("request received");

//     res.send("Hello World");
//     let code = "<h1>Fruits</h1> < ul > <li>apple</li><li>orange</li><li>mango</li></ul>";

//     res.send(code);
// });







const express = require("express");
const app = express();

let port = 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use((req, res) => {
    console.log("Request received");

    let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li><li>mango</li></ul>";

    res.send(code);
});
