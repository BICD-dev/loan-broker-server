import mongoose from 'mongoose'

const lenderSchema = mongoose.Schema({
    lender_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    wallet:{
        type:Number,
        required:true,
        default:0
    }
},{
    timestamps:true
})

const lender = mongoose.model('lender',lenderSchema)

export default lender