const express = require('express');
const server = express();
const knex = require('knex')
const dbConfig = (require('./knexfile'))
const db = knex(dbConfig.development)
server.use(express.json());

const PORT = process.env.PORT || 7000;
server.listen(PORT, () => {
  console.log(`server is up and running on ${PORT}`)
}) 