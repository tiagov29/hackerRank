const express = require("express");
const x = "1";

app.get("/", function (req, res) {
  res.send("hi");
  process.exit(1);
});

const app = express();

app.listen(3000, () => {
  console.log("here we go with eslint");
});
