

// view loan details
// the frontend can get the approval status and the customer id from the data

import { findAll, findAll as findLoans, update } from "../customer/repositories/loanApplication.repository";

// also this shows all the loans attatched to a specific lender
export const attatchedLoanService = async (lender_id)=>{
    // checkif the parameter is empty
    if(!lender_id){
        let errorMessage = { success: false, message: "All fields are required" };
        return errorMessage;
    }
    // check if lender exists
    const lender = await findAll({lender_id:lender_id});
      if(!lender){
        let errorMessage = { success: false, message: "lender does not exist" };
        return errorMessage;
      }
    //   return all loans that has to do with the lender
      const data = await findLoans({lender_id:lender_id});
    const successMessage = {
        success:true,
        message:"Loan details",
        data:data
    }
    return successMessage
}

// update approval status
// takes the customer id of loan application and the new status
// finds by id and then updates the status to the new status
export const updateStatusService = async (statusData)=>{
    const {id,status} = statusData;
    // check that they are no empty
    if(!id || !status){
        let errorMessage = {success:false,message:"All fields are required"};
        return errorMessage;
    }
    // find the loan with the id
    const loan = await findAll({_id:id});
    // check if the loan exists
    if(!loan){
        let errorMessage = {success:false,message:"Loan not found"};
        return errorMessage;
    }
    // update the approval_status
    const newLoan = await update(id,{approval_status:status})

    const successMessage = {
        success:true,
        message:"Loan status updated successfully",
        data:newLoan
    }
}

// uplaod profile picture to server