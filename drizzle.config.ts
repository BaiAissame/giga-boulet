/** @type {import('drizzle-kit').Config} */
module.exports = {
  schema: './src/db/schema/*',
  out: './drizzle',
  dialect: 'postgresql',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL
  }
};