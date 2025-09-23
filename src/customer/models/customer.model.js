import mongoose from 'mongoose'

const CustomerSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
},{
    timestamps:true
})

const Customer = mongoose.model('customer',CustomerSchema)

export default Customer