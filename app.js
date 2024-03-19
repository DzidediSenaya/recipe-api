import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/recipes.routes.js";
import mongoose from "mongoose";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;

app.use(router)

//make database connection
mongoose.connect(process.env.MONGO_URI);


app.listen(PORT, () => {
    console.log(`RECIPE API is running! ${PORT}`);
});