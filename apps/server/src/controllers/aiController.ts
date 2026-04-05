import { Request, Response } from "express";
import { createHash } from "crypto";
import { aiService } from "../services/aiService";
import { ProtocolEntryModel } from "../models/ProtocolEntryModel";
import { WeeklySummaryModel } from "../models/WeeklySummaryModel";

export const aiController = {
  async generateDaily(req: Request, res: Response) {
    const payload = req.body;
    const analysis = await aiService.generateDailyFeedback(payload);
    const id = createHash("sha1").update(JSON.stringify(payload) + Date.now()).digest("hex");
    const day = typeof payload.day === "number" ? payload.day : 1;
    const record = await ProtocolEntryModel.findOneAndUpdate(
      { id },
      {
        id,
        userId: payload.userId ?? "local-user",
        entityType: "aiFeedback",
        day,
        payload: analysis,
        aiFeedback: analysis,
        localUpdatedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      { upsert: true, new: true }
    );
    res.json(record);
  },
  async history(_req: Request, res: Response) {
    const feedback = await ProtocolEntryModel.find({ entityType: "aiFeedback" }).sort({ updatedAt: -1 }).lean();
    res.json(feedback);
  },
  async weeklySummary(req: Request, res: Response) {
    const weekStartDay = Number(req.params.weekStartDay);
    const weekEndDay = weekStartDay + 6;
    const entries = await ProtocolEntryModel.find({
      day: { $gte: weekStartDay, $lte: weekEndDay }
    })
      .sort({ day: 1 })
      .lean();
    const analysis = await aiService.generateWeeklySummary(entries);
    const id = `weekly_${weekStartDay}_${weekEndDay}`;
    const saved = await WeeklySummaryModel.findOneAndUpdate(
      { id },
      {
        id,
        userId: "local-user",
        weekStartDay,
        weekEndDay,
        createdAt: new Date().toISOString(),
        ...analysis
      },
      { upsert: true, new: true }
    );
    res.json(saved);
  }
};
