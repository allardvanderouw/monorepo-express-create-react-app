const store = require('./todos-store');

module.exports = async ({ db }) => {
  await store.initializeTodosStore({ db });
};
