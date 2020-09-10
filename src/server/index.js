const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router.js");
const path = require("path");
var morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

//app.use("/", express.static(path.join(__dirname + "../../dist")));
//app.use("/", express.static("../../dist"));
app.use(express.static("dist"));

//app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
