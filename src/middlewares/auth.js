"use strict";

const passwordEncrypt = require("../helpers/passwordEncrypt");

module.exports = async (req, res, next) => {
  if (req.isLogin && req.isAdmin) {
    console.log(req.isAdmin);
    next();
  } else {
    throw new Error(
      "You are not authorized to perform this action. This operation is restricted to administrators only."
    );
  }
};
