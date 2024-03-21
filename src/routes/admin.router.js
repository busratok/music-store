"use strict";

const router = require("express").Router();

const User = require("../controllers/user.contoller");
const {
  ProductCategories,
  Products,
} = require("../controllers/products.controller");

router.route("/products").get(Products.list).post(Products.create);
router
  .route("/products/:id")
  .get(Products.read)
  .put(Products.update)
  .delete(Products.delete);

router
  .route("/categories")
  .get(ProductCategories.list)
  .post(ProductCategories.create);
router
  .route("/categories/:categoryId")
  .get(ProductCategories.read)
  .put(ProductCategories.update)
  .delete(ProductCategories.delete);

router.route("/users").get(User.list);

module.exports = router;
