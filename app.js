var express = require("express");
var upload = require("multer");
var app = express();
app.use(express.static("public"));

app.post("/api/filemetadata/", upload().any(), function (req, res) {
    res.json(req.files[0]);
});
module.exports = app;
