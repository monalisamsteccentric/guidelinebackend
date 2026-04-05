import { SyncQueueItem } from "@pattern-shift/shared";
import { ProtocolEntryModel } from "../models/ProtocolEntryModel";
import { UserProfileModel } from "../models/UserProfileModel";

const userIdFor = (queue: SyncQueueItem[], fallback = "local-user"): string =>
  queue.find((item) => item.entityType === "userProfile")?.entityId ?? fallback;

export const serverSyncService = {
  async sync(profile: unknown, queue: SyncQueueItem[]) {
    const accepted: string[] = [];
    const conflicts: Array<{ entityId: string; entityType: string; serverUpdatedAt: string }> = [];
    const userId = userIdFor(queue);

    if (profile && typeof profile === "object") {
      const typedProfile = profile as { id: string; updatedAt: string };
      const existingProfile = await UserProfileModel.findOne({ id: typedProfile.id }).lean();
      if (!existingProfile || existingProfile.updatedAt <= typedProfile.updatedAt) {
        await UserProfileModel.findOneAndUpdate({ id: typedProfile.id }, profile, { upsert: true, new: true });
      }
    }

    for (const item of queue) {
      const existing = await ProtocolEntryModel.findOne({ id: item.entityId }).lean();
      if (existing && existing.localUpdatedAt > item.localUpdatedAt) {
        conflicts.push({
          entityId: item.entityId,
          entityType: item.entityType,
          serverUpdatedAt: existing.localUpdatedAt
        });
        continue;
      }

      const payload = JSON.parse(item.payload) as Record<string, unknown>;
      await ProtocolEntryModel.findOneAndUpdate(
        { id: item.entityId },
        {
          id: item.entityId,
          userId,
          entityType: item.entityType,
          day: typeof payload.day === "number" ? payload.day : undefined,
          payload,
          localUpdatedAt: item.localUpdatedAt,
          updatedAt: typeof payload.updatedAt === "string" ? payload.updatedAt : item.localUpdatedAt,
          resistanceLogs: Array.isArray((payload as { resistanceLogs?: unknown[] }).resistanceLogs)
            ? (payload as { resistanceLogs: unknown[] }).resistanceLogs
            : undefined,
          evidenceItems: Array.isArray((payload as { items?: unknown[] }).items)
            ? (payload as { items: unknown[] }).items
            : undefined,
          aiFeedback: item.entityType === "aiFeedback" ? payload : undefined
        },
        { upsert: true, new: true }
      );
      accepted.push(item.id);
    }

    return { accepted, conflicts };
  }
};
