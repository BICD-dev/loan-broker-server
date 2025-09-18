import mongoose from 'mongoose'
import Customer from '../models/customer.models.js'

//takes in email and returns the specific customer
export const getCustomerByEmail = async (email) => {
    try{
        const customer = await Customer.findOne({ email })
        return customer;
    } catch(err){
        throw err;
    }
}
//return customers based on the data provided
// if no data is provided, it defaults to {}
export const findAll = async (data = {}) => {
  try {
    // if no data is provided, it defaults to {}
    const customers = await Customer.find(data);
    return customers;
  } catch (err) {
    throw err;
  }
};


// update a certain part of the customer's data 
// id is the partof the database called _id 
//data is the key value pairs of what is updated
export const update = async (id,data) => {
    try{
        const updatedData = await Model.findByIdAndUpdate(id, { $set: data}, { new: true });
        return updatedData;
    } catch(err){
        throw err;
    }
}
//create a customer
export const create = async (data) => {
    try{
        const newCustomer = new Customer(data);
        return await newCustomer.save();
    } catch(err){
        throw err;
    }
}
//delete a customer
export const deleteCustomer = async (id) => {
    try{
        const customer = await Customer.findByIdAndDelete(id)
        return customer;
    } catch(err){
        throw err;
    }
}