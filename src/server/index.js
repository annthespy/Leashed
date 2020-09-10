const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/../client/dist"));

app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
