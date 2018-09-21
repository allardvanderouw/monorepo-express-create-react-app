const express = require('express');
const bodyParser = require('body-parser');

let app;
let server;

const create = () => {
  app = express();

  // Configure app
  app.use(bodyParser.json()); // parse json data to req.body

  // Add Client
  app.use(express.static(`${__dirname}/../../../workspace-client/build`));

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
