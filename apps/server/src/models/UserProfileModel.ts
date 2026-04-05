import { Schema, model } from "mongoose";

const ReminderTimeSchema = new Schema(
  {
    hour: { type: Number, required: true },
    minute: { type: Number, required: true }
  },
  { _id: false }
);

const NotificationSettingsSchema = new Schema(
  {
    morning: { type: ReminderTimeSchema, required: true },
    afternoon: { type: ReminderTimeSchema, required: true },
    evening: { type: ReminderTimeSchema, required: true },
    enabled: { type: Boolean, required: true }
  },
  { _id: false }
);

const BeliefSchema = new Schema(
  {
    id: { type: String, required: true },
    statement: { type: String, required: true },
    whyItMatters: { type: String, required: true },
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
  },
  { _id: false }
);

export const UserProfileModel = model(
  "UserProfile",
  new Schema(
    {
      id: { type: String, required: true, unique: true, index: true },
      displayName: { type: String },
      belief: { type: BeliefSchema, required: true },
      preferences: {
        tone: { type: String, required: true },
        reminderTimes: { type: NotificationSettingsSchema, required: true }
      },
      protocolStartedAt: { type: String, required: true },
      protocolAnchorDate: { type: String, required: true },
      currentDay: { type: Number, required: true },
      streak: { type: Number, required: true },
      completedDays: { type: Number, required: true },
      createdAt: { type: String, required: true },
      updatedAt: { type: String, required: true }
    },
    { timestamps: true }
  )
);
