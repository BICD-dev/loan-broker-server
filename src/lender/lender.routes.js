import { Router } from "express";
import { attatchedLoanController, updateStatusController } from "./lender.controller.js";

const router = Router()

// defione lender routes
router.get('/view-loans',attatchedLoanController) //view loans for lender
router.post('/update-loan',updateStatusController) //update the approval status for a loan

export default router;