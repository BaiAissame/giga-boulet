// src/lib/schema.js
import { pgTable, serial, varchar, text, integer } from 'drizzle-orm/pg-core';

// Table des catégories principales
export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 50 }).notNull(),
  image: varchar('image', { length: 255 }).notNull(),
  link: varchar('link', { length: 100 }).notNull(),
});

// Table des sous-catégories
export const subcategories = pgTable('subcategories', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 50 }).notNull(),
  image: varchar('image', { length: 255 }).notNull(),
  category_id: integer('category_id').references(() => categories.id), // Référence à la catégorie parente
  link: varchar('link', { length: 100 }).notNull(),
});

// Table des menus
export const menu = pgTable('menu', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 50 }).notNull(),
  image: varchar('image', { length: 255 }).notNull(),
  description: text('description').notNull(), // Description du menu
  subcategory_id: integer('subcategory_id').references(() => subcategories.id), // Référence à la sous-catégorie
  link: varchar('link', { length: 100 }).notNull(),
});

// Table des ingrédients
export const ingredients = pgTable('ingredients', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(), // Nom de l'ingrédient
  quantity: varchar('quantity', { length: 50 }).notNull(), // Quantité de l'ingrédient
  menu_id: integer('menu_id').references(() => menu.id), // Référence au menu
});