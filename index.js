"use strict";
/**-----------------------------------------------------------
 ******************** STORE APP ******************************
 ------------------------------------------------------------*/

const express = require("express");
require("express-async-errors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8000;

app.all("/", (req, res) => {
  res.send("Welcome");
});

app.listen(PORT, () => console.log(`running on: http://127.0.0.1:${PORT}`));
