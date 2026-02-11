const express = require("express");
const app = express();
console.dir();
let port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
