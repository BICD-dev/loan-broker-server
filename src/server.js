import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/Database/db.js";
import cors from "cors";
import authRouter from './auth/auth.routes.js'
import customerRouter from './customer/customer.routes.js'
import lenderRouter from './lender/lender.routes.js'
import errorHandler from './utils/middleware/error-handler.js'
import { authenticate } from "./utils/middleware/auth.js";
import helmet from "helmet";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(errorHandler);
app.use(helmet)
// connect to database
connectDB();

app.get("/", (req, res) => {
  res.send("loan broker API is running...");
});

// auth routes
app.use('/api/auth',authRouter);
// authenticate routes
app.use(authenticate);
// secured routes go here...
// customer routes
app.use('/api/customer',customerRouter);
// lender router
app.use('/api/lender',lenderRouter);
// Catch all unknown routes
app.use((req, res, next) => {
  next(new Error(`Can't find ${req.originalUrl} on this server!`));
});


// app.use();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
