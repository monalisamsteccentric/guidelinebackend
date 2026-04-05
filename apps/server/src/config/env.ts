import "dotenv/config";

const required = (value: string | undefined, label: string): string => {
  if (!value) {
    throw new Error(`Missing environment variable: ${label}`);
  }
  return value;
};

export const env = {
  port: Number(process.env.PORT ?? 4000),
  mongoUri: required(process.env.MONGODB_URI, "MONGODB_URI"),
  openAiApiKey: required(process.env.OPENAI_API_KEY, "OPENAI_API_KEY"),
  openAiModel: process.env.OPENAI_MODEL ?? "gpt-5-mini",
  corsOrigin: process.env.CORS_ORIGIN ?? "*"
};
