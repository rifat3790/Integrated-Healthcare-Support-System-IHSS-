import jwt from "jsonwebtoken";
import pool from "../../utils/db.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, password } = req.body;

  // Validate required fields
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    // Check if the user exists
    const [rows] = await pool.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Generate JWT Token
    const user = rows[0];
    const token = jwt.sign(
      { id: user.id, email: user.email }, // Payload
      "your-secret-key", // Replace with your secret key
      { expiresIn: "1h" } // Token expiration time
    );

    // Set token in HTTP-only cookie
    res.setHeader("Set-Cookie", `token=${token}; Path=/; HttpOnly; Max-Age=3600`);

    // Login successful
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Error in /api/login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}