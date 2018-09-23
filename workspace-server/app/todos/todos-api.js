const Boom = require('boom');

const store = require('./todos-store');

const createTodo = async (todo) => {
  try {
    return await store.createTodo(todo);
  } catch (error) {
    throw Boom.badImplementation();
  }
};

const readTodo = async (_id) => {
  let result;
  try {
    result = await store.readTodoById(_id);
  } catch (error) {
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
    result = await store.updateTodoById(_id, todo);
  } catch (error) {
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
    result = await store.deleteTodoById(_id);
  } catch (error) {
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
