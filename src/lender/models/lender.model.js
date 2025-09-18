import mongoose from 'mongoose'

const lenderSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const lender = mongoose.model('lender',lenderSchema)

export default lender