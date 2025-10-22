const  {pgTable,uuid, serial, varchar, text} = require('drizzle-orm/pg-core');
const authorsTable = require('./author.model');

const booksTable = pgTable('books',{
    id:uuid('id').primaryKey().defaultRandom(),
    title:varchar('title',{length:255}).notNull(),
    description:text(),
    authorsId:uuid().references(()=>authorsTable.id).notNull(),
})

module.exports=booksTable