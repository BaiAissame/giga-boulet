// src/lib/drizzle.js
import { drizzle } from 'drizzle-orm/neon-http'; // Utilisez neon-http pour Neon
import { neon } from '@neondatabase/serverless';

// Initialisez la connexion à la base de données Neon
const sql = neon(process.env.DATABASE_URL);

// Exportez l'instance Drizzle
export const drizzleDb = drizzle(sql);