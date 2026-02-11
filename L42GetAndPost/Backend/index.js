const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/register", (req, res) => {

    let { user, pass } = req.query;
    console.log(user, pass);
    res.send(`standard GET response. welcome ${user}!`);
});

app.post("/register", (req, res) => {

    console.log(req.body);
    let { user, pass } = req.body;
    console.log(user, pass);
    res.send(`standard POST response. welcome ${user}!`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
