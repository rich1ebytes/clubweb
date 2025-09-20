import express from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/auth.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/logout", authenticate, logoutUser);
router.post("/register", registerUser); // Added register route, as it was missing

export default router;