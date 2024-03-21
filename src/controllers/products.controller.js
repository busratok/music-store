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
  create: async (req, res) => {
    const data = await ProductCategories.create(req.body);
    res.status(201).send({
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
  update: async (req, res) => {
    const result = await ProductCategories.updateOne(
      { _id: req.body?.categoryId },
      req.body,
      { runValidators: true }
    );
    res.status(202).send({
      isError: false,
      body: req.body,
      newData: await ProductCategories.findOne({ _id: req.params?.categoryId }),
      result,
    });
  },
  delete: async (req, res) => {
    const data = await ProductCategories.deleteOne({
      _id: req.params?.categoryId,
    });
    res.sendStatus(data.deletedCount ? 204 : 404);
  },
  products: async (req, res) => {
    const data = await Products.find({ category: req.params?.categoryId });
    res.status(200).send({
      isError: false,
      data,
      message: "hello",
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
  create: async (req, res) => {
    const data = await Products.create(req.body);
    res.status(201).send({
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
  update: async (req, res) => {
    const result = await Products.updateOne({ _id: req.body.id }, req.body, {
      runValidators: true,
    });
    res.status(202).send({
      isError: false,
      body: req.body,
      newData: await Products.findOne({ _id: req.params?.id }),
      result,
    });
  },
  delete: async (req, res) => {
    const data = await Products.deleteOne({ _id: req.params?.id });
    res.sendStatus(data.deletedCount ? 204 : 404);
  },
};
