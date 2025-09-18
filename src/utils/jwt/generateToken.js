// utils/jwt.js
import jwt from "jsonwebtoken";

const generateToken = (user) => {
  const payload = {
    id: user._id,
    fullName: user.fullName,
    email: user.email,
    role: user.role
  };

  // secret key in .env
  const secret = process.env.JWT_SECRET_KEY || "default_secret_key";

  // token expiration
  const options = { expiresIn: "1h" };

  return jwt.sign(payload, secret, options);
};

export default generateToken;
