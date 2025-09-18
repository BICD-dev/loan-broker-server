import mongoose from 'mongoose'
import lender from '../models/lender.model.js'

// Create a new lender
export const create = async(data)=>{
    try{
        const newLender = new lender(data);
        return await newLender.save();
    } catch(err){
        throw err;
    }
}
// Get all lenders or filter by specific criteria
export const findAll = async(data={})=>{
    try{
        const lenders = await lender.find(data);
        return lenders;
    } catch(err){
        throw err;
    }
}
// Update lender details by ID
export const update = async(id,data)=>{
    try{
        const updatedLender = await lender.findByIdAndUpdate(id, {$set:data}, {new:true});
        return updatedLender;
    } catch(err){
        throw err;
    }
}
//delete a lender by ID
export const deleteLender = async(id)=>{
    try{
        const lender = await lender.findByIdAndDelete(id);
        return lender;
    } catch(err){
        throw err;
    }
}
