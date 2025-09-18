import mongoose from 'mongoose'

const CustomerLoanApplicationSchema = mongoose.Schema({
    user_id:{
        type:string,
        required:true
    },
    name:{
        type:String,
        required:[true,"Please input your full name"],
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    email:{
        type:string,
        required:true
    },
    address:{
        type:string,
        required:true
    },
    phoneNumber:{
        type:string,
        required:true
    },
    employement_status:{
        type:String,
        enum:["employed","self-employed","unemployed"]
    },
    monthly_income:{
        type:String,
        required:true
    },
    employer_name:{
        type:String
    },
    loan_type:{
        type:String,
        enum:["personal","mortgage","auto","student","business"],
        required:true
    },
    loan_amount:{
        type:String,
        required:true
    },
    loan_purpose:{
        type:String,
        required:true
    },
    loan_term:{
        type:String,
        required:true
    },
    interest_type:{
        type:String,
        enum:["fixed","variable"],
        required:true
    },
    approval_status:{
        type:string,
        enum:["pending","approved","rejected"],
        default:"pending"
    }
},{
    timestamps:true

})
const CustomerLoanApplication = mongoose.model('loan_application',CustomerLoanApplicationSchema);
export default CustomerLoanApplication