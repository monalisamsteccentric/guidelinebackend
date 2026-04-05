import { Schema, model } from "mongoose";

const resistanceLogSchema = new Schema(
  {
    thought: String,
    intensity: Number,
    replacement: String,
    helped: Boolean
  },
  { _id: false }
);

const evidenceItemSchema = new Schema(
  {
    id: String,
    category: String,
    text: String,
    tags: [String],
    favorite: Boolean,
    createdAt: String
  },
  { _id: false }
);

const aiFeedbackSchema = new Schema(
  {
    worked: [String],
    didNotWork: [String],
    recurringResistance: String,
    operatingState: String,
    improvingPatterns: [String],
    tomorrowSuggestion: String,
    dayReframe: String,
    rawSummary: String,
    generatedFromVersion: String
  },
  { _id: false }
);

export const ProtocolEntryModel = model(
  "ProtocolEntry",
  new Schema(
    {
      id: { type: String, required: true, unique: true, index: true },
      userId: { type: String, required: true, index: true },
      entityType: { type: String, required: true, index: true },
      day: { type: Number },
      payload: { type: Schema.Types.Mixed, required: true },
      aiFeedback: { type: aiFeedbackSchema },
      resistanceLogs: [resistanceLogSchema],
      evidenceItems: [evidenceItemSchema],
      localUpdatedAt: { type: String, required: true, index: true },
      updatedAt: { type: String, required: true }
    },
    { timestamps: true }
  )
);
