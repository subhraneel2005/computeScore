import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./envs.util";

function generateToken(userId: string) {
  return jwt.sign({ userId }, JWT_SECRET as string, {
    expiresIn: "24h",
  });
}

function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET as string) as {
      userId: string;
    };
    return decoded.userId;
  } catch (error) {
    return null;
  }
}

export { generateToken, verifyToken };
