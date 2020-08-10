//Module Dependencies
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");
var express = require("express");
var app = express();

app.use(logger("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
//Connecting Handlebars
app.use(express.static(process.cwd() + "/public"));
var exphbs = require("express-handlebars");
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
//Mongo Connection to db
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
app.set("view engine", "handlebars");
const MONGODB_URI =
  process.env.MONGODB_URI || "nomongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to Mongoose!");
});
//Server Startup
var routes = require("./controller/controller.js");
app.use("/", routes);
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening. Visit localhost:" + port);
});
