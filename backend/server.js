// Basic Express.js server with Mongoose connection
// -------------------------------------------------
// 1. Install dependencies:
//    npm install express mongoose dotenv
// 2. Create a .env file with your MongoDB URI, e.g.:
//    MONGODB_URI=mongodb://127.0.0.1:27017/mydatabase
//    PORT=3000
// 3. Run: node server.js

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// JSON body parser middleware
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGODB_URI;

mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("✅ Connected to MongoDB");
    })
    .catch((err) => {
        console.error("❌ MongoDB connection error:", err.message);
        process.exit(1);
    });

// Simple health‑check route
app.get("/", (req, res) => {
    res.json({ message: "Express + Mongoose server is running!" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
});
