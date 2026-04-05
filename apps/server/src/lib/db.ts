import mongoose from "mongoose";
import { env } from "../config/env";
import { runtimeState } from "./runtimeState";

export const connectDb = async (): Promise<void> => {
  await mongoose.connect(env.mongoUri);
  runtimeState.setDbReady(true);
};
