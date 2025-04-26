export default function handler(req, res) {
    console.log("API route /api/hello was hit");
    res.status(200).json({ message: "Hello, world!" });
  }