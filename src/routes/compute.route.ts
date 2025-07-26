import { Router } from "express";
import { computeController } from "../controllers/compute.controller";

const router = Router();

router.post("/jdScore", computeController);

export { router as JdScore };
