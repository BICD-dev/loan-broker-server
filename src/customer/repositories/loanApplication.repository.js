import mongoose from "mongoose";
import CustomerLoanApplication from "../models/loanApplication.model";

export const create = async(data)=>{
    try{
        const newApplication = new CustomerLoanApplication(data);
        return await newApplication.save();
    } catch(err){
        throw err;
    }
}

export const findAll = async(data={})=>{
    try{
        const applications = await CustomerLoanApplication.find(data);
        return applications;
    } catch(err){
        throw err;
    }
}

export const update = async(id,data)=>{
    try{
        const updatedApplication = await CustomerLoanApplication.findByIdAndUpdate(id, {$set:data}, {new:true});
        return updatedApplication;
    } catch(err){
        throw err;
    }
}

export const deleteApplication = async(id)=>{
    try{
        const application = await CustomerLoanApplication.findByIdAndDelete(id);
        return application;
    } catch(err){
        throw err;
    }
}