import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// connect to database
connectDB();

app.get("/", (req, res) => {
  res.send("Admin API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
