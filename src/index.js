const express = require("express");
const app = express();
var colors = require('colors');
const port = 4000;

colors.enable()

app.use(express.static('public'));

app.get("/", (req, res) => {res.send("Root");});

app.listen(port, () => {
    console.log(`Server on port:${port}`.blue);
});