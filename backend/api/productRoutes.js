const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/product');  

const router = express.Router();

// GET /products → List all products.
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    // console.log(products)
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /products/:id → Get a single product.
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid or missing product ID" });
  }

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// POST /products → Add a new product.
router.post("/", async (req, res) => {
  const requiredFields = ["name", "description", "price"];

  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ message: `Missing ${field}` });
    }
  }

  try {
    const newProduct = new Product({
        ...req.body,
    //   name: req.body.name,
    //   description: req.body.description,
    //   price: req.body.price,
    //   image: req.body.image,
    });

    await newProduct.save();

    res
      .status(201)
      .json({ message: "Product added successfully!", product: newProduct });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router