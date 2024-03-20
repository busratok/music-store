"use strict";

const mongoose = require("mongoose");

// Product categories Schema
const productCategoriesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: ["guitar", "piano", "headphones"],
      required: true,

      trim: true,
    },
  },
  {
    collection: "productCategories",
    timestamps: true,
  }
);

// Products Schema
const productsSchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductCategories",
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountPercentage: Number,
    rating: Number,
    stock: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
    },
  },
  {
    collection: "products",
    timestamps: true,
  }
);

module.exports = {
  ProductCategories: mongoose.model(
    "ProductCategories",
    productCategoriesSchema
  ),
  Products: mongoose.model("Products", productsSchema),
};
