import mongoose from 'mongoose'

const lenderSignupSchema = mongoose.Schema({
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

const lenderSignup = mongoose.model('lender',lenderSignupSchema)

export default lenderSignup