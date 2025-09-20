import express from "express";
import { adminLogin, createClubAccount, getClubAccounts, updateClubAccount, deleteClubAccount } from "../controllers/admin.controller.js";

const router = express.Router();

router.post("/login", adminLogin);
router.post("/club-accounts", createClubAccount);
router.get("/club-accounts", getClubAccounts);
router.put("/club-accounts/:id", updateClubAccount);
router.delete("/club-accounts/:id", deleteClubAccount);

export default router;