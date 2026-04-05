import { SyncQueueItem, UserProfile } from "./shared";

export interface SyncRequestBody {
  profile?: UserProfile | null;
  queue: SyncQueueItem[];
}
