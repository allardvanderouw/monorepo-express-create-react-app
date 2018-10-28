const dbAdapter = require('./app/adapters/mongodb-adapter')
const expressAdapter = require('./app/adapters/express-adapter')
const logger = require('./app/adapters/winston-adapter')

const { router: todosRouter } = require('./app/todos')

const stopServer = async (signal) => {
  logger.info(`Stopping server with signal: ${signal}`)
  await expressAdapter.close()
  await dbAdapter.close()
  process.exit()
}

const startServer = async ({
  port = process.env.PORT,
  mongoDbUri = process.env.MONGODB_URI,
} = {}) => {
  try {
    // Connect to Mongo DB
    const db = await dbAdapter.connect(mongoDbUri)

    // Create Express App
    expressAdapter.create([{
      routePath: '/api/todos',
      router: todosRouter,
    }])

    // Start App
    const server = await expressAdapter.start(port)
    logger.info(`Server started and listening on port ${port}`)

    // Graceful shutdown
    process.on('SIGINT', () => stopServer('SIGINT'))
    process.on('SIGTERM', () => stopServer('SIGTERM'))
    process.on('uncaughtException', error => stopServer('uncaughtException', error))

    return { server, db }
  } catch (error) {
    logger.error(`Error starting server: ${error}`)
    await stopServer()
    throw error
  }
}

module.exports = { startServer, stopServer }

/* istanbul ignore next */
if (!module.parent) startServer()
