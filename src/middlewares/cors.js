"use strict";

const cors = require("cors");

module.exports = (req, res, next) => {
  const corsOptions = {
    origin: "*",
  };
  if (req.isAdmin) {
    corsOptions.methods = "GET,HEAD,PUT,PATCH,POST,DELETE";
  } else if (req.path === "/login" || req.path === "/logout") {
    corsOptions.methods = "POST";
  } else {
    corsOptions.methods = "GET";
  }

  cors(corsOptions);
  next();
};
