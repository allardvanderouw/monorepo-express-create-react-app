const { ObjectID } = require('mongodb');

const collectionName = 'todos';

let db;

const initializeTodosStore = ({ db: _db }) => {
  db = _db;
};

const createTodo = async (todo) => {
  const { ops } = await db.collection(collectionName).insertOne(todo, { w: 1 });
  return ops[0];
};

const readTodoById = async (id) => {
  const query = { _id: new ObjectID(id) };
  return db.collection(collectionName).findOne(query);
};

const updateTodoById = async (id, todo) => {
  const query = { _id: new ObjectID(id) };
  const { _id, ...todoWithoutId } = todo;
  const { value } = await db.collection(collectionName).findOneAndReplace(query, {
    _id: new ObjectID(_id),
    ...todoWithoutId,
  }, {
    returnOriginal: false,
  });
  return value;
};

const deleteTodoById = async (id) => {
  const query = { _id: new ObjectID(id) };
  const { result } = await db.collection(collectionName).deleteOne(query, { w: 1 });
  return result;
};

const findTodos = async query => db.collection(collectionName).find(query).toArray();

module.exports = {
  initializeTodosStore,
  createTodo,
  readTodoById,
  updateTodoById,
  deleteTodoById,
  findTodos,
};
