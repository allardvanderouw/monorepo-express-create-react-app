const Boom = require('boom')

const { validateId, getAsyncDataValidator } = require('../adapters/ajv-adapter')
const { todoSchema } = require('./schema')
const store = require('./store')

const validateTodo = getAsyncDataValidator(todoSchema)

const add = async (todo) => {
  try {
    const validTodo = await validateTodo(todo)
    return await store.add(validTodo)
  } catch (error) {
    if (error.isBoom) {
      throw error
    }
    throw Boom.badImplementation()
  }
}

const read = async (_id) => {
  let result
  try {
    await validateId(_id)
    result = await store.readById(_id)
  } catch (error) {
    if (error.isBoom) {
      throw error
    }
    throw Boom.badImplementation()
  }

  if (!result) {
    throw Boom.notFound()
  }

  return result
}

const modify = async (_id, todo) => {
  let result
  try {
    await validateId(_id)
    const validTodo = await validateTodo(todo)
    result = await store.modifyById(_id, validTodo)
  } catch (error) {
    if (error.isBoom) {
      throw error
    }
    throw Boom.badImplementation()
  }

  if (!result) {
    throw Boom.notFound()
  }

  return result
}

const remove = async (_id) => {
  let result
  try {
    await validateId(_id)
    result = await store.removeById(_id)
  } catch (error) {
    if (error.isBoom) {
      throw error
    }
    throw Boom.badImplementation()
  }

  if (result.n === 0) {
    throw Boom.notFound()
  }
}

const find = async (query) => {
  try {
    return await store.find(query)
  } catch (error) {
    if (error.isBoom) {
      throw error
    }
    throw Boom.badImplementation()
  }
}

module.exports = {
  add,
  read,
  modify,
  remove,
  find,
}
