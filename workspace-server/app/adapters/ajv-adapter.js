const Ajv = require('ajv')
const Boom = require('boom')

// Returns a function to validate a Mongo ID asynchronously
const getAsyncIdValidator = () => {
  const ajv = new Ajv()
  const validate = ajv.compile({
    $async: true,
    type: 'string',
    pattern: '^[0-9a-f]{24}$',
  })

  return async (id) => {
    try {
      return await validate(id)
    } catch (error) {
      if (error instanceof Ajv.ValidationError) {
        throw Boom.badData(error.message, { error })
      }
      throw error
    }
  }
}
const validateId = getAsyncIdValidator()

// Returns a function to validate data with a schema asynchronously
const getAsyncDataValidator = (schema) => {
  const asyncSchema = {
    $async: true,
    ...schema,
  }

  const ajv = new Ajv({ useDefaults: true })
  const validate = ajv.compile(asyncSchema)

  return async (data) => {
    try {
      return await validate(data)
    } catch (error) {
      if (error instanceof Ajv.ValidationError) {
        throw Boom.badData(error.message, { error })
      }
      throw error
    }
  }
}

module.exports = {
  validateId,
  getAsyncDataValidator,
}
