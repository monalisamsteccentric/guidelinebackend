import OpenAI from "openai";
import { env } from "../config/env";
import { buildDailyAnalysisUserPrompt, buildWeeklySummaryPrompt, dailyAnalysisSystemPrompt } from "../prompts/aiPrompt";

const client = new OpenAI({ apiKey: env.openAiApiKey });

const parseJson = <T>(content: string): T => JSON.parse(content) as T;

export const aiService = {
  async generateDailyFeedback(payload: unknown) {
    const response = await client.responses.create({
      model: env.openAiModel,
      input: [
        { role: "system", content: dailyAnalysisSystemPrompt },
        { role: "user", content: buildDailyAnalysisUserPrompt(payload) }
      ]
    });

    return parseJson<Record<string, unknown>>(response.output_text);
  },
  async generateWeeklySummary(payload: unknown) {
    const response = await client.responses.create({
      model: env.openAiModel,
      input: [
        { role: "system", content: dailyAnalysisSystemPrompt },
        { role: "user", content: buildWeeklySummaryPrompt(payload) }
      ]
    });

    return parseJson<Record<string, unknown>>(response.output_text);
  }
};
