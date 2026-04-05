export type ProtocolPhase = "Permission" | "Embodiment" | "Normalization";
export type AppTone = "gentle" | "balanced" | "direct";
export type SectionKey = "relax" | "cognitive" | "identity" | "evidence" | "actionReflection";
export type SyncStatus = "pending" | "synced" | "failed" | "conflict";
export type EntrySource = "local" | "remote" | "merged";

export interface ReminderTime {
  hour: number;
  minute: number;
}

export interface NotificationSettings {
  morning: ReminderTime;
  afternoon: ReminderTime;
  evening: ReminderTime;
  enabled: boolean;
}

export interface UserPreferences {
  tone: AppTone;
  reminderTimes: NotificationSettings;
  exportRedactsSensitiveAI?: boolean;
}

export interface ExperimentalBelief {
  id: string;
  statement: string;
  whyItMatters: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile {
  id: string;
  displayName?: string;
  belief: ExperimentalBelief;
  preferences: UserPreferences;
  protocolStartedAt: string;
  protocolAnchorDate: string;
  currentDay: number;
  streak: number;
  completedDays: number;
  createdAt: string;
  updatedAt: string;
}

export interface ScheduleSegment {
  label: string;
  window: string;
  guidance: string;
}

export interface DayGuideline {
  day: number;
  title: string;
  phase: ProtocolPhase;
  focus: string;
  doList: string[];
  avoidList: string[];
  whyThisMatters: string;
  schedule: ScheduleSegment[];
  microBehavior: string;
  dailyLine: string;
  cautionLine: string;
}

export interface ProtocolDayProgress {
  id: string;
  day: number;
  phase: ProtocolPhase;
  completedSections: SectionKey[];
  completionPercent: number;
  startedAt?: string;
  completedAt?: string;
  updatedAt: string;
}

export interface BaseEntry {
  id: string;
  day: number;
  createdAt: string;
  updatedAt: string;
  source: EntrySource;
  localUpdatedAt: string;
}

export interface RelaxEntry extends BaseEntry {
  startedAt: string;
  completedAt?: string;
  durationSeconds: number;
  calmRatingBefore: number;
  calmRatingAfter?: number;
  notes?: string;
  checklist: {
    jaw: boolean;
    shoulders: boolean;
    chestStomach: boolean;
  };
}

export interface ResistanceLog {
  thought: string;
  intensity: number;
  replacement: string;
  helped: boolean;
}

export interface CognitiveEntry extends BaseEntry {
  dailyLine: string;
  opennessStatement: string;
  resistanceLogs: ResistanceLog[];
}

export interface IdentityPromptResponse {
  prompt: string;
  response: string;
}

export interface IdentityEntry extends BaseEntry {
  rehearsalLines: string[];
  favoriteLines: string[];
  surfacedPastLines: string[];
  promptResponses: IdentityPromptResponse[];
}

export interface EvidenceItem {
  id: string;
  category: "capability" | "traction" | "alignment" | "normalization";
  text: string;
  tags: string[];
  favorite: boolean;
  createdAt: string;
}

export interface EvidenceEntry extends BaseEntry {
  items: EvidenceItem[];
  quickChipsUsed: string[];
}

export interface ActionEntry extends BaseEntry {
  nonNegotiableAction: string;
  completed: boolean;
  completedAt?: string;
  proofNote?: string;
}

export interface ReflectionEntry extends BaseEntry {
  matchesBelief: string;
  resistanceMoments: string;
  lessImpossibleMoment: string;
  nextStepIfBecomingTrue: string;
  behavedDifferently: boolean;
  behaviorNotes?: string;
}

export interface AIFeedback extends BaseEntry {
  worked: string[];
  didNotWork: string[];
  recurringResistance: string;
  operatingState: "panic" | "mixed" | "grounded";
  improvingPatterns: string[];
  tomorrowSuggestion: string;
  dayReframe: string;
  rawSummary: string;
  generatedFromVersion: string;
}

export interface DailySummary extends BaseEntry {
  dayTitle: string;
  completionPercent: number;
  calmShift: number;
  resistanceAverage: number;
  actionCompleted: boolean;
  lessImpossibleMoment: string;
  aiFeedbackId?: string;
}

export interface SectionSnapshot {
  relax?: RelaxEntry;
  cognitive?: CognitiveEntry;
  identity?: IdentityEntry;
  evidence?: EvidenceEntry;
  action?: ActionEntry;
  reflection?: ReflectionEntry;
  aiFeedback?: AIFeedback;
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

export interface WeeklySummary {
  id: string;
  weekStartDay: number;
  weekEndDay: number;
  summary: string;
  patternHighlights: string[];
  riskFlags: string[];
  nextFocus: string;
  createdAt: string;
}

export interface DailyRecord {
  guideline: DayGuideline;
  progress?: ProtocolDayProgress;
  sections: SectionSnapshot;
  summary?: DailySummary;
}

export interface SyncPayload {
  profile?: UserProfile;
  days: DailyRecord[];
  queue: SyncQueueItem[];
}
