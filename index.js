// index.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This will fail");
});

module.exports = app;
