const expressGraphql = require('express-graphql');
const mongoose = require('mongoose');
const express = require('express');

const mogoDBUrl = require('./credentials');
mongoose.connect(mogoDBUrl, {useNewUrlParser: true });

const schema = require('./grahql/shema');
const app = express();

app.use('/graphql', expressGraphql({
  schema: schema,
  graphiql: true,
}));

module.exports = app;