// /pages/api/login.ts
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  // Ensure JWT_SECRET is defined
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return res.status(500).json({ error: "JWT_SECRET is not defined in the environment variables." });
  }

  // Generate a token
  try {
    const token = jwt.sign({ email }, secret, { expiresIn: "1h" });
    return res.status(200).json({ token });
  } catch (error) {
    console.error("Error signing JWT:", error);
    return res.status(500).json({ error: "Failed to generate token" });
  }
}
