import { Schema, model } from "mongoose";

const contactMeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = model("Contact", contactMeSchema);
export default Contact;
