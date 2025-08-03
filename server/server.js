import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import adRoutes from "./routes/adRoutes.js";
import connectDB from "./config/db.js";

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/", (req, res) => {
  res.send("Mainsite running...");
});

// API routes
app.use("/api/ads", adRoutes);

// Listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});