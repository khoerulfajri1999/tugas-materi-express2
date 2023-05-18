const express = require("express");
const router = express();
const {
  getAllData,
  getOneData,
  createData,
  updateData,
  deleteData,
} = require("./controller");

router.get("/produk", getAllData);
router.get("/produk/:id", getOneData);
router.post("/produk", createData);
router.put("/produk/:id", updateData);
router.delete("/produk/:id", deleteData);

module.exports = router;
