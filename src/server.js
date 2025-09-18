import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/Database/db.js";
import cors from "cors";
import authRouter from './auth/auth.routes.js'
import errorHandler from './utils/middleware/error-handler.js'
import { authenticate } from "./utils/middleware/auth.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// connect to database
connectDB();

app.get("/", (req, res) => {
  res.send("Admin API is running...");
});

// auth routes
app.use('/api/auth',authRouter)
// Protect routes after login
app.use(authenticate);
// secured routes go here...

// Catch all unknown routes
app.use((req, res, next) => {
  next(new Error(`Can't find ${req.originalUrl} on this server!`));
});

// Global error handler
app.use(errorHandler);

// app.use();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
