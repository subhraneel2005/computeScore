import { Router } from "express";
import { loginController, meController } from "../controllers/auth.controller";

const router = Router();

router.post("/login", loginController);
router.get("/me", meController);

export { router as Auth };
