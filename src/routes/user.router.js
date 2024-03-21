"use strict";

const router = require("express").Router();
const User = require("../controllers/user.contoller");
const auth = require("../middlewares/auth");

router.route("/").get(auth).get(User.list).post(User.create);
router.route("/login").post(User.login);

module.exports = router;
