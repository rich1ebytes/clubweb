import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { authenticate, authorizeRoles } from "./middleware/auth.middleware.js";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.VITE_BASE_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//db connection
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI);
    console.log("DB Connected!");
  } catch (error) {
    console.log(error.message);
  }
};

dbConnection();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`Incoming Request: ${req.method} ${req.url}`);
  next();
});

//routes
import AuthRoutes from "./routes/auth.route.js";
import ClubRoutes from "./routes/club.route.js";
import EventRoutes from "./routes/event.route.js";
import OpeningRoutes from "./routes/opening.route.js";
import AdminRoutes from "./routes/admin.route.js";
import { adminLogin } from "./controllers/admin.controller.js";

// Public Routes (Visitors)
app.use("/api/clubs", ClubRoutes);
app.use("/api/events", EventRoutes);
app.use("/api/openings", OpeningRoutes);

// Auth Routes (Members & Admins)
app.use("/api/auth", AuthRoutes);

// Public Admin Login (must be before protected admin routes)
app.post("/api/admin/login", adminLogin);

// Protected Routes (Club Members)
app.use("/api/club-members/events", authenticate, EventRoutes);
app.use("/api/club-members/openings", authenticate, OpeningRoutes);

// Protected Routes (Admin)
app.use("/api/admin", authenticate, authorizeRoles("admin"), AdminRoutes);

//running on the port
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`running on http://localhost:${port}/`);
});
