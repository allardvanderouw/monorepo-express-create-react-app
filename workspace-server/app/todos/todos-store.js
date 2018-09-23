const { ObjectID } = require('mongodb');

const dbAdapter = require('../adapters/mongodb-adapter');

const collectionName = 'todos';

const createTodo = async (todo) => {
  const { ops } = await dbAdapter.get().collection(collectionName).insertOne(todo, { w: 1 });
  return ops[0];
};

const readTodoById = async (_id) => {
  const query = { _id: new ObjectID(_id) };
  return dbAdapter.get().collection(collectionName).findOne(query);
};

const updateTodoById = async (_id, todo) => {
  const query = { _id: new ObjectID(_id) };
  const { _id: todoId, ...todoWithoutId } = todo;
  const { value } = await dbAdapter.get().collection(collectionName).findOneAndReplace(query, {
    _id: new ObjectID(_id),
    ...todoWithoutId,
  }, {
    returnOriginal: false,
  });
  return value;
};

const deleteTodoById = async (_id) => {
  const query = { _id: new ObjectID(_id) };
  const { result } = await dbAdapter.get().collection(collectionName).deleteOne(query, { w: 1 });
  return result;
};

const findTodos = async query => dbAdapter.get().collection(collectionName).find(query).toArray();

module.exports = {
  createTodo,
  readTodoById,
  updateTodoById,
  deleteTodoById,
  findTodos,
};
