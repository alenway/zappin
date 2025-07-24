const express = require("express");
const router = express.Router();
const Food = require("../models/food");

// GET all foods
router.get("/", async (req, res) => {
    try {
        const foods = await Food.find().sort({ createdAt: -1 });
        res.json(foods);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET single food
router.get("/:id", async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        if (!food) {
            return res.status(404).json({ message: "Food not found" });
        }
        res.json(food);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST create new food
router.post("/", async (req, res) => {
    const food = new Food({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
    });

    try {
        const newFood = await food.save();
        res.status(201).json(newFood);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT update food
router.put("/:id", async (req, res) => {
    try {
        const updatedFood = await Food.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedFood) {
            return res.status(404).json({ message: "Food not found" });
        }
        res.json(updatedFood);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE food
router.delete("/:id", async (req, res) => {
    try {
        const deletedFood = await Food.findByIdAndDelete(req.params.id);
        if (!deletedFood) {
            return res.status(404).json({ message: "Food not found" });
        }
        res.json({ message: "Food deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
