import { Router } from 'express';
import { loanController, loanDetailsController } from './customer.controller';

const router = Router();


router.post('/loan',loanController) //apply for loan
router.get('/loan',loanDetailsController) //get loan for a specific customer

export default router;