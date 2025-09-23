import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  // dont authenticate login and sign up 7routes
  if(req.path.startsWith("/api/admin")){
    return      next()
  }

  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access denied, token missing" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user data to request
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
