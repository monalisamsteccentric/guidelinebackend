export type SyncStatus = "pending" | "synced" | "failed" | "conflict";

export interface UserProfile {
  id: string;
  displayName?: string;
  belief: {
    id: string;
    statement: string;
    whyItMatters: string;
    createdAt: string;
    updatedAt: string;
  };
  preferences: {
    tone: "gentle" | "balanced" | "direct";
    reminderTimes: {
      morning: { hour: number; minute: number };
      afternoon: { hour: number; minute: number };
      evening: { hour: number; minute: number };
      enabled: boolean;
    };
    exportRedactsSensitiveAI?: boolean;
  };
  protocolStartedAt: string;
  protocolAnchorDate: string;
  currentDay: number;
  streak: number;
  completedDays: number;
  createdAt: string;
  updatedAt: string;
}

export interface SyncQueueItem {
  id: string;
  entityType:
    | "userProfile"
    | "dayProgress"
    | "relaxEntry"
    | "cognitiveEntry"
    | "identityEntry"
    | "evidenceEntry"
    | "actionEntry"
    | "reflectionEntry"
    | "aiFeedback"
    | "dailySummary";
  entityId: string;
  payload: string;
  localUpdatedAt: string;
  lastAttemptAt?: string;
  retryCount: number;
  status: SyncStatus;
  errorMessage?: string;
}
