import { Request, Response } from "express";
import { generateToken, verifyToken } from "../utils/jwt.util";

const loginController = (req: Request, res: Response) => {
  const userId = "ae973b6b-3f97-45da-b46c-3d7eb163a02d";
  const username = "kingChomu";

  try {
    const token = generateToken(userId);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
      sameSite: "none",
      secure: true,
    });
    return res.status(200).json({
      userId: userId,
      username: username,
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const meController = (req: Request, res: Response) => {
  try {
    // Check for token in cookie first (for web app)
    let token = req.cookies.token;

    // If no cookie, check Authorization header (for extension)
    if (!token) {
      const authHeader = req.headers.authorization;
      if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.substring(7);
      }
    }

    if (!token) {
      return res.status(401).json({ error: "No token found" });
    }

    const userId = verifyToken(token);
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }

    return res.status(200).json({
      userId: userId,
      username: "kingChomu",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { loginController, meController };
