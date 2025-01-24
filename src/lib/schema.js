// src/lib/schema.js
import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 50 }).notNull(),
  image: varchar('image', { length: 255 }).notNull(),
  link: varchar('link', { length: 100 }).notNull(),
});