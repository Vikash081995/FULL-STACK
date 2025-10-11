const {pgTable } = require('drizzle-orm/pg-core');

const userTable = pgTable('users', {
    id: { type: 'serial', primaryKey: true },
    name: { type: 'text', notNull: true },
    email: { type: 'text', notNull: true, unique: true },
    });

module.exports = { userTable };