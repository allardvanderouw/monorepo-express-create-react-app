const { ObjectID } = require('mongodb');

const dbBurito = require('../buritos/mongodb-burito');

const collectionName = 'todos';

const createTodo = async (todo) => {
  const { ops } = await dbBurito.get().collection(collectionName).insertOne(todo, { w: 1 });
  return ops[0];
};

const readTodoById = async (id) => {
  const query = { _id: new ObjectID(id) };
  return dbBurito.get().collection(collectionName).findOne(query);
};

const updateTodoById = async (id, todo) => {
  const query = { _id: new ObjectID(id) };
  const { _id, ...todoWithoutId } = todo;
  const { value } = await dbBurito.get().collection(collectionName).findOneAndReplace(query, {
    _id: new ObjectID(_id),
    ...todoWithoutId,
  }, {
    returnOriginal: false,
  });
  return value;
};

const deleteTodoById = async (id) => {
  const query = { _id: new ObjectID(id) };
  const { result } = await dbBurito.get().collection(collectionName).deleteOne(query, { w: 1 });
  return result;
};

const findTodos = async query => dbBurito.get().collection(collectionName).find(query).toArray();

module.exports = {
  createTodo,
  readTodoById,
  updateTodoById,
  deleteTodoById,
  findTodos,
};
