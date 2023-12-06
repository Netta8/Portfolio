import Contact from "../models/ContactMe.js";

export const sendMessage = async (req, res) => {
  try {
    const newMessage = await Contact.create(req.body);
    res.json(newMessage);
  } catch (error) {
    console.error("Error sending a message:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
