"use strict";

const { products } = require("./src/helpers/products");
const { ProductCategories, Products } = require("./src/models/productsModel");

module.exports = async () => {
  const productCategories = await ProductCategories.find();
  console.log(productCategories);

  products.forEach((product) => {
    if (product.category == "guitar") {
      product.category = productCategories[0]._id;
    } else if (product.category == "piano") {
      product.category = productCategories[1]._id;
    } else {
      product.category = productCategories[2]._id;
    }
    Products.create(product);
  });

  console.log("sync");
};
