import { Request, Response } from "express";
import userData from "../data/profile.data";

const fetchProfile = async (req: Request, res: Response) => {
    try {
        return res.status(200).json({ userData });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export { fetchProfile };
