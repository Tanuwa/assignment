var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;
var morgan = require("morgan");

app.use(morgan("dev"));
app.use(bodyParser.json());

//app.use("/api", expressJwt());
//app.use("/api/admin", function(req, res, next) {
//    if (!req.user.isAdmin) {
//        res.status(403).send("Get outta here you...");
//    } else {
//        next();
//    }
//});

app.use("/api/fruits", require("./routes/fruitRoutes"));
app.use("/api/vegetables", require("./routes/vegetableRoutes"));


app.listen(port, function() {
    console.log("Server is running on port " + port);
});