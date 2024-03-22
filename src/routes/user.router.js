"use strict";

const router = require("express").Router();
const User = require("../controllers/user.contoller");
const auth = require("../middlewares/auth");

router.route("/login").post(User.login);
router.route("/logout").post(User.logout);
router.route("/").post(User.create);
router.route("/:id").get(User.read).put(User.update).delete(User.delete);

module.exports = router;
