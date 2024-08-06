import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env.local' });

export default defineConfig ({
  schema: "./utils/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    // url: process.env.POSTGRES_URL!,
    url: "postgres://default:xOCW3To4EeNU@ep-gentle-dust-a4v4v2qf-pooler.us-east-1.aws.neon.tech/verceldb?sslmode=require"
  },
  tablesFilter: ["portfolio_*"],
})
