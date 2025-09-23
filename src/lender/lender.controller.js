import { attatchedLoanService, updateStatusService } from "./lender.service"

export const updateStatusController = async (req,res) =>{
    try {
        let result = await updateStatusService(req.body);
        if(result.success){
            res.status(200).json(result)
        } else{
            res.status(400).json(result)
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });

    }
}

// view the loans attatched to a lender
export const attatchedLoanController = async (req,res)=>{
    try {
        const {lender_id} = req.body;
        let result = await attatchedLoanService(lender_id);
        if(result.success){
            res.status(200).json(result);
        } else{
            res.status(400).json(result)
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error", error: error.message });
        
    }
}

// uplaod profile picture