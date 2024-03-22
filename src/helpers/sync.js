"use strict";

const { products, categories } = require("./products");
const { ProductCategories, Products } = require("../models/productsModel");
const User = require("../models/userModel");

module.exports = async () => {
  await ProductCategories.deleteMany().then(() =>
    console.log(" - Categories Deleted All")
  );
  await Products.deleteMany().then(() =>
    console.log(" - Products Deleted All")
  );

  await User.deleteMany().then(() => console.log(" - Users deleted"));

  for (const category of categories) {
    await ProductCategories.create({ name: category });
  }

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
  // console.log(await Products.find());

  await User.create({ email: "admin@aa.com", password: "admin" });
  console.log(await User.find());

  console.log("sync");
};
