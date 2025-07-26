/**
 * @param jobDetails: string of job details
 * @returns {JDcount}: number of JD skills
 * @returns {skills}: all the names of JD skills in array
 */

import { Request, Response } from "express";
import { calculateJDScore } from "../handlers/jdScore.handler";

const computeController = async (req: Request, res: Response) => {
  try {
    const { jobDetails } = req.body;

    if (!jobDetails) {
      return res.status(400).json({ message: "Job details are required" });
    }

    if (typeof jobDetails !== "string") {
      return res.status(400).json({ message: "jobDetails must be a string" });
    }

    const { JDcount, skills } = calculateJDScore(jobDetails);

    return res.status(200).json({ JDcount, skills });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { computeController };
