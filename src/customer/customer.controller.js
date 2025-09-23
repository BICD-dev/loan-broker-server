import { ApplicationService, LoanDetailsService } from "./customer.service"

export const loanController = async (req,res) =>{
  
  try {
    const result = await ApplicationService(req.body);
    if(result.success){
      res.status(200).json(result)
    } else{
      res.status(400).json(result)
    }
    
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
    
  }
}

export const loanDetailsController = async (req,res)=>{
  try {
    const {customer_id} = req.body
    const result = LoanDetailsService(customer_id)
    if(result.success){
      res.status(200).json(result)
    } else{
      res.status(400).json(result)
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
    
  }
}

// update profile