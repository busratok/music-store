"use strict";

const passwordEncrypt = require("../helpers/passwordEncrypt");

module.exports = async (req, res, next) => {
  if (
    req.isLogin &&
    req.session.email != "admin@aa.com" &&
    req.session.password != passwordEncrypt("admin")
  ) {
    throw new Error(
      "You are not authorized to perform this action. This operation is restricted to administrators only."
    );
  } else {
    next();
  }
};
