import { loginService, signupService } from './auth.service.js';


export const loginController = async (req, res) => {
  try {
    const result = await loginService(req.body);
    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(400).json(result);
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

export const signupController = async (req, res) => {
  try {
    const result = await signupService(req.body);
    if (result.success) {
      res.status(201).json(result);
    } else {
      res.status(400).json(result);
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};
