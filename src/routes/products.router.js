"use strict";

const router = require("express").Router();

const {
  ProductCategories,
  Products,
} = require("../controllers/products.controller");

router.route("/categories").get(ProductCategories.list);
router.route("/categories/:categoryId").get(ProductCategories.read);

router.route("/").get(Products.list);
router.route("/:id").get(Products.read);

module.exports = router;
