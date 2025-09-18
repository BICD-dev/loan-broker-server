import mongoose from 'mongoose'

const CustomerSchema = mongoose.Schema({
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

const Customer = mongoose.model('customer',CustomerSchema)

export default Customer