import { findAll } from "./repositories/customer.repository.js";
import { create,findAll as findLoans } from "./repositories/loanApplication.repository.js";

export const ApplicationService = async (loanData) => {
    const {customer_id,lender_id,name,dateOfBirth,email,phoneNumber,address,employment_status,monthly_income,loan_type,loan_amount,loan_term,interest_type,approval_status} = loanData;
    // check if every field is present
    if(!customer_id||!lender_id||!name||!dateOfBirth||!email||!phoneNumber||!address||!employment_status||!monthly_income||!loan_type||!loan_amount||!loan_term||!interest_type||!approval_status){
        let errorMessage = { success: false, message: "All fields are required" };
        return errorMessage;
    }
    // check if the customer id gives a valid customer 
    const customer = await findAll({customer_id:customer_id});
      if(!customer){
        let errorMessage = { success: false, message: "Customer does not exist" };
        return errorMessage;
      }
    //   check if the lender id exist on the lender table
      const lender = true; //change to the function to find lender
      if(!lender){
        let errorMessage = { success: false, message: "Lender does not exist" };
        return errorMessage;
      }

    //   create loan application
      const loan = await create(loanData);

      const data = loan
    // return success message
    const successMessage = {
        success:true,
        message:"Loan Application created successfully",
        data:data
    }
    return successMessage;

}

// view loan details
// the frontend can get the approval status and the lender id from the data
// also this shows all the customer loans for a specific customer
export const LoanDetailsService = async (customer_id)=>{
    // checkif the parameter is empty
    if(!customer_id){
        let errorMessage = { success: false, message: "All fields are required" };
        return errorMessage;
    }
    // check if customer exists
    const customer = await findAll({customer_id:customer_id});
      if(!customer){
        let errorMessage = { success: false, message: "Customer does not exist" };
        return errorMessage;
      }
    //   return everything that has to do with the customer
    const data = await findLoans({customer_id:customer_id})
    const successMessage = {
        success:true,
        message:"Loan details",
        data:data
    }
    return successMessage
}

// update customer profile

