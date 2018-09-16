const { MongoClient } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

const { router: todosRouter, initialize: initializeTodos } = require('./app/todos');

let dbConnection;
let db;
let server;

const stopServer = async () => {
  if (dbConnection) {
    dbConnection.removeAllListeners();
    await dbConnection.close();
  }
  if (server) {
    await server.close();
  }
};

const startServer = async ({
  port = process.env.PORT,
  mongoDbUri = process.env.MONGODB_URI,
} = {}) => {
  try {
    const app = express();

    // Connect to Mongo DB
    dbConnection = await MongoClient.connect(mongoDbUri, { useNewUrlParser: true });
    db = dbConnection.db();

    // Configure app
    app.use(bodyParser.json()); // parse json data to req.body

    // Initialize
    await initializeTodos({ db });

    // Add Routers
    app.use('/api/todos', todosRouter);

    // Add Client
    app.use(express.static(`${__dirname}/../workspace-client/build`));

    server = await app.listen(port);
    console.info(`Server started and listening on port ${port}`);

    return { server, db };
  } catch (error) {
    console.error(`Error starting server: ${error}`);
    await stopServer();
    throw error;
  }
};

module.exports = { startServer, stopServer };

/* istanbul ignore next */
if (!module.parent) startServer();
