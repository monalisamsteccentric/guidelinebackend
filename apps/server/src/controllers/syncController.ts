import { Request, Response } from "express";
import { serverSyncService } from "../services/syncService";
import { SyncRequestBody } from "../types/api";

export const syncController = {
  async sync(req: Request<unknown, unknown, SyncRequestBody>, res: Response) {
    const result = await serverSyncService.sync(req.body.profile, req.body.queue ?? []);
    res.json(result);
  }
};
