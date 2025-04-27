import jwt from "jsonwebtoken";

export default function handler(req, res) {
  const token = req.cookies.token; // কুকি থেকে টোকেন নিন

  if (!token) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, "your-secret-key"); // টোকেন যাচাই করুন
    res.status(200).json({ message: "Authenticated", user: decoded });
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}