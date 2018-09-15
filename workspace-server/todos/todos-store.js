const collectionName = 'todos';

let db;

const initialize = ({ db: _db }) => {
  db = _db;
};

const create = async (todo) => {
  const { ops } = await db.collection(collectionName).insertOne(todo, { w: 1 });
  return ops[0];
};

const readById = async (id) => {
  const query = { _id: new ObjectID(id) };
  return db.collection(collectionName).findOne(query);
};

const updateById = async (id, todo) => {
  const query = { _id: new ObjectID(id) };
  const { value } = await db.collection(collectionName).findOneAndReplace(query, todo, {
    returnOriginal: false,
  });
  return value;
};

const deleteById = async (id) => {
  const query = { _id: new ObjectID(id) };
  const { result } = await db.collection(collectionName).deleteOne(query, { w: 1 });
  return result;
};

const find = async query => db.collection(collectionName).find(query).toArray();

module.exports = {
  initialize,
  create,
  readById,
  updateById,
  deleteById,
  find,
};
