import pool from "../../../utils/db.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Fetch all appointments from the database
    const [rows] = await pool.query("SELECT * FROM appointments ORDER BY appointment_date ASC");
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}