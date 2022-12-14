const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
var colors = require('colors');
colors.enable();

app.use(express.static(__dirname + '/../public'));
//app.get("/", (req, res) => {res.send("Root");});
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/../public/404.html');
});

app.listen(PORT, () => {
    console.log(`Server on PORT:${PORT}`.blue);
});