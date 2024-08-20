import {
    index,
    pgTableCreator,
    serial,
    text,
} from 'drizzle-orm/pg-core';


export const createTable = pgTableCreator((name) => `portfolio_${name}`);

// Create a pgTable that maps to a table in your DB
export const projects = createTable(
    'projects',
    {
        id: serial('id').primaryKey(),
        name: text('name').notNull(),
        imgUrl: text('imgUrl').notNull(),
        desc: text('desc').notNull(),
        type: text('projEnum').notNull(),
        link: text('link'),
        tech: text('tech').array()
    },
    (example) => ({
        nameIndex: index("name_idx").on(example.name),
    })
);