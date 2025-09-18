import mongoose from 'mongoose'

const CustomerSignupSchema = mongoose.Schema({
    fullName:{
        type:String,
        required:[true,"Please input your full name"],
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

const CustomerSignup = mongoose.model('customer',CustomerSignupSchema)

export default CustomerSignup