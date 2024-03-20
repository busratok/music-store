"use strict";

const router = require("express").Router();
const User = require("../controllers/user.contoller");

router.route("/").get(User.list).post(User.create);

module.exports = router;
