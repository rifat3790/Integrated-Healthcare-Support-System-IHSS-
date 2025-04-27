import pool from "../../../utils/db.js"; // Adjust the path as necessary

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { doctorName, department, appointmentDate } = req.body;

  // Validate required fields
  if (!doctorName || !department || !appointmentDate) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const [result] = await pool.query(
      "INSERT INTO appointments (doctor_name, department, appointment_date) VALUES (?, ?, ?)",
      [doctorName, department, appointmentDate]
    );

    res.status(201).json({ message: "Appointment added successfully", id: result.insertId });
  } catch (error) {
    console.error("Error adding appointment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}