const dbBurito = require('./app/buritos/mongodb-burito');
const expressBurito = require('./app/buritos/express-burito');
const logger = require('./app/buritos/winston-burito');

const { router: todosRouter } = require('./app/todos');

const stopServer = async (signal) => {
  logger.info(`Stopping server with signal: ${signal}`);
  await expressBurito.close();
  await dbBurito.close();
};

const startServer = async ({
  port = process.env.PORT,
  mongoDbUri = process.env.MONGODB_URI,
} = {}) => {
  try {
    // Connect to Mongo DB
    const db = await dbBurito.connect(mongoDbUri);

    // Create Express App
    const app = expressBurito.create();

    // Add Routers
    app.use('/api/todos', todosRouter);

    // Start App
    const server = await expressBurito.start(port);
    logger.info(`Server started and listening on port ${port}`);

    // Graceful shutdown
    process.on('SIGINT', () => stopServer('SIGINT'));
    process.on('SIGTERM', () => stopServer('SIGTERM'));
    process.on('uncaughtException', error => stopServer('uncaughtException', error));

    return { server, db };
  } catch (error) {
    logger.error(`Error starting server: ${error}`);
    await stopServer();
    throw error;
  }
};

module.exports = { startServer, stopServer };

/* istanbul ignore next */
if (!module.parent) startServer();
