"use strict";
/**-----------------------------------------------------------
 ******************** STORE APP ******************************
 ------------------------------------------------------------*/

const express = require("express");
require("express-async-errors");
require("dotenv").config();

const app = express();

/** JSON parser  */
app.use(express.json());

const PORT = process.env.PORT || 8000;

/** DB Connection */
require("./src/config/dbConnection");

app.all("/", (req, res) => {
  res.send("Welcome");
});

app.listen(PORT, () => console.log(`running on: http://127.0.0.1:${PORT}`));
