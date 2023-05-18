const { produk } = require("../models");

const getAllData = async (req, res) => {
  try {
    const result = await produk.findAll();
    res.status(200).json({ message: "succes get data", result });
  } catch (error) {
    res.status(400).json(error);
  }
};

const createData = async (req, res) => {
  try {
    const result = await produk.create(req.body);
    res.status(201).json({ message: "succes create data", result });
  } catch (error) {
    res.status(400).json(error);
  }
};

const getOneData = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await produk.findOne({ where: { id } });
    res.status(200).json({ message: "succes get data", result });
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteData = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await produk.destroy({ where: { id } });

    !result
      ? res.status(404).json({ message: "id tidak ditemukan" })
      : res.status(200).json({ message: "succes delete data" });
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateData = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await produk.update(req.body, { where: { id } });

    !result
      ? res.status(404).json({ message: "id tidak ditemukan" })
      : res.status(200).json({ message: "succes update data", data: req.body });
  } catch (error) {}
};

module.exports = {
  getAllData,
  getOneData,
  createData,
  updateData,
  deleteData,
};
