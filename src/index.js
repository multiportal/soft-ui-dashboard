const express = require("express");
const app = express();
const port = 4000;

app.use(express.static('public'));
//app.use('/static', express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(port, () => {
    console.log(`Server on port:${port}`);
});