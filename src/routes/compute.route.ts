import { Router } from "express";
import { calculateJDScore } from "../handlers/jdScore.handler";
import { computeController } from "../controllers/compute.controller";

const router = Router();

router.post("/jdScore", computeController);

export { router as JdScore };
