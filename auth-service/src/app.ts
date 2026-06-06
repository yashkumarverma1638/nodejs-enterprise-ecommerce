import express from "express";
import helmet from "helmet";
import cors from "cors";

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

export default app;
