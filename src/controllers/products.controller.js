"use strict";

const { ProductCategories, Products } = require("../models/productsModel");

module.exports.ProductCategories = {
  list: async (req, res) => {
    const data = await ProductCategories.find();
    res.status(200).send({
      isError: false,
      data,
    });
  },
  read: async (req, res) => {
    const data = await ProductCategories.findOne({
      _id: req.params?.categoryId,
    });
    res.status(202).send({
      isError: false,
      data,
    });
  },
};

module.exports.Products = {
  list: async (req, res) => {
    const data = await Products.find();
    res.status(200).send({
      isError: false,
      data,
    });
  },
  read: async (req, res) => {
    const data = await Products.findOne({ _id: req.params?.id });
    res.status(202).send({
      isError: false,
      data,
    });
  },
};
