import { Request, Response } from "express";
import { UserProfileModel } from "../models/UserProfileModel";

export const profileController = {
  async get(_req: Request, res: Response) {
    const profile = await UserProfileModel.findOne().lean();
    res.json(profile);
  },
  async save(req: Request, res: Response) {
    const profile = req.body as { id: string };
    const saved = await UserProfileModel.findOneAndUpdate({ id: profile.id }, profile, { upsert: true, new: true });
    res.json(saved);
  }
};
