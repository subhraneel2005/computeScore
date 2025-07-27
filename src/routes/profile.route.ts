import { Router } from "express";
import { fetchProfile } from "../controllers/profile.controller";

const router = Router();

router.get("/profile", fetchProfile);

export { router as Profile };
