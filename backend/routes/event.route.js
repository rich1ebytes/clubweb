import express from "express";
import {
  eventsList,
  eventsPost,
  myEvents,
  eventEdit,
  eventDeletion,
  eventById,
} from "../controllers/event.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.js";

const router = express.Router();

// Public Routes (Visitors)
router.get("/", eventsList);

// Protected Routes (Club Members)
router.get("/my", authenticate, myEvents);
router.post("/", authenticate, upload.single("eventImage"), eventsPost);
router.put("/:id", authenticate, upload.single("eventImage"), eventEdit);
router.delete("/:id", authenticate, eventDeletion);

// Public Route after specific ones to avoid shadowing
router.get("/:id", eventById);

export default router;
