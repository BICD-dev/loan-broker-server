import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
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
    },
    role:{
        type:String,
        enum:["customer","lender","admin"],
        default:"customer"
    }
},{
    timestamps:true
})

const User = mongoose.model('user',UserSchema)

export default User