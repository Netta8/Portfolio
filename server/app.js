import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import contactRoute from "./routes/contactRoute.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/contact", contactRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("Error", err));

app.listen(5000, (req, res) => {
  console.log(`API started up on http://localhost:${process.env.PORT}`);
});
