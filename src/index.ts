import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { JdScore } from "./routes/compute.route";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1", JdScore);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running on port ${process.env.PORT || 8080}`);
});
