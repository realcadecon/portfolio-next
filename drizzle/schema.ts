import { pgTable, pgEnum, serial, text } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const projType = pgEnum("ProjType", ['ALL', 'GAME', 'WORK', 'SIDE'])


export const portfolioPortfolioProjects = pgTable("portfolio_portfolio_projects", {
	id: serial("id").primaryKey().notNull(),
	name: text("name").notNull(),
	email: text("email").notNull(),
	image: text("image").notNull(),
	projType: projType("ProjType").default('ALL'),
});