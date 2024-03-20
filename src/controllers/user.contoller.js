"use strict";

const User = require("../models/userModel");
const passwordEncrypt = require("../helpers/passwordEncrypt");

module.exports = {
  list: async (req, res) => {
    const data = await User.find();
    res.status(200).send({
      isError: false,
      data,
    });
  },
  create: async (req, res) => {
    const data = await User.create(req.body);
    res.status(201).send({
      isError: false,
      data,
    });
  },
  read: async (req, res) => {
    const data = await User.findOne({ _id: req.params?.id });
    res.status(200).send({
      isError: false,
      data,
    });
  },
  update: async (req, res) => {
    const data = await User.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });
    res.status(201).send({
      isError: false,
      data,
    });
  },
  delete: async (req, res) => {
    const data = await User.deleteOne({ _id: req.params?.id });
    res.sendStatus(data.deletedCount ? 204 : 404);
  },
};
