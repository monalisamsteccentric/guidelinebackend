import { Schema, model } from "mongoose";

export const WeeklySummaryModel = model(
  "WeeklySummary",
  new Schema(
    {
      id: { type: String, required: true, unique: true, index: true },
      userId: { type: String, required: true, index: true },
      weekStartDay: { type: Number, required: true },
      weekEndDay: { type: Number, required: true },
      summary: { type: String, required: true },
      patternHighlights: { type: [String], required: true },
      riskFlags: { type: [String], required: true },
      nextFocus: { type: String, required: true },
      createdAt: { type: String, required: true }
    },
    { timestamps: true }
  )
);
