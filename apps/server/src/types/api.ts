import { SyncQueueItem, UserProfile } from "@pattern-shift/shared";

export interface SyncRequestBody {
  profile?: UserProfile | null;
  queue: SyncQueueItem[];
}
