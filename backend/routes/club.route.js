import express from "express";
import { clubList, getClubById } from "../controllers/club.controller.js";

const router = express.Router();

// Visitor/Public Routes
router.get("/", clubList);
router.get("/:id", getClubById);

export default router;