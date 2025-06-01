const express = require("express");

require('dotenv').config();
const { graphqlHTTP } = require("express-graphql");
const app = express();

const schema = require("./schema/schema");

const PORT = process.env.PORT || 4000;

app.use('/grpahql', graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});