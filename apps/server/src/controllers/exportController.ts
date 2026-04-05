import { Request, Response } from "express";
import { ProtocolEntryModel } from "../models/ProtocolEntryModel";
import { UserProfileModel } from "../models/UserProfileModel";
import { WeeklySummaryModel } from "../models/WeeklySummaryModel";

export const exportController = {
  async exportAll(_req: Request, res: Response) {
    const [profile, entries, weeklySummaries] = await Promise.all([
      UserProfileModel.findOne().lean(),
      ProtocolEntryModel.find().lean(),
      WeeklySummaryModel.find().lean()
    ]);
    res.json({ profile, entries, weeklySummaries });
  }
};
