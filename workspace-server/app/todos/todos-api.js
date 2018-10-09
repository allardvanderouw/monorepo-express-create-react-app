const Boom = require('boom');

const { validateId, getAsyncDataValidator } = require('../adapters/ajv-adapter');
const { todoSchema } = require('./todos-schema');
const store = require('./todos-store');

const validateTodo = getAsyncDataValidator(todoSchema);

const createTodo = async (todo) => {
  try {
    const validTodo = await validateTodo(todo);
    return await store.createTodo(validTodo);
  } catch (error) {
    if (error.isBoom) {
      throw error;
    }
    throw Boom.badImplementation();
  }
};

const readTodo = async (_id) => {
  let result;
  try {
    await validateId(_id);
    result = await store.readTodoById(_id);
  } catch (error) {
    if (error.isBoom) {
      throw error;
    }
    throw Boom.badImplementation();
  }

  if (!result) {
    throw Boom.notFound();
  }

  return result;
};

const updateTodo = async (_id, todo) => {
  let result;
  try {
    await validateId(_id);
    const validTodo = await validateTodo(todo);
    result = await store.updateTodoById(_id, validTodo);
  } catch (error) {
    if (error.isBoom) {
      throw error;
    }
    throw Boom.badImplementation();
  }

  if (!result) {
    throw Boom.notFound();
  }

  return result;
};

const deleteTodo = async (_id) => {
  let result;
  try {
    await validateId(_id);
    result = await store.deleteTodoById(_id);
  } catch (error) {
    if (error.isBoom) {
      throw error;
    }
    throw Boom.badImplementation();
  }

  if (result.n === 0) {
    throw Boom.notFound();
  }
};

const findTodos = async (query) => {
  try {
    return await store.findTodos(query);
  } catch (error) {
    if (error.isBoom) {
      throw error;
    }
    throw Boom.badImplementation();
  }
};

module.exports = {
  createTodo,
  readTodo,
  updateTodo,
  deleteTodo,
  findTodos,
};
