import mongoose from 'mongoose'
import User from '../models/user.model.js'

//takes in email and returns the specific customer
export const getUserByEmail = async (email) => {
    try{
        const user = await User.findOne({ email })
        return user;
    } catch(err){
        throw err;
    }
}
//return Users based on the data provided
// if no data is provided, it defaults to {}
export const find = async (data = {}) => {
  try {
    // if no data is provided, it defaults to {}
    const users = await User.find(data);
    return users;
  } catch (err) {
    throw err;
  }
};


// update a certain part of the User's data 
// id is the partof the database called _id 
//data is the key value pairs of what is updated
export const update = async (id,data) => {
    try{
        const updatedData = await User.findByIdAndUpdate(id, { $set: data}, { new: true });
        return updatedData;
    } catch(err){
        throw err;
    }
}
//create a User
export const create = async (data) => {
    try{
        const newUser = new User(data);
        return await newUser.save();
    } catch(err){
        throw err;
    }
}
//delete a User
export const deleteUser = async (id) => {
    try{
        const user = await User.findByIdAndDelete(id)
        return uer;
    } catch(err){
        throw err;
    }
}