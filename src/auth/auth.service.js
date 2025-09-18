import { create, getUserByEmail } from "./repositories/user.repository";
import bycrypt from "bcrypt";
import generateToken from "../utils/jwt/generateToken";
import { hashPassword } from "../utils/bycrypt/bycrypt.service";
import { create as createCustomer } from "../customer/repositories/customer.repository";
import { getUserByEmail } from "../repositories/user.repository";
import generateToken from "../utils/jwt/generateToken";



const signupService = async (signupData) => {
  const { fullName, email, password, phoneNumber } = signupData;
  // check if all fields are filled
  if (!fullName || !email || !password || !phoneNumber) {
    let errorMessage = { success: false, message: "All fields are required" };
    return errorMessage;
  }
  // check if the user exist
  const user = await getUserByEmail(email);
  if(user){
    let errorMessage = { success: false, message: "User already exist" };
    return errorMessage;
  }
  // hash password
  const hashedPassword = await hashPassword(password);

  // return success message
  let successMessage = {
    success: true,
    message: "Account created successful"
  };
  // add user to user table
  let data = await create({
    fullName,
    email,
    password: hashedPassword,
    phoneNumber,
  });
    // add user to customer table
    const customerData = await createCustomer({
      user_id: data._id
    })

  return successMessage;

}


const loginService = async (loginData) => {
  const { email, password } = loginData;
  const user = await getUserByEmail(email);
  // check if user exists
  if (!user) {
    let errorMessage = { success: false, message: "User not found" };
    return errorMessage;
  }
  // check if password is valid
  const isPasswordValid = await bycrypt.compare(password, user.password);
  if (!isPasswordValid) {
    let errorMessage = { success: false, message: "Invalid email or password" };
    return errorMessage;
  }
  // jwt token generation will go here
  const token = generateToken(user);
  // return success message
  let successMessage = {
    success: true,
    message: "Login successful",
    token: token,
  };
  return successMessage;
};

module.exports = {
  signupService,
  loginService
};
