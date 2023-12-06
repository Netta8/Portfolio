import express from "express";
import { sendMessage } from "../controllers/contactController.js";

const router = express.Router();

router.post("/create", sendMessage);

export default router;
