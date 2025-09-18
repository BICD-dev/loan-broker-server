import { Router } from "express";
import { loginController, signupController } from "./auth.controller.js";
import {authenticate} from "../utils/middleware/auth.js";

const router = Router();


router.post("/signup", signupController);
router.post("/login", loginController);

// use authenticate middleware for checking jwt
router.use(authenticate);

export default router;
