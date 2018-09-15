const { MongoClient } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

const { router: todosRouter } = require('./todos');

const startServer = async ({
  port = process.env.PORT,
  mongoDbUri = process.env.MONGODB_URI,
} = {}) => {
  const app = express();

  // Connect to Mongo DB
  const dbConnection = await MongoClient.connect(mongoDbUri, { useNewUrlParser: true });
  const db = dbConnection.db();

  // Configure app
  app.use(bodyParser.json()); // parse json data to req.body

  // Add Routers
  app.use('/api/todos', todosRouter);

  // Add Client
  app.use(express.static(`${__dirname}/../workspace-client/build`));

  const server = await app.listen(port);
  console.info(`Server started and listening on port ${port}`);

  return { server, db, dbConnection };
};

module.exports = startServer;

/* istanbul ignore next */
if (!module.parent) startServer();
