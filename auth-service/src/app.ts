import express from "express";
import helmet from "helmet";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/health", (_, res) => {
  res.status(200).json({
    service: "auth-service",
    status: "UP",
  });
});
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
export default app;
