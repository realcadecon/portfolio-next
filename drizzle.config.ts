import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env.local' });

export default defineConfig ({
  schema: "./utils/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
  tablesFilter: ["portfolio_*"],
})
