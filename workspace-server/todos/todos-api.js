const Boom = require('boom');

const store = require('./todos-store');

const create = async (todo) => {
  try {
    return await store.create(todo);
  } catch (error) {
    throw Boom.badImplementation();
  }
};

const update = async (id, todo) => {
  let result;
  try {
    result = await store.updateById(id, todo);
  } catch (error) {
    throw Boom.badImplementation();
  }

  if (!result) {
    throw Boom.notFound();
  }

  return result;
};

module.exports = {
  create,
  update,
};
