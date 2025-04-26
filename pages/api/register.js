import pool from "@/utils/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, password, userType, specialty } = req.body;

  // Validate required fields
  if (!name || !email || !password || !userType) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Check if the user already exists
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Insert the new user into the database
    await pool.query(
      "INSERT INTO users (name, email, password, userType, specialty) VALUES (?, ?, ?, ?, ?)",
      [name, email, password, userType, specialty || null]
    );

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error in /api/register:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}