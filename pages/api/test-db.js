import pool from "../../utils/db.js"; // Adjust the relative path to your db.js file

export default async function handler(req, res) {
  try {
    const [rows] = await pool.query("SELECT 1 + 1 AS result");
    res.status(200).json({ message: "Database connection successful", result: rows[0].result });
  } catch (error) {
    console.error("Database connection failed:", error);
    res.status(500).json({ error: "Database connection failed" });
  }
}