import express from "express";
import cors from "cors";
import morgan from "morgan";
import { apiRouter } from "./routes";
import { connectDb } from "./lib/db";
import { env } from "./config/env";

async function start() {
  const app = express();
  app.use(cors({ origin: env.corsOrigin }));
  app.use(express.json({ limit: "2mb" }));
  app.use(morgan("dev"));
  app.use("/api", apiRouter);

  app.listen(env.port, () => {
    console.log(`Pattern Shift API listening on ${env.port}`);
  });

  try {
    await connectDb();
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed", error);
  }
}

void start();
