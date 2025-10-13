const {defineConfig} = require('drizzle-kit');

const config = defineConfig({
    schema: './drizzle/schema.js',
    out: './drizzle/migrations',
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL,
    },
});

module.exports = config;