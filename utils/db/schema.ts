import {
    index,
    pgEnum,
    pgTableCreator,
    serial,
    text,
} from 'drizzle-orm/pg-core';

export const projectEnum = pgEnum('ProjType', ['ALL', 'GAME', 'WORK', 'SIDE']);

export const createTable = pgTableCreator((name) => `portfolio_${name}`);

// Create a pgTable that maps to a table in your DB
export const projects = createTable(
    'projects',
    {
        id: serial('id').primaryKey(),
        name: text('name').notNull(),
        imgUrl: text('imgUrl').notNull(),
        desc: text('desc').notNull(),
        type: projectEnum('ProjEnum').default('ALL'),
        link: text('link'),
    },
    (example) => ({
        nameIndex: index("name_idx").on(example.name),
    })
);