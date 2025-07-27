import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { JdScore } from "./routes/compute.route";
import { PORT } from "./utils/envs.util";
import { Auth } from "./routes/auth.route";
import { Profile } from "./routes/profile.route";

const app = express();

app.use(
  cors({
    origin: [
      "chrome://extensions/?id=jeachbghkgofbkhecheplngonefdolag",
      "chrome-extension://jeachbghkgofbkhecheplngonefdolag",
      "https://www.linkedin.com",
      "https://apply.workable.com"
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use(express.json());

app.use("/api/v1", JdScore);
app.use("/api/v1", Auth);
app.use("/api/v1", Profile)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
