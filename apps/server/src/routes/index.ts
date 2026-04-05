import { Router } from "express";
import { profileController } from "../controllers/profileController";
import { entryController } from "../controllers/entryController";
import { aiController } from "../controllers/aiController";
import { syncController } from "../controllers/syncController";
import { exportController } from "../controllers/exportController";
import { runtimeState } from "../lib/runtimeState";

export const apiRouter = Router();

apiRouter.get("/health", (_req, res) =>
  res.json({
    ok: true,
    dbReady: runtimeState.isDbReady()
  })
);
apiRouter.get("/profile", profileController.get);
apiRouter.post("/profile", profileController.save);
apiRouter.get("/entries", entryController.list);
apiRouter.get("/entries/day/:day", entryController.listByDay);
apiRouter.post("/entries", entryController.save);
apiRouter.post("/ai/generate", aiController.generateDaily);
apiRouter.get("/ai/history", aiController.history);
apiRouter.get("/ai/weekly/:weekStartDay", aiController.weeklySummary);
apiRouter.post("/sync", syncController.sync);
apiRouter.get("/export", exportController.exportAll);
