"use strict";

const mongoose = require("mongoose");

const MONGODB_CONNECTION = process.env.MONGODB_CONNECTION;

mongoose
  .connect(MONGODB_CONNECTION)
  .then(() => console.log("DB connected"))
  .catch(() => console.log("DB not connected"));
