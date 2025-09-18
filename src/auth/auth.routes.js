import { Router } from "express";
import { loginController, signupController } from "./auth.service.js";
import authenticate from "../middleware/auth.js";

const router = Router();

// use middleware
router.use(authenticate);
// Define auth routes here
router.post('/signup', signupController);
router.post('/login', loginController);
module.exports = router;