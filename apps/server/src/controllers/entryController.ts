import { Request, Response } from "express";
import { ProtocolEntryModel } from "../models/ProtocolEntryModel";

export const entryController = {
  async save(req: Request, res: Response) {
    const body = req.body as { id: string; entityType: string; day?: number; localUpdatedAt: string; updatedAt: string };
    const saved = await ProtocolEntryModel.findOneAndUpdate({ id: body.id }, { ...body, payload: body }, { upsert: true, new: true });
    res.json(saved);
  },
  async list(_req: Request, res: Response) {
    const entries = await ProtocolEntryModel.find().sort({ localUpdatedAt: -1 }).lean();
    res.json(entries);
  },
  async listByDay(req: Request, res: Response) {
    const day = Number(req.params.day);
    const entries = await ProtocolEntryModel.find({ day }).sort({ localUpdatedAt: -1 }).lean();
    res.json(entries);
  }
};
