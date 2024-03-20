import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { router as recipesRouter } from "./routes/recipes.routes.js";

// Load env variables
dotenv.config();

// Create express app
const app = express();

// Apply middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Use routes
app.use('/recipes', recipesRouter);

const PORT = process.env.PORT || 8080;

// Make database connection
console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    // Start the server after successful database connection
    app.listen(PORT, () => {
      console.log(`RECIPE API is running! ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
