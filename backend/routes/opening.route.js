import express from "express";
import {
  openingList,
  openingPost,
  myOpenings,
  openingEdit,
  openingDeletion,
  openingById,
} from "../controllers/opening.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.js";

const router = express.Router();

// Public Routes (Visitors)
router.get("/", openingList);

// Protected Routes (Club Members)
router.get("/my", authenticate, myOpenings);
router.post("/", authenticate, upload.single("image"), openingPost);
router.put("/:id", authenticate, upload.single("image"), openingEdit);
router.delete("/:id", authenticate, openingDeletion);

// Public Route after specific ones to avoid shadowing
router.get("/:id", openingById);

export default router;
