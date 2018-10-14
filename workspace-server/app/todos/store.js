const { ObjectID } = require('mongodb')

const { getDB } = require('../adapters/mongodb-adapter')

const collectionName = 'todos'

const add = async (todo) => {
  const { ops } = await getDB().collection(collectionName).insertOne(todo, { w: 1 })
  return ops[0]
}

const readById = async (_id) => {
  const query = { _id: new ObjectID(_id) }
  return getDB().collection(collectionName).findOne(query)
}

const modifyById = async (_id, todo) => {
  const query = { _id: new ObjectID(_id) }
  const { _id: todoId, ...todoWithoutId } = todo
  const { value } = await getDB().collection(collectionName).findOneAndReplace(query, {
    _id: new ObjectID(_id),
    ...todoWithoutId,
  }, {
    returnOriginal: false,
  })
  return value
}

const removeById = async (_id) => {
  const query = { _id: new ObjectID(_id) }
  const { result } = await getDB().collection(collectionName).deleteOne(query, { w: 1 })
  return result
}

const find = async query => getDB().collection(collectionName).find(query).toArray()

module.exports = {
  add,
  readById,
  modifyById,
  removeById,
  find,
}
