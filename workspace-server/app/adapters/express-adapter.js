const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

let app;
let server;

const create = (routers) => {
  app = express();

  // Configure app
  app.use(bodyParser.json()); // parse json data to req.body

  // Add Routers
  routers.forEach(({ routePath, router }) => app.use(routePath, router));

  // Add Client
  app.use(express.static(`${__dirname}/../../../workspace-client/build`));

  // Default route to client
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../../../workspace-client/build/index.html`));
  });

  return app;
};

const start = async (port) => {
  server = await app.listen(port);

  return server;
};

const close = async () => {
  if (server) {
    await server.close();
  }
};

const handleError = (res, error) => {
  if (error && error.isBoom) {
    const { statusCode, payload } = error.output;
    res.status(statusCode).json(payload);
  } else {
    res.status(500).json({ error });
  }
};

module.exports = {
  create,
  start,
  close,
  handleError,
};
