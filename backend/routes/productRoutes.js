const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// @desc Add a new product
// @route POST /api/products
router.post("/", async (req, res) => {
    try {
        const { image, name, price, review } = req.body;
        const newProduct = new Product({ image, name, price, review });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// @desc Get all products
// @route GET /api/products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

// @desc Get a product by ID
// @route GET /api/products/:id
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product)
            return res.status(404).json({ error: "Product not found" });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: "Invalid ID" });
    }
});

// @desc Update a product
// @route PUT /api/products/:id
router.put("/:id", async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updated)
            return res.status(404).json({ error: "Product not found" });

        res.status(200).json(updated);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// @desc Delete a product
// @route DELETE /api/products/:id
router.delete("/:id", async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id);
        if (!deleted)
            return res.status(404).json({ error: "Product not found" });

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: "Invalid ID" });
    }
});

module.exports = router;
