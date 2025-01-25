import { pgTable, integer, varchar } from 'drizzle-orm/pg-core'

export const categories = pgTable('categories', {
  id: integer('id').primaryKey(),
  title: varchar('title', { length: 50 }).notNull(),
  image: varchar('image', { length: 255 }).notNull(),
  link: varchar('link', { length: 100 }).notNull()
})

export type Category = typeof categories.$inferSelect